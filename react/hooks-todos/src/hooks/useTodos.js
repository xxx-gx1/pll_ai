import {
    useState,
    useEffect
} from 'react'

export const useTodos = () => {
    const [todos,setTodos] = useState(JSON.parse(
        localStorage.getItem('todos')));
        
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


    useEffect(() => {
        // console.log('666');
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])
    return {
        todos,
        setTodos,
        addTodo,
        onDelete,
        onToggle,
    }
}


