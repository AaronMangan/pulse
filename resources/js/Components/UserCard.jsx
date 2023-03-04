import { UserCircleIcon } from "./Icons/UserCircleIcon";
import SmallText from "./SmallText";
import Dropdown from "./Dropdown";
import Badge from "./Badge";

export default function UserCard({ user, callback }) {
    const selectedUserCallback = (user) => {
        callback(user);
    };
    return (
        <div className="w-full px-24 py-2">
            <div className="p-6 bg-white rounded-lg shadow">
                <div className="grid inline-block grid-cols-8 p-0 m-0">
                    {/* Icon & Heading */}
                    <div className="inline-flex w-full col-span-2">
                        <UserCircleIcon className="flex justify-center w-12 h-auto text-gray-500 place-items-center dark:text-gray-400"/>
                        <h4 className="flex items-center justify-center ml-2 text-2xl font-bold text-gray-500">{user.name}</h4>
                    </div>

                    {/* User Details */}
                    <div className="col-span-5"> {/* This div is used to control the parent grid */}
                        <div className="grid w-full grid-cols-2 gap-2 px-2 pl-6 pr-12 bg-white">
                            <div className="w-full">
                                <SmallText value="Email: " className="font-bold"/>
                                <SmallText value={user.email} className="font-thin"/>
                            </div>
                            <div className="w-full">
                                <SmallText value="Last Login: " className="font-bold"/>
                                <SmallText value={
                                    user.last_login !== null ? new Date(user.last_login).toLocaleDateString("en-AU") : 'N/A'
                                } className="font-thin"/>
                            </div>
                            <div className="w-full">
                                <SmallText value="User Level: " className="font-bold"/>
                                {
                                    user.isAdmin ?
                                        (
                                            <Badge value='Admin' type='warning' />
                                        ) : (
                                            <Badge value='User' type='info' />
                                        )
                                }
                            </div>
                            <div className="w-full">
                                <SmallText value="Status: " className="font-bold"/>
                                {
                                    user.status == 'active' ?
                                    (
                                        <Badge value='Active' type='success' />
                                    ) : (
                                        <Badge value='Inactive' type='danger' />
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    {/* Dropdown */}
                    <div className="flex items-center justify-end col-span-1">
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
                            <Dropdown.Content>
                                <a
                                    onClick={() => {selectedUserCallback(user)}}
                                    className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                >
                                    Edit User
                                </a>
                                <Dropdown.Link href={route('admin.user.toggle', user.id)}  method="post" as="button">
                                    { user.status == 'active' ? 'Disable User' : 'Activate User' }
                                </Dropdown.Link>
                                <Dropdown.Link href={route('admin.user.login', user)}  method="post" as="button">
                                    Login As User
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
}
