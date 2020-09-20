import React, {Component, lazy} from 'react';
import {Route, Switch} from 'react-router-dom'

const Home = lazy(() => import('./Landing/Home'))

export default(
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
)
