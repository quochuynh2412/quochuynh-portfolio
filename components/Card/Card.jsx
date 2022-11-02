import projects from '../../json/data.json'
import Link from 'next/link';
import Project from '../../pages/project';
export default function Card(){
    return(
        <div className='grid grid-cols-4 gap-6 pt-16'>
            {projects.map(project => (
                <div class="max-w-sm rounded-lg shadow-md bg-zinc-800">
                <Link href='/project'>
                    <img class="rounded-t-lg w-full" src={project.img} alt="" />
                </Link>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{project.title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-zinc-700 dark:text-zinc-400">{project.description}</p>
                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-zinc-800 rounded-lg hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800 bottom-0">
                        Read more
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4 bottom-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            ))}
        </div>
    )
}
