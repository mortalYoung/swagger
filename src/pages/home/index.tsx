import * as React from 'react';
import { Layout, Row, Col } from 'antd';
import Slider from './menu';
import Chart from '../../charts';
const { BarChart } = Chart;
const { Sider, Content } = Layout
class Index extends React.Component {
    state = {
        style: {
            minHeight: 400
        },
        myOptions: {
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
    }
    render() {
        const { style, myOptions } = this.state;
        return (
            <>
                <Layout style={style}>
                    <Sider style={{ background: '#fff' }}>
                        <Slider />
                    </Sider>
                    <Content style={{ padding: 10 }}>
                        <Row gutter={12}>
                            <Col span={6}>
                                <BarChart option={myOptions} config={{ height: 200, width: 200 }} />
                            </Col>
                            <Col span={6}>
                                <BarChart option={myOptions} config={{ height: 200, width: 200 }} />
                            </Col>
                            <Col span={6}>
                                <BarChart option={myOptions} config={{ height: 200, width: 200 }} />
                            </Col>
                            <Col span={6}>
                                <BarChart option={myOptions} config={{ height: 200, width: 200 }} />
                            </Col>
                            <Col span={6}>
                                <BarChart option={myOptions} config={{ height: 200, width: 200 }} />
                            </Col>
                            <Col span={6}>
                                <BarChart option={myOptions} config={{ height: 200, width: 200 }} />
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </>
        )
    }
}
export default Index;