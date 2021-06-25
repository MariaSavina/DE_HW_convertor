import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ConvertorCurrency from '../ConvertorCurrency'
import ConvertorLength from '../ConvertorLength/ConvertorLength';
import Header from '../Header/Header';

import './app.scss';

const App = () => (
    <Router>
        <Header/>
        <Switch>
            <Route exact path='/' component={ConvertorLength} />
            <Route exact path='/currency' component={ConvertorCurrency} />
        </Switch>
    </Router>
)

export default App;
