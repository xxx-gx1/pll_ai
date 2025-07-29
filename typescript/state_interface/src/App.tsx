import { useState } from 'react'
import './App.css'
import NameEditComponents from './components/NameEditComponents/index'

function App() {
  // js 代码
  // const [name, setName] = useState('initialName');
  // ts 代码
  const [name, setName] = useState<string>('initialName');
  // 单向数据流 
  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  return (
    <>
      <NameEditComponents userName={name} onChange={setUsernameState}/>
    </>
  )
}

export default App
