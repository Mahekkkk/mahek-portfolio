import { forwardRef } from "react";

const Project = forwardRef(function Project(_, ref) {
  return (
    <section ref={ref} className="project">
      <div className="project-card">
        <h2 className="project-title">Acadify</h2>
        <p className="project-intent">
          A student dashboard built to respect urgency, not overwhelm.
        </p>

        <div className="project-grid">
          <div className="project-block">
            <h3>The problem</h3>
            <p>
              Students miss deadlines not because they don’t care,
              but because systems fail at the wrong moment.
            </p>
          </div>

          <div className="project-block">
            <h3>What I built</h3>
            <ul>
              <li>Email verification to prevent broken accounts</li>
              <li>Assignment reminders that interrupt gently</li>
              <li>Urgency-first dashboard logic</li>
            </ul>
          </div>

          <div className="project-block">
            <h3>What I learned</h3>
            <ul>
              <li>Small systems fail in predictable ways</li>
              <li>Most bugs are assumptions, not code</li>
              <li>Features feel finished only after being ignored once</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Project;
