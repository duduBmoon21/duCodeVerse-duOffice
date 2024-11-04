<?php

namespace App\Services;

use App\Models\Project;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Exception;

class ProjectService
{
    protected Project $project;

    /**
     * Constructor to initialize the service with a specific project.
     *
     * @param Project $project
     * @throws ModelNotFoundException
     */
    public function __construct(Project $project)
    {
        // Ensure the project exists and is not soft-deleted
        if (!$project->exists) {
            throw new ModelNotFoundException('Project not found.');
        }

        $this->project = $project;
    }

    /**
     * Update user access for the project.
     *
     * @param array $userIds Array of user IDs to be associated with the project.
     * @return bool True if the operation succeeds, otherwise false.
     * @throws Exception
     */
    public function updateUserAccess(array $userIds): bool
    {
        DB::beginTransaction(); // Start a transaction to ensure consistency

        try {
            // Remove all existing user access records for this project
            DB::table('project_user_access')
                ->where('project_id', $this->project->id)
                ->delete();

            // Prepare new user access records
            $accessData = collect($userIds)->map(fn ($id) => [
                'user_id' => $id,
                'project_id' => $this->project->id,
                'created_at' => now(),
                'updated_at' => now(),
            ])->toArray();

            // Insert new user access records
            DB::table('project_user_access')->insert($accessData);

            DB::commit(); // Commit the transaction
            return true;
        } catch (Exception $e) {
            DB::rollBack(); // Roll back the transaction on failure
            report($e); // Log the exception for debugging
            return false;
        }
    }

    /**
     * Check if a specific user has access to the project.
     *
     * @param int $userId User ID to check.
     * @return bool True if the user has access, otherwise false.
     */
    public function hasUserAccess(int $userId): bool
    {
        return DB::table('project_user_access')
            ->where('project_id', $this->project->id)
            ->where('user_id', $userId)
            ->exists();
    }

    /**
     * Get a list of user IDs who have access to the project.
     *
     * @return array Array of user IDs.
     */
    public function getUserAccessList(): array
    {
        return DB::table('project_user_access')
            ->where('project_id', $this->project->id)
            ->pluck('user_id')
            ->toArray();
    }
}
