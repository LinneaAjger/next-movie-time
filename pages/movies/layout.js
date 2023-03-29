import Link from "next/link"

export default function RootLayout({ children }) {
  // const links = [
  //   {label: 'Popular', path: '/movies/popular', targetSegment: 'popular'}, 
  //   {label: 'Top-rated', path: '/movies/top_rated', targetSegment: 'top-rated'},
  //   {label: 'Upcoming', path: '/movies/upcoming', targetSegment: 'upcoming'}
  // ]
  
return (
    <>
        {/* <ul className="second-nav">        
          {links.map ( (l, i) => 
          <li key={i}>
            <Link key={i} {...l} />
          </li>
        )}
        </ul>
        {children} */}
      </>
      )
}
