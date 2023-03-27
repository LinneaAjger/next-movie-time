import Link from 'next/link'
import Nav from './Nav'
import { Creepster } from 'next/font/google'
import headerStyles from '@/styles/Header.module.css'

const creepster = Creepster({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-creepster"
})


const Header = () => {
  return (
    <div className={headerStyles.title}>
              <header>
            <Link href="/">
            <h1 className={creepster.className}>Movie Time</h1>
            </Link>
        </header>
        <Nav />
    </div>
  )
}

export default Header