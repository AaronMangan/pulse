import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Revisions from './Revisions';
import Statuses from './Statuses';
import Discipline from './Discipline';
import Type from './Type';
import NoData from '@/Components/NoData';

export default function Settings(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            flash={props.flash}
            // header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Profile</h2>}
        >
            <Head title="Settings" />
            <div className="py-12">
                <div className="visible lg:invisible lg:hidden">
                    <NoData
                        title="Not Allowed"
                        blurb="Unable to view this page on this device"
                    />
                </div>
                <div className="invisible mx-auto space-y-6 sm:hidden lg:grid lg:visible max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        {/* Show Types */}
                        <Type types={props.types}/>
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        {/* Show Disciplines */}
                        <Discipline
                            disciplines={props.disciplines}
                        />
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        {/* Show Statuses */}
                        <Statuses statuses={props.statuses}/>
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        {/* Show Revisions */}
                        <Revisions revisions={props.revisions}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}