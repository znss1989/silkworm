import React from 'react'
import AddPlan from '../Containers/AddPlan'
import PlanList from '../Containers/PlanList'

const Plans = (props) => {
    return (
        <section>
            <h2>Plans Section</h2>
            <AddPlan />
            <PlanList />
        </section>
    );
};

export default Plans;