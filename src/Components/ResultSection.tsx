import styles from "./ResultsSection.module.css";

function ResultSection() {
  return (
    <div className={styles.resultContainer}>
      <p>Your Result</p>
      <div className={styles.score_header}>
        <h1>76</h1>
        <p>of 100</p>
        <div className={styles.circle}></div>
      </div>

      <h2>Great</h2>
      <p className={styles.comment}>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default ResultSection;
