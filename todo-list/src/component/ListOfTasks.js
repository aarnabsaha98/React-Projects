// ListOfTasks.jsx

import React from "react";

const ListOfTasks = ({ llistOFTasks, removeTask  }) => {

    return (
        <div className="task-list">
            {llistOFTasks.map((task, index) => (
                <div key={index} className="task-item">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="25" height="25"  
                    fill="#ff0000"  className="bi bi-check2-circle icon" 
                    viewBox="0 0 16 16" onClick={() => {
                        removeTask(index)
                    }}>
                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <label htmlFor={`task-${index}`} className="task-index">
                        {index + 1}
                    </label>
                    <span className="task-text">{task}</span>
                </div>
            ))}
        </div>
    );
};

export default ListOfTasks;
