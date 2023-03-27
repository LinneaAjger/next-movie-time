import Link from 'next/link'
import Image from 'next/image'
import movieStyles from '@/styles/Movie.module.css'

const MovieItem = ({ title, id, poster_path, release_date, vote_average }) => {

  const imagePath = 'https://image.tmdb.org/t/p/original'
      return (
        <article>
          <Link href={`/movies/${id}`}>
            <Image 
            src={imagePath + poster_path}
            width={500}
            height={500} 
            alt={`poster of ${title}`}/>
          {vote_average && (
          <p className="rating"> ★ {Math.round(vote_average * 10) / 10}</p>
    )}
          <h3>{title}</h3>
          {release_date && (
            <p>Release date: {release_date}</p>
          )}
          </Link>
        </article>
  )
}

export default MovieItem