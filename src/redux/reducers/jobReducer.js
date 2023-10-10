import { FETCH_JOBS_SUCCESS, FETCH_JOB_DETAIL_SUCCESS } from "../actionType/actionType";

const initialState = {
    jobs: [],
    job: null,
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_JOBS_SUCCESS:
        return {
          ...state,
          jobs: action.payload,
        };
      case FETCH_JOB_DETAIL_SUCCESS:
        return {
          ...state,
          job: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  