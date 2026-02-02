import { useState } from "react";
import myPic from "../assets/me.jpeg";

export default function HeroImage() {
  const [sayHi, setSayHi] = useState(false);

  const handleClick = () => {
    setSayHi(true);
    setTimeout(() => setSayHi(false), 2200);
  };

  return (
    <div className="hero-image-wrapper" onClick={handleClick}>
      <div className="glow-circle"></div>

      {sayHi && (
        <div className="speech-bubble">
          Hey!👋
        </div>
      )}

      <img
        src={myPic}
        alt="Mahek Vatyani"
        className={`hero-image ${sayHi ? "wave" : ""}`}
      />
    </div>
  );
}
