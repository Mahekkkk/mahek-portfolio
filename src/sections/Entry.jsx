import { forwardRef } from "react";
import HeroImage from "../components/HeroImage";

const Entry = forwardRef(function Entry({ projectRef },{ exitRef }, ref ,) 
  {
  return (
    <div ref={ref} className="hero">
      <div className="hero-box cinematic">
        <span className="eyebrow">🚀 Building the web, one idea at a time</span>

        <h1 className="hero-title">
          Hi, I’m <span>Mahek Vatyani</span>
        </h1>

        <p className="hero-tagline">
          Turning ideas into immersive, high-impact web experiences.
        </p>

        <p className="hero-subtle">
          Frontend wizard • UI perfectionist • Code with intent
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() =>
              projectRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Projects
          </button>

          <button
  className="btn-outline"
  onClick={() =>
    exitRef?.current?.scrollIntoView({ behavior: "smooth" })
  }
>
  Let’s Collaborate
</button>

        </div>
      </div>

      <HeroImage />
    </div>
  );
});

export default Entry;
