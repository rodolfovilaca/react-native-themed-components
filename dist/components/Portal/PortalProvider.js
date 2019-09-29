import * as React from "react";
import PortalContext from "./PortalContext";
class PortalProvider extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            gates: {}
        };
        this.teleport = (gateName, element) => this.setState({ gates: { ...this.state.gates, [gateName]: element } });
        this.unmount = (gateName) => {
            this.setState((prevState) => ({
                gates: { ...prevState.gates, [gateName]: undefined }
            }));
        };
    }
    render() {
        const { children } = this.props;
        return (React.createElement(PortalContext.Provider, { value: {
                gates: this.state.gates,
                teleport: this.teleport,
                unmount: this.unmount
            } }, children));
    }
}
export default PortalProvider;
//# sourceMappingURL=PortalProvider.js.map