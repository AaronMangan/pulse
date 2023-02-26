import { UserCircleIcon } from "./Icons/UserCircleIcon";
import SmallText from "./SmallText";
import Dropdown from "./Dropdown";

export default function UserCard({ user }) {
    return (
        <div className="p-2 mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
            <div className="p-2 bg-white shadow sm:p-8 sm:rounded-lg">
                <div className="flex inline-block p-0 m-0 d-flex">
                    {/* Icon & Heading */}
                    <div className="inline-flex w-1/4">
                        <UserCircleIcon className="flex justify-center w-12 h-auto text-gray-500 place-items-center dark:text-gray-400"/>
                        <h4 className="flex items-center justify-center ml-2 text-2xl font-bold text-gray-500">{user.name}</h4>
                    </div>

                    {/* User Details */}
                    <div className="grid w-3/4 w-full grid-cols-2 gap-2 px-2 pl-6 pr-12 bg-white">
                        <div className="w-full">
                            <SmallText value="Email: " className="font-bold"/>
                            <SmallText value={user.email} className="font-thin"/>
                        </div>
                        <div className="w-full">
                            <SmallText value="Last Login: " className="font-bold"/>
                            <SmallText value={new Date(user.created_at).toLocaleDateString("en-AU")} className="font-thin"/>
                        </div>
                        <div className="w-full">
                            <SmallText value="User Level: " className="font-bold"/>
                            <SmallText value={user.isAdmin ? 'Admin' : 'User'} className="font-thin"/>
                        </div>
                        <div className="w-full">
                            <SmallText value="Verified: " className="font-bold"/>
                            <SmallText value='Yes' className="font-thin"/>
                        </div>
                    </div>

                    {/* Dropdown */}
                    <div className="float-right w-1/4 h-4 mt-2">
                        <Dropdown className="float-right">
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
                                {/* <Dropdown.Link onClick={(e) => {showViewProjectModal(e, project)}}>View</Dropdown.Link> */}
                                <a
                                    // onClick={() => {showEditProjectModal(project)}}
                                    className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                >
                                    Edit User
                                </a>
                                {/* <Dropdown.Link href={route('projects.archive', project)}  method="post" as="button">
                                    {
                                        project.status == 'active' ? 'Archive' : 'Restore'
                                    }
                                </Dropdown.Link> */}
                                <a
                                    // onClick={() => {deleteProject(project)}}
                                    className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                >
                                    Disable User
                                </a>
                                <Dropdown.Link href={route('admin.user.login', user)}  method="post" as="button">
                                    Login As User
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>

            {/* Create / Edit User Modal */}
        </div>
    );
}