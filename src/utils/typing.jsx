import { useEffect, useState } from "react";

export function Typewriter() {
  const text = "I BUILD. I DESIGN. I SHIP.";

  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    let timer;

    if (!erasing) {
      if (index <= text.length) {
        timer = setTimeout(() => {
          setDisplay(text.substring(0, index));
          setIndex(index + 1);
        }, 100);
      } else {
        timer = setTimeout(() => {
          setErasing(true);
        }, 1500);
      }
    } else {
      if (index >= 0) {
        timer = setTimeout(() => {
          setDisplay(text.substring(0, index));
          setIndex(index - 1);
        }, 50);
      } else {
        timer = setTimeout(() => {
          setErasing(false);
          setIndex(0);
        }, 500);
      }
    }

    return () => clearTimeout(timer);
  }, [index, erasing]);

  return <h1>{display}</h1>;
}


