import {Link} from "@inertiajs/react";

export default function Navbar(props) {
    return (
        <div>
            <nav
                className="bg-gray-900 mt-3">
                <ul className="flex max-sm:flex-wrap max-md:flex-wrap max-lg:flex-wrap justify-center gap-1 bg-[#202020]">
                    <li>
                        <Link
                            className="block w-36 p-2 text-gray-500 text-center rounded-l font-bold hover:text-gray-300 bg-[#333232] hover:bg-[#373737] hover:duration-500"
                            href={route("welcome")}>
                            <i className="fa fa-sm fa-home mr-2"></i>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block w-36 p-2 text-gray-500 text-center  font-bold hover:text-gray-300 bg-[#333232] hover:bg-[#373737] hover:duration-500"
                                href="@/Components/Welcome/NavbarWelcome">
                            <i className="fa fa-music mr-2"></i>
                            Browse
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block w-36 p-2 text-gray-500 text-center  font-bold hover:text-gray-300 bg-[#333232] hover:bg-[#373737] hover:duration-500"
                            href="@/Components/Welcome/NavbarWelcome">
                            <i className="fa fa-microphone mr-2"></i>
                            Artists
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block w-36 p-2 text-gray-500 text-center  font-bold hover:text-gray-300 bg-[#333232] hover:bg-[#373737] hover:duration-500"
                            href="@/Components/Welcome/NavbarWelcome">
                            <i className="fa fa-up-long mr-2"></i>
                            Top Chart
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block w-36 p-2 text-gray-500 text-center font-bold hover:text-gray-300 bg-[#333232] hover:bg-[#373737] hover:duration-500"
                            href="@/Components/Welcome/NavbarWelcome">
                            <i className="fa fa-list-check mr-2"></i>
                            Playlist
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block w-36 p-2 text-gray-500 text-center  font-bold hover:text-gray-300 bg-[#333232] hover:bg-[#373737] hover:duration-500"
                            href="@/Components/Welcome/NavbarWelcome">
                            <i className="fa fa-search mr-2"></i>
                            Search
                        </Link>
                    </li>
                    {props.auth ?
                        (
                            < li>
                                < Link href={route('dashboard')}
                                       className="block w-36 p-2 rounded-r text-gray-500 text-center  font-bold hover:text-gray-300 bg-[#333232] hover:bg-[#373737] hover:duration-500">
                                    <i className="fa fa-dashboard mr-2"></i>
                                    Dashboard
                                </Link>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link href={ route('login') }
                                          className="block w-36 p-2 text-gray-500 text-center  font-bold hover:text-gray-300 bg-[#333232] hover:bg-[#373737] hover:duration-500">
                                        <i className="fa fa-sign-in mr-2"></i>
                                        Log in
                                    </Link>
                                </li>
                                <li>
                                    <Link href={ route('register') }
                                          className="block w-36 p-2 text-gray-500 rounded-r text-center  font-bold hover:text-gray-300 bg-[#333232] hover:bg-[#373737] hover:duration-500">
                                        <i className="fa fa-registered mr-2"></i>
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                </ul>
            </nav>
        </div>
    );
}
