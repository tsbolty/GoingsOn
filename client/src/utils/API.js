export default {
	getAllBusinessInfo: () => fetch("/api/allBusinessInfo/get"),
	getUserBusinessInfo: (email) =>
		fetch(`/api/allBusinessInfo/get/email/${email}`),
	createNewUser: (email, profileInfo, mapAddress) =>
		fetch("/api/allBusinessInfo/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				businessName: profileInfo.businessName,
				businessAddress: profileInfo.businessAddress,
				businessType: profileInfo.businessType,
				businessHeadline: profileInfo.businessHeadline,
				mapsLink: `https://www.google.com/maps/search/?api=1&${mapAddress}`
			})
		})
};
