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

export default function Admin(props) {
    const hasData = props.users.length ? true : false;
    const [createNewUser, setCreateNewUser] = useState(false);

    // Create a new User.
    const createUser = () => {

    };

    // Close the modal.
    const closeModal = () => {
        setCreateNewUser(false);
        reset();
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
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

            <Modal show={createNewUser} onClose={closeModal}>
                <span className="float-right mx-4 mt-2 text-xl cursor-pointer text-grey-100 hover:text-sky-700" onClick={closeModal}>&times;</span>
                <div className='p-4'>
                    <div className='pb-4'>
                        <h2 className="text-lg font-medium font-bold text-gray-900">Create New User</h2>
                        <SmallText
                            value='Create a new Pulse user. The new user will need to confirm their account before logging in'
                        />
                    </div>
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel forInput="name" value="Name" />

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

                        <div className="mt-4">
                            <InputLabel forInput="email" value="Email" />

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

                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route('login')}
                                className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton className="ml-4" processing={processing}>
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
