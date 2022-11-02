import classes from './Header.module.css'
import Link from 'next/link'
import $ from 'jquery'
import React from 'react'
export default class Header extends React.Component{
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
    render(){
        return (
            <header className={classes.header}>
                <nav className={classes.navbar}>
                    <div className={classes.title}>
                        <Link href='#'>QH</Link>
                    </div>
                    <div>
                        <ul className={classes.menu}>
                            <li>
                                <Link href='#about'>about</Link>
                            </li>
                            <li>
                                <Link href='#product'>projects</Link>
                            </li>
                            <li>
                                <Link href='#'>work</Link>
                            </li>
                            <li>
                                <Link href='#'>contact</Link>
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