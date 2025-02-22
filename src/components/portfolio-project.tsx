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
    <Link href={project.link} target="_blank" key={project.title} className="block w-full h-[450px] relative rounded-lg group/project bg-white/10">
      <div className="w-full h-full absolute bottom-6 left-6 group-hover/project:bottom-0 group-hover/project:left-0 duration-300">
        <Image src={project.image} alt="" fill />
        {/* Overlay */}
        <div className="absolute bottom-0 opacity-0 left-0 w-full h-full group-hover/project:bg-brand-dark/40  group-hover/project:opacity-100 duration-300"/>
        <div className="overflow-hidden absolute bottom-0 left-0 w-full h-full">
          <div className="absolute w-full -bottom-full left-0 group-hover/project:bottom-0 pb-10 px-6 flex items-end justify-between duration-300">
            <p className="w-full max-w-[60%] text-white text-lg font-primary">{project.title}</p>
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
