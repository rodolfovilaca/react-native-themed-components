import * as React from 'react';
interface IProps {
    children: JSX.Element;
}
declare class PortalProvider extends React.Component<IProps> {
    state: {
        gates: {};
    };
    render(): JSX.Element;
    private teleport;
    private unmount;
}
export default PortalProvider;
