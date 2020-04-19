import React, { useState } from 'react';
import { LoopBoxWrapper, BpmSelector, Instruments, Player, Kick, Snare, Bass, Melo } from './style.js';
import useSound from 'use-sound';
import kick from '../assets/sounds/kick.wav';
import ting from '../assets/sounds/ting.wav';
import calculateTempoInMs from '../Utils.js';
import playImage from '../assets/play.svg'
import pauseImage from '../assets/pause.svg'
import stopImage from '../assets/stop.svg';
import disc from '../assets/disc.svg';

export default function LoopBox() {

    const [play] = useSound(kick);
    const [playTing] = useSound(ting);

    const [playing, setPlaying] = useState(false);

    const [tempo, setTempo] = useState(100);

    const [player, setPlayer] = useState(null);

    function handleChangeTempo(event) {
        event.preventDefault();
        if (playing) return;
        const inputValueToNumber = parseInt(event.target.value);
        setTempo(inputValueToNumber);
    };

    function playAllSounds() {
        play(); playTing();
    };

    function playTune(event) {
        event.preventDefault();
        if (playing) {
            setPlaying(false);
            return setPlayer(clearInterval(player))
        };
        const speed = calculateTempoInMs(tempo);
        setPlaying(true);
        setPlayer(setInterval(playAllSounds, speed));
    };

    return (<LoopBoxWrapper playing={playing}>
        <img src={disc} alt="play" height="150px" />
        <BpmSelector>{tempo} bpm
        <input type="number" value={tempo} onChange={handleChangeTempo}></input>
        </BpmSelector>
        <Instruments>
            <Melo >Melo</Melo>
            <Bass>Bass</Bass>
            <Snare>Snare</Snare>
            <Kick>Kick</Kick>
        </Instruments>
        <Player onClick={playTune}>
            <img src={playImage} alt="play" height="30px" />
            <img src={pauseImage} alt="play" height="30px" />
            <img src={stopImage} alt="play" height="30px" />
        </Player>
    </LoopBoxWrapper >)
};
