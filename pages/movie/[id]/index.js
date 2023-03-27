import {useRouter} from 'next/router'
import Link from 'next/link'

const movie = ({movie}) => {
  // const router = useRouter()
  // const {id} = router.query
  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.body}</p>
      <Link href="/">Go back</Link>
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

  const post = await res.json()
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()
  const ids = posts.map(post => post.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export default post