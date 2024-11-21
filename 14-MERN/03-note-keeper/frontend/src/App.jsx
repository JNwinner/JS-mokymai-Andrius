import { useState, useEffect } from 'react';
import ToDoItem from './components/ToDoItem';
import ToDoForm from './components/ToDoForm';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState('newest');

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3006/notes');
      const sortedTodos = response.data.sort((a, b) =>
        sortOrder === 'newest'
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date)
      );
      setTodos(sortedTodos);
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = async (todo) => {
    try {
      const response = await axios.post('http://localhost:3006/notes', todo); 
      setTodos([...todos, response.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/notes/${id}`);
      const newTodos = todos.filter((todo) => todo._id !== id);
      setTodos(newTodos);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTodo = async (updatedTodo) => {
    try {
      const response = await axios.put(`http://localhost:3006/notes/${updatedTodo._id}`, updatedTodo);
      const newTodos = todos.map((todo) => (todo._id === updatedTodo._id ? response.data : todo));
      setTodos(newTodos);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'newest' ? 'oldest' : 'newest'));
  };

  useEffect(() => {
    fetchTodos();
  }, [sortOrder]); // Refetch when sortOrder changes

  return (
    <>
      <div className="header-container">
        <h1 className='header-h1'>Note Keeper App</h1>
        {todos.length > 0 && (
          <button
            className="toggle-sort-button"
            onClick={toggleSortOrder}
          >
            Sort by {sortOrder === 'newest' ? 'newest' : 'oldest'}
          </button>
        )}
      </div>
      <ToDoForm addTodo={addTodo} />

      <div className='notes-container' style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {todos.map((todo) => (
          <ToDoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))}
      </div>
      
    </>
  );
}

export default App;