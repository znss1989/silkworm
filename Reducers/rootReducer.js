import {combineReducers} from 'redux'
import plans from './plans'
import currentPlanIndex from './currentPlanIndex'

const rootReducer = combineReducers({
    plans, currentPlanIndex
});

export default rootReducer;