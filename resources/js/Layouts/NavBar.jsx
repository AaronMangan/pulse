import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NavBar({ props }) {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <nav className="p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/dashboard" className="flex items-center">
                    <ApplicationLogo className="h-6 mr-3 stroke-gray-600 sm:h-10" />
                    <span className="self-center text-xl font-semibold text-gray-600 whitespace-nowrap dark:text-white">Pulse</span>
                </a>
                <button data-collapse-toggle="navbar-hamburger" type="button" onClick={toggleOpen} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                { open ?
                <div className="fixed relative top-0 z-50 w-full overflow-hidden" id="navbar-hamburger">
                    <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <li onClick={toggleOpen}>
                            <a href={route('dashboard')} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
                        </li>
                        <li onClick={toggleOpen}>
                            <a href={route('profile.edit')} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Profile</a>
                        </li>
                        <li onClick={toggleOpen}>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                        </li>
                        <li onClick={toggleOpen}>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
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