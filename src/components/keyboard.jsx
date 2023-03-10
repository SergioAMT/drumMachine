import React from 'react';
import { FirstSoundsGroup } from './firstGroupSons';
import Keyboardkey from './keyboardkey';



const Keyboard = ({power, play, sounds }) => {

    return (
    <div className='keyboard'>
        {power 
        ? sounds.map((sound) => <Keyboardkey play={play} sound={sound}></Keyboardkey>)
        : sounds.map((sound) => <Keyboardkey play={play} sound={{...sound, url: '#'}}></Keyboardkey>)}
    </div>
    )

}

export default Keyboard;