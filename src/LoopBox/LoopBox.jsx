import React, { useState } from "react";
import {
  LoopBoxWrapper,
  BpmSelector,
  Sheet,
  Player,
  Disc,
  InstrumentContainer,
} from "./style.js";
import useSound from "use-sound";
import kick from "../assets/sounds/kick.wav";
import ting from "../assets/sounds/ting.wav";
import snare from "../assets/sounds/snare.wav";
import clap from "../assets/sounds/clap.wav";
import bass from "../assets/sounds/bass.wav";
import { calculateTempoInMs } from "../Utils.js";
import Instrument from "./Instrument.jsx";
import playImage from "../assets/play.svg";
import pauseImage from "../assets/pause.svg";
import stopImage from "../assets/stop.svg";
import disc from "../assets/disc.svg";

export default function LoopBox() {
  const [playKick] = useSound(kick);
  const [playTing] = useSound(ting);
  const [playSnare] = useSound(snare);
  const [playClap] = useSound(clap);
  const [playBass] = useSound(bass);

  const instruments = ["Ting", "Clap", "Snare", "Kick", "Bass"];

  const [playing, setPlaying] = useState(false);

  const [tempo, setTempo] = useState(100);
  const timeSig = 4;

  const speed = calculateTempoInMs(tempo) / timeSig;

  const [player, setPlayer] = useState(null);

  let cursor = 0;

  const [musicSheet, setMusicSheet] = useState([
    [true, false, false, false, false],
    [false, false, true, false, false],
    [false, true, true, false, true],
    [false, false, true, true, false],
    [true, false, true, false, false],
    [false, false, true, false, false],
    [false, false, false, false, false],
    [true, false, false, true, true],
    [false, false, false, true, false],
    [false, false, true, false, true],
    [true, false, true, false, false],
    [false, false, true, true, false],
    [false, false, false, true, true],
    [true, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]);

  function handleChangeTempo(event) {
    event.preventDefault();
    if (playing) return;
    const inputValueToNumber = parseInt(event.target.value);
    setTempo(inputValueToNumber);
    setMusicSheet();
  }

  function playTime() {
    console.log(musicSheet[cursor]);
    console.log("cursor", cursor);
    if (musicSheet[cursor][0]) {
      playTing();
    }
    if (musicSheet[cursor][1]) {
      playClap();
    }
    if (musicSheet[cursor][2]) {
      playSnare();
    }
    if (musicSheet[cursor][3]) {
      playKick();
    }
    if (musicSheet[cursor][4]) {
      playBass();
    }
    cursor++;
    if (cursor >= musicSheet.length) {
      cursor = 0;
    }
  }

  function playTune(event) {
    event.preventDefault();
    if (playing) {
      setPlaying(false);
      cursor = 0;
      return setPlayer(clearInterval(player));
    }
    setPlaying(true);
    setPlayer(setInterval(playTime, speed));
  }

  return (
    <LoopBoxWrapper>
      <Disc playing={playing}>
        <img src={disc} alt="play" height="150px" />
      </Disc>
      <BpmSelector>
        {tempo} bpm
        <input type="number" value={tempo} onChange={handleChangeTempo}></input>
      </BpmSelector>
      <Sheet>
        {instruments.map((inst, idx) => {
          return (
            <InstrumentContainer key={idx}>
              <Instrument
                name={inst}
                numberInstrument={idx}
                timeSig={timeSig}
                tempo={tempo}
              />
            </InstrumentContainer>
          );
        })}
      </Sheet>
      <Player>
        <img onClick={playTune} src={playImage} alt="play" height="30px" />
        <img src={pauseImage} alt="play" height="30px" />
        <img src={stopImage} alt="play" height="30px" />
      </Player>
    </LoopBoxWrapper>
  );
}
