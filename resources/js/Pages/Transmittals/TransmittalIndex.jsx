import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GridBox from '@/Components/GridBox';
import GridItem from '@/Components/GridItem';

import { Head } from '@inertiajs/react';

export default function TransmittalIndex(props) {
    const getChildren = () => {
        return (
            <div className="grid grid-cols-1 gap-4 px-2 pr-12 bg-gray-100 max-w-screen md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {/* Incoming Transmittals */}
                <GridItem
                    title="Incoming"
                    blurb="View transmittals you have received"
                    href="{route('incoming-transmittals')}"
                    icon="document"
                    className="invisible hidden md:visible md:block"
                />

                {/* Outgoing Transmittals */}
                <GridItem
                    title="Outgoing"
                    blurb="View, Create & Send Documents"
                    href="#"
                    icon='plane'
                    className="invisible hidden md:visible md:block"
                />

                {/* Transmittal Settings */}
                <GridItem
                    title="Transmittal Settings"
                    blurb="Edit your current transmittal settings"
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
