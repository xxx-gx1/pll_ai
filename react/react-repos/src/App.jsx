import { 
  useState,
  useEffect,
  Suspense,
  lazy,
} from 'react'
import './App.css'
import { 
  getRepos,
  getRepo,
} from './api/repos';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Loading from './components/Loading.jsx'
const RepoList = lazy(() => import('./pages/RepoList'));

function App() {
  return (
    <Suspense fallback={<Loading></Loading>}>
        <Routes>
          <Route path="/users/:id/repos" element={<RepoList />} />
          <Route path="*" element={<Navigate to="/users/shunwuyu/repos" />} />
        </Routes>
    </Suspense>
  )
}

export default App
