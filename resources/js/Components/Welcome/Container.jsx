import React, {useContext} from 'react';
import Tracks from "@/Components/Welcome/Tracks";
import {Context} from "@/Context/context";
import Banner from "@/Components/Welcome/Banner";
import BestMonth from "@/Components/Welcome/BestMonth";

const Container = () => {

    const {changeIcon, featured, newTracks,bestOfMonth} = useContext(Context)

    return (
        <div>
            <div className="max-sm:w-11/12 max-md:w-11/12 w-4/5 mx-auto mt-12">
                <div className="max-lg:w-10/12 w-10/12 ml-28 max-lg:ml-28">
                    <Context.Provider value={changeIcon}>
                        <Tracks name='Featured' typeOfTracks={featured}/>
                        <Tracks name='New Tracks' typeOfTracks={newTracks}/>
                        <Banner/>
                        <BestMonth typeOfTracks={bestOfMonth}/>
                    </Context.Provider>
                </div>
            </div>

        </div>
    );
};

export default Container;
