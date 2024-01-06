// CSSのインポート
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

// Next.jsのインポート
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const name = "Your Nameee"; // ご自身の名前に変更可能
export const siteTitle = "Next.js Sample Website"; // ブログのタイトル

// 単純にdivを付け加えるだけのレイアウト
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* Head に og:image など必要なメタ情報を追加 */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          // ルート(/)のindex.jsを表示している場合
          <>
            {/* Imageコンポーネントを使用。priority を指定して遅延読み込みを無効に */}
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          // それ以外の場合
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
            <div className={styles.backToHome}>
              <Link href="/">← Back to home</Link>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
