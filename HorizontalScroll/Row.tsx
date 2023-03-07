import React, { useRef, cloneElement, useEffect } from 'react';

const Row = ({ children, speed, playing }) => {
  const scrollerRef = useRef();
  const clonedScrollerRef = useRef();
  const hoverRef = useRef(false);
  const playingRef = useRef(playing);

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  const clonedChildren = children.map((child) => cloneElement(child));

  useEffect(() => {
    const pixelsPerFrame = speed / 60;
    let animating = true;
    let scrollerXPos = 0;
    let clonedScrollerXPos = 0;

    function animate() {
      if (playing) {
        if (hoverRef.current) {
          scrollerXPos -= pixelsPerFrame / 2;
          clonedScrollerXPos -= pixelsPerFrame / 2;
        } else {
          scrollerXPos -= pixelsPerFrame;
          clonedScrollerXPos -= pixelsPerFrame;
        }

        if (scrollerXPos <= -scrollerRef.current.offsetWidth) {
          scrollerXPos = scrollerRef.current.offsetWidth;
        }

        if (clonedScrollerXPos <= -clonedScrollerRef.current.offsetWidth * 2) {
          clonedScrollerXPos = 0;
        }

        scrollerRef.current.style.transform = `translateX(${scrollerXPos}px)`;
        clonedScrollerRef.current.style.transform = `translateX(${clonedScrollerXPos}px)`;
      }

      if (animating) {
        window.requestAnimationFrame(animate);
      }
    }
    window.requestAnimationFrame(animate);
    //clean-up
    return () => (animating = false);
  }, []);

  return (
    <div
      className="row"
      onMouseOver={() => (hoverRef.current = true)}
      onMouseOut={() => (hoverRef.current = false)}
    >
      <div ref={scrollerRef}>{children}</div>
      <div ref={clonedScrollerRef}>{clonedChildren}</div>
    </div>
  );
};

export default Row;
