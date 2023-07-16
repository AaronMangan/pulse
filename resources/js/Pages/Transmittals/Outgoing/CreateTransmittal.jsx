import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function CreateTransmittal(props) {
    const handleClick = () => {
        navigate("/login");
    };
    return (
        <>
            <Head title="Create Transmittal" />
            <div className="w-full h-screen py-12 bg-gray-100">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <div className='flex flex-col items-center pt-6 sm:justify-center sm:pt-0'>
                            <h3 className='text-5xl font-bold text-primaryDark hover:text-blue-300'>Create Draft Transmittal</h3>
                            <p class="mt-4 font-light text-gray-500">Send a documents to a recipient</p>
                            {/* <Link href={route('login')}>
                                <PrimaryButton className='mt-4' onClick={handleClick}>Login</PrimaryButton>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
