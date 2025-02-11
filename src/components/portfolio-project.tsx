import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge'
import { CtaButton } from './cta-button'

interface PortfolioProjectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any
}

export const PortfolioProject = ({ project }: PortfolioProjectProps) => {
  return (
    <div key={project.title} className="w-full h-[450px] relative rounded-lg group/project bg-white/10">
      <div className="w-full h-full absolute bottom-6 left-6 group-hover/project:bottom-0 group-hover/project:left-0 duration-300">
        <Image src={project.image} alt="" fill />
        {/* Overlay */}
        <div className="absolute bottom-0 opacity-0 left-0 w-full h-full group-hover/project:bg-brand-dark/40  group-hover/project:opacity-100 duration-300"/>
        <div className="overflow-hidden absolute bottom-0 left-0 w-full h-full">
          <div className="absolute w-full -bottom-full left-0 group-hover/project:bottom-0 pb-10 px-6 flex items-end justify-between duration-300">
            <p className="w-full max-w-[60%] text-white text-lg font-primary">{project.title}</p>
            <CtaButton title="Ver mais" />
          </div>
        </div>
      </div>
    </div>
  )
}
