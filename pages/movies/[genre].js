import MovieItem from "@/components/MovieItem";
import styles from '@/styles/Layout.module.css'
import Link from 'next/link'
import { useState } from "react";


export default function Genre({ movieRes }) {
  const [currentPage, setCurrentPage] = useState(1)
  console.log(currentPage)
  console.log(movieRes)

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
          {/* <Link href={`/${genre}/${currentPage}`}>Next 20 movies</Link> */}
        </section>
  )
}

export async function getServerSideProps(context) {
  const { genre } = context.query
  const movieData = await fetch(
    `https://api.themoviedb.org/3/movie/${genre}?api_key=${process.env.API_KEY}&page=2`
  )
  const movieRes = await movieData.json();
  return {
    props: {movieRes}  
    
  }
}