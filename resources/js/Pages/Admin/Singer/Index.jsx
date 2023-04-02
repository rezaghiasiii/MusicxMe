import React, {useEffect} from "react";
import {usePage, Head, Link, router} from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";


export default function Index(props) {

    const {singers} = usePage().props;

    function destroy(e) {
        if (confirm("Are you sure you want to delete this singer?")) {
            router.delete(route("admin.singers.destroy", e.currentTarget.id));
        }
    }


    function restore(e) {
        if (confirm("Are you sure you want to restore this singer?")) {
            router.get(route("admin.singers.restore", e.currentTarget.id));
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl leading-tight">Singers</h2>}
        >

            <Head title="Singers"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-gray-300 bg-blue-900 rounded-md focus:outline-none"
                                    href={ route("admin.singers.create") }
                                >
                                    Create Singer
                                </Link>
                            </div>

                            <table className="table-fixed w-full dark:bg-gray-800">
                                <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2 w-20">Picture</th>
                                    <th className="px-4 py-2">Full Name</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {singers.map(({ id, first_name,last_name,image_path,deleted_at }) => (
                                    <tr key={id} className="border dark:border-gray-700 dark:text-gray-300">
                                        <td className="px-4 py-2">{ id }</td>
                                        <td className="px-4 py-2"><img src={window.location.origin + '/app/' +image_path} alt=""/></td>
                                        <td className="px-4 py-2">{ first_name + ' ' + (last_name ? last_name : '') }</td>
                                        <td className="px-4 py-2">
                                            <Link
                                                tabIndex="1"
                                                className="px-4 py-2 text-sm text-gray-300 bg-blue-700 rounded"
                                                href={route("admin.singers.edit", id)}
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                onClick={deleted_at==null ? destroy : restore}
                                                id={id}
                                                tabIndex="-1"
                                                type="button"
                                                className={`${deleted_at==null ? 'bg-red-700' : 'bg-green-700'} mx-1 px-4 py-2 text-sm text-gray-300 rounded`}
                                            >
                                                {deleted_at==null ? "Delete" : "Restore"}
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {singers.length === 0 && (
                                    <tr>
                                        <td
                                            className="px-6 py-4 border-t"
                                            colSpan="4"
                                        >
                                            No singers found.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </Authenticated>
    );
}
