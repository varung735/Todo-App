import React, { useState } from 'react';
import axios from "axios";

function TaskAccordion({id, title, tasks}) {
  const [showAccordion, setShowAccordion] = useState(false);
  const [task, setTask] = useState(...[tasks]);
  
  const deleteTodo = async (id) => {
    try {
      const deletedTodo = await axios.delete("/todos/deleteTodo/" + id);
      console.log(deletedTodo);
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <div className="task-div">
        <div className="task-title">
            <h1 className="task-heading">{title}</h1>
            <div className="acc-controls">
              <img src="/images/edit.svg" alt="edit.svg" className='plus-img' />
              <img src="/images/delete.svg" alt="delete.svg" className='plus-img' onClick={(event) => {deleteTodo(id)}}/>
              <img src="/images/plus.svg" alt="plus.svg" className='plus-img' onClick={(event) => {setShowAccordion(!showAccordion)}}/>
            </div>
        </div>

        {/* small tasks which we'll populate from tasks array from task model. */}
        {showAccordion && <div className="task-accordian">
            {task && task.map((task) => {
                return <h3 className="task"><input type="checkbox" id='checkbox' defaultChecked={task.isDone}/> {task.taskTitle}</h3>
              })
            }
            
            </div>}
    </div>
  )
}

export default TaskAccordion