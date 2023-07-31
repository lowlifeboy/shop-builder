import {useEffect} from "react";

export function useClickInside(ref: any, callback: () => void) {
  function handleClick(event: { target: any; }) {
    if (ref.current && ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}
