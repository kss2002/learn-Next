export const metadata = {
  title: 'Home',
};
// server side data fetch
const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

// typescript에서는 type를 명시적으로 선언한다.
export default async function Home() {
  const movies = await getMovies();
  return (
    <>
      <div>{JSON.stringify(movies)}</div>
    </>
  );
}

// async 비동기 처리에는 await가 필요해진다.
