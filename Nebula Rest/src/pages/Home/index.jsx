import { 
  useRef,
  useEffect
} from 'react';
import { 
  useNavigate 
} from 'react-router-dom';
import { 
  StarO, 
  Play, 
  Pause, 
  ArrowLeft,
  Arrow
 } from '@react-vant/icons';
import styles from './home.module.css';
import  useTitle from '@/hooks/useTitle';
import useMusicStore from '@/store/musicStore';
import { 
  formatTime, 
  parseTime 
} from '@/utils/index';

const Home = () => {
  const navigate = useNavigate();
  useTitle('首页');
  const timerRef = useRef(null);

  const {
    songs,
    currentSongIndex,
    isPlaying,
    progress,
    currentTime,
    togglePlay,
    prevSong,
    nextSong,
    setProgress,
    setCurrentTime
  } = useMusicStore();
  const currentSong = songs[currentSongIndex];

  // 处理播放/暂停时的定时器
  useEffect(() => {
    if (isPlaying) {
      // 启动定时器，每秒更新进度
      timerRef.current = setInterval(() => {
        const totalSeconds = parseTime(currentSong.duration);
        const currentSeconds = parseTime(currentTime);

        if (currentSeconds >= totalSeconds) {
          // 播放结束，自动下一首
          nextSong();
          return;
        }

        // 计算新进度和时间
        const newSeconds = currentSeconds + 1;
        const newProgress = (newSeconds / totalSeconds) * 100;

        // 更新状态
        setCurrentTime(formatTime(newSeconds));
        setProgress(newProgress);
      }, 1000);
    } else if (timerRef.current) {
      // 暂停时清除定时器
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // 组件卸载时清除定时器
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, currentTime, currentSong.duration, nextSong, setProgress, setCurrentTime]);
  // 跳转到播放详情页
  const goToPlayer = () => {
    navigate('/player');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>晚安，好梦</h1>
        <p>让音乐带你进入甜美的梦乡</p>
      </div>

      <div className={styles.player} onClick={goToPlayer}>
        <div className={styles.moonIconContainer}>
          <StarO className={styles.moonIcon} />
        </div>
        <h2 className={styles.playerTitle}>{currentSong?.title}</h2>
        <p className={styles.playerSubtitle}>{currentSong?.artist}</p>

        <div className={styles.controls}>
          <button className={styles.controlButton} onClick={(e) => { e.stopPropagation(); prevSong(); }}>
            <ArrowLeft size={20} />
          </button>
          <button className={`${styles.controlButton} ${styles.playButton}`} onClick={(e) => { e.stopPropagation(); togglePlay(); }}>
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className={styles.controlButton} onClick={(e) => { e.stopPropagation(); nextSong(); }}>
            <Arrow size={20} />
          </button>
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${progress}%` }}></div>
        </div>
        <div className={styles.timeInfo}>
          <span>{currentTime}</span>
          <span>{currentSong?.duration}</span>
        </div>
      </div>

      <h2 className={styles.recommendationTitle}>为你推荐</h2>
      <div className={styles.recommendationList}>
        <div className={styles.recommendationItem} onClick={() => navigate('/player?song=wave')}>
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="轻柔海浪"
            className={styles.recommendationImage}
          />
          <div className={styles.recommendationContent}>
            <h3 className={styles.recommendationItemTitle}>轻柔海浪</h3>
            <p className={styles.recommendationItemDuration}>20分钟</p>
          </div>
        </div>
        <div className={styles.recommendationItem} onClick={() => navigate('/player?song=fire')}>
          <img
            src="https://images.unsplash.com/photo-1518176258769-f227c798150e"
            alt="温暖篝火"
            className={styles.recommendationImage}
          />
          <div className={styles.recommendationContent}>
            <h3 className={styles.recommendationItemTitle}>温暖篝火</h3>
            <p className={styles.recommendationItemDuration}>30分钟</p>
          </div>
        </div>
        <div className={styles.recommendationItem} onClick={() => navigate('/player?song=wind')}>
          <img
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
            alt="山间清风"
            className={styles.recommendationImage}
          />
          <div className={styles.recommendationContent}>
            <h3 className={styles.recommendationItemTitle}>山间清风</h3>
            <p className={styles.recommendationItemDuration}>25分钟</p>
          </div>
        </div>
        <div className={styles.recommendationItem} onClick={() => navigate('/player?song=rainforest')}>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="热带雨林"
            className={styles.recommendationImage}
          />
          <div className={styles.recommendationContent}>
            <h3 className={styles.recommendationItemTitle}>热带雨林</h3>
            <p className={styles.recommendationItemDuration}>40分钟</p>
          </div>
        </div>
        <div className={styles.recommendationItem} onClick={() => navigate('/player?song=waterfall')}>
          <img
            src="https://pic.616pic.com/photoone/00/05/72/618e25c5ab1e33537.jpg"
            alt="瀑布流水"
            className={styles.recommendationImage}
          />
          <div className={styles.recommendationContent}>
            <h3 className={styles.recommendationItemTitle}>瀑布流水</h3>
            <p className={styles.recommendationItemDuration}>35分钟</p>
          </div>
        </div>
        <div className={styles.recommendationItem} onClick={() => navigate('/player?song=birds')}>
          <img
            src="https://bpic.588ku.com/back_origin_min_pic/21/08/02/65c7d0b8bef1e5b120c0101d8ce5adf7.jpg!/fw/750/quality/99/unsharp/true/compress/true"
            alt="晨间鸟鸣"
            className={styles.recommendationImage}
          />
          <div className={styles.recommendationContent}>
            <h3 className={styles.recommendationItemTitle}>晨间鸟鸣</h3>
            <p className={styles.recommendationItemDuration}>15分钟</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;