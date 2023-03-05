import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NoData from '@/Components/NoData';
import { Head, Link, useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import FloatButton from '@/Components/FloatButton';

export default function Documents(props) {
    const hasData = props.documents.length ? true : false;
    const [createNewDocument, setCreateNewDocument] = useState(false);

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
                                <h2 className="font-bold">{document.number}</h2>
                            ))}
                        </>
                    ) : (
                        <NoData value="No Data" />
                    )
                }
            </div>

            {/* Create a User Button */}
            <FloatButton
                action={() => {setCreateNewUser(true)}}
            />
        </AuthenticatedLayout>
    );
}
