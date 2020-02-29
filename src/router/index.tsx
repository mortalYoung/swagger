import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import * as React from 'react';
function Loading() {
    return <div>loading...</div>
}
const List = Loadable({
    loader: () => import('../pages/list'),
    loading: Loading
})
const Home = Loadable({
    loader: () => import('../pages/home'),
    loading: Loading
})
const Login = Loadable({
    loader: () => import('~/pages/login'),
    loading: Loading
})
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/list" component={List} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Router;