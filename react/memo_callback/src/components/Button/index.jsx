import { useEffect,memo } from "react";

const Button = ({num}) => {
    useEffect(() => {
        console.log('Button useEffect');
    },[num])
    console.log('Button render');
    return (
        <button>{num}click me</button>
    )
}
// 高阶组件
export default memo(Button)