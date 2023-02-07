import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Revisions from './Revisions';
import Statuses from './Statuses';

export default function Settings(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            // header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        {/* Element Here */}
                        <Revisions revisions={props.revisions}/>
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        {/* Element Here */}
                        <Statuses statuses={props.statuses}/>
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        {/* Element Here */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}