import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Revisions from './Revisions';
import Statuses from './Statuses';
import Discipline from './Discipline';
import Type from './Type';

export default function Settings(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            flash={props.flash}
            // header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Profile</h2>}
        >
            <Head title="Settings" />
            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        {/* Element Here */}
                        <Type types={props.types}/>
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        {/* Element Here */}
                        <Discipline disciplines={props.disciplines}/>
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        {/* Element Here */}
                        <Revisions revisions={props.revisions}/>
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        {/* Element Here */}
                        <Statuses statuses={props.statuses}/>
                    </div>
                    {/* This will be moved to the History page later. */}
                    {/* 
                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <History history={props.history}/>
                    </div> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}