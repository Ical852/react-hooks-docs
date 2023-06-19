import { SET_JOB, SET_NAME, SET_SALARY } from "./constants";

export const setName = (payload) => ({
  type: SET_NAME,
  payload,
});
export const setJob = (payload) => ({
  type: SET_JOB,
  payload,
});
export const setSalary = (payload) => ({
  type: SET_SALARY,
  payload,
});
