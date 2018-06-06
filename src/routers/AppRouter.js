import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import ExpensifyDashboardPage from '../components/ExpensifyDashboardPage';
import ExpensifyAddPage from '../components/ExpensifyAddPage';
import ExpensifyEditPage from '../components/ExpensifyEditPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
            <Switch>
                <Route path="/" component={ExpensifyDashboardPage} exact={true}/>
                <Route path="/create" component={ExpensifyAddPage} />
                <Route path="/edit/:id" component={ExpensifyEditPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;