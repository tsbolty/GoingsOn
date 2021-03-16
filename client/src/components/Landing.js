import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Landing = () => {
	return (
		<div style={{ height: "75vh" }} className='container valign-wrapper'>
			<div className='row'>
				<div className='col s12 center-align'>
					<div className='col s6'>
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
					</div>
					<div className='col s6'>
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
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	authToken: state.currentUser && state.currentUser.authToken,
	items: state.items
});

export default connect(mapStateToProps)(Landing);