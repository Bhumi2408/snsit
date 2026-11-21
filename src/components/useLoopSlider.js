"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Infinite horizontal slider. The track renders [last, ...slides, first]
// so position 1 is the first real slide and the edges can wrap seamlessly.
export default function useLoopSlider(count, { interval, speed }) {
  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const busy = useRef(false);

  const moveTo = useCallback(
    (next) => {
      if (busy.current) return;
      busy.current = true;
      setAnimate(true);
      setPos(next);
      setTimeout(() => {
        busy.current = false;
      }, speed);
    },
    [speed]
  );

  // Jump back from a clone to the real slide once the slide-in finished
  useEffect(() => {
    if (pos !== 0 && pos !== count + 1) return;
    const t = setTimeout(() => {
      setAnimate(false);
      setPos(pos === 0 ? count : 1);
    }, speed);
    return () => clearTimeout(t);
  }, [pos, count, speed]);

  useEffect(() => {
    if (animate) return;
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setAnimate(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [animate]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => moveTo(pos + 1), interval);
    return () => clearTimeout(t);
  }, [paused, pos, interval, moveTo]);

  const active = (pos - 1 + count) % count;

  return {
    active,
    trackStyle: {
      transform: `translate3d(${-pos * 100}%, 0, 0)`,
      transition: animate ? `transform ${speed}ms ease` : "none",
    },
    next: () => moveTo(pos + 1),
    prev: () => moveTo(pos - 1),
    goTo: (i) => i !== active && moveTo(i + 1),
    setPaused,
  };
}
