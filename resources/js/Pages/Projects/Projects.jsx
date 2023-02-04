import { Link, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';
import { useRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import FloatButton from '@/Components/FloatButton';
import "react-datepicker/dist/react-datepicker.css";
import TextArea from '@/Components/TextArea';

export default function Projects(props) {
    const [createNewProject, setCreateNewProject] = useState(false);
    const nameInput = useRef();
    const [startDate, setStartDate] = useState(new Date());
    const {
        data,
        setData,
        processing,
        reset,
        post,
        errors,
    } = useForm({
        name: '',
        description: '',
        project_code: '',
        project_start: startDate,
    });

    const showNewProjectModal = () => {
        setCreateNewProject(true);
    };

    const createProject = (e) => {
        e.preventDefault();

        post(route('projects.create'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => nameInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setCreateNewProject(false);

        reset();
    };

    return (
        <>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Projects" />
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
                <FloatButton 
                    action={showNewProjectModal}
                />
                <Modal show={createNewProject} onClose={closeModal}>
                    <span className="float-right mx-4 mt-2 text-xl cursor-pointer text-grey-100 hover:text-sky-700" onClick={closeModal}>&times;</span>
                    <form onSubmit={createProject} className="w-full p-4 max-w-7xl">
                        <h2 className="text-lg font-medium font-bold text-gray-900">Create New Project</h2>

                        <div className="w-full p-0 mt-6">
                            {/* Project Name */}
                            <InputLabel className="font-bold" for="name" value="Project Name" />

                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                ref={nameInput}
                                value={data.name}
                                handleChange={(e) => setData('name', e.target.value)}
                                className="block w-full mt-1"
                                isFocused
                                placeholder="QLD BR-1 Pipeline"
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        {/* Project Code */}
                        <div className="w-full p-0 mt-6">
                            <InputLabel className="font-bold" for="project_code" value="Project Code" />

                            <TextInput
                                id="project_code"
                                type="text"
                                name="project_code"
                                value={data.project_code}
                                handleChange={(e) => setData('project_code', e.target.value)}
                                className="block w-full mt-1"
                                placeholder="QBR1"
                            />

                            <InputError message={errors.project_code} className="mt-2" />
                            <small className='italic text-gray-400'>This will become a placeholder for Document Numbering</small>
                        </div>

                        {/* Project Start */}
                        <div class="grid grid-flow-col auto-cols-max justify-between pt-4">
                            <div>
                                <InputLabel className="ml-2 font-bold flex-nowrap" for="project_code" value="Start Date" />
                                <ReactDatePicker
                                    closeOnScroll={(e) => e.target === document}
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    value={data.project_start}
                                    name="project_start"
                                    id="project_start"
                                    dateFormat='d/M/Y'
                                    placeholder="Select start date"
                                />
                                <InputError message={errors.project_start} className="mt-2" />
                            </div>
                        </div>

                        <div className="w-full p-0 mt-6">
                            <InputLabel className="mb-1 font-bold" for="description" value="Project Description" />
                            <TextArea 
                                name="description"
                                id="description"
                                value={data.description}
                                className="block p-2.5 w-full mt-1 text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                autoComplete
                                handleChange={(e) => setData('description', e.target.value)}
                                rows="6"
                                placeholder="Describe the new project..."
                            />
                            <InputError message={errors.description} className="mt-2" />
                        </div>

                        <div className="flex float-right mt-6 mb-4">
                            <PrimaryButton className="mr-3" processing={processing}>Create Project</PrimaryButton>
                            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                        </div>
                    </form>
                </Modal>
            </div>
        </AuthenticatedLayout>
        </>
    );
}
