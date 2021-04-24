const baseURL = "https://ancient-caverns-48527.herokuapp.com/";
// const baseURL = "http://localhost:3001/";

export default {
	createUser: (user) =>
		fetch(baseURL + "/api/user/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(user)
		}),
	userLogin: (user) =>
		fetch(baseURL + "/api/user/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(user)
		}),
	getAllBusinessInfo: () => fetch(baseURL + "api/allBusinessInfo/get"),
	getUserBusinessInfo: (id) => fetch(baseURL + `api/users/get/${id}`),
	updateBusinessInfo: (businessInfo, id) =>
		fetch(baseURL + `api/allBusinessInfo/update/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(businessInfo)
		}),
	createNewBusiness: (email, profileInfo, mapAddress, id) =>
		fetch(baseURL + "api/allBusinessInfo/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id,
				email: email,
				businessName: profileInfo.businessName,
				businessAddress: profileInfo.businessAddress,
				businessType: profileInfo.businessType,
				businessHeadline: profileInfo.businessHeadline,
				mapsLink: `https://www.google.com/maps/search/?api=1&${mapAddress}`,
				weeklySpecials: profileInfo.weeklySpecials
			})
		}),
	createSpecialEvent: (event, email) =>
		fetch(baseURL + `api/specialevents/post/${email}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				...event,
				email
			})
		}),
	createWeeklySpecials: (weeklySpecials, email) =>
		fetch(baseURL + `api/weeklySpecials/add/${email}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email,
				...weeklySpecials
			})
		}),
	createDaySpecials: (email, day, daySpecials) =>
		fetch(baseURL + `api/dailySpecials/post/${email}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				day: day,
				foodSpecialHeading: daySpecials.foodSpecialHeading,
				foodSpecialDescription: daySpecials.foodSpecialDescription,
				drinkSpecialHeading: daySpecials.drinkSpecialHeading,
				drinkSpecialDescription: daySpecials.drinkSpecialDescription
			})
		}),
	getSingleDaySpecials: (day) =>
		fetch(baseURL + `api/dailySpecials/get/${day}`),
	deleteSingleDaySpecials: (id) =>
		fetch(baseURL + `api/dailySpecials/delete/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		}),
	createHappyHour: (data) =>
		fetch(baseURL + "api/happyhour/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}),
	getHappyHour: () => fetch(baseURL + "api/happyhour/get"),
	deleteHappyHour: (id) =>
		fetch(baseURL + `api/happyhour/delete${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
};
