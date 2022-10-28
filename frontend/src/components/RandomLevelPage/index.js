import React from 'react';
import ReactDOM from 'react-dom';
import s from './keys/key1.mp3'


let playL = 5;
let notes = [s, s, s]
function testPlay () {
    let note = new Audio(s);
    note.play()
}

let wait = setTimeout (() => {
    
})
  
async function runSong() {
    testPlay()

}

export default function RandomLevelPage(props) {
    return (
        <div>
            <button onClick={runSong}>test</button>
            

                </div>

    );
}