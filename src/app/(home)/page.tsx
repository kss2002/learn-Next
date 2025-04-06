import Movie from '../../../components/movie';
import styles from '../(home)/home.module.css';
import { API_URL } from '../constants';

export const metadata = {
  title: 'Home',
};
interface MovieType {
  id: string;
  poster_path: string;
  title: string;
}

async function getMovies(): Promise<MovieType[]> {
  const response = await fetch(API_URL);
  const json: MovieType[] = await response.json();
  return json;
}

export default async function HomePage() {
  const movies: MovieType[] = await getMovies(); // ✅ 타입 지정

  return (
    <div className={styles.container}>
      {movies.map((movie: MovieType) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}

export const runtime = 'edge';
