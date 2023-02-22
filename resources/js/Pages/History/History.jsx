import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import PrimaryButton from '@/Components/PrimaryButton';
import "react-datepicker/dist/react-datepicker.css";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import NoData from '@/Components/NoData';
import { Link, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function History(props) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [selectedItem, setSelectedItem] = useState([]);
    const passwordInput = useRef();
    const hasHistory = props.history.length ? true : false;
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

    const confirmUserDeletion = (item) => {
        setSelectedItem(item);
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
        <AuthenticatedLayout
            auth={props.auth}
            flash={props.flash}
            // header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Profile</h2>}
        >
        <Head title="History" />
        <div className="w-full py-12 pl-1/5 pr-1/5">
            <div className="visible lg:invisible lg:hidden">
                <NoData
                    title="Not Allowed"
                    blurb="Unable to view this page on this device"
                />
            </div>
            <div className="invisible inline-block min-w-full mx-auto lg:visible max-w-7xl sm:px-6 lg:px-8 md:w-full">
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
                                    {props.history.map(item => (
                                        <tr key={item.id} className='bg-white border-b'>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{item.id}</td>
                                            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{item.model.replace('App\\Models\\', '')}</td>
                                            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{item.event}</td>
                                            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{item.description}</td>
                                            <td className="px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap">
                                                <PrimaryButton
                                                    className='mr-3'
                                                    onClick={() => {confirmUserDeletion(item)}}
                                                >View</PrimaryButton>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            
                            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                                <span className="float-right mx-4 mt-2 text-2xl font-bold text-gray-300 cursor-pointer hover:text-sky-700" onClick={closeModal}>&times;</span>
                                <div>
                                    <dl className="max-w-full p-6 text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                        <div className="flex flex-col pb-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Actioned By</dt>
                                            <dd className="text-lg font-semibold capitalize">{selectedItem.level}</dd>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Object</dt>
                                            <dd className="text-lg font-semibold">Buddy</dd>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Event</dt>
                                            <dd className="text-lg font-semibold capitalize">{selectedItem.event}</dd>
                                        </div>
                                        <div className="flex flex-col pt-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Description</dt>
                                            <dd className="text-lg font-semibold">{selectedItem.description}</dd>
                                        </div>
                                    </dl>
                                </div>
                                <SecondaryButton className="float-right m-4" onClick={closeModal}>Close</SecondaryButton>
                            </Modal>
                        </div>
                    ) : (
                        <NoData
                            title="No History"
                            blurb="Nothing has happened yet! What are you waiting for?"
                        />
                    )
                }
            </div>
        </div>
        </AuthenticatedLayout>
    );
}