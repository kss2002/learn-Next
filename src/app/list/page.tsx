import Link from 'next/link';

export default function List() {
  const food = [
    { id: 1, name: '상품 1 40,000원' },
    { id: 2, name: '상품 2 36,000원' },
    { id: 3, name: '상품 3 22,100원' },
    { id: 4, name: '상품 4 10,000원' },
  ];

  return (
    <>
      <h1 className="hello">상품 목록</h1>
      {food.map((food) => {
        return (
          <div className="food" key={food.id}>
            <h4>{food.name}</h4>
          </div>
        );
      })}
      <div className="div">
        <Link className="link" href="/">
          Home
        </Link>
      </div>
    </>
  );
}
// map 반복문
