import styles from "./SummarySection.module.css";

function SummarySection() {
  const scoreArray = [
    { id: 1, category: "Reaction", score: 80 },
    { id: 2, category: "Memory", score: 92 },
    { id: 3, category: "Verbal", score: 61 },
    { id: 4, category: "Visual", score: 72 },
  ];

  return (
    <div className={styles.summaryContainer}>
      <p className={styles.summaryHeading}>Summary</p>
      <div className={styles.data}>
        <div className={styles.reaction}>
          <img
            src="/public/assets/images/icon-reaction.svg"
            alt="reaction icon"
          />
          <p>Reaction</p>
          <p className={styles.score}>
            <span>{scoreArray[0].score}</span>
            <span className={styles.total}> / 100</span>
          </p>
        </div>
        <div className={styles.memory}>
          <img src="/public/assets/images/icon-memory.svg" alt="memory icon" />
          <p>Memory</p>
          <p className={styles.score}>
            <span>{scoreArray[1].score}</span>
            <span className={styles.total}> / 100</span>
          </p>
        </div>
        <div className={styles.verbal}>
          {" "}
          <img src="/public/assets/images/icon-verbal.svg" alt="verbal icon" />
          <p>Verbal</p>
          <p className={styles.score}>
            <span>{scoreArray[2].score}</span>
            <span className={styles.total}> / 100</span>
          </p>
        </div>
        <div className={styles.visual}>
          {" "}
          <img src="/public/assets/images/icon-visual.svg" alt="visual icon" />
          <p>Visual</p>
          <p className={styles.score}>
            <span>{scoreArray[3].score}</span>
            <span className={styles.total}> / 100</span>
          </p>
        </div>
      </div>
      <button>Continue</button>
    </div>
  );
}

export default SummarySection;
