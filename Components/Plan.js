import React from 'react'

const Plan = (props) => {
    return (
        <div>
            <h3 style={{textDecoration: props.plan.status ? 'line-through': 'none'}}>{props.plan.title}</h3>
            <p>{props.plan.brief}</p>
            <button onClick={() => props.onSelect(props.plan.planID)}>Select</button>
            <button onClick={() => props.onToggleStatus(props.plan.planID)}>Toggle</button>
            <button onClick={() => props.onDelete(props.plan.planID)}>Delete</button>
        </div>
    );
};

export default Plan;