import Link from 'next/link'
import navStyles from '@/styles/Nav.module.css'

const Nav = () => {
  
  const links = [
    {label: 'Popular', path: '/movies/popular', targetSegment: 'popular'}, 
    {label: 'Top-rated', path: '/movies/top_rated', targetSegment: 'top-rated'},
    {label: 'Upcoming', path: '/movies/upcoming', targetSegment: 'upcoming'}
  ]

  return (
    <nav className={navStyles.nav}>
              <ul className="second-nav">        
          {links.map ( (link, i) => 
          <li key={i}>
            <Link href={`${link.path}`}> 
                            {link.label} 
                        </Link> 
          </li>
        )}
        </ul>
      {/* <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul> */}

    </nav>
  )
}

export default Nav