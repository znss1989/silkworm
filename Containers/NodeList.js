import React from 'react'
import {connect} from 'react-redux'
import ActionCreators from '../Actions/ActionCreators'
import NodeListView from '../Components/NodeListView'

const mapStateToProps = (state) => {
    // convert nodes into array for rendering
    let currentPlanID = state.plans.currentPlanID;
    if (currentPlanID === '') {
        return {nodeList: []};
    }
    let currentPlan = state.plans[currentPlanID];
    return {nodeList: currentPlan.nodes};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (nodeID) => {
            console.log("onDelete about to run for: " + nodeID);
            dispatch(ActionCreators.removeNode(nodeID));
        }
    };
};

const NodeList = connect(
    mapStateToProps,
    mapDispatchToProps
)(NodeListView);

export default NodeList;