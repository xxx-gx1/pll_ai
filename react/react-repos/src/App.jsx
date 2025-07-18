import { 
  useState,
  useEffect,
  Suspense,
  lazy,
} from 'react'
import './App.css'
import { 
  getRepos,
  getRepoDetail,
} from './api/repos';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Loading from './components/Loading.jsx'
const RepoList = lazy(() => import('./pages/RepoList'));
const RepoDetail = lazy(() => import('./pages/RepoDetail'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<Loading></Loading>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id/repos" element={<RepoList />} />
          <Route path="/users/:id/repos/:repoId" element={<RepoDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
  )
}

export default App
