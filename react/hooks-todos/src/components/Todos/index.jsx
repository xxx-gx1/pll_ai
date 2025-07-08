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
            text:'唱',
            isComplete:false
        },
        {
            id:2,
            text:'跳',
            isComplete:false
        },
        {
            id:3,
            text:'rap',
            isComplete:false
        },
        {
            id:4,
            text:'篮球',
            isComplete:false
        }
    ]);
    // 新增todo
    const addTodo = (text) => {
        // 数据状态是对象的时候 要给对象添加id
        setTodos([
            ...todos,
        {
            id:Date.now(),
            text,
            isComplete:false
        }]);
    }

    const onToggle = (id) => {
        // console.log(id);
        // todos 数组找到id 为id，isComplete  !isComplete
        // 响应式？ 返回一个全新的todos
        setTodos(todos.map(
            todo => todo.id === id 
            ? {...todo,isComplete:!todo.isComplete} 
            : todo
        ))

        // state 是对象或数组的时候
    }

    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className='app'>
            Todos
            {/* 自定义事件 */}
            <TodoForm onAddTodo={addTodo} />
            <TodoList 
                todos={todos} 
                onToggle={onToggle}
                onDelete={onDelete}
            />
        </div>
    )
}

export default Todos