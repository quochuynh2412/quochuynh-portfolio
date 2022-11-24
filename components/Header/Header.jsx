import classes from './Header.module.css'
// import Link from 'next/link'
import $ from 'jquery'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/img/LOGO.png'
export default class Header extends React.Component {
    render() {
        return (
            <header className={classes.header}>
                <nav className={classes.navbar}>
                    <div className={classes.title}>
                        <Link href={'/'}>
                            QH
                        </Link>
                    </div>
                    <div>
                        <ul className={classes.menu}>
                            <li>
                                <Link
                                    href={'/#about'}>about</Link>
                            </li>
                            <li>
                                <Link
                                    href={'/#projects'}>projects</Link>
                            </li>
                            <li>
                                <Link
                                    href={'/#work'}>work</Link>
                            </li>
                            <li>
                                <Link
                                    href={'/#contact'}>contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={classes.scroller} id='scroller'></div>
                <progress className={classes.progress} max="100" value="0"></progress>
            </header>
        )
    }
}