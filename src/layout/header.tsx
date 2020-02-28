import * as React from 'react';
import { PageHeader } from 'antd';
class Header extends React.PureComponent {
    state={
        title:'Here is title',
        subTitle:'This is a subtitle',
        style:{
            border:'1px solid rgb(235, 237, 240)'
        }
    }
    render() {
        const { title, subTitle, style } = this.state;
        return (
            <PageHeader
                style={style}
                backIcon={false}
                title={title}
                subTitle={subTitle}
            />
        )
    }
}
export default Header;