import styles from "./Jumbotron.module.css";

export default function index() {
  return (
    <div>
      <main className={styles.jumbotron}>
        <div>
          <span>The trusted recruiting platform you&apos;ll ever need</span>
          <h2>Find the right developers in seconds</h2>
        </div>
      </main>
    </div>
  );
}
