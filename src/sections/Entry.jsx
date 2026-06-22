import { forwardRef } from "react";
import HeroImage from "../components/HeroImage";

const Entry = forwardRef(function Entry({ projectRef },{ exitRef }, ref ,) 
  {
  return (
    <div ref={ref} className="hero">
      <div className="hero-box cinematic">
        <span className="eyebrow"> 🚀 Open to Software Development Opportunities</span>

        <h1 className="hero-title">
          Hi, I’m <span>Mahek Vatyani</span>
        </h1>

        <p className="hero-tagline">
        Java Full Stack Developer passionate about building secure, scalable, and user-friendly applications.
        </p>

        <p className="hero-subtle">
        Spring Boot • React • MySQL • REST APIs • AWS Learner
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() =>
              projectRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </button>

          <button
  className="btn-outline"
  onClick={() =>
    exitRef?.current?.scrollIntoView({ behavior: "smooth" })
  }
>
  Hire Me
</button>

        </div>
      </div>

      <HeroImage />
    </div>
  );
});

export default Entry;
