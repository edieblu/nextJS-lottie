import styles from "./Grid.module.scss";

export default function Grid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}
