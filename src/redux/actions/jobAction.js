import axios from 'axios';
import { FETCH_JOBS_SUCCESS, FETCH_JOB_DETAIL_SUCCESS } from '../actionType/actionType';

export const fetchJobs = (language) => async (dispatch) => {
  try {
    // Make a request to the GitHub Jobs API or your preferred job listing API
    const response = await axios.get(`https://jobs.api/?language=${language}`);

    // Dispatch a success action
    dispatch({
      type:FETCH_JOBS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error('Error fetching jobs:', error.message);
  }
};

export const fetchJobDetail = (jobId) => async (dispatch) => {
  try {
    // Make a request to the API to get job details
    const response = await axios.get(`https://jobs.api/job/${jobId}`);

    // Dispatch a success action
    dispatch({
      type:FETCH_JOB_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error('Error fetching job detail:', error.message);
  }
};
