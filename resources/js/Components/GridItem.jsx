import { Link } from '@inertiajs/react';
import { DocumentPlusIcon } from './Icons/DocumentPlusIcon';
import { PaperAirplaneIcon } from './Icons/PaperAirPlaneIcon';
import { LogoutIcon } from './Icons/LogoutIcon';
import { TableCellsIcon } from './Icons/TableCellsIcon';
import { GlobeAmericasIcon } from './Icons/GlobeAmericasIcon';
import { CogIcon } from './Icons/CogIcon';
import { ChartBarIcon } from './Icons/ChartBarIcon';
import { UserCircleIcon } from './Icons/UserCircleIcon';
import { CommandLineIcon } from './Icons/CommandLineIcon';

export default function GridItem({ title, blurb, href, as = 'button', method, icon, className }) {
    const getIcon = (icon) => {
        switch(icon) {
            case 'document':
                return <DocumentPlusIcon />
            case 'plane':
                return <PaperAirplaneIcon />
            case 'logout':
                return <LogoutIcon />
            case 'project':
                return <GlobeAmericasIcon />
            case 'settings':
                return <CogIcon />
            case 'history':
                return <TableCellsIcon />
            case 'reports':
                return <ChartBarIcon />
            case 'user':
                return <UserCircleIcon />
            case 'admin':
                return <CommandLineIcon />
            default:
                return (
                    <svg className="flex justify-center w-12 h-12 mb-2 text-gray-500 place-items-center dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                );
        }
    };
    return (
        <Link className="" href={href} as={as} method={method}>
            <div className={`w-full h-full rounded-md max-h-25 ` + className}>
                <div className="h-full max-w-sm p-6 bg-white rounded-lg shadow dark:bg-gray-800">
                    <div className='flex justify-center w-full'>
                        {getIcon(icon)}
                    </div>
                    <a href={href}>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{blurb}</p>
                </div>
            </div>
        </Link>
    );
}