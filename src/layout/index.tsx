import * as React from 'react';
import Header from './header';
import Footer from './footer';
import './index.scss';
class Layout extends React.Component {
    render() {
        const children = this.props.children;
        return (
            <>
                <Header></Header>
                {children}
                <Footer></Footer>
            </>
        )
    }
}
export default Layout;