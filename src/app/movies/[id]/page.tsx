import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

interface Iparams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Iparams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: Iparams) {
  return (
    <div>
      <Suspense fallback={<h1>info 로딩 중..</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>video 로딩 중..</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

export const runtime = 'edge';

// [id] < 이게 다이나믹 라우팅하는 방법. so ezzzzzzzzzzzzz!
// console를 찍으면 백엔드에서 id를 받아오는 것을 확인 가능.

/*
Next.js에서 동적 라우트([id])를 사용할 때, params를 동기적으로 사용하면 안 된다.
즉, params를 바로 구조 분해 할당하면 안 되고, 비동기(async + await) 처리 후 사용해야 한다.
*/
