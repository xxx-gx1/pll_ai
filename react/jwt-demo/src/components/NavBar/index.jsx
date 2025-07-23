import { Link } from 'react-router-dom'
import { useUserStore } from '../../store/user';
const NavBar = () => {
    const {isLogin,Logout,user} = useUserStore();
    console.log(isLogin,user,'//////')
    return (
        <nav style={{
            padding:'10px',
            borderBottom:'1px solid #ccc',
            }}>
            <Link to="/">首页</Link>&nbsp;&nbsp;
            <Link to="/pay">支付</Link>&nbsp;&nbsp;
            {isLogin ? (
                <>
                    <span>欢迎:{user.username}</span>
                    <button onClick={Logout}>退出</button>
                </>
            ) : (
                <Link to="/login">登录</Link>
            )}
        </nav>
    )
}
export default NavBar;