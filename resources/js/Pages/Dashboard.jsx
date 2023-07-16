import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GridBox from '@/Components/GridBox';
import GridItem from '@/Components/GridItem';

import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    const getChildren = () => {
        return (
            <div className="grid grid-cols-1 gap-4 px-2 pr-12 bg-gray-100 max-w-screen md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                <GridItem
                    title="Documents"
                    blurb="Manage your documents"
                    href="documents"
                    icon="document"
                    className="invisible hidden md:visible md:block"
                />
                <GridItem
                    title="Transmittals"
                    blurb="Send and receive documents to other parties"
                    href="transmittals"
                    icon='plane'
                    className="invisible hidden md:visible md:block"
                />
                <GridItem
                    title="Projects"
                    blurb="Manage your projects"
                    href="projects"
                    icon="project"
                    className="invisible hidden md:visible md:block"
                />
                <GridItem
                    title="History"
                    blurb="Review the history of your documents and more"
                    href="history"
                    icon="history"
                    className="invisible hidden md:visible md:block"
                />
                <GridItem
                    title="Reports"
                    blurb="Discover how you use your documents"
                    href="#"
                    icon="reports"
                    className="invisible hidden md:visible md:block"
                />
                <GridItem
                    title="Settings"
                    blurb="Modify your settings"
                    href="settings"
                    icon="settings"
                    className="invisible hidden md:visible md:block"
                />
                <GridItem
                    title="Profile"
                    blurb="Manage and update your user profile"
                    href="profile"
                    icon="user"
                />
                <GridItem
                    title="Admin"
                    blurb="Perform Administration Tasks like creating Users"
                    href={route('admin.index')}
                    as="button"
                    method="get"
                    icon="admin"
                />
            </div>
        );
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            flash={props.flash}
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
