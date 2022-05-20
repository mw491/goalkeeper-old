import React from 'react'

function Goal({goal, onDelete}) {
  const handleClick = () => {
    onDelete(goal.id);
  }
  return (
    <div className="goal">
        <p className="goal-title">{goal.title}</p>
        <p className="goal-content">{goal.content}</p>
        <br />
        <button onClick={handleClick} className="float-button delete-btn"></button>
    </div>
  )
}

export default Goal;