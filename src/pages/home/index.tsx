import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import Slider from './menu';

const { Sider, Content } = Layout
class Index extends React.Component {
    state = {
        style: {
            minHeight: 400
        }
    }
    render() {
        const { style } = this.state;
        return (
            <>
                <Layout style={style}>
                    <Sider style={{ background: '#fff' }}>
                        <Slider />
                    </Sider>
                    <Content>Content</Content>
                </Layout>
            </>
        )
    }
}
export default Index;