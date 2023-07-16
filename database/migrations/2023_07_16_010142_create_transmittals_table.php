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
        Schema::create('transmittals', function (Blueprint $table) {
            $table->id();

            // To (User)
            $table->unsignedBigInteger('to_user_id')->nullable();
            $table->foreign('to_user_id')->references('id')->on('users');

            // From (User)
            $table->unsignedBigInteger('from_user_id');
            $table->foreign('from_user_id')->references('id')->on('users');

            // Includes (User ids)
            $table->json('addresses')->nullable();

            // Subject to be added to transmittal / email.
            $table->string('subject', 255)->nullable();

            // Details - added by user.
            $table->longText('details')->nullable();

            // Reference [Internal]
            $table->string('reference', 255)->nullable();

            // Reference [External]
            $table->string('external_reference', 255)->nullable();

            // Extra Data that can be configured.
            $table->json('metadata')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transmittals');
    }
};
