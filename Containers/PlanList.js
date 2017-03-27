import React from 'react'
import {connect} from 'react-redux'
import ActionCreators from '../Actions/ActionCreators'
import PlanListView from '../Components/PlanListView'

const mapStateToProps = (state) => {
    // convert plans into array for rendering
    let planList = [];
    for (let key in state.plans) {
        if (key === "currentPlanID") {
            continue;
        }
        planList.push(state.plans[key]);
    }
    return {planList}; // destructuring from props
};

const mapDispatchToProps = (dispatch) => {
  return {
      onEditPlan: (planID, title, brief) => {
          dispatch(ActionCreators.editPlan(planID, title, brief));
      },
      onSelect: (planID) => {
          dispatch(ActionCreators.selectPlan(planID));
      },
      onToggleStatus: (planID) => {
          dispatch(ActionCreators.toggleplan(planID));
      },
      onDelete: (planID) => {
          dispatch(ActionCreators.removePlan(planID));
    }
  };
};

const PlanList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlanListView);

export default PlanList;