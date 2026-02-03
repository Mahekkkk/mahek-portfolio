import { forwardRef } from "react";
import {
  Eye,
  Wrench,
  MessageSquareText,
  Sparkles
} from "lucide-react";

const principles = [
  {
    title: "Clarity over quantity",
    text: "I prefer fewer features with clearer behavior.",
    icon: Eye
  },
  {
    title: "Maintainability first",
    text: "I write code assuming someone else will maintain it.",
    icon: Wrench
  },
  {
    title: "Explainability",
    text: "If something is hard to explain, it’s usually hard to use.",
    icon: MessageSquareText
  },
  {
    title: "Craft",
    text: "I sometimes write CSS for fun at 2am.",
    icon: Sparkles
  }
];

const HowIWork = forwardRef(function HowIWork(_, ref) {
  return (
    <section ref={ref} className="how">
      <header className="how-header">
        <span className="section-eyebrow">Philosophy</span>
        <h2 className="section-title cinematic-title">
          How I <span>Work</span>
        </h2>
        <p className="section-subtitle">
          Principles that guide how I design, build, and refine software.
        </p>
      </header>

      <div className="how-grid">
        {principles.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              className="how-card"
              key={i}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="how-icon">
                <Icon size={22} />
              </div>

              <h3 className="how-title">{p.title}</h3>
              <p className="how-text">{p.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default HowIWork;
