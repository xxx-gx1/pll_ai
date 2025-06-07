// 列表的渲染
function Todos(props) {
    // 父组件传过来的数据状态呢？传参
    const todos = props.todos;
    console.log(props,'/////')
    return (
        <ul>
        {
            todos.map( todo => (
                <li key={todo.id}>{todo.text}</li>
            ))
        }
        </ul>
    )
}

export default Todos;