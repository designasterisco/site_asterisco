import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge'
import { CtaButton } from './cta-button'

interface PortfolioProjectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

export const PortfolioProject = ({ content }: PortfolioProjectProps) => {
  return (
    <div className="w-full md:pr-10 min-[1110px]:pr-32">
      <div className="w-full rounded-lg border-[5px] border-white/10 bg-brand-dark p-5 md:p-10 gap-10 md:gap-0 md:pr-0 flex flex-col md:flex-row group/project hover:border-zinc-700/80 duration-300">
        <div className="w-full max-w-[520px] flex flex-col justify-between gap-10">
          <div>
            <div className="flex gap-2 items-center">
              {
                content.tags.map((tag: string) => (
                  <Badge key={tag} className="bg-gradient-to-br from-[#2D2D2D] to-[#2D2D2D]/0 font-primary font-light">
                    {tag}
                  </Badge>
                ))
              }
            </div>
            <h3 className="mt-3 text-lg min-[1110px]:text-2xl text-white font-primary mb-9">{content.title}</h3>
            <div className="flex items-center gap-3">
              <CtaButton href={content.link} title="Ver mais" className="flex-row-reverse lg:px-4 py-3" />
            </div>
          </div>
          <div className="hidden md:block">
            <Image 
              src="/assets/icons/ic_quote.svg" 
              alt=""
              width={40}
              height={40}
            />
            <p className="py-3 text-sm font-light text-white/70 font-primary">{content.customer.testimonial}</p>
            <div className="flex items-center gap-3">
              <div className="w-[52px] h-[52px] rounded-full p-1 bg-gradient-to-b from-[#1F1F1F] to-[#454545]">
                <Image 
                  src={content.customer.photo}
                  alt={content.customer.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-md font-baloo_2">{content.customer.name}</h4>
                <p className="text-white/70 text-sm font-baloo_2">{content.customer.company}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full md:max-w-[603px] min-[1110px]:min-h-[450px] md:min-h-[380px] text-center">
          <div className="hidden md:block md:absolute top-0 max-[767px]:left-0 min-[1110px]:left-20 left-8 w-full rounded-2xl bg-white/20 min-[1110px]:min-h-[450px] md:min-h-[380px] "/>
          <Image
            src={content.image}
            alt=""
            width={617}
            height={457}
            className=" md:absolute max-[767px]:top-0 max-[767px]:left-0  max-[767px]:group-hover/project:left-0 max-[767px]:group-hover/project:top-0 min-[1110px]:bottom-6 max-[1099px]:-top-6 min-[1110px]:left-[104px] left-12 duration-300 w-full min-[1110px]:h-full h-[300px] md:h-[380px] min-[1110px]:group-hover/project:bottom-0  max-[1099px]:group-hover/project:top-0 min-[1110px]:group-hover/project:left-20 group-hover:left-8"
          />
        </div>
      </div>
    </div>
  )
}
