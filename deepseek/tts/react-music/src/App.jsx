import { useState,useRef } from 'react'
import './App.css'

function App() {
  // 火山引擎tts 配置文件
  const TOKEN = 'SR1hB5WJo6mvN2p6nhARP_2DC06RB93H';
  const APP_ID = '3065516566';
  const CLUSTER_ID = 'volcano_tts';

  // 代码的可读性高于一切
  const [prompt,setPrompt] = useState('大家好，我是蔡徐坤');
  // react use 开头 ref hook 可以获取 DOM 元素
  const audioPlayer = useRef(null)
  console.log(audioPlayer,'/////');
  const playMusic = () => {
    // console.log(audioPlayer,'+++');
    console.log('play Music');
    audioPlayer.current.play()
  }

  const generateAudio = () => {
    // 女性
    // const voiceName = "zh_female_shuangkuaisisi_moon_bigtts";
    const voiceName = "zh_male_sunwukong_mars_bigtts"
    const endpoint = "/tts/api/v1/tts" // tts api llm 服务接口地址
    
    const headers = {
      'Content-Type':'application/json',
      Authorization:`Bearer;${TOKEN}`
    }
  }
  return (
    <div className='container'>
      <div>
        <label>Prompt</label>
        <button onClick={generateAudio}>生成并播放</button>
        <textarea
         className='input' 
         value={prompt}
         onChange={(e) => setPrompt(e.target.value)}
         >
         </textarea>
      </div>
      <audio ref={audioPlayer} src="/sounds/snare.wav"></audio>
      {/* <button onClick={playMusic}>播放</button> */}
    </div>
  )
}

export default App
