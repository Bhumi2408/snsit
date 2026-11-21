"use client";

import { heroSlides } from "@/data/site";
import useLoopSlider from "./useLoopSlider";
import { SliderArrowLeft, SliderArrowRight } from "./Icons";

export default function HeroSlider() {
  const count = heroSlides.length;
  const { active, trackStyle, next, prev, goTo, setPaused } = useLoopSlider(count, {
    interval: 4000,
    speed: 600,
  });
  const track = [heroSlides[count - 1], ...heroSlides, heroSlides[0]];

  return (
    <section className="hero hide-mobile">
      <div
        className="hero-viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="hero-track" style={trackStyle}>
          {track.map((slide, i) => (
            <div className="hero-slide" key={i} style={{ backgroundColor: slide.color }}>
              <div className="hero-slide-blur">
                <img src={slide.src} alt="" loading={i === 1 ? "eager" : "lazy"} />
              </div>
              <img className="hero-slide-img" src={slide.src} alt="" loading={i === 1 ? "eager" : "lazy"} />
            </div>
          ))}
        </div>

        <button type="button" className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="previous arrow">
          <SliderArrowLeft />
        </button>
        <button type="button" className="hero-arrow hero-arrow-next" onClick={next} aria-label="next arrow">
          <SliderArrowRight />
        </button>

        <div className="hero-bullets">
          {heroSlides.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`hero-bullet${i === active ? " is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
