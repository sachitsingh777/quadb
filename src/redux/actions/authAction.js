import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT } from '../actionType/actionType';

export const signupfun = (userData) => async (dispatch) => {
  try {
    // Simulate a successful signup without making an HTTP request
    const user = { email: userData.email }; // Replace this with your actual user data
    const token = 'yourAuthToken'; // Replace with your authentication token

    // Dispatch a success action for signup
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: user,
    });

    // Dispatch a success action for login
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });

    // Save the token to localStorage
    localStorage.setItem('token', token);
  } catch (error) {
    // Handle signup failure (e.g., show an error message)
    console.error('Signup failed:', error.message);
  }
};

export const loginfun = (email, password) => async (dispatch) => {
  try {
    // Simulate a successful login without making an HTTP request
    const user = { email }; // Replace this with your actual user data
    const token = 'yourAuthToken'; // Replace with your authentication token

    // Dispatch a success action for login
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });

    // Save the token to localStorage
    localStorage.setItem('token', token);
  } catch (error) {
    // Handle login failure (e.g., show an error message)
    console.error('Login failed:', error.message);
  }
};

export const logoutfun = () => (dispatch) => {
  // Clear the token from localStorage
  localStorage.removeItem('token');

  // Dispatch a logout action
  dispatch({
    type: LOGOUT,
  });
};
