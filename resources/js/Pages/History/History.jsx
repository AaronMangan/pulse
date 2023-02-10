import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import PrimaryButton from '@/Components/PrimaryButton';
import "react-datepicker/dist/react-datepicker.css";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function History({className, history}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();
    const hasHistory = history.length > 0 ? true : false;
    const {
        data,
        setData,
        post,
        processing,
        reset,
        errors,
    } = useForm({
        revision: ''
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        post(route('settings.revision.create'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium font-bold text-gray-900">History</h2>
                <p className="mt-1 text-xs text-gray-600">
                    View the history of your settings.
                </p>
            </header>
            {
                hasHistory ? (
                    <div>
                        <table className="min-w-full rounded-md">
                            <thead className="bg-gray-600 border-b">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Id</th>
                                    <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Type</th>
                                    <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Event</th>
                                    <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Description</th>
                                    <th scope="col" className="px-6 py-4 text-sm text-white font-large">Actions</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {history.map(item => (
                                    <tr key={item.id} className='bg-white border-b'>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{item.id}</td>
                                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{item.model.replace('App\\Models\\', '')}</td>
                                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{item.event}</td>
                                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{item.description}</td>
                                        <td className="px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap">
                                            <PrimaryButton
                                                className=''
                                                onClick={confirmUserDeletion}
                                            >View</PrimaryButton>
                                                <Modal show={confirmingUserDeletion} onClose={closeModal} data={item}>
                                                    <span className="float-right mx-4 mt-2 text-2xl font-bold text-gray-300 cursor-pointer hover:text-sky-700" onClick={closeModal}>&times;</span>
                                                    <div>                                                        
                                                        <dl className="max-w-full p-6 text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                                            <div className="flex flex-col pb-3">
                                                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Actioned By</dt>
                                                                <dd className="text-lg font-semibold">System</dd>
                                                            </div>
                                                            <div className="flex flex-col py-3">
                                                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Home address</dt>
                                                                <dd className="text-lg font-semibold">92 Miles Drive, Newark, NJ 07103, California, USA</dd>
                                                            </div>
                                                            <div className="flex flex-col pt-3">
                                                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone number</dt>
                                                                <dd className="text-lg font-semibold">+00 123 456 789 / +12 345 678</dd>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                    <SecondaryButton className="float-right m-4" onClick={closeModal}>Close</SecondaryButton>
                                                </Modal>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>
                        <div className="container flex items-center justify-center max-w-screen-lg mx-auto">
                        <InformationCircleIcon className="h-24 text-gray-300" />
                        </div>
                        <h2 className='text-3xl text-center text-gray-300'>No History</h2>
                    </div>
                )
            }

            {/* <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <span className="float-right mx-4 mt-2 text-2xl font-bold text-gray-300 cursor-pointer hover:text-sky-700" onClick={closeModal}>&times;</span>
                <div className="p-6">

                </div>
                <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
            </Modal> */}
        </section>
    );
}