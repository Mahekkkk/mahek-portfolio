import { forwardRef } from "react";

const principles = [
  {
    title: "Clarity over quantity",
    text: "I prefer fewer features with clearer behavior."
  },
  {
    title: "Maintainability first",
    text: "I write code assuming someone else will maintain it."
  },
  {
    title: "Explainability",
    text: "If something is hard to explain, it’s usually hard to use."
  },
  {
    title: "Craft",
    text: "I sometimes write CSS for fun at 2am."
  }
];

const HowIWork = forwardRef(function HowIWork(_, ref) {
  return (
    <section ref={ref} className="how">
      <h2 className="section-title">How I work</h2>

      <div className="how-grid">
        {principles.map((p, i) => (
          <div className="how-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default HowIWork;
