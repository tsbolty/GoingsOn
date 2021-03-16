import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ id }) => {
	return (
		<div className='navbar'>
			<>
				<button>Log in</button>
				<li className='navbar-links'>
					<Link to='/'>Home</Link>
				</li>
				<button>Log out</button>
				<ul>
					<li className='navbar-links'>
						<Link to='/'>Home</Link>
					</li>
					{/* ADD THESE COMMENTS BACK WHEN THE CREATE PROFILE IS DONE. THIS IS TO ENSURE THAT ANY USER ONLY CREATES A PROFILE ONCE. */}
					{/* {!id && ( */}
					<li className='navbar-links'>
						<Link to='/createbusinessprofile'>Create Profile</Link>
					</li>
					{/* )} */}
					<li className='navbar-links'>
						<Link to={`/editbusinessprofile/${id}`}>Edit Profile</Link>
					</li>
					<li className='navbar-links'>
						<Link to='/viewbusinessprofile'>View Profile</Link>
					</li>
				</ul>
			</>
		</div>
	);
};

export default NavBar;
