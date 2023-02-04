import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GridBox from '@/Components/GridBox';
import GridItem from '@/Components/GridItem';

import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    const getChildren = () => {
        return (
            <div className="grid grid-cols-1 gap-4 bg-gray-100 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                <GridItem 
                    title="Transmittals"
                    blurb="Send and receive documents to other parties"
                    href="#"
                />
                <GridItem 
                    title="Documents"
                    blurb="Manage your documents and find exactly what you need"
                    href="#"
                />
                <GridItem 
                    title="History"
                    blurb="Review the history of your documents and more"
                    href="#"
                />
                <GridItem 
                    title="Reports"
                    blurb="Generate reports to help discover how you use your documents"
                    href="#"
                />
                <GridItem 
                    title="Settings"
                    blurb="Modify your settings to get them just the way you need them"
                    href="#"
                />
                <GridItem 
                    title="Logout"
                    blurb="Logout of Pulse"
                    href={route('logout')}
                    as="button"
                    method="post"
                />
            </div>
        );
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            // header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}
            // footer={<small className="text-xs text-gray-500">Small Writing</small>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="pl-12 bg-gray-100 sm:rounded-lg">
                        <GridBox children={getChildren()} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
