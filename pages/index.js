import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import React from 'react'
import $ from 'jquery'
import ThreeScene from '../components/ThreeScene/ThreeScene'
import Card from './Card'
export default class Home extends React.Component{
  componentDidMount(){
    window.onscroll =()=>{
      $(window).scroll(function() {
          var scrollTop = $(this).scrollTop();
          $("#bg-img").css({
            opacity: function() {
              var elementHeight = $(window).height();
              return (((elementHeight - scrollTop)-1) / elementHeight)+0.16;
            }
          });
          $("#scroller").css({
            opacity: function() {
              var elementHeight = $(window).height()/4;
              return 1 - (elementHeight - scrollTop) / elementHeight;
            }
          });
        }
      )
    }
  }
  render(){
    return (
      <div className={styles.root}>
        <Head>
          <title>Quoc Huynh</title>
          <meta name="description" content="Portfolio" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header/>
        <div className={styles.wrapper}>
          <div className={styles.background} id='bg'>
            <img src='/img/tranh-ngu-ho-2.jpg' id='bg-img'></img>
          </div>
          <main className={styles.container}>
            <div className={styles.main}>
              <div className='flex flex-row w-full' id={styles.typo}>
                <div className='relative shrink-0 basis-2/3 items-end'>
                  <div className={styles.typo2}>
                    I'M <span>a programmer</span><br></br>QUOC HUYNH
                  </div>
                </div>
                <div className='basis-1/3 flex flex-col'>
                  <div className='shrink-0 basis-1/2'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <div className='shrink-0 basis-1/2'></div>
                </div>
              </div>
              <section className={styles.section} id='about'>
                <div className='py-16'>
                  <h2 className={styles.sheading}>About Me</h2>
                  <div className='flex flex-col md:flex-row'>
                    <div className='basis-1/2'>
                      <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      </div>
                    </div>
                    <div className='basis-1/2' id='3dcanvas'>
                      <ThreeScene/>
                    </div>
                  </div>
                </div>
                <div className='py-16'>
                  <h2 className={styles.sheading}>Projects</h2>
                  <div className='grid grid-cols-4 gap-4 pt-16'>
                    <Card/>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    )
  }
}
