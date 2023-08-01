import { SET_PRODUCT_STATUS } from '../utils/type'


const initialState = {
    products : []
  };
  
  const orderManagementReducer= (state = initialState, action) => {
    switch (action.type) {
      case SET_PRODUCT_STATUS:
        return {
          ...state,
          products: action.data
        };
      default:
        return state;
    }
  };
  
  export default orderManagementReducer;