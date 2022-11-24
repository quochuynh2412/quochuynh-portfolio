import projects from '../../json/data.json'
import { Component } from 'react';
import {RevealList} from 'next-reveal';
import styles from './Card.module.css'
export default class Card extends Component{
    render(){
        return(
            <RevealList interval={250} delay={50} duration={1000} className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-2 pt-16'>
                {projects.map(project => (
                    <div key={project.id} className="max-w-sm rounded-lg shadow-md bg-zinc-800" id={project.id}>
                        <a href={project.url} className={styles.projectlink} target="_blank" rel="noopener noreferrer">
                            <img className="rounded-t-lg w-full" src={project.img} alt="" />
                        </a>
                        <div key={project.id} className="md:p-5 p-3">
                            <a href={project.url} className={styles.projectlink} target="_blank" rel="noopener noreferrer">
                                <h5 className="md:mb-2 mb-0 md:text-xl text-sm font-bold tracking-tight text-white ">{project.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-zinc-400 md:block hidden">{project.description}</p>
                        </div>
                    </div>
                ))}
            </RevealList>
        )
    }
}
