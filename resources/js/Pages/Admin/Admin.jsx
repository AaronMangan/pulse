import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NoData from '@/Components/NoData';
import UserCard from '@/Components/UserCard';
export default function Admin(props) {
    const hasData = props.users.length ? true : false;
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            // header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Profile</h2>}
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
                        <small>Testing - has no data</small>
                    )
                }
                {/* <UserCard user={props.users[0]}/> */}
            </div>
        </AuthenticatedLayout>
    );
}
