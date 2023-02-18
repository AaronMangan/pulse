import Modal from '@/Components/Modal';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SecondaryButton from '@/Components/SecondaryButton';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import NoData from '@/Components/NoData';
import SmallText from '@/Components/SmallText';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Statuses({className, statuses}) {
    const [showingStatusModal, setShowingStatusModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState([]);
    const nameInput = useRef();
    const hasData = statuses.length > 0 ? true : false;
    const { data, setData, post, processing, reset, errors } = useForm({
        status: 'active',
    });

    const showStatusModal = () => {
        setShowingStatusModal(true);
    };

    const createStatus = (e) => {
        e.preventDefault();

        post(route('settings.status.create'), {
            preserveScroll: true,
            onSuccess: () => closeStatusModal(),
            onError: () => nameInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeStatusModal = (reload = false) => {
        setShowingStatusModal(false);
        reset();
        if(reload) {
            window.location.reload();
        }
    };

    const editStatus = (e, status) => {
        e.preventDefault();
        setSelectedItem(status);
        showStatusModal();
    };

    /**
     * Chcek for changes in the fields the user can access.
     * @returns bool True if the data has changed, false if not.
     */
    const hasChanges = () => {
        let newName = data.name ?? selectedItem.name;
        let newCode = data.code ?? selectedItem.code;
        return (newName !== selectedItem.name || newCode !== selectedItem.code);
    };

    /**
     * 
     * @param {*} e 
     * @returns 
     */
    const updateStatus = (e) => {
        e.preventDefault();
        if(!hasChanges()) {
            toast.info('No changes were made to save');
            return;
        }
        axios.post(route('settings.status.update', selectedItem.id), {
            name: data.name ?? selectedItem.name,
            code: data.code ?? selectedItem.code
        }).then((response) => {
            // Response Handling...
            if(typeof response.data != 'undefined' && response.data.status && response.data.status == 'success') {
                // Handle success
                toast.success(response.data.message ?? 'Status updated successfully!');
            }
            else {
                // Handle application failure (as opposed to request failure)
                toast.error(response.data.message ?? 'An error occurred');
            }
        }).catch((errors) => {
            // Error handling...
            console.log('An error occurred when trying to updated the status. Please contact your administrator and show them the error below:');
            console.error(errors);
        });
        closeStatusModal(hasChanges());
    };
    
    /**
     * Render and return the HTML.
     */
    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium font-bold text-gray-900">Statuses</h2>
                <p className="mt-1 text-xs text-gray-600">
                    Manage the statuses that can be applied to your documents.
                </p>
            </header>
            { hasData ? (
                <div>
                    <table className="min-w-full rounded-md">
                        <thead className="bg-gray-600 border-b">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Id</th>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Name</th>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Code</th>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Status</th>
                                <th scope="col" className="px-6 py-4 text-sm text-white font-large">Actions</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {(statuses) ? statuses.map(status => (
                                <tr key={status.id} className={status.status == 'active' ? 'bg-white border-b' : 'bg-gray-200 border-b'}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{status.id}</td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{status.name}</td>
                                    <td className="px-6 py-4 text-sm font-light font-bold text-gray-900 whitespace-nowrap">{status.code}</td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 uppercase whitespace-nowrap">
                                        {
                                            status.status == 'active'
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
                                                <Dropdown.Link onClick={(e) => {editStatus(e, status)}}>Edit</Dropdown.Link>
                                                <Dropdown.Link href={route('settings.status.archive', {status})} method="post" as="button">
                                                    {
                                                        status.status == 'active' ? 'Archive' : 'Restore'
                                                    }
                                                </Dropdown.Link>
                                                <Dropdown.Link href={route('settings.status.delete', status.id)} method="delete" as="button">
                                                    Delete
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </td>
                                </tr>
                            )) : {}}
                        </tbody>
                    </table>
                </div>
            ) : (
                <NoData 
                    title="No Statuses"
                    blurb="To add a status, click the 'Add Status' button."
                />
            )}
            <PrimaryButton onClick={showStatusModal}>Add Status</PrimaryButton>

            <Modal show={showingStatusModal} onClose={closeStatusModal}>
                <span className="float-right mx-4 mt-2 text-2xl font-bold text-gray-300 cursor-pointer hover:text-sky-700" onClick={closeStatusModal}>&times;</span>
                <form onSubmit={ selectedItem.id ? updateStatus : createStatus } className="p-6">
                    <h2 className="text-lg font-medium font-bold text-gray-900">{
                        selectedItem.id
                            ? 'Update Status'
                            : 'Create New Status'
                    }</h2>
                    <SmallText
                        value={selectedItem.id ? 'Click Save when finished to save your changes' : 'Create a new status to apply to documents, click Save when you are done'}
                    />
                    <hr className="mt-2 text-gray-300"></hr>

                    {/* Name */}
                    <div className="mt-6">
                        <InputLabel className="font-bold" for="name" value="Name" />
                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            ref={nameInput}
                            value={data.name ?? selectedItem.name ?? ''}
                            handleChange={(e) => setData('name', e.target.value)}
                            className="block w-full mt-1 capitalize"
                            isFocused
                            placeholder="Draft"
                        />                                        
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    {/* Code */}
                    <div className="mt-6">
                        <InputLabel className="font-bold" for="name" value="Code" />
                        <TextInput
                            id="code"
                            type="text"
                            name="code"
                            value={data.code ?? selectedItem.code ?? ''}
                            handleChange={(e) => setData('code', e.target.value)}
                            className="block w-full mt-1 uppercase"
                            placeholder="DFT"
                        />                                        
                        <InputError message={errors.code} className="mt-2" />
                    </div>

                    { hasChanges() ? (
                            <div className="flex justify-end mt-6">
                                <PrimaryButton className="mr-3" processing={processing}>
                                    Save
                                </PrimaryButton>
                                <SecondaryButton onClick={closeStatusModal}>Cancel</SecondaryButton>
                            </div>
                        ):(
                            <div className="flex justify-end mt-6">
                                <SecondaryButton onClick={closeStatusModal}>Cancel</SecondaryButton>
                            </div>
                        )
                    }
                </form>
            </Modal>
        </section>
    );
}