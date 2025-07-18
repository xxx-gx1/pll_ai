import { 
    useParams ,
    Navigate,
    useNavigate,
    Link,
} from 'react-router-dom';
import {
    useEffect
} from 'react';
import {
    useRepos,
} from '@/hooks/useRepos'

const RepoList = () => {
    const { id } = useParams();
    console.log(useParams());
    const navigate = useNavigate();
    // hooks
    const { repos,loading,error } = useRepos(id);
    console.log( repos,loading,error);
    useEffect(() => {
        if(!id.trim()){
            navigate('/');
        }

    }, [])

    if(loading) return (<>Loading...</>)
    if(error) return (<>Error...{error}</>)
    return (
        <>
            <h1>Repositories for {id}</h1>
            {
                repos.map((repo) => (
                    <div key={repo.id}>
                        <Link key={repo.id} to={`/users/${id}/repos/${repo.name}`}>
                            {repo.name}
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default RepoList