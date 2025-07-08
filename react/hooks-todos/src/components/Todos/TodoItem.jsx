const TodoItem = (props) => {
    const {
        id,
        text,
        isComplete,
    } = props.todo;
    const {
        onToggle,
        onDelete,
    } = props;
    
    return (
        <div>
            <div className="todo-item">
                <input 
                    type="checkbox"
                    checked={isComplete}
                    onChange={onToggle}
                 />
                <span className={isComplete ? 'complete' : ''}>{text}</span>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
