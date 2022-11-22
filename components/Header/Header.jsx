import classes from './Header.module.css'
// import Link from 'next/link'
import $ from 'jquery'
import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Image from 'next/image';
import logo from '../../public/img/LOGO.png'
export default class Header extends React.Component {
    // componentDidMount() {
    //     window.onscroll =()=>{
    //         $(window).scroll(function() {
    //             var scrollTop = $(this).scrollTop();
    //             $("#scroller").css({
    //               opacity: function() {
    //                 var elementHeight = $('#bg').height()/2;
    //                 return 1 - (elementHeight - scrollTop) / elementHeight;
    //               }
    //             })
    //           }
    //         )
    //     }
    // }
    render() {
        return (
            <header className={classes.header}>
                <nav className={classes.navbar}>
                    <div className={classes.title}>
                        <Link to='#'>
                            QH
                        </Link>
                    </div>
                    <div>
                        <ul className={classes.menu}>
                            <li>
                                <Link
                                    to='about'
                                    smooth={true}
                                    offset={-30}
                                    duration={500}>about</Link>
                            </li>
                            <li>
                                <Link
                                    to='projects'
                                    smooth={true}
                                    offset={-30}
                                    duration={500}>projects</Link>
                            </li>
                            <li>
                                <Link
                                    to='work'
                                    smooth={true}
                                    offset={-30}
                                    duration={500}>work</Link>
                            </li>
                            <li>
                                <Link
                                    to='contact'
                                    smooth={true}
                                    offset={-30}
                                    duration={500}>contact</Link>
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