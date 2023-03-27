import MovieItem from '@/components/MovieItem';
import styles from '@/styles/Layout.module.css'

  const popular = ({ movies }) => {
  return (
      <section className={styles.section}>
        {movies.results.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            />
        ))}
      </section>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const movies = await res.json() 
  return {
  props: {
    movies
  }
 }
}

export default popular
