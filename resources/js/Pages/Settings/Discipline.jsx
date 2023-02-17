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
import { toast } from 'react-toastify';
import axios from 'axios';

export default function History({className, disciplines, stateChanger}) {
    const [creatingDiscipline, setCreatingDiscipline] = useState(false);
    const [selectedItem, setSelectedItem] = useState([]);
    // const {updated, setUpdated} = useState([]);
    // const [reload, setReload] = useState(false);
    const passwordInput = useRef();
    const hasData = disciplines.length > 0 ? true : false;
    const {
        data,
        setData,
        post,
        processing,
        reset,
        errors,
    } = useForm({

    });

    const createDisciplineModal = (e) => {
        // e.preventDefault();
        setCreatingDiscipline(true);
        reset();
    };

    const createDiscipline = (e) => {
        e.preventDefault();

        post(route('settings.discipline.create'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const updateDiscipline = (e) => {
        e.preventDefault();
        axios.post(route('settings.discipline.update', selectedItem.id), {
            name: data.name ?? selectedItem.name,
            code: data.code ?? selectedItem.code,
        })
        .then((response) => {
            if(response.data.status && response.data.status === 'success') {
                toast.success(response.data.message);
            }
            else if (response.data.status && response.data.status === 'fail') {
                toast.error(response.data.message);
            }
            closeModal(true);
        })
        .catch((err) => {
            toast.error('An internal error has occured, please contact your administrator');
        });
    };

    const closeModal = (reload) => {
        stateChanger('yes');
        setCreatingDiscipline(false);
    };

    const editDiscipline = (e, item) => {
        e.preventDefault();
        setSelectedItem(item);
        createDisciplineModal(e);
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium font-bold text-gray-900">Disciplines</h2>
                <p className="mt-1 text-xs text-gray-600">
                    View the currently configured disciplines
                </p>
            </header>
            {
                hasData ? (
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
                                {disciplines.map(item => (
                                    <tr key={item.id} className='bg-white border-b'>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{item.id}</td>
                                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{item.name}</td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">{item.code}</td>
                                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                        {
                                            item.status == 'active'
                                                ? <span className="bg-green-100 text-green-800 uppercase text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">active</span>
                                                : <span className="bg-yellow-100 text-yellow-800 text-xs uppercase font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">inactive</span>
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
                                                    <Dropdown.Link onClick={(e) => {editDiscipline(e, item);}}>Edit</Dropdown.Link>
                                                    <Dropdown.Link href={route('settings.discipline.archive', item)} method="post" as="button">
                                                        {
                                                            item.status == 'active' ? 'Archive' : 'Restore'
                                                        }
                                                    </Dropdown.Link>
                                                    <Dropdown.Link href={route('settings.discipline.delete', item)} method="post" as="button">
                                                        Delete
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <NoData
                        title="No Disciplines"
                        blurb="To add a discipline, click the 'Add Discipline' button."
                    />
                )
            }
            <PrimaryButton onClick={createDisciplineModal}>Add Discipline</PrimaryButton>

            <Modal show={creatingDiscipline} onClose={closeModal}>
                <span className="float-right mx-4 mt-2 text-2xl font-bold text-gray-300 cursor-pointer hover:text-sky-700" onClick={closeModal}>&times;</span>
                <form onSubmit={selectedItem.id ? updateDiscipline : createDiscipline} className="p-6">
                    <h2 className="text-lg font-medium font-bold text-gray-900">Create New Discipline</h2>
                    <hr className="mt-2 text-gray-300"></hr>

                    <div className="mt-6">
                        <InputLabel className="font-bold" for="name" value="Name" />
                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            value={data.name ?? selectedItem.name ?? ''}
                            handleChange={(e) => setData('name', e.target.value)}
                            className="block w-full mt-1 capitalize"
                            isFocused
                            placeholder="Mechanical"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-6">
                        <InputLabel className="font-bold" for="name" value="Code" />
                        <TextInput
                            id="code"
                            type="text"
                            name="code"
                            value={data.code ?? selectedItem.code ?? ''}
                            handleChange={(e) => setData('code', e.target.value)}
                            className="block w-full mt-1 uppercase"
                            placeholder="MECH"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="flex justify-end mt-6">
                        {selectedItem.id ? (
                            <PrimaryButton className="mr-3" processing={processing}>
                                Save
                            </PrimaryButton>
                        ) : (
                            <PrimaryButton className="mr-3" processing={processing}>
                                Create Discipline
                            </PrimaryButton>
                        )}
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}