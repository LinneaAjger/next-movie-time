import Header from './Header'
import { IBM_Plex_Sans } from 'next/font/google'

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  variable: "--font-ibmPlexSans"
})

const Layout = ({children}) => {
  return (
    <main className={ibmPlexSans.className}>
          <Header />
        {children}
    </main>
  )
}

export default Layout
