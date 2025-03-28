import Link from 'next/link';

export default function Home() {
  let name = 'Vercel';
  let link = 'https://nextjs.org/';

  return (
    <>
      <h1 className="hello">{name}</h1>
      <p className="title">by dev Next js</p>
      <a href={link} target="_blank" className="link">
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
