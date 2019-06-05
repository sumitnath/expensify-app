import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ExpenseDashboardPage } from '../components/expense_dashboard_page.js';
import AddExpensePage from '../components/add_expense_page.js';
import EditExpensePage from '../components/edit_expense_page.js';
import { HelpPage } from '../components/help_page.js';
import { NotFoundPage } from '../components/not_found_page.js';
import LoginPage from '../components/login_page.js';
import PrivateRoute from './PrivateRoute.js';

export const history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={LoginPage} exact={true} />
				<PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
				<PrivateRoute path="/create" component={AddExpensePage} />
				<PrivateRoute path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export { AppRouter };
