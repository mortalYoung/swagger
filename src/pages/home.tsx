import * as React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, List, Tooltip } from 'antd';
import '/styles/home.scss';
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
class Home extends React.PureComponent {
    componentDidMount(){
    }
    render() {
        return (
            <Row gutter={16}>
                <Col span={8}>
                    <div className="menuList">
                        <List
                            header={null}
                            footer={null}
                            dataSource={data}
                            split={false}
                            renderItem={item => {
                                return <Tooltip placement="right" title={item}>
                                    <List.Item className="highlight">
                                        <Link to="/test">
                                            <div className="ellipsis">
                                                {item}
                                            </div>
                                        </Link>
                                    </List.Item>
                                </Tooltip>
                            }}></List>
                    </div>
                </Col>
                <Col span={16}>
                    <div>空缺</div>
                </Col>
            </Row>
        )
    }
}
export default Home;