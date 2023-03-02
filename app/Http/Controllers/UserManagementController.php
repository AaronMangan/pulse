<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewUserMail;
 
class UserManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
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
        //
        $validated = $request->safe()->only(['name', 'email', 'isAdmin', 'password', 'password_confirmation']);
        
        $user = User::create($validated);
        
        if(isset($user->id) && isset($user->email)) {
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
        //
        $data = $request->safe()->only(['name', 'email']);
        $updated = $user->update($data);

        $request->session()->flash(
            ($updated) ? 'success' : 'fail',
            ($updated) ? 'User was updated successfully' : 'An error occurred, please try again or contact support',
        );

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
        $as = $user->find($request->id);

        // If the admin can log in as the specified user.
        if(Auth::user()->id != $as->id)
        {
            Auth::login($as);
            return redirect(RouteServiceProvider::HOME);
        }
        else
        {
            $request->session()->flash('error', 'You are already logged in!');
        }
    }
}
