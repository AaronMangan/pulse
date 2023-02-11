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
import Dropdown from '@/Components/Dropdown';
import Toggle from 'react-toggle';
import SmallText from '@/Components/SmallText';

export default function Projects(props) {
    const [createNewProject, setCreateNewProject] = useState(false);
    const [editSettings, setSettings] = useState(false);
    const nameInput = useRef();
    const [startDate, setStartDate] = useState(new Date());
    const [selectedProject, setSelectedProject] = useState([]);
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
        code: '',
        start: startDate,
    });

    const {projectSettings} = useForm({
        manualNumbering: false,
        enforceUploads: false,
    });

    const showSettingsModal = (project) => {
        setSettings(true);
        setSelectedProject(project);
    };

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

    const updateProjectSettings = (e) => {
        e.preventDefault();

        // post(route('projects.create'), {
        //     preserveScroll: true,
        //     onSuccess: () => closeModal(),
        //     onError: () => nameInput.current.focus(),
        //     onFinish: () => reset(),
        // });
    };

    const closeModal = () => {
        setCreateNewProject(false);

        reset();
    };
    const closeSettingsModal = () => {
        setSettings(false);

        reset();
    };

    return (
        <>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            flash={props.flash}
        >
            <Head title="Projects" />
            <div className="w-full py-12 pl-24 pr-24">
                <div className="inline-block min-w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <table className="min-w-full rounded-md">
                        <thead className="bg-gray-600 border-b">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Id</th>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Name</th>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Code</th>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Start Date</th>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">End Date</th>
                                <th scope="col" className="px-6 py-4 text-sm text-white font-large">Actions</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {props.projects.map(project => (
                                <tr key={project.id} className={project.status == 'active' ? 'bg-white border-b' : 'bg-gray-200 border-b'}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{project.id}</td>
                                    <td className="px-6 py-4 text-sm font-light font-bold text-gray-900 whitespace-nowrap">{project.name}</td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{project.code}</td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{project.start}</td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{project.end}</td>
                                    <td className="px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:text-sky-200 focus:outline-none"
                                                    >Actions
                                                        <svg
                                                            className="ml-2 -mr-0.5 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            {/* Use href={route('project.edit')} when the routes have been added. */}
                                            <Dropdown.Content>
                                                <Dropdown.Link href="">View</Dropdown.Link>
                                                <Dropdown.Link href="">Edit</Dropdown.Link>
                                                <Dropdown.Link href={route('projects.archive', project)}  method="post" as="button">
                                                    {
                                                        project.status == 'active' ? 'Archive' : 'Restore'
                                                    }
                                                </Dropdown.Link>
                                                <a
                                                    onClick={() => {showSettingsModal(project)}}
                                                    className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                >
                                                    Settings
                                                </a>
                                                <Dropdown.Link href="" method="post" as="button">
                                                    Delete
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <FloatButton 
                    action={showNewProjectModal}
                />
                {/* Create Project Modal */}
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
                            <InputLabel className="font-bold" for="code" value="Project Code" />

                            <TextInput
                                id="code"
                                type="text"
                                name="code"
                                value={data.code}
                                handleChange={(e) => setData('code', e.target.value)}
                                className="block w-full mt-1"
                                placeholder="QBR1"
                            />

                            <InputError message={errors.code} className="mt-2" />
                            <small className='italic text-gray-400'>This will become a placeholder for Document Numbering</small>
                        </div>

                        {/* Project Start */}
                        <div class="grid grid-flow-col auto-cols-max justify-between pt-4">
                            <div>
                                <InputLabel className="ml-2 font-bold flex-nowrap" for="start" value="Start Date" />
                                <ReactDatePicker
                                    closeOnScroll={(e) => e.target === document}
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    value={data.start}
                                    name="start"
                                    id="start"
                                    dateFormat='d/M/Y'
                                    placeholder="Select start date"
                                    className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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

                {/* Project Settings Modal */}
                <Modal id="settingsModal" show={editSettings} onClose={closeSettingsModal}>
                    <span className="float-right mx-4 mt-2 text-2xl font-bold text-gray-300 cursor-pointer hover:text-sky-700" onClick={closeSettingsModal}>&times;</span>
                    <form onSubmit={updateProjectSettings} className="p-6">
                        <h2 className="text-lg font-medium font-bold text-gray-900">Edit Project Settings</h2>
                        <SmallText 
                            value={"Project: " + selectedProject.name}
                            id="labelForModal"
                        />
                        <hr className="mt-2 text-gray-300"></hr>

                        <div className="flex justify-between mt-6">
                            <InputLabel className="float-left font-bold">Manual Document Numbering:</InputLabel>
                            <Toggle
                                defaultChecked={false}
                                className="flex align-right"
                                onChange={(e) => setData('manualNumbering', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        
                        <div className="flex justify-between mt-6">
                            <InputLabel className="float-left font-bold">Enforce Uploads</InputLabel>
                            <Toggle
                                defaultChecked={false}
                                className="flex align-right"
                                onChange={(e) => setData('enforceUploads', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="flex justify-end mt-6">
                            <PrimaryButton className="mr-3" processing={processing}>
                                Update Settings
                            </PrimaryButton>
                            <SecondaryButton onClick={closeSettingsModal}>Cancel</SecondaryButton>
                        </div>
                    </form>
                </Modal>
            </div>
        </AuthenticatedLayout>
        </>
    );
}
