import Modal from '@/Components/Modal';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SecondaryButton from '@/Components/SecondaryButton';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import TextInput from '@/Components/TextInput';
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import NoData from '@/Components/NoData';

export default function Revisions({className, revisions}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();
    const hasData = revisions.length > 0 ? true : false;
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
                <h2 className="text-lg font-medium font-bold text-gray-900">Revisions</h2>
                <p className="mt-1 text-xs text-gray-600">
                    Manage the revisions that can be applied to your documents.
                </p>
            </header>
            { hasData ? (
                <table className="min-w-full rounded-md">
                    <thead className="bg-gray-600 border-b">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Id</th>
                            <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Name</th>
                            <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Status</th>
                            <th scope="col" className="px-6 py-4 text-sm text-white font-large">Actions</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {revisions.map(revision => (
                            <tr key={revision.id} className={revision.status == 'active' ? 'bg-white border-b' : 'bg-gray-200 border-b'}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{revision.id}</td>
                                <td className="px-6 py-4 text-sm font-light font-bold text-gray-900 whitespace-nowrap">{revision.name}</td>
                                <td className="px-6 py-4 text-sm font-light text-gray-900 uppercase whitespace-nowrap">
                                    {
                                        revision.status == 'active'
                                            ? <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">active</span>
                                            : <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">inactive</span>
                                    }
                                </td>
                                <td className="px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:text-sky-200 focus:outline-none"
                                                >Actions
                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href="">View</Dropdown.Link>
                                            <Dropdown.Link href="">Edit</Dropdown.Link>
                                            <Dropdown.Link href={route('settings.revision.archive', revision)} method="post" as="button">
                                                {
                                                    revision.status == 'active' ? 'Archive' : 'Restore'
                                                }
                                            </Dropdown.Link>
                                            <Dropdown.Link href="" method="post" as="button">
                                                Delete
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <NoData
                    title="No Revisions"
                    blurb="To add a revision, click the 'Add Revision' button."
                />
            )}
            <PrimaryButton onClick={confirmUserDeletion}>Add Revision</PrimaryButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <span className="float-right mx-4 mt-2 text-2xl font-bold text-gray-300 cursor-pointer hover:text-sky-700" onClick={closeModal}>&times;</span>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium font-bold text-gray-900">Create New Revision</h2>
                    <hr className="mt-2 text-gray-300"></hr>

                    <div className="mt-6">
                        <InputLabel className="font-bold" for="name" value="Revision" />
                        <TextInput
                            id="revision"
                            type="text"
                            name="revision"
                            value={data.revision}
                            handleChange={(e) => setData('revision', e.target.value)}
                            className="block w-full mt-1"
                            isFocused
                            placeholder="A, B, 0, 1"
                        />                                        
                        <InputError message={errors.revision} className="mt-2" />
                    </div>

                    <div className="flex justify-end mt-6">
                        <PrimaryButton className="mr-3" processing={processing}>
                            Create Revision
                        </PrimaryButton>
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}