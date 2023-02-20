import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GridBox from '@/Components/GridBox';
import GridItem from '@/Components/GridItem';

import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    const getChildren = () => {
        return (
            // <div className="relative flex min-h-screen py-2 bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0 ">
                    <div className="grid grid-cols-1 gap-4 px-2 pr-12 bg-gray-100 max-w-screen md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        <GridItem 
                            title="Documents"
                            blurb="Manage your documents and find exactly what you need"
                            href="#"
                            icon="document"
                            className=""
                        />
                        <GridItem 
                            title="Transmittals"
                            blurb="Send and receive documents to other parties"
                            href="#"
                            icon='plane'
                        />
                        <GridItem 
                            title="Projects"
                            blurb="Manage your projects"
                            href="projects"
                            icon="project"
                        />
                        <GridItem 
                            title="History"
                            blurb="Review the history of your documents and more"
                            href="history"
                            icon="history"
                        />
                        <GridItem 
                            title="Reports"
                            blurb="Discover how you use your documents"
                            href="#"
                            icon="reports"
                        />
                        <GridItem 
                            title="Settings"
                            blurb="Modify your settings"
                            href="settings"
                            icon="settings"
                        />
                        <GridItem 
                            title="Profile"
                            blurb="Manage and update your user profile"
                            href="profile"
                            icon="user"
                        />
                        <GridItem 
                            title="Logout"
                            blurb="Logout of Pulse"
                            href={route('logout')}
                            as="button"
                            method="post"
                            icon="logout"
                        />
                    </div>
            // </div>
        );
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            flash={props.flash}
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
