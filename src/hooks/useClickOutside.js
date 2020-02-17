import { useEffect } from 'react';
export function useClickOutside(ref, callBack, ignore) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !ignore.some((ig) => event.target === (ig ? ig.current : null))
    ) {
      callBack(ref);
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}
