import { 
    // 响应式状态hooks
    useState   // react 函数式编程 好用的以use 开头的函数
 } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todos = () => {
    // 数据流管理
    // 父组件持有管理数据 props 传递数据 子组件通过propes 自定义函数
    // 通知父组件
    const [todos,setTodos] = useState([
        {
            id:1,
            title:'唱',
            isComplete:false
        },
        {
            id:2,
            title:'跳',
            isComplete:false
        },
        {
            id:3,
            title:'rap',
            isComplete:true
        },
        {
            id:4,
            title:'篮球',
            isComplete:true
        }
    ]);
    // 新增todo
    const addTodo = (todo) => {
        setTodos([...todos,todo]);
    }

    return (
        <div className='app'>
            Todos
            {/* 自定义事件 */}
            <TodoForm onAddTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )
}

export default Todos