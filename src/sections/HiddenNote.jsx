import { useState, useEffect } from "react";

export default function HiddenNote() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const sections = document.querySelectorAll("section.visible");
      if (sections.length === 4) setShow(true);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return show ? <p className="subtle hidden-note">You noticed me. Only a few do.</p> : null;
}
