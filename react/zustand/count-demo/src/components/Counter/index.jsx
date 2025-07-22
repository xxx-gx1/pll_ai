// 来自store
import { useCounterStore } from '../../store/count'
const Counter = () => {
    const { 
        count,
        increment,
        decrement,
    } = useCounterStore()
    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Counter