import { 
  useState,
  useEffect
} from 'react'
import './App.css'
import { 
  getTodos,
  getRepos
 } from '@/api'

function App() {
  const [todos, setTodos] = useState([])
  const [repos, setRepos] = useState([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const todosResult = await getTodos()
  //     console.log(todosResult.data.data);
  //     setTodos(todosResult.data.data)
  //   }
  //   fetchData()
  // }, [])
  useEffect(() => {
    const fetchData = async () => {
      const reposResult = await getRepos()
      console.log(reposResult.data);
      setRepos(reposResult.data)
    }
    fetchData()
  }, [])
  return (
    <>
      {
        todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))
      }
      {
        repos.map(repo => (
          <li key={repo.id}>
            {repo.title}
            <p>{repo.description}</p>
          </li>
        ))
      }
    </>
  )
}

export default App
