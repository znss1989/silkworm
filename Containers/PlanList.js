import React from 'react'
import {connect} from 'react-redux'
import PlanListView from '../Components/PlanListView'

const mapStateToProps = (state) => {
    // convert plans into array for rendering
    console.log("state at PlanList: " + state);
    console.log(state);
    console.log(state.plans);
    let planList = [];
    console.log('LOOP BEGIN');
    for (let key in state.plans) {
        console.log(key);
        if (key === "currentPlanID") {
            console.log('sucessfully skipped');
            continue;
        }
        planList.push(state.plans[key]);
        console.log(state.plans[key]);
        console.log("pushed");
    }
    console.log(planList);
    return {planList}; // destructuring from props
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

const PlanList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlanListView);

export default PlanList;