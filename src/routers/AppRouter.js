import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
    </Switch>
    <script src="https://gist.github.com/Semetg/615b5b1673e18cd82f196bd46178a8f3.js"></script>
    </div>
  </BrowserRouter>
);

export default AppRouter;