import { useEffect, useState } from 'react';
import randomWords from 'random-words';

import TypingBox from './components/TypingBox';
import TypingStats from './components/TypingStats';
import WordsBox from './components/WordsBox';
import Timer from './components/Timer';

const NO_OF_WORDS = 30;
const NO_OF_SECONDS = 60;

const generateWords = () => {
  return new Array(NO_OF_WORDS).fill(null).map(() => randomWords());
};

function App() {
  const [words, setWords] = useState([]);
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  const checkMatchingHandler = (currentInput) => {
    const correctWord = words[activeWordIndex];
    setActiveWordIndex((prev) => prev + 1);
    const isMatched = correctWord === currentInput.trim();
    console.log(isMatched, currentInput, correctWord);
  };

  return (
    <>
      <Timer />
      <WordsBox words={words} />
      <TypingBox words={words} checkingMatching={checkMatchingHandler} />
      <TypingStats />
    </>
  );
}

export default App;
