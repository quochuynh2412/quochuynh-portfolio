import { Component } from "react";
import Header from "../components/Header/Header";
import styles from '../styles/Home.module.css'
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export default class Project extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Head>
                    <title>Quoc Huynh</title>
                    <meta name="description" content="Portfolio" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <Header />
                <div className="justify-items-center w-screen h-screen">
                    <div className={styles.background} id='bg'>
                        <Image src='/img/tranh-ngu-ho-2.jpg'
                            id='bg-img'
                            layout='fill'
                            objectFit='cover' />
                    </div>
                    <div className="flex flex-row items-center w-screen h-screen">
                        <div className="basis-full">
                            <div className={styles.hanoiennetitle}>
                                COMING SOON
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}