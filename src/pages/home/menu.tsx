import * as React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;
interface navDataI {
    children: Array<navDataI>,
    id: number,
    parentId: number,
    permissionName: string,
    permissionIcon: string,
    permissionUrl: string

}
class Slider extends React.Component {
    componentDidMount() {
        this.setState({

        })
    }
    state = {
        menuData: [{
            children: [],
            id: 1,
            parentId: 0,
            permissionName: 'home',
            permissionIcon: '',
            permissionUrl: '/'
        }, {
            children: [],
            id: 2,
            parentId: 0,
            permissionName: 'list',
            permissionIcon: '',
            permissionUrl: '/list'
        }],
    }
    renderSubMenu = (navData: Array<navDataI>) => {
        return navData.map((item) => (
            item.children.length ?
                <SubMenu
                    key={item.id}
                    title={<span><Icon type="mail" /><span>{item.permissionName}</span></span>}
                >
                    {
                        item.children.map((dataItem) => (
                            dataItem.children.length ?
                                <SubMenu
                                    key={dataItem.id}
                                    title={<span><Icon type="appstore" /><span>{item.permissionName}</span></span>}
                                >
                                    {
                                        dataItem.children.map((childItem) => (
                                            <Menu.Item key={childItem.id}>
                                                <span>
                                                    <NavLink to={childItem.permissionUrl}>{childItem.permissionName}</NavLink>
                                                </span>
                                            </Menu.Item>
                                        ))
                                    }
                                </SubMenu> :
                                <NavLink to={dataItem.permissionUrl}>
                                    <Menu.Item key={dataItem.id}>
                                        <span>
                                            {dataItem.permissionName}
                                        </span>
                                    </Menu.Item>
                                </NavLink>
                        ))
                    }
                </SubMenu> :
                <Menu.Item key={item.id}>
                    <NavLink to={item.permissionUrl}>
                        <Icon type="pie-chart" />
                        <span>
                            {item.permissionName}
                        </span>
                    </NavLink>
                </Menu.Item>
        ))
    }
    render() {
        const { menuData } = this.state;
        return (
            <>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    {this.renderSubMenu(menuData)}
                </Menu>
            </>
        )
    }
}
export default Slider;