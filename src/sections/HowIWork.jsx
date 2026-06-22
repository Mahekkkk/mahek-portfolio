import { forwardRef } from "react";
import {
  Eye,
  Wrench,
  MessageSquareText,
  Sparkles
} from "lucide-react";

const principles = [
  {
    title: "Problem Solving",
    text: "I enjoy breaking complex problems into simple, maintainable solutions.",
    icon: Eye
  },
  {
    title: "Clean Architecture",
    text: "I focus on writing scalable and organized code using industry-standard practices.",
    icon: Wrench
  },
  {
    title: "Continuous Learning",
    text: "I'm constantly exploring new technologies such as AWS, Docker, and Microservices.",
    icon: MessageSquareText
  },
  {
    title: "User-Centric Development",
    text: "I build applications that are secure, intuitive, and provide real value to users.",
    icon: Sparkles
  }
];

const HowIWork = forwardRef(function HowIWork(_, ref) {
  return (
    <section ref={ref} className="how">
      <header className="how-header">
      <span className="section-eyebrow">My Approach</span>

<h2 className="section-title cinematic-title">
  How I <span>Build Software</span>
</h2>

<p className="section-subtitle">
  The principles that guide my development process and help me create reliable, scalable applications.
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
