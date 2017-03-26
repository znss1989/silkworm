import React from 'react'
import Plan from './Plan'

const PlanListView = (props) => {
    return (
        <ul>
            {props.planList.map((plan, index) => {
                return (<Plan key={plan.planID} plan={plan} onDelete={props.onDelete}/>);
            })}
        </ul>
    );
};

export default PlanListView;