import AppConstants from './AppConstants'
import generateIDUtil from './generateIDUtil'

const ActionCreators = {
    createPlan: (title, brief) => {
        return {
            type: AppConstants.CREATE_PLAN,
            planID: generateIDUtil(),
            title,
            brief
        };
    },
    removePlan: (planID) => {
        return {
            type: AppConstants.REMOVE_PLAN,
            planID
        };
    },
    selectPlan: (planID) => {
        return {
            type: AppConstants.SELECT_PLAN,
            planID
        };
    },
    // swapPlans: (sourcePlanID, targetPlanID) => {
    //     return {
    //         type: AppConstants.SWAP_PLAN,
    //         sourcePlanID, 
    //         targetPlanID
    //     };
    // },
    editPlan: (planID, title, brief) => {
        return {
            type: AppConstants.EDIT_PLAN,
            planID,
            title,
            brief
        };
    },
    toggleplan: (planID) => {
        return {
            type: AppConstants.TOGGLE_PLAN,
            planID
        };
    },
    sharePlan: (planID) => {
        return {
            type: AppConstants.SHARE_PLAN,
            planID
        };
    },
    createNode: (content) => {
        return {
            type: AppConstants.CREATE_NODE,
            nodeID: generateIDUtil(),
            content
        };
    },
    removeNode: (nodeID) => {
        return {
            type: AppConstants.REMOVE_NODE,
            nodeID
        };
    },
    swapNode: (sourceNodeID, targetNodeID) => {
        return {
            type: AppConstants.SWAP_NODE,
            sourceNodeID,
            targetNodeID
        };
    },
    editNode: (nodeID, content) => {
        return {
            type: AppConstants.EDIT_NODE,
            nodeID,
            content
        };
    },
    toggleNOde: (nodeID) => {
        return {
            type: AppConstants.TOGGLE_NODE,
            nodeID
        };
    }
};

export default ActionCreators;



