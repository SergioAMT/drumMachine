import React from 'react';

const DrumControl = ({changeSoundsGroup, name, volume, handleVolumeChange, power, stop}) => {
    return (
        <div className='controle'>
        <button onClick={stop}>Turn the power {power ? 'OFF' : 'ON'}</button>
            <h2> Volume: % {Math.round(volume * 100)}</h2>
            <input
            max='1'
            min='0'
            step='0.01'
            type='range'
            value={volume}
            onChange={handleVolumeChange}></input>
            <h2 id='display'> { name } </h2>
                <button type='button' onClick={changeSoundsGroup}>Change Sounds Group</button>
        </div>
    );
}

export default DrumControl;
