<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\DisciplineController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\RevisionController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\ProjectSettingsController;
use App\Http\Controllers\HistoryController;
use Inertia\Inertia;

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
Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::post('/projects/create', [ProjectController::class, 'store'])->name('projects.create');
    Route::post('/projects/update/{id}', [ProjectController::class, 'update'])->name('projects.update');
    Route::post('/projects/archive/{project}', [ProjectController::class, 'archive'])->name('projects.archive');
    Route::post('projects/delete/{project}', [ProjectController::class, 'destroy'])->name('projects.delete');
});

/**
 * Settings Routes.
 */
Route::middleware(['auth', 'verified'])->group(function() {
    // Return the setup index. This shows types, revisions, etc.
    Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');

    // Revisions CRUD Routes
    Route::post('/settings/revision', [RevisionController::class, 'store'])->name('settings.revision.create');
    Route::post('/settings/revision/archive/{revision}', [RevisionController::class, 'archive'])->name('settings.revision.archive');
    
    // Statuses CRUD Routes.
    Route::post('/settings/status/archive/{status}', [StatusController::class, 'archive'])->name('settings.status.archive');
    Route::post('/settings/status', [StatusController::class, 'store'])->name('settings.status.create');
    
    // Disciplines CRUD Routes.
    Route::post('/settings/discipline/archive/{discipline}', [DisciplineController::class, 'archive'])->name('settings.discipline.archive');
    Route::post('/settings/discipline', [DisciplineController::class, 'store'])->name('settings.discipline.create');
    Route::post('/settings/discipline/update/{discipline}', [DisciplineController::class, 'update'])->name('settings.discipline.update');
    Route::post('/settings/discipline/delete/{discipline}', [DisciplineController::class, 'destroy'])->name('settings.discipline.delete');
    
    // Types CRUD Routes,
    Route::post('/settings/type/archive/{type}', [TypeController::class, 'archive'])->name('settings.type.archive');
    Route::post('/settings/type', [TypeController::class, 'store'])->name('settings.type.create');
    Route::post('/settings/type/update/{type}', [TypeController::class, 'update'])->name('settings.type.update');
});

/**
 * Individual Project Settings Routes.
 */
Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/projects/{id}/settings', [ProjectSettingsController::class, 'index'])->name('projects.settings.get');
    Route::post('/projects/{id}/settings', [ProjectSettingsController::class, 'store'])->name('projects.settings.save');
});

/**
 * History Routes
 */
Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/history', [HistoryController::class, 'index'])->name('history.index');
});



// Used by authentication.
require __DIR__.'/auth.php';