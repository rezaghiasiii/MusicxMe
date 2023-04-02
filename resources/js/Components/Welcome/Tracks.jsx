import React, {useContext} from 'react';
import {Context} from "@/Context/context";

const Tracks = ({name,typeOfTracks}) => {

    const changeIcon = useContext(Context)

    return (
        <div className="mt-20">
            <div className="text-left">
                <h1 className="text-5xl font-bold font-sans font-bold text-white">{name}</h1>
            </div>
            <div className="flex flex-wrap gap-9 mt-5 items-center">
                {
                    typeOfTracks.map(({id, name, image_path, singers}) => (
                    <div key={id} className="flex flex-col">
                        <img
                            className="w-56 h-56 rounded transform transition hover:scale-95 duration-200 hover:cursor-pointer"
                            src={window.location.origin + '/app/' + image_path} alt=""/>
                        <div className="py-2 flex">
                            <div className="fa fa-2x mr-2">
                        <span>
                            <i onClick={changeIcon}
                               className="fa fa-play-circle text-gray-400 text-gray-400 hover:cursor-pointer hover:text-gray-300">
                            </i>
                        </span>
                            </div>
                            <div className="text-left text-sm text-white">
                                <h4 className="hover:text-gray-400 hover:duration-300 hover:cursor-pointer">{name}</h4>
                                <h5 className="hover:underline hover:cursor-pointer hover:duration-300">Track
                                    By <a
                                        href="#"
                                        className="text-gray-300">{singers.map(item => singers.length > 1 ? (item.first_name + ' ' + item.last_name + ', ') : item.first_name + ' ' + item.last_name)}</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default Tracks;
