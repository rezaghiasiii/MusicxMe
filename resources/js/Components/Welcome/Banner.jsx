import React from 'react';

const Banner = () => {
    return (
        <div>
            <img src={window.location.origin + '/app/images/' + 'apppromotebg.jpg'}
                 className="mt-8 rounded-xl hover:cursor-pointer"/>
        </div>
    );
};

export default Banner;
