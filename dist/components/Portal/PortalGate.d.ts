/// <reference types="react" />
declare function PortalGate(props: {
    gateName: string;
    children?: (teleport: (gateName: string, element: JSX.Element) => void) => JSX.Element;
}): JSX.Element;
export default PortalGate;
