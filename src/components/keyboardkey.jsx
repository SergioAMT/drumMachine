import React, { useEffect } from 'react';

const Keyboardkey = ( { play, sound: { id, key, url, keyCode} }) => {

    const handleKeydowm = (event) => {
        if(event.keyCode === keyCode){
            play(key, id)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeydowm)
    });

    return (
        <button id={keyCode} onClick={() => play(key, id)} className='drum-pad'><audio className='clip' id={key} src = {url} />
        { key }
        </button>
    )
}




export default Keyboardkey;
