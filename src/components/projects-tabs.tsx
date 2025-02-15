'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { criacaoDeSiteProjects, edicaoDeVideosProjects, identidadeVisualProjects, type Project } from '@/lib/projects'
import { PortfolioProject } from './portfolio-project'
import { Fade } from 'react-awesome-reveal'
export const ProjectsTabs = () => {
  return (
    <Tabs defaultValue="identidade-visual" className="container w-full">
      <TabsList className=" max-w-max flex bg-[#0c0d0c] mx-auto mb-20">
        <TabsTrigger value="identidade-visual" className="font-primary text-lg font-normal py-3 px-8 data-[state=active]:bg-transparent data-[state=active]:text-white/20 rounded-none border-b-2 border-b-brand-light/20 data-[state=active]:text-white data-[state=active]:border-b-white">Identidade Visual</TabsTrigger>
        <TabsTrigger value="criacao-de-sites" className="font-primary text-lg font-normal py-3 px-8 data-[state=active]:bg-transparent data-[state=active]:text-white/20 rounded-none border-b-2 border-b-brand-light/20 data-[state=active]:text-white data-[state=active]:border-b-white">Criação de Sites</TabsTrigger>
        <TabsTrigger value="edicao-de-videos" className="font-primary text-lg font-normal py-3 px-8 data-[state=active]:bg-transparent data-[state=active]:text-white/20 rounded-none border-b-2 border-b-brand-light/20 data-[state=active]:text-white data-[state=active]:border-b-white">Edição de Videos</TabsTrigger>
      </TabsList>
      <TabsContent value="identidade-visual" className="grid grid-cols-2 md:grid-cols-2 gap-16">
        <Fade cascade duration={500} triggerOnce>
          {
            identidadeVisualProjects.map((project: Project, index: number) => (
              <PortfolioProject key={index} project={project} />
            ))
          }
        </Fade>
      </TabsContent>
      <TabsContent value="criacao-de-sites" className="grid grid-cols-2 md:grid-cols-2 gap-16">
        <Fade cascade duration={700} triggerOnce>
          {
            criacaoDeSiteProjects.map((project: Project, index: number) => (
              <PortfolioProject key={index} project={project} />
            ))
          }
        </Fade>
      </TabsContent>
      <TabsContent value="edicao-de-videos" className="grid grid-cols-2 md:grid-cols-2 gap-16">
        <Fade cascade duration={700} triggerOnce>  
          {
            edicaoDeVideosProjects.map((project: Project, index: number) => (
              <PortfolioProject key={index} project={project} />
            ))
          }
        </Fade>
      </TabsContent>
    </Tabs>
  )
}
