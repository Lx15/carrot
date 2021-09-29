import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
// import '@/content'

function Popup() {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Redirect to={'/login'} />
                </Switch>
            </HashRouter>
        </>
    )
}

export default Popup
