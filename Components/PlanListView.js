import React from 'react'
import Plan from './Plan'

const PlanListView = (props) => {
    return (
        <ul>
            {props.planList.map((plan, index) => {
                return (<Plan key={plan.title+index} />);
            })}
        </ul>
    );
};

export default PlanListView;