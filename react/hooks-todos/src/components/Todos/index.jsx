import { 
    // 响应式状态hooks
    useState,   // react 函数式编程 好用的以use 开头的函数
    useEffect
 } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { useTodos } from '@/hooks/useTodos.js'

const Todos = () => {

    const {
        todos,
        addTodo,
        onDelete,
        onToggle,
    } = useTodos();
    // 数据流管理
    // 父组件持有管理数据 props 传递数据 子组件通过propes 自定义函数
    // 通知父组件
    //     [
    //     {
    //         id:1,
    //         text:'唱',
    //         isComplete:false
    //     },
    //     {
    //         id:2,
    //         text:'跳',
    //         isComplete:false
    //     },
    //     {
    //         id:3,
    //         text:'rap',
    //         isComplete:false
    //     },
    //     {
    //         id:4,
    //         text:'篮球',
    //         isComplete:false
    //     }
    // ]




    
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