'use client'
import React, { useState } from 'react'
import { menuLinks } from './webmenu'
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { CtaButton } from './cta-button'


export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const handleGoToSection = (sectionId: string) => {
    router.push(`/${sectionId}`)
    setOpen(false)
  }

  return (
    <div className="md:hidden block">
      <Sheet defaultOpen={false} open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <AlignRight className="size-8 text-brand-green" />
        </SheetTrigger>
        <SheetContent className="bg-brand-light-yellow flex flex-col items-center gap-8">
          <VisuallyHidden>
            <SheetTitle>
              Menu
            </SheetTitle>
          </VisuallyHidden>
          <nav className="pt-20 flex flex-col items-center gap-8">
            {
              menuLinks.map(link => (
                <button 
                  key={link.label}
                  onClick={() => handleGoToSection(link.href)}
                  className="font-primary text-brand-dark text-lg font-medium hover:text-brand-green duration-200"
                >
                  {link.label}
                </button>
              ))
            }
          </nav>
          <CtaButton className="sm:hidden" />
        </SheetContent>
      </Sheet>
    </div>
  )
}
