const Test = () => {
  const scoreList = [
    { id: 1, score: 80 },
    { id: 2, score: 92 },
    { id: 3, score: 61 },
    { id: 4, score: 72 },
  ];

  function renderScores() {
    return scoreList.map((score) => (
      <div key={score.id}>
        <p>
          <span className="score">{score.score}</span>
          <span className="total">/100</span>
        </p>
      </div>
    ));
  }

  return (
    <div>
      <h1>This is a Test component.</h1>
      <div>{renderScores()}</div>
    </div>
  );
};

export default Test;
