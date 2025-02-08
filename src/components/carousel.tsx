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
      {
        projects.length > 1 && (
          <div className="absolute -top-16 right-12 md:right-44">
            <CarouselPrevious className="w-12 h-12 -left-16 bg-brand-green text-white border-brand-green hover:text-brand-green" />
            <CarouselNext  className="w-12 h-12 bg-brand-green text-white border-brand-green hover:text-brand-green" />
          </div>
        )
      }
      <CarouselContent>
        {
          projects.map(project => (
          <CarouselItem key={project.title}>
            <PortfolioProject content={project} />
          </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}
