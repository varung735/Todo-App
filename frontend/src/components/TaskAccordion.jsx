import React, { useState } from 'react'

function TaskAccordion({todos}) {

  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <div className="task-div">
        <div className="task-title">
            <h1 className="task-heading">{todos}</h1>
            <img src="/images/plus.svg" alt="plus.svg" className='plus-img' onClick={(event) => {setShowAccordion(!showAccordion)}}/>
        </div>

        {/* small tasks which we'll populate from tasks array from task model. */}
        {showAccordion && <div className="task-accordian">
            <h3 className="task"><input type="checkbox" /> task-1</h3>
                <h3 className="task"><input type="checkbox" /> task-2</h3>
                <h3 className="task"><input type="checkbox" /> task-3</h3>
                <h3 className="task"><input type="checkbox" /> task-4</h3>
                <h3 className="task"><input type="checkbox" /> task-5</h3>
                <h3 className="task"><input type="checkbox" /> task-6</h3>
            </div>}
    </div>
  )
}

export default TaskAccordion