import projects from '../../json/data.json'
import Link from 'next/link';
import Project from '../../pages/project';
import Image from 'next/image';
import { Component } from 'react';
import {RevealList} from 'next-reveal';
export default class Card extends Component{
    render(){
        return(
            <RevealList interval={250} delay={50} duration={1000} className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-2 pt-16'>
                {projects.map(project => (
                    <div key={project.id} className="max-w-sm rounded-lg shadow-md bg-zinc-800" id={project.id}>
                        <Link href='/project'>
                            <img className="rounded-t-lg w-full" src={project.img} alt="" />
                        </Link>
                        <div key={project.id} className="md:p-5 p-3">
                            <a href="#">
                                <h5 className="md:mb-2 mb-0 md:text-xl text-sm font-bold tracking-tight text-zinc-900 dark:text-white">{project.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-zinc-700 dark:text-zinc-400 md:block hidden">{project.description}</p>
                        </div>
                    </div>
                ))}
            </RevealList>
        )
    }
}
