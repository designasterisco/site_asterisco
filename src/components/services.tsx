'use client'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowUpRight, ImageIcon } from 'lucide-react'
import Link from 'next/link'
import { services } from './content/services'

export const Services = () => {
  const [open, setOpen] = useState('identidade-visual')
  return (
    <Accordion 
      type="single" 
      collapsible 
      value={open}
      className="flex flex-col gap-6"
      onValueChange={(value) => setOpen(value)}
    >
        {
          services.map(service => (
            <AccordionItem key={service.label} value={service.id} className="border border-brand-green rounded-xl px-5 bg-brand-dark">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <ImageIcon className="size-8 text-white" />
                  <p className="text-xl font-primary text-white">{service.label}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-md font-thin text-white font-primary mb-4">{service.content}</p>
                <Link href="" className="flex items-center gap-2 text-brand-green group font-primary text-md hover:text-brand-light-yellow  duration-300">
                  Ver mais
                  <ArrowUpRight className="size-5 group-hover:rotate-45 duration-300 text-brand-green group-hover:text-brand-light-yellow" />
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))
        }
    </Accordion>
  )
}
