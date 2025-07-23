import { 
  useState,
  useEffect, 
  Suspense,
  lazy
} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
const Home = lazy(() => import('./view/Home'));
const Login = lazy(() => import('./view/Login'));
const Pay = lazy(() => import('./view/Pay'));
const RequireAuth = lazy(() => import('./components/RequireAuth'));
function App() {
  useEffect(() => {
    
  }, [])
  return (
    <>
      <NavBar></NavBar>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pay" element={
            <RequireAuth>
              <Pay />
            </RequireAuth>
          } />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
