import React from 'react'
import Plan from './Plan'

const PlanListView = (props) => {
    return (
        <ul>
            {props.planList.map((plan) => {
                return (<Plan />);
            })}
        </ul>
    );
};

export default PlanListView;