import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import * as React from 'react';
// import path from 'path';
function Loading() {
    return <div>loading...</div>
}

// class LoadFactory {
//     constructor(paths: string) {
//         this.loadObject = this.load(paths);
//     }
//     loadObject: LoadableComponent;
//     load = (pathUrl: string): LoadableComponent => {
//         return Loadable({
//             loader: () => import(path.join(__dirname, pathUrl)),
//             loading: Loading
//         })
//     }
//     getObject = (): LoadableComponent => {
//         return this.loadObject
//     }
// }
// const Test = load('../pages/test');
// const Home = load('../pages/home');
// const Test = new LoadFactory('../pages/test').getObject();
// const Home = new LoadFactory('../pages/home').getObject();
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