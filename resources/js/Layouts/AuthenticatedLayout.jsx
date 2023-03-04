import { useState } from 'react';
import NavBar from '@/Layouts/NavBar';
import { ToastContainer, toast } from 'react-toastify';

export default function Authenticated({ auth, header, children, footer, flash }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const showToastMessage = (msg, type) => {
        if (type == 'success') {
            toast.success(msg, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (type == 'error') {
            toast.error(msg, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            toast.info(msg, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };
    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar auth={auth}/>
            {/* Flash Messages */}
            {flash.success && (
                // Show any flashed message to the session
                showToastMessage(flash.success, 'success')
            )}
            {flash.info && (
                // Show any flashed message to the session
                showToastMessage(flash.info, 'info')
            )}
            {flash.error && (
                // Show any flashed message to the session
                showToastMessage(flash.error, 'error')
            )}
            
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
