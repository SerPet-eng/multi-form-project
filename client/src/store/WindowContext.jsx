import { useContext, useState, useEffect, createContext } from 'react';

const WindowProvider = createContext();

export function useWindowSize() {
  return useContext(WindowProvider);
}

export default function WindowContext({ children }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const mobileWidth = 650;

  useEffect(() => {
    const currentSize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', currentSize);

    return () => window.removeEventListener('resize', currentSize);
  }, []);

  const windowSizeChecker = windowSize <= mobileWidth ? true : false;

  return (
    <WindowProvider.Provider value={{ windowSize, windowSizeChecker }}>
      {children}
    </WindowProvider.Provider>
  );
}
