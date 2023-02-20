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
import NoData from '@/Components/NoData';

export default function Projects(props) {
    const [createNewProject, setCreateNewProject] = useState(false);
    const [editSettings, setSettings] = useState(false);
    const nameInput = useRef();
    const [manualNumbering, setManualNumbering] = useState(false);
    const [enforceUploads, setEnforceUploads] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [selectedProject, setSelectedProject] = useState([]);
    const [projectSettings, setProjectSettings] = useState({
        manualNumbering: manualNumbering,
        enforceUploads: enforceUploads,
    })

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

    /**
     * Use Axios to get the settings for the project.
     */
    const fetchSettings = (id) => {
        axios.get(`http://localhost:8001/projects/${id}/settings`)
          .then(res => {
            setProjectSettings(res.data[0].settings);
        })
    }
    
    const showSettingsModal = (project) => {
        fetchSettings(project.id);
        setSelectedProject(project);
        setSettings(true);
    };

    const showNewProjectModal = () => {
        setCreateNewProject(true);
        setSelectedProject({});
    };

    const showEditProjectModal = (project) => {
        setCreateNewProject(true);
        setSelectedProject(project);
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

    // Delete the project.
    const deleteProject = (project) => {
        // e.preventDefault();
        let ok = confirm('Do you want to delete this project?');

        if(ok){
            post(route('projects.delete', project), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onError: () => nameInput.current.focus(),
                onFinish: () => reset(),
            });
        }
    };

    const updateProject = (e) => {
        e.preventDefault();
        post(route('projects.update', selectedProject.id));
    };

    const updateProjectSettings = (e) => {
        e.preventDefault();

        axios.post(route('projects.settings.save', selectedProject.id), {
            manualNumbering: projectSettings.manualNumbering,
            enforceUploads: projectSettings.enforceUploads,
        })
        .then((response) => {
            closeSettingsModal();
        })
        .catch((err) => console.log(err));
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
            <div className="w-full">
                <div className="visible lg:invisible lg:hidden">
                    <NoData
                        title="Not Allowed"
                        blurb="Unable to view this page on this device"
                    />
                </div>
                <div className="invisible inline-block min-w-full mx-auto lg:visible md:px-2 max-w-7xl sm:py-1 lg:px-8">
                    <table className="min-w-full rounded xs:table-fixed md:table-auto">
                        <thead className="bg-gray-600 border-b">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Id</th>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Name</th>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Code</th>
                                <th scope="col" className="px-6 py-4 text-sm text-left text-white font-large">Start Date</th>
                                <th scope="col" className="invisible px-6 py-4 text-sm text-left text-white lg:visible font-large">End Date</th>
                                <th scope="col" className="invisible px-6 py-4 text-sm text-left text-white lg:visible font-large">Actions</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {props.projects.map(project => (
                                <tr key={project.id} className={project.status == 'active' ? 'bg-white border-b' : 'bg-gray-200 border-b'}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{project.id}</td>
                                    <td className="px-6 py-4 text-sm font-light font-bold text-gray-900">{project.name}</td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900">{project.code}</td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900">{project.start}</td>
                                    <td className="invisible px-6 py-4 text-sm font-light text-gray-900 lg:visible">{project.end}</td>
                                    <td className="invisible px-6 py-4 text-sm font-light text-center text-gray-900 lg:visible">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="items-center hidden px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md md:inline-flex hover:text-sky-200 focus:outline-none"
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
                                                <a
                                                    onClick={() => {showEditProjectModal(project)}}
                                                    className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                >
                                                    Edit
                                                </a>
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
                                                <a
                                                    onClick={() => {deleteProject(project)}}
                                                    className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                >
                                                    Delete
                                                </a>
                                                {/* <Dropdown.Link href="" method="post" as="button">
                                                    Delete
                                                </Dropdown.Link> */}
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
                    <form onSubmit={selectedProject.id != null ? updateProject : createProject} className="w-full p-4 max-w-7xl">
                        {
                            selectedProject.id != null ? (
                                <h2 className="text-lg font-medium font-bold text-gray-900">Update Project</h2>
                            ) : (
                                <h2 className="text-lg font-medium font-bold text-gray-900">Create New Project</h2>
                            )
                        }

                        <div className="w-full p-0 mt-6">
                            {/* Project Name */}
                            <InputLabel className="font-bold" for="name" value="Project Name" />

                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                ref={nameInput}
                                value={selectedProject.name}
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
                                value={selectedProject.code}
                                handleChange={(e) => setData('code', e.target.value)}
                                className="block w-full mt-1"
                                placeholder="QBR1"
                            />

                            <InputError message={errors.code} className="mt-2" />
                            <small className='italic text-gray-400'>This will become a placeholder for Document Numbering</small>
                        </div>

                        {/* Project Start */}
                        <div className="grid justify-between grid-flow-col pt-4 auto-cols-max">
                            <div>
                                <InputLabel className="ml-2 font-bold flex-nowrap" for="start" value="Start Date" />
                                <ReactDatePicker
                                    closeOnScroll={(e) => e.target === document}
                                    selected={selectedProject.project_start ?? startDate}
                                    onChange={(date) => setStartDate(date)}
                                    value={selectedProject.project_start}
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
                                value={selectedProject.description}
                                className="block p-2.5 w-full mt-1 text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                autoComplete
                                handleChange={(e) => setData('description', e.target.value)}
                                rows="6"
                                placeholder="Describe the new project..."
                            />
                            <InputError message={errors.description} className="mt-2" />
                        </div>
                        {
                            selectedProject.id != null ? (
                                <div className="flex float-right mt-6 mb-4">
                                    <PrimaryButton className="mr-3" processing={processing}>Save</PrimaryButton>
                                    <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                                </div>
                            ) : (
                                <div className="flex float-right mt-6 mb-4">
                                    <PrimaryButton className="mr-3" processing={processing}>Create Project</PrimaryButton>
                                    <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                                </div>
                            )
                        }
                        
                    </form>
                </Modal>

                {/* Project Settings Modal */}
                <Modal id="settingsModal" show={editSettings} onClose={closeSettingsModal} maxWidth='xl'>
                    <span className="float-right mx-4 mt-2 text-2xl font-bold text-gray-300 cursor-pointer hover:text-sky-700" onClick={closeSettingsModal}>&times;</span>
                    <form onSubmit={updateProjectSettings} className="p-6">
                        <h2 className="text-lg font-medium font-bold text-gray-900">Edit Project Settings</h2>
                        <SmallText 
                            value={"Project: " + selectedProject.name}
                            id="labelForModal"
                        />
                        <hr className="mt-2 text-gray-300"></hr>

                        {/* Set Manual Numbering */}
                        <div className="flex justify-between mt-6">
                            <InputLabel className="float-left font-bold">Manual Document Numbering:</InputLabel>
                            <Toggle
                                id="manualNumbering"
                                name="manualNumbering"
                                defaultChecked={projectSettings.manualNumbering}
                                className="flex align-right"
                                onChange={(e) => setManualNumbering('manualNumbering', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className='mb-4 leading-3 md:mr-16'>
                            <small><SmallText
                                value="Allow users to enter document numbers manually when adding documents. Pulse will still verify that the document number is available."
                            /></small>
                        </div>
                        <hr className="text-gray-400"/>

                        {/* Set Enforced Uploads */}
                        <div className="flex justify-between mt-6">
                            <InputLabel className="float-left font-bold">Enforce Uploads</InputLabel>
                            <Toggle
                                defaultChecked={projectSettings.enforceUploads}
                                className="flex align-right"
                                onChange={(e) => setEnforceUploads('enforceUploads', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className='mb-4 mr-16 leading-3'>
                            <small><SmallText
                                value="Enforce uploading a file when creating a new document."
                            /></small>
                        </div>
                        <hr className="text-gray-400"/>

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
