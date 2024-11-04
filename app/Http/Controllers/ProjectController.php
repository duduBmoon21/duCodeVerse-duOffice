<?php

namespace App\Http\Controllers;

use App\Http\Requests\Project\StoreProjectRequest;
use App\Http\Requests\Project\UpdateProjectRequest;
use App\Http\Resources\Project\ProjectResource;
use App\Models\ClientCompany;
use App\Models\Currency;
use App\Models\Project;
use App\Models\User;
use App\Services\ProjectService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Project::class, 'project');
    }

    public function index(Request $request) 
    {
        // Check if the user is authenticated
        $user = $request->user();
    
        // Debug the user object
        if ($user) {
            // User is authenticated, you can safely access user properties
            $isNotAdmin = $user->isNotAdmin();
            $userId = $user->id; // Store the user ID for later use
        } else {
            // User is not authenticated, handle accordingly (e.g., redirect or return error)
            return redirect()->route('login'); // Or handle as needed
        }
    
        $query = Project::searchByQueryString()
            ->when($isNotAdmin, function ($query) use ($userId) {
                // Check if clientCompany exists before accessing clients
                $query->whereHas('clientCompany', function ($query) use ($userId) {
                    $query->whereHas('clients', function ($query) use ($userId) {
                        $query->where('users.id', $userId);
                    });
                })
                ->orWhereHas('users', function ($query) use ($userId) {
                    $query->where('id', $userId);
                });
            })
            ->when($request->has('archived'), function ($query) {
                $query->onlyArchived();
            })
            ->with([
                'clientCompany:id,name',
                'clientCompany.clients:id,name,avatar',
                'users:id,name,avatar',
            ])
            ->withCount([
                'tasks AS all_tasks_count',
                'tasks AS completed_tasks_count' => function ($query) {
                    $query->whereNotNull('completed_at');
                },
                'tasks AS overdue_tasks_count' => function ($query) {
                    $query->whereNull('completed_at')->whereDate('due_on', '<', now());
                },
            ])
            ->withExists('favoritedByAuthUser AS favorite')
            ->orderBy('favorite', 'desc')
            ->orderBy('name', 'asc');
    
        return Inertia::render('Projects/Index', [
            'items' => ProjectResource::collection($query->get()),
        ]);
    }
    
    

    public function create()
    {
        return Inertia::render('Projects/Create', [
            'dropdowns' => [
                'companies' => ClientCompany::dropdownValues(),
                'users' => User::userDropdownValues(),
                'currencies' => Currency::dropdownValues(['with' => ['clientCompanies:id,currency_id']]),
            ],
        ]);
    }

    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();
        $data['rate'] *= 100; // Convert rate to integer format (if necessary)

        $project = Project::create($data); // Create new project
        $project->users()->attach($data['users']); // Attach users to the project

        // Create default task groups
        $project->taskGroups()->createMany([
            ['name' => 'Backlog'],
            ['name' => 'Todo'],
            ['name' => 'In progress'],
            ['name' => 'QA'],
            ['name' => 'Done'],
            ['name' => 'Deployed'],
        ]);

        return redirect()->route('projects.index')->success('Project created', 'A new project was successfully created.');
    }

    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', [
            'item' => new ProjectResource($project), // Use ProjectResource for consistent data structure
            'dropdowns' => [
                'companies' => ClientCompany::dropdownValues(),
                'users' => User::userDropdownValues(),
                'currencies' => Currency::dropdownValues(['with' => ['clientCompanies:id,currency_id']]),
            ],
        ]);
    }

    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();
        $data['rate'] *= 100; // Convert rate to integer format (if necessary)

        $project->update($data); // Update project details
        $project->users()->sync($data['users']); // Sync users with the project

        return redirect()->route('projects.index')->success('Project updated', 'The project was successfully updated.');
    }

    public function destroy(Project $project)
    {
        $project->archive(); // Archive the project

        return redirect()->back()->success('Project archived', 'The project was successfully archived.');
    }

    public function restore(int $projectId)
    {
        $project = Project::withArchived()->findOrFail($projectId); // Retrieve the archived project

        $this->authorize('restore', $project); // Check authorization
        $project->unArchive(); // Restore the project

        return redirect()->back()->success('Project restored', 'The restoring of the project was completed successfully.');
    }

    public function favoriteToggle(Project $project)
    {
        request()->user()->toggleFavorite($project); // Toggle favorite status for the project

        return redirect()->back();
    }

    public function userAccess(Request $request, Project $project)
    {
        $this->authorize('editUserAccess', $project); // Check authorization

        // Merge user and client IDs from request
        $userIds = array_merge(
            $request->get('users', []),
            $request->get('clients', [])
        );

        (new ProjectService($project))->updateUserAccess($userIds); // Update user access for the project

        return redirect()->back();
    }
}
