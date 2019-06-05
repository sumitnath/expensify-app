import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.js';

export const LoginPage = ({ startLogin }) => (
	<div>
		<button onClick={startLogin} >login</button>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
