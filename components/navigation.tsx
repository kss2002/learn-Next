'use client';

import styles from '../styles/navigation.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// 네비게이션 컴포넌트
export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}>
          <Link href="/">Home</Link> {path === '/' ? '❤️' : ''}
        </li>
        <li className={styles.li}>
          <Link href="/list">List</Link> {path === '/list' ? '🔥' : ''}
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
        <li className={styles.li}>
          <Link href="/list/about-us">about-us</Link>{' '}
          {path === '/list/about-us' ? '😊' : ''}
        </li>
      </ul>
    </nav>
  );
}

/* 
// Next.js에서 Hook을 쓰려면 최상단에
// 'use client'; 을 기입하라.

// Pathname은 현재 나의 라우팅 위치가 어디인지
// 표시하게끔 도와주는 Hook이다

// 기본적으로 'use client'; 가 기입되지 않았다면 
// 그 컴포넌트는 서버 컴포넌트이다.
*/
