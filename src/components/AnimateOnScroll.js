"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Plays the entrance animation (fadeInUp / fadeInLeft / fadeInRight) of every
// [data-anim] element the first time it scrolls into view.
export default function AnimateOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let pending = Array.from(document.querySelectorAll("[data-anim].anim-hidden"));
    let frame = 0;

    const reveal = (el) => {
      const delay = Number(el.dataset.animDelay || 0);
      setTimeout(() => {
        el.classList.remove("anim-hidden");
        el.classList.add("animated", el.dataset.anim);
      }, delay);
    };

    const check = () => {
      frame = 0;
      const vh = window.innerHeight;
      pending = pending.filter((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          reveal(el);
          return false;
        }
        return true;
      });
      if (!pending.length) stop();
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    const stop = () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    check();

    return () => {
      stop();
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
