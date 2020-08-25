import React from 'react';
import { Route,  BrowserRouter as Router } from 'react-router-dom';
import Home from 'pages/Home';

export const Routes = () => {
    return (
        <>
            <Router basename={'digital-wallet'}>
                <Route exact path="/" component={Home}/>
            </Router>
        </>
    );
};
