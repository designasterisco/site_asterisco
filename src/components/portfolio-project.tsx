import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { ArrowUpRight } from 'lucide-react'

interface PortfolioProjectProps {
   
  project: Project
}

export const PortfolioProject = ({ project }: PortfolioProjectProps) => {
  return (
    <>
      {
        project.type && project.type === 'video' ? (
          <iframe 
            width="100%" 
            height="450" 
            src={project.link} 
            allowFullScreen
            className="rounded-lg w-full md:h-[450px] h-[380px]"  
          ></iframe>
        ) : (
          <Link href={project.link} target="_blank" key={project.title} className="block w-full h-[300px] sm:h-[300px] md:h-[450px] relative rounded-lg group/project bg-white/10">
            <div className="w-full h-full absolute md:bottom-6 md:left-6 group-hover/project:bottom-0 group-hover/project:left-0 duration-300">
              <Image 
                src={project.image} 
                alt={`Foto de destaque do projeto ${project.title}`} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg" 
              />
              {/* Overlay */}
              <div className="absolute bottom-0 opacity-100 md:opacity-0 left-0 w-full h-full bg-brand-dark/30 md:bg-brand-dark/0 group-hover/project:bg-brand-dark/40  group-hover/project:opacity-100 duration-300"/>
              <div className="overflow-hidden absolute bottom-0 left-0 w-full h-full">
                <div className="absolute w-full bottom-0 md:-bottom-full left-0 group-hover/project:bottom-0 pb-5 md:pb-10 px-6 flex items-center justify-between gap-3 duration-300">
                  <h3 className="w-full max-w-[60%] text-white md:text-lg font-primary">{project.title}</h3>
                  <div className="py-3 px-3 md:px-5 lg:px-8 w-fit rounded-full flex items-center gap-2 group hover:text-white duration-300 bg-brand-green text-white text-sm md:text-md font-primary">
                    <ArrowUpRight className="size-5 group-hover:rotate-45 duration-300" />
                    Ver mais
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )
      }
    </>
  )
}
