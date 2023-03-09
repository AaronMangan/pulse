import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Welcome(props) {
    const handleClick = () => {
        navigate("/login");
    };
    return (
        <>
            <Head title="Welcome" />
            <div className="w-full h-screen py-12 bg-gray-200">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <div className='flex flex-col items-center pt-6 sm:justify-center sm:pt-0'>
                            <ApplicationLogo className="w-1/2 text-gray-500 h-1/2 hover:text-blue-300 text-primary" />
                            <h2 className='font-bold text-primary hover:text-blue-300 text-7xl'>Pulse</h2>
                            <p class="mt-4 font-light text-gray-500">A Modern Document Management system for modern businesses</p>
                            <Link href={route('login')}>
                                <PrimaryButton className='mt-4' onClick={handleClick}>Login</PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
