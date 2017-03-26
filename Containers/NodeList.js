import React from 'react'
import {connect} from 'react-redux'
import NodeListView from '../Components/NodeListView'

const mapStateToProps = (state) => {
    // convert nodes into array for rendering
    console.log("In NodeList:");
    let currentPlanID = state.plans.currentPlanID;
    let currentPlan = state.plans[currentPlanID];
    console.log(currentPlan.nodes);
    return {nodeList: currentPlan.nodes};
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const NodeList = connect(
    mapStateToProps,
    mapDispatchToProps
)(NodeListView);

export default NodeList;