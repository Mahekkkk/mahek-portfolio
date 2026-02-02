import { forwardRef } from "react";
import HeroImage from "../components/HeroImage";

const Entry = forwardRef(function Entry(_, ref) {
  return (
    <div ref={ref} className="hero">
      <div className="hero-box cinematic">
        <span className="eyebrow">👋 Hi, I'm</span>

        <h1 className="hero-title">
          Mahek <span>Vatyani</span>
        </h1>

        <p className="hero-tagline">
          I design & build interactive web experiences.
        </p>

        <p className="hero-subtle">
          Curious. Calm. Slightly dangerous with code.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">View My Work</button>
          <button className="btn-outline">Get In Touch</button>
        </div>
      </div>

      <HeroImage />
    </div>
  );
});

export default Entry;
