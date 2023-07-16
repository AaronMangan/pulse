<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\RevisionController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\DisciplineController;
use App\Http\Controllers\UserManagementController;
use App\Http\Controllers\ProjectSettingsController;
use App\Http\Controllers\TransmittalController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

/**
 * Dashboard Routes.
 */
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

/**
 * Profile Routes.
 */
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

/**
 * Project Routes.
 */
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::post('/projects/create', [ProjectController::class, 'store'])->name('projects.create');
    Route::post('/projects/update/{id}', [ProjectController::class, 'update'])->name('projects.update');
    Route::post('/projects/archive/{project}', [ProjectController::class, 'archive'])->name('projects.archive');
    Route::post('projects/delete/{project}', [ProjectController::class, 'destroy'])->name('projects.delete');
});

/**
 * Settings Routes.
 * TODO: Let's split these into their own groups eventually. We can then make finer-grain permissions.
 */
Route::middleware(['auth', 'verified'])->group(function () {
    // Return the setup index. This shows types, revisions, etc.
    Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');

    // Revisions CRUD Routes.
    Route::post('/settings/revision', [RevisionController::class, 'store'])->name('settings.revision.create');
    Route::post('/settings/revision/archive/{revision}', [RevisionController::class, 'archive'])->name('settings.revision.archive');
    Route::post('/settings/revision/update/{revision}', [RevisionController::class, 'update'])->name('settings.revision.update');
    Route::delete('/settings/revision/delete/{revision}', [RevisionController::class, 'destroy'])->name('settings.revision.delete');

    // Statuses CRUD Routes.
    Route::post('/settings/status', [StatusController::class, 'store'])->name('settings.status.create');
    Route::post('/settings/status/archive/{status}', [StatusController::class, 'archive'])->name('settings.status.archive');
    Route::post('/settings/status/update/{status}', [StatusController::class, 'update'])->name('settings.status.update');
    Route::delete('/settings/status/delete/{status}', [StatusController::class, 'destroy'])->name('settings.status.delete');

    // Disciplines CRUD Routes.
    Route::post('/settings/discipline/archive/{discipline}', [DisciplineController::class, 'archive'])->name('settings.discipline.archive');
    Route::post('/settings/discipline', [DisciplineController::class, 'store'])->name('settings.discipline.create');
    Route::post('/settings/discipline/update/{discipline}', [DisciplineController::class, 'update'])->name('settings.discipline.update');
    Route::delete('/settings/discipline/delete/{discipline}', [DisciplineController::class, 'destroy'])->name('settings.discipline.delete');

    // Types CRUD Routes.
    Route::post('/settings/type/archive/{type}', [TypeController::class, 'archive'])->name('settings.type.archive');
    Route::post('/settings/type', [TypeController::class, 'store'])->name('settings.type.create');
    Route::post('/settings/type/update/{type}', [TypeController::class, 'update'])->name('settings.type.update');
    Route::delete('/settings/type/delete/{type}', [TypeController::class, 'destroy'])->name('settings.type.delete');
});

/**
 * Individual Project Settings Routes.
 */
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/projects/{id}/settings', [ProjectSettingsController::class, 'index'])->name('projects.settings.get');
    Route::post('/projects/{id}/settings', [ProjectSettingsController::class, 'store'])->name('projects.settings.save');
});

/**
 * History Routes.
 */
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/history', [HistoryController::class, 'index'])->name('history.index');
});

/**
 * User Management Routes.
 */
Route::middleware(['auth', 'verified', /* 'admin' */])->group(function () {
    Route::get('/admin', [UserManagementController::class, 'index'])->name('admin.index');
    Route::post('/user/create', [UserManagementController::class, 'store'])->name('admin.user.create');
    Route::post('/user/update/{user}', [UserManagementController::class, 'update'])->name('admin.user.update');
    Route::post('/user/login/{id}', [UserManagementController::class, 'loginAs'])->name('admin.user.login');
    Route::post('/user/status/{user}/toggle', [UserManagementController::class, 'toggleUserStatus'])->name('admin.user.toggle');
});

/**
 * Document Routes.
 */
Route::middleware(['auth', 'verified'])->group(function () {
    //
    Route::get('/documents', [DocumentController::class, 'index'])->name('documents.index');
    Route::post('/documentS/create', [DocumentController::class, 'create'])->name('documents.create');
    Route::post('/documents/{id}/update', [DocumentController::class, 'update'])->name('documents.update');
});

/**
 * Transmittal Routes
 */
Route::middleware(['auth', 'verified'])->group(function () {
    //
    Route::get('/transmittals', [TransmittalController::class, 'index'])->name('transmittals.index');
    Route::get('/transmittals/outgoing/create', [TransmittalController::class, 'createOutgoing'])->name('transmittals.create');
});

// Used by authentication.
require __DIR__.'/auth.php';
