import { Link, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Projects(props) {
    
    return (
        <>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Welcome" />
            <div className="items-center w-full py-12 pl-24 pr-24">
                <div className="items-center inline-block min-w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="items-center px-12 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="overflow-hidden rounded-md">
                            <table className="min-w-full text-center">
                                <thead className="bg-gray-600 border-b">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-sm text-white font-large">Id</th>
                                        <th scope="col" className="px-6 py-4 text-sm text-white font-large">Name</th>
                                        <th scope="col" className="px-6 py-4 text-sm text-white font-large">Code</th>
                                        <th scope="col" className="px-6 py-4 text-sm text-white font-large">Start Date</th>
                                        <th scope="col" className="px-6 py-4 text-sm text-white font-large">End Date</th>
                                        <th scope="col" className="px-6 py-4 text-sm text-white font-large">Description</th> 
                                        <th scope="col" className="px-6 py-4 text-sm text-white font-large">Actions</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.projects.map(project => (
                                        <tr key={project.id} className={project.status == 'active' ? 'bg-white border-b' : 'bg-gray-200 border-b'}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{project.id}</td>
                                            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                                {project.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                                {project.project_code}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                                {project.project_start}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                                {project.project_end}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                                {project.description}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                                <PrimaryButton>Actions</PrimaryButton>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
        </>
    );
}
