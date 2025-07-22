import { useEffect } from 'react'
import {
    useReposStore
} from '../../store/repos'


const RepoList = () => {
    const { repos, loading, error, fetchRepos } = useReposStore()
    useEffect(() => {
        fetchRepos()
    }, [])
    return (
        <div>   
            <h2>RepoList</h2>
            {loading && <p>loading</p>}
            {error && <p>{error}</p>}
            {repos?.map((repo) => (
                <li key={repo.id}>
                    <a href={repo.html_url} target='_blank' rel='noreferrer'>{repo.name}</a>
                    <p>{repo.description || 'No description'}</p>
                </li>
            ))}
        </div>
    )
}
export default RepoList
