import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
	const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
	const [id, setId] = useState("");

	useEffect(() => {
		user &&
			fetch(`/api/allBusinessInfo/get/email/${user.email}`)
				.then((res) => res.json())
				.then((data) => setId(data._id))
				.catch((err) => console.log("fuck"));
	}, [user]);

	return (
		<div className='navbar'>
			{!isAuthenticated ? (
				<>
					<button onClick={() => loginWithRedirect({})}>Log in</button>
					<li className='navbar-links'>
						<Link to='/'>Home</Link>
					</li>
				</>
			) : (
				<>
					<button onClick={() => logout()}>Log out</button>
					<ul>
						<li className='navbar-links'>
							<Link to='/'>Home</Link>
						</li>
						<li className='navbar-links'>
							<Link to='/createbusinessprofile'>Create Profile</Link>
						</li>
						<li className='navbar-links'>
							<Link to={`/editbusinessprofile/${id}`}>Edit Profile</Link>
						</li>
						<li className='navbar-links'>
							<Link to='/viewbusinessprofile'>View Profile</Link>
						</li>
					</ul>
				</>
			)}
		</div>
	);
};

export default NavBar;
