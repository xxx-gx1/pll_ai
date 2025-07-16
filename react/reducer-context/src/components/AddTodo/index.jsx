import { 
    useContext ,// 私有
    useState,
} from 'react';
import { useTodoContext } from '../../hooks/useTodoContext';
const AddTodo = () => {
    const [text, setText] = useState('');
    const { addTodo } = useTodoContext(); // 跨层级
    const handleSubmit = (e) => {
        e.preventDefault();
        // 全局管理
        if (text.trim()) {
            addTodo(text.trim());
            setText('');
        }
    }
    return (
        <form  onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            <button type="submit">添加</button>
        </form>
    )
}

export default AddTodo;