import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NoData from '@/Components/NoData';
import { Head, Link, useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
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

export default function Documents(props) {
    const hasData = props.documents.length ? true : false;

    const [createNewDocument, setCreateNewDocument] = useState(false);
    const [selectedDocument, setSelectedDocument] = useState(false);
    const [showCreateDocument, setShowCreateDocument] = useState(false);

    const selectedDocumentCallback = (document) => {
        setSelectedDocument(document);
        setShowCreateDocument(false);
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        number: '',
        title: '',

    });

    const getMetaData = (type) => {
        let options = [];
        props[type].map(item => (
            options.push({
                value: item.id,
                label: (item.name) ? item.name : item.code,
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

    return (
        <AuthenticatedLayout
            auth={props.auth}
            flash={props.flash}>
            <Head title="Documents" />
            <div className="w-full h-screen py-6 bg-gray-200 rounded-md">
                {
                    hasData ? (
                        <>
                            {props.documents.map(document => (
                                <DocumentCard key={document.id} document={document} callback={selectedDocumentCallback}/>
                            ))}
                        </>
                    ) : (
                        <NoData value="No Data" />
                    )
                }
            </div>

            <Modal className='py-4' show={showCreateDocument}>
                <span className="float-right mx-4 mt-2 text-xl cursor-pointer text-grey-100 hover:text-sky-700" onClick={() => {setShowCreateDocument(false)}}>&times;</span>
                <div className='p-6'>
                    <div className='mb-2'>
                        <h2 className="text-lg font-medium font-bold text-gray-900">Create New Document</h2>
                        <SmallText
                            value='Fill out the form to add a new document to the project.'
                            className='mb-2'
                        />
                        <hr className='mt-2 mb-2' />
                    </div>
                    <form>
                        {/* Document Number */}
                        <div>
                            <InputLabel className="font-bold" forInput="number" value="Document Number" />
                            <TextInput
                                id="number"
                                name="number"
                                value={data.number}
                                className="block w-full mt-2"
                                autoComplete="number"
                                isFocused={true}
                                handleChange={onHandleChange}
                                readOnly={true}
                            />
                            <InputError message={errors.number} className="mt-2" />
                        </div>

                        {/* Document Title */}
                        <div>
                            <InputLabel className="mt-2 font-bold" forInput="title" value="Title" />
                            <TextInput
                                id="title"
                                name="title"
                                value={data.title}
                                className="block w-full mt-2"
                                handleChange={onHandleChange}
                                placeholder='Document Title'
                            />
                            <InputError message={errors.number} className="mt-2" />
                        </div>

                        {/* Document Type */}
                        <div className='mt-4'>
                            <InputLabel className="font-bold" forInput="number" value="Type" />
                            <Select
                                className='mt-2 border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500'
                                options={getMetaData('types')}
                                isMulti={false}
                                required
                            />
                        </div>

                        {/* Document Discipline */}
                        <div className='mt-4'>
                            <InputLabel className="font-bold" forInput="number" value="Discipline" />
                            <Select
                                className='mt-2 border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500'
                                options={getMetaData('disciplines')}
                                isMulti={false}
                                required
                            />
                        </div>

                        {/* Revision & Status */}
                        <div className='grid w-full grid-cols-2 gap-2 mt-4'>
                            <div className='col'>
                                <InputLabel className="font-bold" forInput="number" value="Revision" />
                                <Select
                                    className='mt-2 border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500'
                                    options={getMetaData('revisions')}
                                    isMulti={false}
                                    required
                                />
                            </div>
                            <div className='col'>
                                <InputLabel className="font-bold" forInput="number" value="Status" />
                                <Select
                                    className='mt-2 border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500'
                                    options={getMetaData('statuses')}
                                    isMulti={false}
                                    required
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <InputLabel className='font-bold' forInput="description" value="Description"/>
                            <TextArea
                                className="w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500"
                                value={data.description}
                                id='description'
                                name='description'
                                handleChange={onHandleChange}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton className="ml-4" processing={processing}>
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
            </Modal>

            {/* Create a User Button */}
            <FloatButton
                action={() => {setShowCreateDocument(true)}}
            />
        </AuthenticatedLayout>
    );
}
