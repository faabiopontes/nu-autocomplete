// https://www.caktusgroup.com/blog/2020/07/01/usekeypress-hook-react/

import { useEffect } from 'react';

interface KeyboardEvent {
  key: string;
}

/**
 * useKeyPress
 * @param {string} key - the name of the key to respond to, compared against event.key
 * @param {function} callback - the callback to perform on key press
 */
export const useKeyPress = (key: string, callback: () => void) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) {
        callback();
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [key, callback]);
}

export default useKeyPress;