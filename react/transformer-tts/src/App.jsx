import { 
  useState,
  useRef,
  useEffect
 } from 'react'
 import Progress from './components/Progress'
 import AudioPlayer from './components/AudioPlayer'
 import {
  SPEAKERS,
  DEFAULT_SPEAKER
 } from './constants'

function App() {
  // 界面状态
  // llm ready 大模型准备好了不？
  const [ready,setReady] = useState(false)
  // 按钮点击 防止多次点击
  const [disabled,setDisabled] = useState(false)
  // 进度条数组
  const [progressItems,setProgressItems] = useState([])
  // 表单文本
  const [text,setText] = useState('I love Hugging face!');
  // 音色
  const [selectedSpeaker,setSelectedSpeaker] = useState(DEFAULT_SPEAKER)
  const [output,setOutput] = useState(null)

  const worker = useRef(null);
  useEffect(() => {
    worker.current = new Worker( new URL('./worker.js', import.meta.url),{
      type: 'module',

    })
    worker.current.postMessage({
      text:'灵不灵，奔驰s680'
    })
    const onMessageReceived = (e) => {
      console.log(e)
    }
    worker.current.onmessage = onMessageReceived

    return () => worker.current.removeEventListener('message', onMessageReceived)
  },[])
  return (
    <>
    <div className="flex">
      {/* <Progress text="进度" percentage={50} />
      <AudioPlayer 
        audioUrl="https://cdn.freesound.org/previews/819/819183_12880153-lq.mp3"
        mimeType="audio/mpeg"
      /> */}
    </div>
    </>
  )
}

export default App
