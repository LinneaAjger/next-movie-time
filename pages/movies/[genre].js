import MovieItem from "@/components/MovieItem";
import styles from '@/styles/Layout.module.css'


export default function Genre({ movieRes }) {
  return(
    <section className={styles.section} >
      {movieRes.results.map((movie)=>
      <MovieItem
      title={movie.title}
      id={movie.id}
      poster_path={movie.poster_path}
      release_date={movie.release_date}
      vote_average={movie.vote_average}
       />)}
    </section>
  )
}

export async function getServerSideProps(context) {
  const { genre } = context.query
  const movieData = await fetch(
    `https://api.themoviedb.org/3/movie/${genre}?api_key=${process.env.API_KEY}`
  )
  const movieRes = await movieData.json();
  return {
    props: {movieRes}
  }
}