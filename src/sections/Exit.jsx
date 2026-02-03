import { forwardRef } from "react";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const Exit = forwardRef(function Exit(_, ref) {
  return (
    <section ref={ref} className="exit">
      <div className="exit-glow" />

      <div className="exit-box">
        <p className="exit-statement">
          I don’t apply to everything.
          <br />
          <span>I work on things that feel necessary.</span>
        </p>

        <p className="exit-subtle">
          If this resonated, we should talk.
        </p>

        <a
          href="mailto:mahekvatyani17@gmail.com"
          className="exit-link"
        >
          mahekvatyani17@gmail.com
          <ArrowUpRight size={18} />
        </a>

        {/* socials */}
        <div className="exit-socials">
          <a
            href="https://github.com/Mahekkkk"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
             data-brand="github"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/mahek-vatyani17/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
             data-brand="linkedin"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  );
});

export default Exit;
