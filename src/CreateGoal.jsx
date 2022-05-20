import React from 'react';

export default function CreateGoal({ addGoal, titleRef, contentRef }) {
  return (
      <div className="add-goal">
        <input ref={titleRef} type="text" placeholder="Title" />
        <textarea ref={contentRef} rows="4" placeholder="Keep your goal..." />
        <button onClick={addGoal} className="float-button">+</button>
      </div>
  )
}
