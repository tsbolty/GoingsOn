import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";
// OLD ONE const baseURL = "https://ancient-caverns-48527.herokuapp.com/";
// const baseURL = "http://localhost:3001/";
const baseURL = "https://aqueous-hollows-16225.herokuapp.com/";

// Register User
export const registerUser = (userData, history) => (dispatch) => {
	// fetch(baseURL + "api/users/register", {
	// 	method: "POST",
	// 	mode: "same-origin",
	// 	credentials: "include",
	// 	headers: {
	// 		"Content-Type": "application/json"
	// 	},
	// 	body: JSON.stringify(userData)
	// })
	axios
		.post(
			"https://aqueous-hollows-16225.herokuapp.com/api/users/register",
			userData
		)
		.then((res) => history.push("/login")) // re-direct to login on successful register
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};
// Login - get user token
export const loginUser = (userData) => (dispatch) => {
	// fetch(baseURL + "api/users/login", {
	// 	method: "POST",
	// 	body: JSON.stringify(userData)
	// })
	axios
		.post(
			"https://aqueous-hollows-16225.herokuapp.com/api/users/login",
			userData
		)
		.then((res) => {
			// Save to localStorage
			// Set token to localStorage
			const { token } = res.data;
			localStorage.setItem("jwtToken", token);
			// Set token to Auth header
			setAuthToken(token);
			// Decode token to get user data
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};
// Set logged in user
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};
// User loading
export const setUserLoading = () => {
	return {
		type: USER_LOADING
	};
};
// Log user out
export const logoutUser = () => (dispatch) => {
	// Remove token from local storage
	localStorage.removeItem("jwtToken");
	// Remove auth header for future requests
	setAuthToken(false);
	// Set current user to empty object {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
};
