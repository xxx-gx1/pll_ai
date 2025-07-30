import styles from './imageCard.module.css'
import {
    useRef,
    useEffect,
} from 'react'
const ImageCard = (props) => {
    const {
        height,
        url,
    } = props
    const imgRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry],obs) => {
            if(entry.isIntersecting) {
                const img = entry.target;
                const oImg = document.createElement('img')
                oImg.onload = () => {
                    img.src = img.dataset.src;
                }
                // img.src = img.dataset.src || '';
                obs.unobserve(img);
            }
        })
        if(imgRef.current) {
            observer.observe(imgRef.current)
        }
    },[])
    return (
        <div className={styles.card} style={{height}}>
            <img ref={imgRef} src={url} className={styles.img} />
        </div>
    )
}

export default ImageCard