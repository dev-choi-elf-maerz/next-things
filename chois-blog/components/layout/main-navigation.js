import Link from 'next/link';

import Logo from './logo'
import classes from './main-navigation.module.css';

export default function MainNevigation() {
    return (
        <>
        <header className={classes.header}>
            <Link href='/'>
                <Logo />
            </Link>
            <nav>
                <ul>
                    <li><Link href="/posts">Beiträge</Link></li>
                    <li><Link href="/contact">Kontakt</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}