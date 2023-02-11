const WordsBox = (props) => {
  return (
    <div className="container">
      <h2>
        {props.words.map((word) => (
          <>
            <span>{word}</span>
            <span> </span>
          </>
        ))}
      </h2>
    </div>
  );
};

export default WordsBox;
