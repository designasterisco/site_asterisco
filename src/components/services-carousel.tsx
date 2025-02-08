'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactElement } from "react";
import { ArrowUpRight } from "lucide-react";
import { Card, CardDescription, CardTitle } from "./ui/card-hover-effect";

interface ServicesCarouselProps {
  services: {
    icon: ReactElement<SVGAElement>
    title: string;
    description: string;
    link: string;
  }[];
}

export const ServicesCarousel = ({ services }: ServicesCarouselProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    > 
      {
        services.length > 1 && (
          <div className="absolute -top-16 right-12 md:right-44">
            <CarouselPrevious className="w-12 h-12 -left-16 bg-brand-green text-white border-brand-green hover:text-brand-green" />
            <CarouselNext  className="w-12 h-12 bg-brand-green text-white border-brand-green hover:text-brand-green" />
          </div>
        )
      }
      <CarouselContent>
        {
          services.map((service, idx) => (
          <CarouselItem key={service.title}>
            <div
              key={service.title}
              className="relative group  block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-white dark:bg-slate-800/[0.8] block  rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card className="overflow-hidden relative group">
                <Image 
                  src="/assets/images/asterisco_logo_p1.svg" 
                  alt={service.title} 
                  width={180}
                  height={180}
                  className="absolute -top-20 -right-20 duration-200 delay-[0.2ms]"
                />
                {service.icon}
                <CardTitle className="text-xl font-primary">{service.title}</CardTitle>
                <CardDescription className="text-white/70 font-primary font-thin">{service.description}</CardDescription>
                <div className="group-hover:h-10 group-hover:opacity-100 duration-500">
                <Link
                  href={service.link}
                  className={"mt-10 py-2 px-5 lg:px-4 w-fit rounded-full flex items-center gap-2 group group-hover:bg-brand-green group-hover:text-white duration-300 bg-white text-brand-green text-md font-primary"}
                >
                  <ArrowUpRight className="size-5 group-hover:rotate-45 duration-300" />
                  Quero essa solução
                </Link>
                </div>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}
