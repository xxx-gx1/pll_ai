import { 
    memo,
    useEffect,
    useRef,
    useState,
    useMemo
} from 'react'
import {
    ArrowLeft,
    Close
} from '@react-vant/icons'
import styles from './search.module.css'
import { debounce } from '@/utils/index.js'

const SearchBox = (props) => {
    // /api 
    // 单向数据流
    // 子父通信
    const [query, setQuery] = useState('')
    const {handleQuery} = props
    // 1. 防抖
    // 2. useMemo 缓存闭包结果 否则会反复执行
    const handleQueryDebounce = useMemo(() => {
        return debounce(handleQuery, 300)
    }, [handleQuery])
    const handleChange = (e)  => {
        setQuery(e.currentTarget.value)
    }
    const displayStyle = {
        display: query ? 'block' : 'none'
    }
    useEffect(() => {
        console.log(query,'///////')
        handleQueryDebounce(query)
    }, [query])
    const clearQuery = () => {
        setQuery('')
        queryRef.current.value = '';
        queryRef.current.focus();
    }
    // 非受控组件
    const queryRef = useRef(null)
    return (
        <div className={styles.wrapper}>
           <ArrowLeft onClick={() => history.go(-1)} />
            <input 
                type="text" 
                className={styles.ipt}
                placeholder="搜索旅游相关"
                ref={queryRef}
                onChange={
                    handleChange
                }
            />
           <Close  onClick={clearQuery} style={displayStyle}/>
        </div>
    )
}
export default memo(SearchBox);
