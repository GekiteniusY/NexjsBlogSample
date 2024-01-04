import styles from "./layout.module.css"; // cssをインポート

// 単純にdivを付け加えるだけのレイアウト
export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
