import React from 'react';
import Goal from './Goal'

export default function Goals({goals, onDelete}) {
    return (
        <div className="goals-div">
            {goals.map((goal, index) => {
                return <Goal key={goal.id} goal={goal} onDelete={onDelete} />
            })}
        </div>
    )
}