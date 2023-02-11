const WordsBox = ({ words }) => {
  return (
    <div className="container">
      <h2>
        {words.map((word, id) => {
          return (
            <>
              <span key={id}>
                {word.split('').map((char, idx) => {
                  return <span key={idx}>{char}</span>;
                })}
              </span>
              <span> </span>
            </>
          );
        })}
      </h2>
    </div>
  );
};

export default WordsBox;
