import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '标题一'
    },
    {
      id: 2,
      title: '标题二'
    },
    {
      id: 3,
      title: '标题三'
    }
  ])
  useEffect(() => {
    setTimeout(() => {
      // setTodos(prev => prev.map(todo => {
      //   if(todo.id===1){
      //     return {
      //       ...todo,
      //       title: '标题-改一'
      //     }
      //   }
      //   return todo
      // }))
      // setTodos(prrv => [
      //   ...prrv,
      //   {
      //     id: 4,
      //     title: '标题四'
      //   }
      // ])
      setTodos(prev => [
        {
          id: 4,
          title: '标题四'
        },
        ...prev
      ])
    }, 5000)
  },[])
  return (
    <ul>
      {
        todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))
      }
    </ul>
  )
}

export default App
