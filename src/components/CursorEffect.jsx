import { useEffect } from "react";

export default function CursorEffect({ scrollSpeed = 0 }) {
  useEffect(() => {
    const moveElements = e => {
      const elems = document.querySelectorAll(".reactive");
      elems.forEach(el => {
        const rect = el.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx*dx + dy*dy);

        const factor = scrollSpeed < 10 ? 0.05 : 0.015;
        const repel = 50 / (distance + 50); // closer = stronger

        el.style.transform = `translate(${dx*factor*repel}px, ${dy*factor*repel}px)`;
        el.style.opacity = `${Math.max(0.5, 1 - scrollSpeed / 200)}`;
      });
    };

    const glitchInterval = setInterval(() => {
      const elems = document.querySelectorAll(".reactive");
      if (elems.length === 0) return;
      const el = elems[Math.floor(Math.random() * elems.length)];
      const original = el.textContent;
      el.textContent = original.replace(/[aeiou]/gi, "?");
      setTimeout(() => (el.textContent = original), 1200);
    }, 7000);

    window.addEventListener("mousemove", moveElements);
    return () => {
      window.removeEventListener("mousemove", moveElements);
      clearInterval(glitchInterval);
    };
  }, [scrollSpeed]);

  return null;
}
