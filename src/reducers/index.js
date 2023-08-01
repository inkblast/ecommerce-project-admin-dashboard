import { combineReducers } from 'redux';
import orderManagementReducer from './orderManagementReducer'

const rootReducer = combineReducers({
    product: orderManagementReducer,
});

export default rootReducer;