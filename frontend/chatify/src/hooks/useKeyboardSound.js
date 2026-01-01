import { useCallback } from "react";

// audio setup
const keyStrokeSounds = [
  new Audio("/image/keystroke1.mp3"),
  new Audio("/image/keystroke2.mp3"),
  new Audio("/image/keystroke3.mp3"),
  new Audio("/image/keystroke4.mp3"),
];

function useKeyboardSound() {
  const playRandomKeyStrokeSound = useCallback(() => {
    const randomSound = keyStrokeSounds[Math.floor(Math.random() * keyStrokeSounds.length)];

    randomSound.currentTime = 0; // this is for a better UX, def add this
    randomSound.play().catch((error) => console.log("Audio play failed:", error));
  }, []);

  return { playRandomKeyStrokeSound };
}

export default useKeyboardSound;