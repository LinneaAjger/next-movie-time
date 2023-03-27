import MovieItem from './MovieItem'

const MovieList = ({ movies }) => {
  return (
    <article>
      {movies.map((movie) =>
      <MovieItem movie={movie}/>
      )}    
    </article>
  )
}

export default MovieList