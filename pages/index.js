import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import React from 'react'
import $ from 'jquery'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import LeftSidebar from '../components/Sidebar/LeftSidebar'
import { Element } from 'react-scroll'
import Model from '../components/Model/Model'
export default class Home extends React.Component {
  componentDidMount() {
    window.onscroll = () => {
      $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        $("#bg-img").css({
          opacity: function () {
            var elementHeight = $(window).height();
            return (((elementHeight - scrollTop) - 1) / elementHeight) + 0.16;
          }
        });
        $("#scroller").css({
          opacity: function () {
            var elementHeight = $(window).height() / 4;
            return 1 - (elementHeight - scrollTop) / elementHeight;
          }
        });
      }
      )
    }
  }
  render() {
    return (
      <div className='root'>
        <Head>
          <title>Quoc Huynh</title>
          <meta name="description" content="Portfolio" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <LeftSidebar />
        <div className={styles.wrapper}>
          <div className={styles.background} id='bg'>
            <Image src='/img/tranh-ngu-ho-2.jpg' 
              id='bg-img'
              layout='fill'
              objectFit='cover'/>
          </div>
          <main className={styles.container}>
            <div className='md:py-36 py-24'>
              <div className='flex md:flex-row w-full flex-col-reverse' id={styles.typo}>
                <div className='relative shrink-0 basis-2/3 items-end'>
                  <div className={styles.typo2}>
                    I&apos;M <span>a programmer</span><br></br>QUOC HUYNH
                  </div>
                </div>
                <div className='basis-1/3 flex flex-col'>
                  <div className='shrink-0 basis-1/2'>
                    <p>A little &#34;too much&#34; information is that I am fascinated by classical music and contemporary art. For non-employers, if you somehow landed on this website and you feel like having the same vibe, then just contact me as a friend &#58;&#60;</p>
                  </div>
                  <div className='shrink-0 basis-1/2'></div>
                </div>
              </div>
              <Element id='about' name='about'>
                <section className='md:mt-96 mt-48 pt-7'>
                  <div className='py-16'>
                    <h2 className={styles.sheading}>About Me</h2>
                    <div className='flex flex-col md:flex-row'>
                      <div className='basis-1/2'>
                        <div className={styles.description}>
                          <p><span>Hey&#33;</span> My name is Huynh, a second-year student majoring in Information Technology. I am definitely far different from what people usually assume to be a programmer. My greatest interest goes in Machine Learning/Deep Learning, but I am currently working really hard on web development. I also have experience working with hardware in IoT projects. I might not have much experience, but I am confident I am a dedicated guy to work with, and I am willing to learn new things&#33;&#33;&#33;</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                      </div>
                      <div className='basis-1/2 relative' id='3dcanvas'>
                        <Model/>
                      </div>
                    </div>
                  </div>
                </section>
              </Element>
              <Element id='projects' name='projects'>
                <section className='py-16' id='projects'>
                  <h2 className={styles.sheading}>Selected Projects</h2>
                  <Card />
                </section>
              </Element>
              <Element id='work' name='work'>
                <section className='py-16' id='work'>
                  <h2 className={styles.sheading}>Work Experience</h2>
                  <div className='pt-16'>
                    nothing to display... <br/> I am desperate for jobs...
                  </div>
                </section>
              </Element>
              <Element id='contact' name='contact'>
                <section className='py-16' id='contact'>
                  <h2 className={styles.sheading}>Contact</h2>
                  <Card />
                </section>
              </Element>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}
