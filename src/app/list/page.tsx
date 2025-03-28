import Link from 'next/link';

export default function List() {
  const food = ['상품 1 40,000원', '상품 2 36,000원'];

  return (
    <>
      <h1 className="hello">상품 목록</h1>
      <div className="food">
        <h4>{food[0]}</h4>
      </div>
      <div className="food">
        <h4>{food[1]}</h4>
      </div>
      <Link className="Link" href="/">
        Home
      </Link>
    </>
  );
}
