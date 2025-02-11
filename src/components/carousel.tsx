import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { Project } from "@/lib/projects";
import { PortfolioProject } from "./portfolio-project";


interface CarouselProjectsProps {
  projects: Project[];
}

export const CarouselProjects = ({ projects }: CarouselProjectsProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    > 
      {/* {
        projects.length > 1 && (
          <div className="absolute -top-16 right-12 md:right-44">
            <CarouselPrevious className="w-12 h-12 -left-16 bg-brand-green text-white border-brand-green hover:text-brand-green" />
            <CarouselNext  className="w-12 h-12 bg-brand-green text-white border-brand-green hover:text-brand-green" />
          </div>
        )
      } */}
      <CarouselPrevious className="w-12 h-12 -left-4 z-40 bg-brand-green text-white border-brand-green hover:text-brand-green" />
      <CarouselNext  className="w-12 h-12 -right-4 z-40 bg-brand-green text-white border-brand-green hover:text-brand-green" />
      <CarouselContent className="">
        {
          projects.map((project, index: number) => (
          <CarouselItem key={index} className="md:basis-1/2 ">
            <div className="px-8 py-7">
              <PortfolioProject project={project} />
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}
