import Link from 'next/link';

export default function Home() {
  const name = 'Vercel';
  const link = 'https://nextjs.org/';
  // typescript에서는 type를 명시적으로 선언한다.
  return (
    <>
      <h1 className="hello">{name}</h1>
      <p className="title">by dev Next js</p>
      <a href={link} target="_blank" className="link" rel="noopener noreferrer">
        Next.js 바로가기
      </a>
      <div className="background">
        <h3 className="sub">hello world</h3>
      </div>
      <Link className="Link" href="/list">
        상품 목록 이동하기
      </Link>
    </>
  );
}
