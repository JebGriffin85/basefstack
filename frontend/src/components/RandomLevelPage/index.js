import React from 'react';
import ReactDOM from 'react-dom';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import s from './keys/key1.mp3'

import SoundfontProvider from './SoundfontProvider';
// import './styles.css';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
    first: MidiNumbers.fromNote('c3'),
    last: MidiNumbers.fromNote('f4'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

function testPlay1() {
    let t1 = new Audio(s)
    t1.play()
    setTimeout(() => {
        t1.play()
    }, 1000)


}

function testPlay () {
    let t1 = new Audio(s)
    t1.play()
    setTimeout(() => {
        testPlay1()
    },3000)
 
    
}

export default function RandomLevelPage(props) {
    return (
        <div>
            <button onClick={testPlay}>test</button>
            
                <SoundfontProvider
                    instrumentName="acoustic_grand_piano"
                    audioContext={audioContext}
                    hostname={soundfontHostname}
                    render={({ isLoading, playNote, stopNote }) => (
                        <Piano
                            noteRange={noteRange}
                            width={500}
                            height={'2222px'}
                            playNote={playNote}
                            stopNote={stopNote}
                            disabled={isLoading}
                            {...props}
                        />
                    )}
                />
                </div>
        //     )}
        // </DimensionsProvider>
    );
}