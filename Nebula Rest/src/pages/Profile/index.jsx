import { 
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Image, 
  Cell, 
  CellGroup, 
  ActionSheet, 
  Loading,
  Grid,
  GridItem,
  Button,
} from 'react-vant'
import { 
  ServiceO, 
  FriendsO, 
  StarO, 
  SettingO, 
  GuideO,
  CartO, 
  ChatO, 
  FireO, 
  LikeO, 
  Search, 
  Edit,
  CouponO,
  ClockO,
  VipCardO,
  ShopO,
} from '@react-vant/icons'
import { useUserStore } from '@/store/user';
import styles from './profile.module.css';

const Profile = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [isGeneratingAvatar, setIsGeneratingAvatar] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nickname: '姑息',
    level: '5级',
    slogan: '保持热爱，奔赴山海。',
    avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    points: 1280,
    badges: ['睡眠达人', '早起之星', '打卡王者']
  });
  
  const gridData = [
    { icon: <CartO />, text: '购物车', color: '#0fbcf9' },
    { icon: <ChatO />, text: '睡眠助手', color: '#05c46b' },
    { icon: <FireO />, text: '热门', color: '#ff6b6b' },
    { icon: <LikeO />, text: '喜欢', color: '#ff7979' },
    { icon: <StarO />, text: '收藏', color: '#fbc531' },
    { icon: <Search />, text: '搜索', color: '#7ed6df' },
  ];
  
  const actions = [
    {
      name: '随机头像',
      color: '#1e90ff',
      type: 1
    },
    {
      name: '上传头像',
      color: '#ff4757',
      type: 2
    }
  ];
  const { Logout } = useUserStore();
  const navigate = useNavigate();

  // 添加退出登录处理函数
  const handleLogout = () => {
    Logout();
    navigate('/login');
  };
  
  const handleAction = async (e) => {
    setShowActionSheet(false);
    
    if (e.type === 1) {
      // AI 生成头像
      setIsGeneratingAvatar(true);
      try {
        // 模拟AI生成过程
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // 生成新头像
        const newAvatar = `https://picsum.photos/200?${Math.random()}`;
        setUserInfo(prev => ({ ...prev, avatar: newAvatar }));
        
      } catch (error) {
        
      } 
    } else if (e.type === 2) {
      // 图片上传
      
    }
  };
  
  const handleEditProfile = () => {
    alert('编辑资料功能暂未实现');
  };
  
  const handleBadgeClick = (badge) => {
    alert(`${badge}徽章详情暂未实现`);
  };
  // 添加通用的功能未实现提示函数
  const handleFeatureNotImplemented = (featureName) => {
    alert(`${featureName}功能暂未实现`);
  };

  return (
    <div className={styles.container}>
      {/* 顶部用户信息卡片 */}
      <div className={styles.userCard}>
        <div className={styles.userHeader}>
          <div className={styles.avatarContainer}>
            <Image 
              round
              width="80px"
              height="80px"
              src={userInfo.avatar}
              className={styles.avatar}
              onClick={() => setShowActionSheet(true)}
            />
            {isGeneratingAvatar && (
              <div className={styles.loadingOverlay}>
                <Loading type="spinner" color="#fff" />
              </div>
            )}
          </div>
          
          <div className={styles.userInfo}>
            <div className={styles.topRow}>
              <h2 className={styles.nickname}>{userInfo.nickname}</h2>
              <Edit className={styles.editIcon} onClick={handleEditProfile} />
            </div>
            
            <div className={styles.level}>
              <VipCardO /> {userInfo.level} · {userInfo.points}积分
            </div>
            
            <p className={styles.slogan}>{userInfo.slogan}</p>
          </div>
        </div>
        
        {/* 徽章展示 */}
        <div className={styles.badgesContainer}>
          <h3 className={styles.sectionTitle}>我的徽章</h3>
          <div className={styles.badges}>
            {userInfo.badges.map((badge, index) => (
              <div 
                key={index} 
                className={styles.badge}
                onClick={() => handleBadgeClick(badge)}
              >
                <StarO className={styles.badgeIcon} />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 功能网格 */}
      <div className={styles.gridContainer}>
        <Grid columnNum={3} border={false}>
          {gridData.map((item, index) => (
            <GridItem 
              key={index} 
              icon={item.icon} 
              text={item.text}
              className={styles.gridItem}
              iconColor={item.color}
              onClick={() => {
                if (item.text === '睡眠助手') {
                  navigate(`/chat`);
                }else if (item.text === '搜索') {
                  navigate(`/stories`);
                }else{
                  handleFeatureNotImplemented(item.text);
                }
              }}
            />  
          ))}
        </Grid>
      </div>
      
      {/* 设置区域 */}
      <div className={styles.settings}>
        <CellGroup >
          <Cell title="会员中心" icon={<VipCardO />} isLink onClick={() => handleFeatureNotImplemented('会员中心')}/>
          <Cell title="睡眠报告" icon={<ClockO />} isLink onClick={() => navigate('/record')}/>
          <Cell title="我的服务" icon={<ServiceO />} isLink onClick={() => handleFeatureNotImplemented('我的服务')}/>
        </CellGroup>
        
        <CellGroup  className={styles.cellGroup}>
          <Cell title="我的足迹" icon={<GuideO  />} isLink onClick={() => handleFeatureNotImplemented('我的足迹')}/>
          <Cell title="睡眠社区" icon={<FriendsO />} isLink onClick={() => handleFeatureNotImplemented('睡眠社区')}/>
          <Cell title="积分商城" icon={<ShopO  />} isLink onClick={() => handleFeatureNotImplemented('积分商城')}/>
        </CellGroup>
        
        <CellGroup  className={styles.cellGroup}>
          <Cell title="优惠券" icon={<CouponO />} isLink onClick={() => handleFeatureNotImplemented('优惠券')}/>
          <Cell title="设置" icon={<SettingO />} isLink onClick={() => handleFeatureNotImplemented('设置')}/>
        </CellGroup>
        <div className={styles.logoutButtonContainer}>
          <Button
            type="danger"
            onClick={handleLogout}
            className={styles.logoutButton}
          >
            退出登录
          </Button>
        </div>
      </div>
      
      <ActionSheet
        visible={showActionSheet}
        actions={actions}
        cancelText="取消"
        onCancel={() => setShowActionSheet(false)}
        onSelect={handleAction}
        description="选择头像操作"
      />
    </div>
  )
}

export default Profile
