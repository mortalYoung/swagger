import * as React from 'react';
import { Link } from 'react-router-dom';
class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <span>2</span>
                <Link to="/test">Home</Link>
            </div>
        )
    }
}
export default Home;