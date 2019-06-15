import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth.js';

export const Header = ({ startLogout }) => (
	<header className="header">
		{/*
		** Will not be used since the style of dashboard is going to be layed out
		** different, but this is a great example on how to use NavLink.
		** <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
		** <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
		*/}
		<div className="content-container">
			<div className="header__content">
				<Link className="header__title" to="/dashboard">
					<h1>Expensify</h1>
				</Link>
				<button className="button button--logout" onClick={startLogout}>logout</button>
			</div>
		</div>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
