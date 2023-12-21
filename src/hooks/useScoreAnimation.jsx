import { useState, useEffect, useRef } from "react";

// Custom hook to handle score animation logic

// checks if the score increases or decreases and returns an object with increase or decrease as true/false

// this hook is used to set an increase or decrease class to an element for different animations
export const useScoreAnimation = (score) => {
  const prevScoreRef = useRef(null); // ref to track the previous score
  const [animate, setAnimate] = useState({ increase: false, decrease: false }); // No animation by default

  useEffect(() => {
    if (prevScoreRef.current !== null) {
      const prevScore = prevScoreRef.current;
      // if the new score is bigger than previous score then return true for increase
      if (score > prevScore) {
        setAnimate({ increase: true, decrease: false });
        // if the new score is smaller than previous score then return true for decrease
      } else if (score < prevScore) {
        setAnimate({ increase: false, decrease: true });
      }
    }
    prevScoreRef.current = score;

    // after one second return to default state
    setTimeout(() => {
      setAnimate({ increase: false, decrease: false });
    }, 1000);
  }, [score]);

  return animate;
};
