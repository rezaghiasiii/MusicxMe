import {useContext} from "react";
import {Context} from "@/Context/context";

export default function Heading() {

    const {changeIcon,heading} = useContext(Context)

    return (
        <div className="flex max-sm:flex-wrap">
            {
                heading.map(({id,heading_image,name,singers}) => (
                <div
                    className="flex flex-col bg-[#202020]" key={id}>
                    <div>
                        <a href="">
                            <img src={window.location.origin + '/app/' + heading_image}
                                 className="transform transition duration-300 hover:scale-95 hover:shadow-2xl hover:rounded"/>
                        </a>
                    </div>
                    <div className="px-3 py-2 flex">
                        <div className="fa fa-2x mr-5">
                        <span><i onClick={changeIcon}
                                 className="fa fa-play-circle text-gray-400 hover:cursor-pointer hover:text-gray-300"></i></span>
                        </div>
                        <div className="text-left text-sm text-white">
                            <h4 className="hover:text-gray-400 hover:duration-300 hover:cursor-pointer">{name}</h4>
                            <h5 className="hover:underline hover:cursor-pointer hover:duration-300">Track
                                By <a
                                    href="" className="text-gray-300 text-sm">{singers.map(item => singers.length > 1 ? (item.first_name + ' ' + item.last_name+', ') : item.first_name + ' ' + item.last_name)}</a></h5>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
}
