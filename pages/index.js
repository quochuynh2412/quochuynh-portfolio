import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainHeader from '../components/MainHeader/MainHeader'
import React from 'react'
import $ from 'jquery'
import Model from '../components/Model/Model'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import LeftSidebar from '../components/Sidebar/LeftSidebar'
import { Element } from 'react-scroll'
import dynamic from 'next/dynamic'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});
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
        <AnimatedCursor
          color="255,255,255"
          innerSize={7}
          outerSize={37}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          outerStyle={{
            border: '1px solid var(--cursor-color)'
          }}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)'
          }} />
        <Head>
          <title>Quoc Huynh</title>
          <meta name="description" content="Portfolio" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <MainHeader />
        <LeftSidebar />
        <div className={styles.wrapper}>
          <div className={styles.background} id='bg'>
            <Image src='/img/tranh-ngu-ho-2.jpg'
              id='bg-img'
              layout='fill'
              objectFit='cover'
              priority={true} />
          </div>
          <main className={styles.container}>
            <div className='md:pt-36 py-24'>
              <div className='flex md:flex-row w-full flex-col-reverse' id={styles.typo}>
                <div className='relative shrink-0 basis-2/3 items-end'>
                  <div className={styles.typo2}>
                    I&apos;M <span>a programmer</span><br></br>QUOC HUYNH
                  </div>
                </div>
                <div className='basis-1/3 flex flex-col'>
                  <div className='shrink-0 basis-1/2'>
                    <p>A little &#34;too much&#34; information is that I am fascinated by classical music and contemporary art. For non-employers, if you somehow landed on this website and felt like having the same vibe, then just hop right in the DM and let me know &#58;&#60;</p>
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
                          <div className='pt-8'>
                            Some of my skills:
                            <ul className='flex flex-row flex-wrap gap-3 pt-6'>
                              <li className={styles.skill}>
                                React JS
                              </li>
                              <li className={styles.skill}>
                                Python
                              </li>
                              <li className={styles.skill}>
                                Java
                              </li>
                              <li className={styles.skill}>
                                Machine Learning
                              </li>
                              <li className={styles.skill}>
                                Database Development
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='basis-1/2 relative' id='3dcanvas'>
                        <Model />
                        <p className='text-center absolute bottom-5 items-center left-0 right-0 m-auto'>
                          Credits:
                          <a className="cre" href='https://www.instagram.com/vinh.chilling/' target="_blank" rel="noopener noreferrer"> @vinh.chilling</a>
                        </p>
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
                    <ol className="relative border-l border-gray-700">
                      <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-700 bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500">January 2023 - present</time>
                        <h3 className="text-lg font-semibold text-white">Bosch Global Software Technologies Vietnam</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">Java Intern</p>
                      </li>
                    </ol>
                  </div>
                </section>
              </Element>
              <Element id='contact' name='contact'>
                <section className='py-16' id='contact'>
                  <h2 className={styles.contacthd}>Stay Connected</h2>
                  <div className='text-center pt-16 text-2xl'>
                    <p>Have an exciting project where you need some help?</p>
                    <p>Send me <a className={styles.email} href='mailto:quochuynh.work@gmail.com'><span>an email</span></a></p>
                  </div>
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
