import { 
  useState,
  useEffect 
} from 'react'
import './App.css'
import {
  getUser
} from './api/user';
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getUser();
      console.log(res);
      setUser(res.data);
    })()
  }, [])
  return (
    <>
      
    </>
  )
}

export default App
