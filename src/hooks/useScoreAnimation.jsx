import { useState, useEffect, useRef } from "react";

// Custom hook to handle score animation logic

// checks if the score increases or decreases and returns an object with increase or decrease as true/false

// this hook is used to set an increase or decrease class to an element for different animations
export const useScoreAnimation = (score) => {
  const prevScoreRef = useRef(null);
  const [animate, setAnimate] = useState({ increase: false, decrease: false });

  useEffect(() => {
    if (prevScoreRef.current !== null) {
      const prevScore = prevScoreRef.current;
      if (score > prevScore) {
        setAnimate({ increase: true, decrease: false });
      } else if (score < prevScore) {
        setAnimate({ increase: false, decrease: true });
      }
    }
    prevScoreRef.current = score;

    setTimeout(() => {
      setAnimate({ increase: false, decrease: false });
    }, 750);
  }, [score]);

  return animate;
};
