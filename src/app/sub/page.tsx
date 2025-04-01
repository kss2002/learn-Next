import styles from '../sub/sub.module.css';
import Link from 'next/link';

export default function SubHome() {
  const name = 'Vercel';
  const link = 'https://nextjs.org/';
  // typescript에서는 type를 명시적으로 선언한다.
  return (
    <>
      <h1 className={styles.hello}>{name}</h1>
      <p className={styles.title}>by dev Next js</p>
      <div className={styles.div}>
        <a
          href={link}
          target="_blank"
          className={styles.link}
          rel="noopener noreferrer"
        >
          Next.js 바로가기
        </a>
      </div>
      <div className={styles.background}>
        <h3 className={styles.sub}>hello world</h3>
      </div>
      <div className={styles.div}>
        <Link className={styles.link} href="/list">
          상품 목록 이동하기
        </Link>
      </div>
    </>
  );
}
