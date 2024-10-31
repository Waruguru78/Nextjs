import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <span>Elizabeth</span>
        </div>
        <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact" className={styles.contactButton}>Contact</Link>
        </div>
    </nav>
);

export default Navbar;
