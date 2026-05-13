import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Use a slight delay for the outline for a smooth effect
  const [outlinePos, setOutlinePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame;
    const updateOutline = () => {
      setOutlinePos(prev => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2
      }));
      animationFrame = requestAnimationFrame(updateOutline);
    };
    animationFrame = requestAnimationFrame(updateOutline);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  // Don't render custom cursor on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div className={isHovering ? 'cursor-hover' : ''}>
      <div 
        className="cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className="cursor-outline"
        style={{ left: `${outlinePos.x}px`, top: `${outlinePos.y}px` }}
      />
    </div>
  );
};

export default Cursor;
