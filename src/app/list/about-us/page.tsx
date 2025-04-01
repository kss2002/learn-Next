import styles from '../about-us/about.module.css';

export default function About() {
  return (
    <>
      <div className={styles.background}>
        <h1>hello About</h1>
      </div>
      <p>byby</p>
    </>
  );
}

// 내 예상엔 app에 없는 컴포넌트만 따로 styles 폴더를 만들어서
// 경로를 지정하는 것만 가능한 듯.
// app 안에 있는 건 그 안에 따로 모듈.css 를 만들어서
// 경로를 할당하는 듯?
