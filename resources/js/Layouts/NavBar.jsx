import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from '@inertiajs/react';
import SmallText from '@/Components/SmallText';

export default function NavBar({ auth }) {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };
    return (
        <nav className="p-3 bg-gray-200 border-gray-400 rounded dark:bg-gray-800 dark:border-gray-700">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/dashboard" className="flex items-center">
                    <ApplicationLogo className="h-6 mr-3 stroke-primary sm:h-10" />
                    <span className="self-center text-xl font-semibold text-primary whitespace-nowrap dark:text-white">Pulse</span>
                </a>
                <SmallText className="pl-6" value={auth.user.name} />
                <button data-collapse-toggle="navbar-hamburger" type="button" onClick={toggleOpen} className="inline-flex items-center p-2 ml-3 text-sm rounded-lg text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                { open ?
                    <div className="fixed relative top-0 z-50 w-full overflow-hidden" id="navbar-hamburger">
                        <ul className="flex flex-col mt-4 bg-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                            <li onClick={toggleOpen}>
                                <a href={route('dashboard')} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-primary hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Home</a>
                            </li>
                            <li onClick={toggleOpen}>
                                <a href={route('profile.edit')} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-primary hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Profile</a>
                            </li>
                            <li onClick={toggleOpen}>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-primary hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                            </li>
                            <li onClick={toggleOpen}>
                                <Link className="flex block w-full py-2 pl-3 pr-4 text-gray-700 rounded align-left hover:bg-primary hover:text-white dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white" href={route('logout')} as='button' method='post'>Logout</Link>
                            </li>
                        </ul>
                    </div>
                : null
                }
            </div>
            <ToastContainer />
        </nav>
    );
}
