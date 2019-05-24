import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ExpenseDashboardPage } from '../components/expense_dashboard_page.js';
import AddExpensePage from '../components/add_expense_page.js';
import EditExpensePage from '../components/edit_expense_page.js';
import { HelpPage } from '../components/help_page.js';
import { NotFoundPage } from '../components/not_found_page.js';
import { Header } from '../components/header.js';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export { AppRouter };
