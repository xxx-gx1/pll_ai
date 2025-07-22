import { useState } from 'react'
import Counter from './components/Counter'
import { useCounterStore } from './store/count'
import './App.css'
import TodoList from './components/TodoList'
import RepoList from './components/RepoList'

function App() {
  const { count } = useCounterStore()
  return (
    <>
      App中的{count}
      <Counter></Counter>
      <TodoList></TodoList>
      <RepoList></RepoList>
    </>
  )
}

export default App
