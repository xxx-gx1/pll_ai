import { useTodosStore } from '../../store/todos'
const TodoList = () => {
    const { 
        todos,
        toggleTodo,
        deleteTodo,
        addTodo,
    } = useTodosStore()
    return (
        <div>
            <h1>TodoList</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}   
export default TodoList
