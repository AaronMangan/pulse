import Modal from '@/Components/Modal';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';
import TextInput from '@/Components/TextInput';
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Revisions({ className, props }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
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
                    {/* {props.projects.map(project => (
                        <tr key={project.id} className={project.status == 'active' ? 'bg-white border-b' : 'bg-gray-200 border-b'}>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{project.id}</td>
                            <td className="px-6 py-4 text-sm font-light font-bold text-gray-900 whitespace-nowrap">{project.name}</td>
                            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{project.code}</td>
                            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{project.start}</td>
                            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{project.end}</td>
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
                                        <Dropdown.Link href={route('projects.archive', project)}  method="post" as="button">
                                            {
                                                project.status == 'active' ? 'Archive' : 'Restore'
                                            }
                                        </Dropdown.Link>
                                        <Dropdown.Link href="" method="post" as="button">
                                            Delete
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
            <DangerButton onClick={confirmUserDeletion}>Add Revision</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </p>

                    <div className="mt-6">
                        <InputLabel for="password" value="Password" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            handleChange={(e) => setData('password', e.target.value)}
                            className="block w-3/4 mt-1"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex justify-end mt-6">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <DangerButton className="ml-3" processing={processing}>
                            Delete Account
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}