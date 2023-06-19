import { initialState } from "./state";
import { SET_JOB, SET_NAME, SET_SALARY } from "./constants";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case SET_SALARY:
      return {
        ...state,
        salary: action.payload,
      };
    default:
      return state;
  }
};
