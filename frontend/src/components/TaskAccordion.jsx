import React, { useState } from 'react'

function TaskAccordion({title, tasks}) {
  const [showAccordion, setShowAccordion] = useState(false);
  const [task, setTask] = useState(... [tasks]);
  console.log(task);
  
  const setCheckValue = (value) => {
    value ? document.getElementById("checkbox").defaultChecked() : document.getElementById("checkbox");
  }

  // let checkbox = React.createElement('input', {
  //   type: 'checkbox',
  //   checked: true,
  //   value: task.isDone
  // })

  return (
    <div className="task-div">
        <div className="task-title">
            <h1 className="task-heading">{title}</h1>
            <img src="/images/plus.svg" alt="plus.svg" className='plus-img' onClick={(event) => {setShowAccordion(!showAccordion)}}/>
        </div>

        {/* small tasks which we'll populate from tasks array from task model. */}
        {showAccordion && <div className="task-accordian">
            {task && task.map((task) => {
                console.log(task.isDone); 
                return <h3 className="task"><input type="checkbox" id='checkbox' defaultChecked={task.isDone}/> {task.taskTitle}</h3>
              })
            }
            
            </div>}
    </div>
  )
}

export default TaskAccordion