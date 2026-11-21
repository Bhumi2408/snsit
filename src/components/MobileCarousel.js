"use client";

import { mobileSlides } from "@/data/site";
import useLoopSlider from "./useLoopSlider";
import { ChevronLeft, ChevronRight } from "./Icons";

export default function MobileCarousel() {
  const count = mobileSlides.length;
  const { trackStyle, next, prev, setPaused } = useLoopSlider(count, {
    interval: 3000,
    speed: 500,
  });
  const track = [mobileSlides[count - 1], ...mobileSlides, mobileSlides[0]];

  // Pause on interaction, like the original carousel
  const interact = (fn) => () => {
    setPaused(true);
    fn();
  };

  return (
    <section className="m-carousel show-mobile">
      <div className="m-carousel-viewport">
        <div className="m-carousel-track" style={trackStyle}>
          {track.map((src, i) => (
            <figure className="m-carousel-slide" key={i}>
              <img src={src} alt="" loading="lazy" />
            </figure>
          ))}
        </div>
        <button type="button" className="m-carousel-btn m-carousel-prev" onClick={interact(prev)} aria-label="Previous slide">
          <ChevronLeft />
        </button>
        <button type="button" className="m-carousel-btn m-carousel-next" onClick={interact(next)} aria-label="Next slide">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
