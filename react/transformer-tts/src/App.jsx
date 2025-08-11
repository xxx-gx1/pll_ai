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
    const onMessageReceived = (e) => {
      console.log(e)
    }
    worker.current.onmessage = onMessageReceived

    return () => worker.current.removeEventListener('message', onMessageReceived)
  },[])

  const handleGenerateSpeech = () => {
    setDisabled(true)
    worker.current.postMessage({
      text,
      speaker_id: selectedSpeaker
    })
  }
  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg w-full max-w-xl m-2">
        <h1 className='text-3xl font-semibold text-gray-800 mb-1 text-center'>
          In browser Text To Speech(端模型)
        </h1>
        <h2 className="text-base font-medium text-gray-700 mb-2 text-center">
          Made with <a href="">Transfromer.js</a>
        </h2>
        <div className="mb-4">
          <label htmlFor="text" className='block text-sm font-medium text-gray-600'>
            Text
          </label>
          <textarea id="text" 
          className='border border-gray-300 rounded-md w-full p-2'
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          placeholder='Enter text here'
          >
          </textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="speaker" className="block text-sm font-medium text-gray-600">
            Speaker
          </label>
          <select id="speaker"
          className='border border-gray-300 rounded-md w-full p-2'
          value={selectedSpeaker}
          onChange={(e) => setSelectedSpeaker(e.target.value)}
          >
            {
              // 可迭代对象快速转换成数组[[key,value],[key1,value1],[key2,value2]]
              Object.entries(SPEAKERS).map(([key,value]) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))
            }
          </select>
        </div>
        <div className="flex justify-center">
          <button
            className={`${disabled? 
              'bg-gray-400 cursor-not-allowed':
              'bg-blue-500 hover:bg-blue-600'}
               text-white px-4 py-2 rounded-md`}
            onClick={handleGenerateSpeech}
            disabled={disabled}
          >
            {disabled? 'Generating...': 'Generate'}
          </button>
        </div>
        {
          output && <AudioPlayer 
            audioUrl={output}
            mimeType={audio/wav}
          />
        }
      </div>
    </div>
    </>
  )
}

export default App
