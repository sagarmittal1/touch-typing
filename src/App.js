import { useEffect, useState } from 'react';
import randomWords from 'random-words';

import TypingBox from './components/TypingBox';
import TypingStats from './components/TypingStats';
import WordsBox from './components/WordsBox';
import Timer from './components/Timer';

const NO_OF_WORDS = 30;
const NO_OF_SECONDS = 20;

const generateWords = () => {
  return new Array(NO_OF_WORDS).fill(null).map(() => randomWords());
};

function App() {
  const [words, setWords] = useState([]);

  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [seconds, setSeconds] = useState(NO_OF_SECONDS);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  const checkMatchingHandler = (currentInput) => {
    const correctWord = words[activeWordIndex];
    setActiveWordIndex((prev) => prev + 1);
    const isMatched = correctWord === currentInput.trim();
    console.log(isMatched, currentInput, correctWord);
  };

  const startCountdownHandler = () => {
    let interval = setInterval(() => {
      setSeconds((prevSec) => {
        if (prevSec === 0) {
          clearInterval(interval);
          return 0;
        } else {
          return prevSec - 1;
        }
      });
    }, 1000);
  };

  return (
    <>
      <Timer seconds={seconds} />
      <WordsBox words={words} />
      <TypingBox words={words} checkingMatching={checkMatchingHandler} startTimer={startCountdownHandler} />
      <TypingStats />
    </>
  );
}

export default App;
