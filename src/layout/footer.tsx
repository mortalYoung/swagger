import * as React from "react";
class Footer extends React.PureComponent {
    state = {
        footer: "copyright@qq.com"
    }
    render() {
        const { footer } = this.state;
        return (
            <React.Fragment>
                <div className="footer">{footer}</div>
            </React.Fragment>
        )
    }
}
export default Footer;