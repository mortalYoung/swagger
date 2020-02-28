import echarts from 'echarts/lib/echarts'; 
import 'echarts/lib/component/grid';
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'zrender/lib/svg/svg';

import * as React from "react";
import ReactResizeDetector from 'react-resize-detector';
interface IProps {
    option: object,
    config?: {
        handle?: Function,
        height: number | string,
        width: number | string
    }
}
export default class BaseChart extends React.Component<IProps, any> {
    id: React.RefObject<HTMLDivElement> = React.createRef();
    initChart = () => {
        const { option = {}, config = { handle: "" } } = this.props;
        const { chart } = this.state;
        chart.showLoading();
        chart.off("click");
        if (typeof config.handle == "function") {
            chart.on("click", config.handle.bind(this));
        }
        chart.setOption(option);
        chart.hideLoading();
    };
    shouldComponentUpdate(nextProps: IProps) {
        if (JSON.stringify(nextProps) == JSON.stringify(this.props)) {
            return false;
        } else {
            return true;
        }
    }
    componentDidMount() {
        let chart = this.id.current && echarts.init(this.id.current, "walden");
        this.setState({ chart }, () => {
            this.initChart();
        });
    }
    componentDidUpdate() {
        this.initChart();
    }
    componentWillUnmount() {
        const { chart } = this.state;
        chart.dispose();
    }
    chartResize = (width: number | string) => {
        const { chart } = this.state;
        if (chart && width) chart.resize();
    }
    render() {
        const { width = "100%", height = 200 } = this.props.config || {};
        return <div>
            <div ref={this.id} style={{ width, height }} />
            <ReactResizeDetector handleWidth onResize={this.chartResize.bind(this)} />
        </div>
    }
}