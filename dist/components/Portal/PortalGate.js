import * as React from "react";
import PortalContext from "./PortalContext";
function PortalGate(props) {
    const value = React.useContext(PortalContext);
    React.useEffect(() => {
        return () => {
            value.unmount(gateName);
        };
    }, []);
    const { gateName, children } = props;
    return (React.createElement(React.Fragment, null,
        value.gates[gateName],
        children && children(value)));
}
export default PortalGate;
//# sourceMappingURL=PortalGate.js.map