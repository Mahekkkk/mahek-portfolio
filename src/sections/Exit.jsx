import { forwardRef } from "react";

const Exit = forwardRef(function Exit(_, ref) {
  return (
    <section ref={ref} className="exit">
      <div className="exit-box">
        <p className="exit-statement">
          I don’t apply to everything.<br />
          I work on things that feel necessary.
        </p>

        <p className="exit-subtle">
          If this resonated, we should talk.
        </p>

        <a href="mailto:mahek@example.com" className="exit-link">
          mahek@example.com
        </a>
      </div>
    </section>
  );
});

export default Exit;
