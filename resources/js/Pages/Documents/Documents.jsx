import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NoData from '@/Components/NoData';
import { Head, Link, useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import FloatButton from '@/Components/FloatButton';
import DocumentCard from '@/Components/DocumentCard';

export default function Documents(props) {
    console.log(props.documents);
    const hasData = props.documents.length ? true : false;
    const [createNewDocument, setCreateNewDocument] = useState(false);
    const [selectedDocument, setSelectedDocument] = useState(false);
    const selectedDocumentCallback = (document) => {
        setSelectedDocument(document);
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            flash={props.flash}
        >
            <Head title="Documents" />
            <div className="w-full py-6 rounded-md">
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

            {/* Create a User Button */}
            <FloatButton
                action={() => {setCreateNewDocument(true)}}
            />
        </AuthenticatedLayout>
    );
}
