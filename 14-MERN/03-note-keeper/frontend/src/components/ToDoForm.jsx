import { useState } from 'react';
import './TodoForm.css';
import RiseLoader from "react-spinners/BeatLoader";

const TodoForm = ({ addTodo }) => {
    const [tittle, setTittle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState(''); // Add this line
    const [content, setContent] = useState('');
    const [status, setStatus] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(async () => {
          await addTodo({
            tittle,
            date,
            time, // Add this line
            content,
            status,
          });
          setTittle('');
          setDate('');
          setTime(''); // Add this line
          setContent('');
          setStatus(false);
          setIsSubmitting(false);
          setIsFormVisible(false); // Hide form after submission
        }, 2000); // delay of 2 seconds
      };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
       <>
         <button className='todo' onClick={toggleFormVisibility}>
            {isFormVisible ? 'Hide Form' : 'Add Todo'}
         </button>

         {isFormVisible && (
            <div className="form-container">
                <h1>Add Todo</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="tittle"></label>
                    <input
                        type="text"
                        value={tittle}
                        onChange={(e) => setTittle(e.target.value)}
                        placeholder="Tittle"
                        required
                        id='tittle'
                    />
                    <label htmlFor="date"></label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                    <label htmlFor="time"></label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        step="1"
                        required
                    />
                    <br />
                    <label htmlFor="content">Describe ToDo:</label>
                    <br />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Content"
                        id="content"
                        rows= "5"
                        cols="50"
                        required
                    />
                    <br />
                    <button type="submit" className='todo'>
                        {isSubmitting ? <RiseLoader color={"#edec3a"} loading={isSubmitting} size={15} /> : 'Add Todo'}
                    </button>
                </form>
            </div>
         )}
       </> 
    );
}

export default TodoForm;