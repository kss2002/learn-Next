import Link from 'next/link';
import { API_URL } from '../constants';

export const metadata = {
  title: 'Home',
};

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <>
      <div>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </>
  );
}

// server side data fetch
// async 비동기 처리에는 await가 필요해진다.
// typescript에서는 type를 명시적으로 선언한다.
