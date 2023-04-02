import React, {useContext} from 'react';
import {Context} from "@/Context/context";

const BestMonth = ({typeOfTracks}) => {

    const changeIcon = useContext(Context)

    return (
        <div>
            <div className="mt-8 text-left">
                <h1 className="text-5xl font-bold font-sans font-bold text-white">Best Of Month</h1>
            </div>
            <div className="flex flex-wrap gap-3 mt-5 items-center">
                {
                    typeOfTracks.map(({id,name,image_path,singers}) => (
                        <div key={id} className="flex items-center bg-[#303030] rounded w-80">
                            <div className="flex items-center">
                                <img className="w-20 rounded hover:cursor-pointer"
                                     src={window.location.origin + '/app/' + image_path}
                                     alt=""/>
                                <div className="w-44 text-left text-sm text-white ml-3">
                                    <h4 className="hover:text-gray-400 hover:duration-300 hover:cursor-pointer">{name}</h4>
                                    <a href="#"
                                       className="text-gray-300 hover:underline hover:cursor-pointer hover:duration-300">{singers.map(item => singers.length > 1 ? (item.first_name + ' ' + item.last_name + ', ') : item.first_name + ' ' + item.last_name)}</a>
                                </div>

                                <div className="fa fa-2x">
                             <span>
                                <i onClick={changeIcon}
                                   className="fa fa-play-circle text-gray-400 text-gray-400 hover:cursor-pointer hover:text-gray-300">
                                </i>
                             </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default BestMonth;
