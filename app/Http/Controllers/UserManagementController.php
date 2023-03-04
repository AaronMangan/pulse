<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Mail\NewUserMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;
use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Requests\User\ToggleUserStatusRequest;

class UserManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Returns the Admin USer Index.
        return Inertia::render('Admin/Admin', ['users' => User::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateUserRequest $request)
    {
        // Get the safe data to use when making a user.
        $validated = $request->safe()->only(['name', 'email', 'isAdmin', 'password', 'password_confirmation']);
        $validated['status'] = 'active';

        // Create the user.
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'isAdmin' => $validated['isAdmin'],
        ]);
        event(new Registered($user));

        // If a user was created, add the notifications. Both a flash msg and an email are created.
        if (isset($user->id) && isset($user->email)) {
            // Add notifications.
            $request->session()->flash('success', 'User was created successfully, and will receive a verification email');
            // Mail::to($user->email)->queue(new NewUserMail($user ?? []));
        }
        return redirect()->route('admin.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        // Updates the users details. Admins cannot update passwords but can update name, email and make
        // another user an administrator.
        $data = $request->safe()->only(['name', 'email', 'isAdmin']);
        $updated = $user->update($data);

        // Create a flash session.
        $request->session()->flash(
            ($updated) ? 'success' : 'fail',
            ($updated) ? 'User was updated successfully' : 'An error occurred, please try again or contact support',
        );

        // Redirect.
        return redirect()->route('admin.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }

    /**
     * Allows an admin to login as a specific user.
     *
     * @param Request $request
     * @param User $user
     * @return void
     */
    public function loginAs(Request $request, User $user)
    {
        // Get the user to login as.
        $as = $user->findOrFail($request->id);

        // If the admin can log in as the specified user.
        if (Auth::user()->id != $as->id) {
            Auth::login($as);
            return redirect(RouteServiceProvider::HOME);
        } else {
            $request->session()->flash('error', 'You are already logged in!');
        }
    }

    /**
     * Toggles the user status.
     *
     * @param Request $request
     * @param User $user
     * @return void
     */
    public function toggleUserStatus(Request $request, User $user)
    {
        // First, make sure a user was found. Not strictly necessary but good to check.
        if (!isset($user->id)) {
            $request->session()->flash('error', 'User was not found');
            return redirect()->route('admin.index');
        }

        // Update their status.
        $user->status = ($user->status == 'active') ? 'inactive' : 'active';
        $user->save();

        // Create a flash msg and return.
        $request->session()->flash('success', 'User was updated successfully!');
        return redirect()->route('admin.index');
    }
}
