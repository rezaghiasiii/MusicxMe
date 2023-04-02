import React from 'react';

const MusicPlayer = () => {

    const music = document.getElementById('music')


    const play_pause = (eventPlay) => {
        time_update()

        if (eventPlay.currentTarget.classList.contains('fa-play-circle')) {
            eventPlay.currentTarget.classList.remove('fa-play-circle');
            eventPlay.currentTarget.classList.add('fa-pause-circle');
            music.play();
            let musicLength = calculateTotalValue(music.duration)
            document.getElementById("duration").textContent = musicLength
        } else {
            eventPlay.currentTarget.classList.remove('fa-pause-circle');
            eventPlay.currentTarget.classList.add('fa-play-circle');
            music.pause()
            let currentTime = calculateCurrentValue(music.currentTime)
            document.getElementById("current_time").textContent = currentTime
        }
    }

    function time_update(){
        music.addEventListener('timeupdate',function (){
            let musicLength = calculateTotalValue(music.duration)
            document.getElementById("duration").textContent = musicLength
            let currentTime = calculateCurrentValue(music.currentTime)
            document.getElementById("current_time").textContent = currentTime

            var width = document.getElementById("timeline").offsetWidth;

            var progressbar = document.getElementById("progress");
            progressbar.style.width = width * (music.currentTime / music.duration) + "px";

            music.addEventListener('ended',function (){
                document.getElementById("play_pause").classList.remove('fa-pause-circle');
                document.getElementById("play_pause").classList.add('fa-play-circle');
                var progressbar = document.getElementById("progress");
                progressbar.style.width = '0px';
                document.getElementById("current_time").textContent = '00:00'
            })
        })
    }

    function calculateTotalValue(length) {
        var minutes = Math.floor(length / 60);
        var seconds_int = length - minutes * 60;
        if (seconds_int < 10) {
            seconds_int = "0" + seconds_int;
        }
        var seconds_str = seconds_int.toString();
        var seconds = seconds_str.substr(0, 2);
        var time = minutes + ':' + seconds;
        return time;
    }

    function calculateCurrentValue(currentTime) {
            var current_minute = parseInt(currentTime / 60) % 60,
            current_seconds_long = currentTime % 60,
            current_seconds = current_seconds_long.toFixed(),
            current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
        return current_time;
    }


    return (
        <div>
            <div className="max-sm:w-11/12 max-md:w-11/12 w-full mx-auto fixed bottom-1">
                <div className="">
                    <div className="max-lg:w-10/12 w-10/12 ml-28 max-lg:ml-28">
                        <div className="">
                            <div className="w-full h-16 bg-gray-800 rounded shadow-xl ">
                                <div className="flex flex-nowrap ">
                                    <img className="w-16 rounded hover:cursor-pointer"
                                         src={window.location.origin + '/app/musicImages/' + '63e647e5add4c.jpg'}
                                         alt=""/>
                                    <div className="w-36 text-left text-sm text-white ml-3 mt-3">
                                        <h4 className="hover:text-gray-400 hover:duration-300 hover:cursor-pointer">Behnam Bani</h4>
                                        <a href="#"
                                           className="text-gray-300 hover:underline hover:cursor-pointer hover:duration-300">Kojay in Shahri?</a>
                                    </div>

                                    <div className="flex items-center">
                                        <span id="duration" className="m-5 text-gray-200">00:00</span>
                                        <div className="fa fa-2x ">
                                        <span><i id="play_pause" onClick={play_pause}
                                                 className="fa fa-play-circle text-gray-400 text-gray-400 hover:cursor-pointer hover:text-gray-300"></i></span>
                                        </div>
                                        <span className="m-5 text-gray-200" id="current_time">00:00</span>
                                    </div>
                                    <div className="hidden">
                                        <audio
                                            id="music" preload="auto">
                                            <source
                                                src={window.location.origin + '/app/musics/' + 'Ali-Yasini-Nesfe-Shab-320.mp3'}
                                                type="audio/mpeg"/>
                                        </audio>
                                    </div>
                                    <div id="timeline" className="w-full block bg-gray-700 ml-2">
                                        <div id="progress" className="w-0 h-full bg-gray-600"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
