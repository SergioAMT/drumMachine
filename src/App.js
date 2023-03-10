import './App.css';
import DrumControl from './components/drumControl';
import { FirstSoundsGroup } from './components/firstGroupSons';
import { SecondSoundsGroup } from './components/secondGroupSons'
import Keyboard from './components/keyboard';
import { useState } from 'react';

function App() {

  const soundsName = {
    heaterKit: "Heater Kit",
    smoothPianoKit: "Smooth Piano Kit"
  };
  
  const soundsGroup = {
    heaterKit: FirstSoundsGroup,
    smoothPianoKit: SecondSoundsGroup
  }

  const [power, setPower] = useState(true)
  const [soundName, setSoundName] = useState("")
  const [volume, setVolume] = useState(1)
  const [soundType, setSoundType] = useState('heaterKit');
  const [sounds, setSounds] = useState(soundsGroup[soundType])
  


  const play = (key, sound) => {
    setSoundName(sound)
    const audio = document.getElementById(key)
    audio.currentTime = 0;
    audio.play()
  }

  const changeSoundsGroup = () => {
    setSoundName('')
    if(soundType === "heaterKit"){
        setSoundType("smoothPianoKit");
        setSounds(soundsGroup.smoothPianoKit);
    } else {
        setSoundType("heaterKit");
        setSounds(soundsGroup.heaterKit);
    }
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
  } 

  const setKeyVolume = () => {
    const audios = sounds.map(sound => document.getElementById(sound.key))
    audios.forEach(audio => {
      if(audio){
        audio.volume = volume;
      }
    })
  }

  const stop = () => {
    setPower(!power)
  }

  return (
    <div id='drum-machine'>
    {setKeyVolume()}
      <div className='wrapper'>
          <Keyboard power={power} play={play} sounds={sounds}></Keyboard>
          <DrumControl
          stop={stop}
          volume={volume} 
          power={power}
          handleVolumeChange={handleVolumeChange}
          changeSoundsGroup={changeSoundsGroup}
          name={soundName || soundsName[soundType]}></DrumControl>
      </div>
    </div>
  );
}

export default App;
