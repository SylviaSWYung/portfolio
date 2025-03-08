import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
  textArray: string[];
  typingSpeed: number;
  pauseBetweenTexts: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  textArray,
  typingSpeed = 100,
  pauseBetweenTexts = 2000,
}) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const currentText = textArray[currentTextIndex];

    if (isTyping) {
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => setIsTyping(false), pauseBetweenTexts);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, typingSpeed / 2);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setIsTyping(true);
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCharIndex(0);
        }, 500);
      }
    }
  }, [
    charIndex,
    isTyping,
    displayText,
    textArray,
    currentTextIndex,
    typingSpeed,
    pauseBetweenTexts,
  ]);
  return (
    <div className="flex text-3xl text-headerborder">
      <p className="text-text-light w-20">I'm a </p>
      <span className="flex-3">
        {displayText}
        <span className="inline-block w-[1ch] animate-blink">|</span>
      </span>
    </div>
  );
};