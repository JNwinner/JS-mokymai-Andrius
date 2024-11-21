import './TodoItem.css';
import { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
    const colors = ['salmon', '#f17c69', '#f169a8', '#69f196', '#f1db69', '#251f03', '#fcfbfb'];
    const [currentColor, setCurrentColor] = useState('#edec3a');
    const [isEditing, setIsEditing] = useState(false);
    const [editedTittle, setEditedTittle] = useState(todo.tittle);
    const [editedDate, setEditedDate] = useState(todo.date);
    const [editedTime, setEditedTime] = useState(todo.time); // Add this line
    const [editedContent, setEditedContent] = useState(todo.content);

    const handleClick = () => {
        if (!isEditing) {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setCurrentColor(randomColor);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedTittle(todo.tittle);
        setEditedDate(todo.date);
        setEditedTime(todo.time); // Add this line
        setEditedContent(todo.content);
    };

    const handleSave = () => {
        const updatedFields = {
            tittle: editedTittle,
            date: editedDate,
            time: editedTime, // Add this line
            content: editedContent,
        };
        updateTodo({ ...todo, ...updatedFields });
        setIsEditing(false);
    };

    return (
        <div
            className='todo-item'
            onClick={handleClick}
            style={{ backgroundColor: currentColor }}
        >
            {isEditing ? (
                <div className='edit-form'>
                    <input
                        type="text"
                        value={editedTittle}
                        onChange={(e) => setEditedTittle(e.target.value)}
                        placeholder="Tittle"
                        required
                    />
                    <input
                        type="date"
                        value={editedDate}
                        onChange={(e) => setEditedDate(e.target.value)}
                        required
                    />
                    <input
                        type="time"
                        value={editedTime}
                        onChange={(e) => setEditedTime(e.target.value)}
                        step='1'
                        required
                    />
                    <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        placeholder="Content"
                        rows="4"
                        cols="30"
                        required
                    />
                    <div className='edit-buttons'>
                        <button className='btn-save' onClick={handleSave}>Save</button>
                        <button 
                        className='btn-cancel'
                        onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            ) : (
                <>
                    <h2 style={{ color: currentColor === '#251f03' ? '#eded3a' : 'black' }}>{todo.tittle}</h2>
                    <p style={{ color: currentColor === '#251f03' ? '#eded3a' : 'black' }}>{todo.date} {todo.time}</p>
                    <p style={{ color: currentColor === '#251f03' ? '#eded3a' : 'black' }}>{todo.content}</p>
                    <button className='edit-btn' onClick={(e) => { e.stopPropagation(); handleEdit(); }}>Edit</button>
                    <button className='delete-btn' onClick={(e) => { e.stopPropagation(); deleteTodo(todo._id); }}>Delete</button>
                </>
            )}
        </div>
    );
};

export default TodoItem; 