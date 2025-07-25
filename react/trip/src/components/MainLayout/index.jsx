import {
    useState,
    useEffect
} from 'react';
import {
    Tabbar
} from 'react-vant';
import {
    HomeO,
    Search,
    FriendsO,
    SettingO,
    UserO
} from '@react-vant/icons';
import { 
    Outlet,
    useNavigate,
    useLocation
} from 'react-router-dom'

// 菜单栏配置
const tabs = [
    {title: '首页',icon: <HomeO/>,path: '/home'},
    {title: '特惠专区',icon: <Search/>,path: '/discount'},
    {title: '我的收藏',icon: <FriendsO/>,path: '/collection'},
    {title: '行程',icon: <SettingO/>,path: '/trip'},
    {title: '我的账户',icon: <UserO/>,path: '/account'}
]
const MainLayout = () => {
    const [active, setActive] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname,'/////');
        // es6的使用power
        const index = tabs.findIndex(tab => location.pathname.startsWith(tab.path));
        setActive(index);
    },[])
  return (
    <div 
    className='flex flex-col h-screen'
    style={{paddingBottom: '60px'}}
    >
      <div className='flex-1'>
        <Outlet />
      </div>
      {/* tabbar */}
      <Tabbar value={active} onChange={
        (key) => {
            setActive(key);
            navigate(tabs[key].path);
        }
      }>
        {tabs.map((item, index) => (
            <Tabbar.Item key={index} icon={item.icon}>
                {item.title}
            </Tabbar.Item>
        ))}
      </Tabbar>
    </div>
  )
}

export default MainLayout