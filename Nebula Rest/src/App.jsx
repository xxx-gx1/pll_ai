import { 
  Suspense,
  lazy
} from 'react'
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import './App.css'
const Home = lazy(() => import('@/pages/Home'))
const Record = lazy(() => import('@/pages/Record'))
const Stories = lazy(() => import('@/pages/Stories'))
const Profile = lazy(() => import('@/pages/Profile'))
const SleepAssistant = lazy(() => import('@/pages/SleepAssistant'))
const Login = lazy(() => import('@/pages/Login'))
import AuthRoute from '@/components/AuthRoute/AuthRoute'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'
import Loading from '@/components/Loading'

function App() {

  return (
    <>
    <Suspense fallback={<Loading />}>
        {/* 带有tabbar的Layout */}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/record' element={<Record />} />
            <Route path='/stories' element={<Stories />} />
            <Route path='/chat' element={<SleepAssistant />} />
            <Route path='/profile' element={
              <AuthRoute>
                <Profile />
              </AuthRoute>
              } />
          </Route>
        </Routes>
        {/* 空Layout */}
        <Routes>
          <Route element={<BlankLayout />}>
            <Route path='/login' element={<Login />} />
            {/* <Route path='/search' element={<Search />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
