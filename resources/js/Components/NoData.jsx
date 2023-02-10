import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function NoData({ title, blurb }) {
    return (
        <div>
            <div className="container flex items-center justify-center max-w-screen-lg mx-auto">
                <InformationCircleIcon className="h-24 text-gray-300 stroke-2 hover:stroke-1" />
            </div>
            <h2 className='text-3xl font-bold text-center text-gray-300'>
                {title}
                <br /><small className="text-xs text-center text-gray-300">{blurb}</small>
            </h2>
        </div>
    );
}
