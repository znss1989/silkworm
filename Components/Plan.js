import React from 'react'

const Plan = (props) => {
    return (
        <div>
            <h3>{props.plan.title}</h3>
            <p>{props.plan.brief}</p>
            <button>Select</button>
            <button>Delete</button>
        </div>
    );
};

export default Plan;