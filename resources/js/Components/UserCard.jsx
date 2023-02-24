import { UserCircleIcon } from "./Icons/UserCircleIcon";

export default function UserCard({ user }) {
    return (
        <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
            <div className="p-2 bg-white shadow sm:p-8 sm:rounded-lg">
                <div className="flex inline-block p-0 m-0 d-flex">
                    <UserCircleIcon className="flex justify-center w-12 h-auto mr-2 text-gray-500 place-items-center dark:text-gray-400"/>
                    <h4 className="flex justify-center mt-2 text-2xl font-bold text-gray-500">{user.name}</h4>
                    <div className="grid grid-cols-2 gap-2 px-2 pl-6 pr-12 bg-white max-w-1/2">
                        <div className="w-full h-full max-h-full rounded-md">Last Log In</div>
                        <div className="w-full h-full max-h-full rounded-md">User Role</div>
                        <div className="w-full h-full max-h-full rounded-md">Last Log In</div>
                        <div className="w-full h-full max-h-full rounded-md">User Role</div>
                    </div>
                </div>
            </div>
        </div>
    );
}