import { useEffect, useState } from 'react';

export function useMouse() {
  const [coordinate, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = ({ clientX, clientY }) => {
      setCoordinates({ x: clientX, y: clientY });
    };
    document.body.addEventListener('mousemove', handleMove);
    return () => {
      document.body.removeEventListener('mousemove', handleMove);
    };
  }, []);
  return coordinate;
}
