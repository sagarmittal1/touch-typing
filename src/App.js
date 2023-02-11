import { useEffect, useState } from 'react';
import randomWords from 'random-words';

import TypingBox from './components/TypingBox';
import TypingStats from './components/TypingStats';
import WordsBox from './components/WordsBox';

const NO_OF_WORDS = 30;
const NO_OF_SECONDS = 60;

const generateWords = () => {
  return new Array(NO_OF_WORDS).fill(null).map(() => randomWords());
};

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  console.log(words);

  return (
    <>
      <WordsBox words={words} />
      <TypingBox />
      <TypingStats />
    </>
  );
}

export default App;
