<?php

namespace App\Http\Resources\Project;

use App\Models\Project;
use App\Services\PermissionService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // Ensure we pass the underlying Project model to the PermissionService
        /** @var Project $project */
        $project = $this->resource;

        return [
            'id' => $project->id,
            'name' => $project->name,
            'description' => $project->description,
            'favorite' => $project->favorite,
            'client_company' => $project->clientCompany 
                ? $project->clientCompany->only(['id', 'name']) 
                : null,
            'users_with_access' => PermissionService::usersWithAccessToProject($project),
            'all_tasks_count' => $project->all_tasks_count,
            'completed_tasks_count' => $project->completed_tasks_count,
            'overdue_tasks_count' => $project->overdue_tasks_count,
        ];
    }
}
