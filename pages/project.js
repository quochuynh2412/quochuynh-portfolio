import { Component } from "react";
import Header from "../components/Header/Header";
import styles from '../styles/Home.module.css'
import Head from "next/head";
export default class Project extends Component{
    render(){
        return(
            <div className={styles.root}>
            <div className={styles.background} id='bg'></div>
                <Head>
                    <title>Quoc Huynh</title>
                    <meta name="description" content="Portfolio" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <Header/>
                <div className={styles.wrapper}>

                </div>
            </div>
        )
    }
}