<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
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
    Route::post('/projects/archive/{project}', [ProjectController::class, 'archive'])->name('projects.archive');
});

/**
 * Settings Routes.
 */
Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/settings', [\App\Http\Controllers\SettingsController::class, 'index'])->name('settings.index');
    Route::post('/settings/revision', [\App\Http\Controllers\SettingsController::class, 'storeRevision'])->name('settings.revision.create');
    Route::post('/settings/revision/archive/{revision}', [\App\Http\Controllers\SettingsController::class, 'archiveRevision'])->name('settings.revision.archive');
    
    // 
    Route::post('/settings/status/archive/{status}', [\App\Http\Controllers\SettingsController::class, 'archiveStatus'])->name('settings.status.archive');
    Route::post('/settings/status', [\App\Http\Controllers\SettingsController::class, 'storeStatus'])->name('settings.status.create');
    
    //
    Route::post('/settings/discipline/archive/{discipline}', [\App\Http\Controllers\SettingsController::class, 'archiveType'])->name('settings.discipline.archive');
    Route::post('/settings/discipline', [\App\Http\Controllers\SettingsController::class, 'storeDiscipline'])->name('settings.discipline.create');
    
    // 
    Route::post('/settings/type/archive/{type}', [\App\Http\Controllers\SettingsController::class, 'archiveType'])->name('settings.type.archive');
    Route::post('/settings/type', [\App\Http\Controllers\SettingsController::class, 'storeType'])->name('settings.type.create');
});
require __DIR__.'/auth.php';
