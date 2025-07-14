import { 
  Suspense,
  lazy,// 懒加载
  useState,
} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Navigation from './components/Navigation'
import ProtectRoute from './pages/ProtectRoute'
import Pay from './pages/Pay'
// 函数 路由 -> Route
// 懒加载 只加载当前需要的，其他的不加载
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Login = lazy(() => import('./pages/Login'))
// import Home from './pages/Home'
// import About from './pages/About'
// 30几个页面

function App() {

  return (
    <>
      <Router>
        <Navigation />
        <Suspense fallback={<div><img src="https://static.360buyimg.com/item/main/1.0.12/css/i/loading.gif" alt="加载图片" style={{ width: '100%' }} /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            {/* 鉴权 */}
            <Route path="/pay" element={
              <ProtectRoute>
                <Pay />
              </ProtectRoute>
              } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
