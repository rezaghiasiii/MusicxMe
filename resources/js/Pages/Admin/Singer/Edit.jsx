import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Link, Head, useForm, usePage, router} from "@inertiajs/react";

const Edit = ({auth,errors}) => {

    const {singer} = usePage().props;

    const {data, setData} = useForm({
        first_name: singer.first_name || '',
        last_name:singer.last_name || '',
        image : null
    })


    function handleSubmit(e) {
        e.preventDefault()
        const values = new FormData();
        values.append("first_name", data.first_name);
        values.append("last_name", data.last_name);
        values.append("image",data.image)
        values.append("_method", "PUT");
        router.post(route('admin.singers.update', singer.id),values);
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">Edit Singer</h2>}
        >

            <Head title="Singers"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.singers.index")}
                                >
                                    Back
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.first_name}
                                            onChange={(e) =>{
                                                setData('first_name',e.target.value)
                                            }}
                                        />
                                        <span className="text-red-600">
                                            {errors.first_name}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            value={data.last_name}
                                            onChange={(e) =>{
                                                setData('last_name',e.target.value)
                                            }}
                                        />
                                        <span className="text-red-600">
                                            {errors.last_name}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Choose Picture</label>
                                        <input
                                            type="file"
                                            className="w-full px-4 py-2"
                                            onChange={(e) => {
                                                setData("image",e.target.files[0])
                                            }}
                                        />
                                        <span className="text-red-600">
                                            {errors.image}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


        </Authenticated>

    )
}

export default Edit
