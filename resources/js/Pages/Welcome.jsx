import {Link, Head, usePage} from '@inertiajs/react';
import ApplicationLogo from "@/Components/ApplicationLogo";
import Navbar from "@/Components/Welcome/Navbar";
import Heading from "@/Components/Welcome/Heading";
import Container from "@/Components/Welcome/Container";
import {Context} from "@/Context/context";
import MusicPlayer from "@/Components/Welcome/MusicPlayer";

export default function Welcome(props) {

    const {heading, featured, newTracks, bestOfMonth} = usePage().props;

    function changeIcon(event) {
        if (event.currentTarget.classList.contains('fa-play-circle')) {
            event.currentTarget.classList.remove('fa-play-circle');
            event.currentTarget.classList.add('fa-pause-circle');
        } else {
            event.currentTarget.classList.remove('fa-pause-circle');
            event.currentTarget.classList.add('fa-play-circle');
        }
    }

    return (
        <div className="">
            <Head title="Welcome"/>
            <div
                className="min-h-screen dark:bg-dots-lighter dark:bg-[#202020] selection:bg-red-500 selection:text-white">
                <div className="w-9/12 mx-auto">
                    <ApplicationLogo/>
                    <Navbar auth={props.auth.user}/>
                </div>
                <div className="mt-10 mb-10">
                    <Context.Provider value={{heading, featured, newTracks, bestOfMonth, changeIcon}}>
                        <Heading/>
                        <Container/>
                        <MusicPlayer/>
                    </Context.Provider>
                </div>
            </div>
        </div>
    );
}
