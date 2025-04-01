import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

// 비동기적으로 처리하도록 수정
export async function generateMetadata({ params }: { params: { id: string } }) {
  const movie = await getMovie(params.id); // params.id를 비동기적으로 받아오기
  return {
    title: movie.title,
  };
}

// PageProps 대신 직접 타입 명시
export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>info 로딩 중..</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<h1>video 로딩 중..</h1>}>
        <MovieVideos id={params.id} />
      </Suspense>
    </div>
  );
}

export const runtime = 'edge';
