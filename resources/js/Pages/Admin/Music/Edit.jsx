import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Link, Head, useForm, usePage, router} from "@inertiajs/react";

export default function Edit({auth, errors}) {

    const {music, singers, music_singers} = usePage().props;

    const {data, setData} = useForm({
        name: music.name || '',
        music: null,
        image: null,
        heading_image: null,
        singers_id: music_singers.map(item=>(item.id)) || [],

    });

    function handleChangeSelect(e) {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setData("singers_id", value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        var values = new FormData();
        var arr = data.singers_id;
        values.append('name',data.name);
        values.append('music',data.music);
        values.append('image',data.image);
        values.append('heading_image',data.heading_image);
        for (var i = 0; i < arr.length; i++) {
            values.append('singers_id[]', arr[i]);
        }
        values.append('_method','PUT');
        router.post(route("admin.musics.update", music.id),values);
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">Edit Music</h2>}
        >

            <Head title="Musics"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-6 bg-white dark:bg-gray-800 dark:shadow-xl">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-900 rounded-md focus:outline-none"
                                    href={route("admin.musics.index")}
                                >
                                    Back
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit} className="dark:text-gray-300">
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-800"
                                            label="Name"
                                            name="name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.name}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Choose Music Cover</label>
                                        <input
                                            type="file"
                                            className="w-full px-4 py-2"
                                            name="image"
                                            onChange={(e) =>
                                                setData("image", e.target.files[0])
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.image}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Choose Heading Image</label>
                                        <input
                                            type="file"
                                            className="w-full px-4 py-2"
                                            name="heading_image"
                                            onChange={(e) =>
                                                setData("heading_image", e.target.files[0])
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.heading_image}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Choose Music</label>
                                        <input
                                            type="file"
                                            className="w-full px-4 py-2"
                                            name="music"
                                            onChange={(e) =>
                                                setData("music", e.target.files[0])
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.music}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="singers_id" className="">Choose Singers</label>
                                        <select className="w-full px-4 py-2 dark:bg-gray-600" name="singers_id" multiple id="singers_id" value={data.singers_id}
                                                onChange={handleChangeSelect}>
                                            {singers.map(singer => (
                                                    <option key={singer.id}
                                                            value={singer.id}>{singer.first_name + ' ' + singer.last_name}</option>
                                            ))
                                            }
                                        </select>
                                        <span className="text-red-600">
                                            {errors.singers_id}
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
