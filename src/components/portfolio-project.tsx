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
            className="rounded-lg"  
          ></iframe>
        ) : (
          <Link href={project.link} target="_blank" key={project.title} className="block w-full h-[350px] sm:h-[300px] md:h-[450px] relative rounded-lg group/project bg-white/10">
            <div className="w-full h-full absolute bottom-6 left-6 group-hover/project:bottom-0 group-hover/project:left-0 duration-300">
              <Image src={project.image} alt="" fill className="rounded-lg" />
              {/* Overlay */}
              <div className="absolute bottom-0 opacity-0 left-0 w-full h-full group-hover/project:bg-brand-dark/40  group-hover/project:opacity-100 duration-300"/>
              <div className="overflow-hidden absolute bottom-0 left-0 w-full h-full">
                <div className="absolute w-full -bottom-full left-0 group-hover/project:bottom-0 pb-5 md:pb-10 px-6 flex flex-col md:flex-row md:items-end justify-between gap-3 duration-300">
                  <h3 className="w-full md:max-w-[60%] text-white md:text-lg font-primary">{project.title}</h3>
                  <div className="py-3 px-5 lg:px-8 w-fit rounded-full flex items-center gap-2 group hover:text-white duration-300 bg-brand-green text-white text-md font-primary">
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
