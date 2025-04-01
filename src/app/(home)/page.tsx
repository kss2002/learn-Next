import Link from 'next/link';
import { API_URL } from '../constants';

// server side data fetch

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

// typescript에서는 type를 명시적으로 선언한다.
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

// async 비동기 처리에는 await가 필요해진다.
