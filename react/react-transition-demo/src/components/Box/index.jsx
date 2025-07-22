import styles from './box.module.css'
// css in js
import { useState } from 'react'
const Box = () => {
    const [open, setOpen] = useState(false)
    return (
    <div>
        <button onClick={() => setOpen(!open)}>
            {open ? '关闭' : '打开'}
        </button>
        <div className={`${styles.box} ${open ? styles.open : ''}`}>
        </div>
    </div>
    )
}
export default Box