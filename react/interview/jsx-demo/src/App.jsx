import { 
  useState,
  createElement
} from 'react'
import './App.css'

function App() {
  const[todos,setTodos] = useState([
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
const element = <h1>Hello world</h1>;
const element2 = createElement('h1',{className:'title',id:'title1'}, 'Hello world')
  return (
    <>
    <ul>
      {
        todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))
      }
    </ul>
    <ul>
      {
        todos.map((todo) => (
          createElement('li',{key:todo.id},todo.title)
        ))
      }
    </ul>
     {element}
     {element2}
    </>
  )
}

export default App
