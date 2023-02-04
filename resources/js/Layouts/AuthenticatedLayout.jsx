import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';

export default function Authenticated({ auth, header, children, footer }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />

            {header && (
                <header className="bg-white shadow">
                    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
            
            {footer && (
                <footer className="h-10 text-center items-center sticky top-[100vh] bg-white shadow">
                    <div className="px-2 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">{footer}</div>
                </footer>
            )}
        </div>
    );
}
