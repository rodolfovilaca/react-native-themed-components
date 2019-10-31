import * as React from 'react';
import PortalContext from './PortalContext';

function PortalGate(props: {
  gateName: string;
  children?: (teleport: (gateName: string, element: JSX.Element) => void) => JSX.Element;
}) {
  const value: any = React.useContext(PortalContext);
  React.useEffect(() => {
    return () => {
      value.unmount(gateName);
    };
  }, []);
  const {gateName, children} = props;
  return (
    <>
      {value.gates[gateName]}
      {children && children(value)}
    </>
  );
}

export default PortalGate;
