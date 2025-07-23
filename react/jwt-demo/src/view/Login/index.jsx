import { useRef } from "react";
import {
    useUserStore
} from '../../store/user';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const {Login} = useUserStore();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        if(!username || !password){
            alert('请输入用户名或密码');
            return;
        }
        Login({username,password});
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">用户名：</label>
                <input 
                    type="text" 
                    id="username" 
                    ref={usernameRef} 
                    required
                    placeholder="请输入用户名" 
                />
                <label htmlFor="password">密码：</label>
                <input 
                    type="password" 
                    id="password" 
                    ref={passwordRef} 
                    required
                    placeholder="请输入密码" 
                />
                <button type="submit">登录</button>
            </form>
        </div>
    )
}
export default Login;