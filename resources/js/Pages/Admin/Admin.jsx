import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useEffect } from 'react';
import NoData from '@/Components/NoData';
import UserCard from '@/Components/UserCard';
import FloatButton from '@/Components/FloatButton';
import Modal from '@/Components/Modal';
import { useRef, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import SmallText from '@/Components/SmallText';
import SecondaryButton from '@/Components/SecondaryButton';
import Toggle from 'react-toggle';
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Swal from 'sweetalert2';

export default function Admin(props) {
    const hasData = props.users.length ? true : false;
    const [createNewUser, setCreateNewUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    // Close the modal.
    const closeModal = () => {
        setCreateNewUser(false);
        reset();
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        isAdmin: false,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('name', 'email', 'isAdmin');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const adminInfo = () => {
        Swal.fire(
            'Administration Rights',
            'Granting a user administration rights allows them to configure pulse and maintain objects in the platform',
            'info'
        )
    }

    const confirmMakingUserAdmin = (value) => {
        if(!isAdmin) {
            Swal.fire({
                title: 'Are you sure?',
                text: "Should this user be elevated to adminstrator?",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#202226',
                // cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
              }).then((result) => {
                if (result.isConfirmed) {
                  setIsAdmin(true);
                  setData('isAdmin', true);
                }
            })
        }
        else
        {
            setIsAdmin(false);
            setData('isAdmin', false);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.user.create'));
        closeModal();
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            flash={props.flash}
        >
            <Head title="Admin" />
            <div className="py-12">
                {
                    hasData ? (
                        <>
                            {props.users.map(user => (
                                <UserCard key={user.id} user={user} />
                            ))}
                        </>
                    ) : (
                        <NoData value="No Data" />
                    )
                }
            </div>
            
            {/* Create a User Button */}
            <FloatButton
                action={() => {setCreateNewUser(true)}}
            />

            {/* Create a User Modal & Edit User Modal*/}
            <Modal show={createNewUser} onClose={closeModal}>
                <span className="float-right mx-4 mt-2 text-xl cursor-pointer text-grey-100 hover:text-sky-700" onClick={closeModal}>&times;</span>
                <div className='p-6'>
                    <div className='mb-2'>
                        <h2 className="text-lg font-medium font-bold text-gray-900">Create New User</h2>
                        <SmallText
                            value='Create a new Pulse user. The new user will need to confirm their account before logging in'
                            className='mb-2'
                        />
                        <hr className='mt-2 mb-2' />
                    </div>
                    <form onSubmit={submit}>
                        <div>
                            {/* User Name */}
                            <InputLabel  className="font-bold" forInput="name" value="Name" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="block w-full mt-1"
                                autoComplete="name"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        {/* Email */}
                        <div className="mt-4">
                            <InputLabel className="font-bold" forInput="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full mt-1"
                                autoComplete="username"
                                handleChange={onHandleChange}
                                required
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        {/* Password */}
                        <div className="mt-4">
                            <InputLabel forInput="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full mt-1"
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                                required
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        {/* Password Confirmation */}
                        <div className="mt-4">
                            <InputLabel forInput="password_confirmation" value="Confirm Password" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="block w-full mt-1"
                                handleChange={onHandleChange}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        {/* User is Admin */}
                        <div className="flex justify-between mt-4">
                            <InputLabel className="float-left font-bold text-gray-500">Administrator<InformationCircleIcon className="float-right w-5 h-5 ml-1 text-gray-300 cursor-pointer stroke-2 hover:stroke-1" onClick={(e) => {adminInfo()}} /></InputLabel>
                            <Toggle
                                checked={isAdmin}
                                className="flex align-right"
                                onChange={(e) => confirmMakingUserAdmin(e.target.value)}
                            />
                        </div>
                        <InputError message={errors.isAdmin} className="mt-2" />

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton className="ml-4" processing={processing}>
                                Create User
                            </PrimaryButton>
                            <SecondaryButton
                                onClick={(e) => {closeModal()}}
                                className="ml-2"
                            >
                                Close
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
