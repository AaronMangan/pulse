import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NoData from '@/Components/NoData';
import { Head, Link, useForm } from '@inertiajs/react';
import { useRef, useState, useEffect } from 'react';
import FloatButton from '@/Components/FloatButton';
import DocumentCard from '@/Components/DocumentCard';
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SmallText from '@/Components/SmallText';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import Select from 'react-select';
import TextArea from '@/Components/TextArea';
import Swal from 'sweetalert2';

export default function IncomingTransmittals(props) {
    const hasData = (props.transmittals.length > 0) ? true : false;
    const [createNewTransmittal, setCreateNewTransmittal] = useState(false);
    const [selectedTransmittal, setSelectedTransmittal] = useState(false);
    const [showCreateTransmittal, setShowCreateTransmittal] = useState(false);
    const [readOnlyNumber, setReadOnlyNumber] = useState(true);
    const [noProjectSelected, setNoProjectSelected] = useState(true);

    // useEffect(()=>{
    //     setNoProjectSelected(true);
    // }, []);

    /**
     * Callback used to edit an existing document.
     * @param {Object} document
     */
    const selectedTransmittalCallback = (document) => {
        setSelectedTransmittal(document);
        setReadOnlyNumber(true);
        setShowCreateTransmittal(false);
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        number: '',
        title: '',
        type: '',
        discipline_id: '',
        revision_id: '',
        status_id: '',
        project_id: '',
        description: '',
    });

    // Create a document.
    const createTransmittal = (e) => {
        e.preventDefault();

        post(route('documents.create', data), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            // onError: () => title.current.focus(),
            onFinish: () => reset(),
        });
    };

    /**
     * Translates a property name.
     * @param {String} value
     * @returns
     */
    const translate = (value) => {
        let items = {
            projects: 'project_id',
            types: 'type_id',
            disciplines: 'discipline_id',
            statuses: 'status_id',
            revisions: 'revision_id',
        };
        return items[value] ? items[value] : null;
    };

    /**
     * Returns the data for that object
     * @param {Object} type
     * @returns
     */
    const getMetaData = (type) => {
        let options = [];
        props[type].map(item => (
            options.push({
                value: item.id,
                label: (item.name) ? item.name : item.code,
                key: translate(type),
                code: item.code ? item.code : ''
            })
        ));
        return options;
    };

    /**
     * When an input is changed, update the values.
     * @param {*} event
     */
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    /**
     * When a dropdown is changed.
     * @param {object} event
     */
    const onSelectChange = (event) => {
        if(event.key === 'project_id' && event.value != null) {
            setNoProjectSelected(false);
        }
        setData(event.key, event.value);
        // setData('number', hydrateTransmittalNumber());
    };

    /**
     * Close the modal.
     */
    const closeModal = () => {
        setShowCreateTransmittal(false);
        reset();
    };

    /**
     * Return the page.
     */
    return (
        <AuthenticatedLayout
            auth={props.auth}
            flash={props.flash}>
            <Head title="Transmittals" />
            <div className="w-full h-screen py-6 bg-gray-100 rounded-md">
                {
                    hasData ? (
                        <>
                            <p className="text-center text-gray-400">[Table Here]</p>
                        </>
                    ) : (
                        <NoData value="No Data" />
                    )
                }
            </div>

            {/* Create / Edit Transmittal Modal */}
            {/* <Modal className='py-4' show={showCreateTransmittal}>
                <span className="float-right mx-4 mt-2 text-xl cursor-pointer text-grey-100 hover:text-sky-700" onClick={() => {setShowCreateTransmittal(false)}}>&times;</span>
                <div className='p-6'>
                    <div className='mb-2'>
                        <h2 className="text-lg font-medium font-bold text-gray-900">Create New Transmittal</h2>
                        <SmallText
                            value='Fill out the form to add a new document to the project.'
                            className='mb-2'
                        />
                        <hr className='mt-2 mb-2' />
                    </div>

                    <form onSubmit={createTransmittal}>
                        <div>
                            <InputLabel className="font-bold" forInput="number" value="Project" />
                            <Select
                                className='mt-2 border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500'
                                options={getMetaData('projects')}
                                onChange={(e) => {onSelectChange(e)}}
                                id='project'
                                name='project'
                                selectOption={data.projects}
                                isMulti={false}
                                required
                            />
                            { noProjectSelected ?
                                <label class="text-xs text-red-500">A project must be selected first</label> : ''
                            }
                        </div>
                        <div>
                            <InputLabel className="mt-4 font-bold" forInput="number" value="Transmittal Number" />
                            <TextInput
                                id="number"
                                name="number"
                                value={data.number}
                                className={`block w-full mt-2`}
                                autoComplete="number"
                                isFocused={true}
                                handleChange={onHandleChange}
                                // readOnly={readOnlyNumber}
                                disabled={noProjectSelected}
                            />
                            <InputError message={errors.number} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel className="mt-2 font-bold" forInput="title" value="Title" />
                            <TextInput
                                id="title"
                                name="title"
                                value={data.title}
                                className="block w-full mt-2"
                                handleChange={onHandleChange}
                                placeholder='Transmittal Title'
                                disabled={noProjectSelected ? 'disabled' : ''}
                            />
                            <InputError message={errors.number} className="mt-2" />
                        </div>
                        <div className='mt-4'>
                            <InputLabel className="font-bold" forInput="number" value="Type" />
                            <Select
                                className='mt-2 border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500'
                                options={getMetaData('types')}
                                onChange={(e) => {onSelectChange(e)}}
                                id='types'
                                name='types'
                                selectOption={data.type}
                                isMulti={false}
                                required
                                isDisabled={noProjectSelected}
                            />
                        </div>
                        <div className='mt-4'>
                            <InputLabel className="font-bold" forInput="number" value="Discipline" />
                            <Select
                                className='mt-2 border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500'
                                options={getMetaData('disciplines')}
                                onChange={(e) => {onSelectChange(e)}}
                                id='disciplines'
                                name='disciplines'
                                selectOption={data.discipline_id}
                                isMulti={false}
                                required
                                isDisabled={noProjectSelected}
                            />
                        </div>
                        <div className='grid w-full grid-cols-2 gap-2 mt-4'>
                            <div className='col'>
                                <InputLabel className="font-bold" forInput="number" value="Revision" />
                                <Select
                                    className='mt-2 border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500'
                                    options={getMetaData('revisions')}
                                    onChange={(e) => {onSelectChange(e)}}
                                    id='revisions'
                                    name='revisions'
                                    selectOption={data.revision_id}
                                    isMulti={false}
                                    required
                                    isDisabled={noProjectSelected}
                                />
                            </div>
                            <div className='col'>
                                <InputLabel className="font-bold" forInput="status" value="Status" />
                                <Select
                                    className='mt-2 border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500'
                                    options={getMetaData('statuses')}
                                    isMulti={false}
                                    name='statuses'
                                    id='statuses'
                                    selectOption={data.status_id}
                                    onChange={(e) => {onSelectChange(e)}}
                                    required
                                    isDisabled={noProjectSelected}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <InputLabel className='font-bold' forInput="description" value="Description"/>
                            <TextArea
                                className="w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500"
                                value={data.description}
                                id='description'
                                name='description'
                                handleChange={onHandleChange}
                                disabled={noProjectSelected}
                            />
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton className="ml-4" processing={processing} disabled={noProjectSelected}>
                                Save
                            </PrimaryButton>
                            <SecondaryButton
                                onClick={(e) => {closeModal()}}
                                className="ml-2"
                            >
                                Close
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
            </Modal> */}

            {/* Create a User Button */}
            <FloatButton
                action={() => {setShowCreateTransmittal(true)}}
            />
        </AuthenticatedLayout>
    );
}