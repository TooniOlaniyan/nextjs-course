import styles from '../styles/Layout.module.css'
import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <div>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>
                        About
                    </Link>
                </li>
                <li>Home</li>
            </ul>
        </nav>
        {children}
        <footer>

        </footer>

    </div>
  )
}

export default Layout