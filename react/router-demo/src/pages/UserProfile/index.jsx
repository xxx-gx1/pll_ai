import {
    useEffect,
} from 'react'
import { 
    useParams
} from 'react-router-dom'

const UserProfile = () => {
    const { id } = useParams();
    useEffect(() => {
        // const id = 
        console.log(window.location)
    }, [])
    return (
        <div>
            <h1>UserProfile</h1>
            <p>用户ID: {id}</p>
        </div>
    )
}

export default UserProfile