
import Image from 'next/image'
import movieStyles from '@/styles/Movie.module.css'

export default function Movie({ movieRes }) {

  console.log(movieRes)
  const imagePath = 'https://image.tmdb.org/t/p/original'

  return(
    <>
      <p className={movieStyles.vote}>★ {Math.round(movieRes.vote_average * 10) / 10} / 10</p>

      <h2>{movieRes.title}</h2>
      <h3 className={movieStyles.releaseInfo}>Release: {movieRes.release_date} • {movieRes.runtime} min</h3>
      <p className={movieStyles.descriptionText}>{movieRes.overview}</p>
    <Image 
    className={movieStyles.movieImage}
      src={imagePath + movieRes.backdrop_path}
      width={1000}
      height={1000} 
      alt={`poster of ${movieRes.title}`}/>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const movieData = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
    )
  const movieRes = await movieData.json();
  return {
    props: {movieRes}
  }
}