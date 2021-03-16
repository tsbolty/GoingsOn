import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ id }) => {
	const styles = {
		navButton: {
			float: "left"
		}
	};
	return (
		<div className='navbar'>
			<>
				<li className='navbar-links' style={styles.navLinks}>
					<Link to='/'>Home</Link>
				</li>
				<li className='navbar-links' style={styles.navLinks}>
					<Link
						to='/register'
						style={{
							width: "140px",
							borderRadius: "3px",
							letterSpacing: "1.5px"
						}}
						className='btn btn-large waves-effect waves-light hoverable blue accent-3'>
						Register
					</Link>
				</li>
				<li className='navbar-links' style={styles.navLinks}>
					<Link
						to='/login'
						style={{
							width: "140px",
							borderRadius: "3px",
							letterSpacing: "1.5px"
						}}
						className='btn btn-large btn-flat waves-effect white black-text'>
						Log In
					</Link>
				</li>

				<ul>
					<li className='navbar-links' style={styles.navLinks}>
						<Link to='/'>Home</Link>
					</li>
					{/* ADD THESE COMMENTS BACK WHEN THE CREATE PROFILE IS DONE. THIS IS TO ENSURE THAT ANY USER ONLY CREATES A PROFILE ONCE. */}
					{/* {!id && ( */}
					<li className='navbar-links' style={styles.navLinks}>
						<Link to='/createbusinessprofile'>Create Profile</Link>
					</li>
					{/* )} */}
					<li className='navbar-links' style={styles.navLinks}>
						<Link to={`/editbusinessprofile/${id}`}>Edit Profile</Link>
					</li>
					<li className='navbar-links' style={styles.navLinks}>
						<Link to='/viewbusinessprofile'>View Profile</Link>
					</li>
				</ul>
			</>
		</div>
	);
};

export default NavBar;
