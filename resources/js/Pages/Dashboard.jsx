import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavBar from '@/Layouts/NavBar';
import GridBox from '@/Components/GridBox';
import GridItem from '@/Components/GridItem';

import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    const getChildren = () => {
        return (
            <div className="grid w-full grid-cols-1 gap-4 bg-gray-100 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
            </div>
        );
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        // header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-gray-100 sm:rounded-lg">
                        <GridBox children={getChildren()} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
