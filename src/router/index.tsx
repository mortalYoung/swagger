import { HashRouter, Route, Switch } from 'react-router-dom';
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
const Router = () => {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/list" component={List} />
                </Switch>
            </HashRouter>
        </>
    )
}
export default Router;