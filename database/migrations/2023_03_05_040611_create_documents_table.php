<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('number', 255);
            $table->longText('description')->nullable();

            // Foreign Keys
            // Project
            $table->unsignedBigInteger('project_id');
            $table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade');

            // Type
            $table->unsignedBigInteger('type_id');
            $table->foreign('type_id')->references('id')->on('types')->onDelete('cascade');

            // Discipline
            $table->unsignedBigInteger('discipline_id');
            $table->foreign('discipline_id')->references('id')->on('disciplines')->onDelete('cascade');

            // Status
            $table->unsignedBigInteger('status_id');
            $table->foreign('status_id')->references('id')->on('statuses')->onDelete('cascade');

            // Revision
            $table->unsignedBigInteger('revision_id');
            $table->foreign('revision_id')->references('id')->on('revisions')->onDelete('cascade');

            // Attachment
            // $table->unsignedBigInteger('attachment_id')->nullable();
            // $table->foreign('attachment_id')->references('id')->on('attachments')->onDelete('cascade');

            // Created by
            $table->unsignedBigInteger('created_by');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');

            // Last Updated by
            $table->unsignedBigInteger('last_updated_by');
            $table->foreign('last_updated_by')->references('id')->on('users')->onDelete('cascade');

            $table->string('state', 255)->default('active');
            $table->boolean('latest')->default(false);
            $table->json('metadata')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
