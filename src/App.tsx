import ResultSection from "./Components/ResultSection";
import SummarySection from "./Components/SummarySection";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <ResultSection />
      <SummarySection />
    </div>
  );
}

export default App;
