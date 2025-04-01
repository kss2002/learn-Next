'use client';

import { useParams } from 'next/navigation';

export default function MovieDetail() {
  const params = useParams();
  const id = params.id as string; // type

  return <h1>Movie {id}</h1>;
}

// [id] < 이게 다이나믹 라우팅하는 방법. so ezzzzzzzzzzzzz!
// console를 찍으면 백엔드에서 id를 받아오는 것을 확인 가능.

/*
Next.js에서 동적 라우트([id])를 사용할 때, params를 동기적으로 사용하면 안 된다.
즉, params를 바로 구조 분해 할당하면 안 되고, 비동기(async + await) 처리 후 사용해야 한다.
*/
