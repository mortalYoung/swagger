import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import * as React from 'react';
function Loading() {
    return <div>loading...</div>
}
const Test = Loadable({
    loader: () => import('../pages/test'),
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
                    <Route exact path="/test" component={Test} />
                </Switch>
            </HashRouter>
        </>
    )
}
export default Router;