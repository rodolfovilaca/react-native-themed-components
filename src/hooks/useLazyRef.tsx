import {useRef} from 'react';

export default function useLazyRef(fn: () => any) {
  const ref = useRef();
  if (!ref.current) ref.current = fn();
  return ref.current;
}
