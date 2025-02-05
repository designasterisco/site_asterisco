'use client'
import React, { useEffect, useState } from 'react'
import { Logo } from './logo'
import { WebMenu } from './webmenu'
import { CtaButton } from './cta-button'
import { MobileMenu } from './mobile-menu'
import { cn } from '@/lib/utils'

export const Header = () => {
  const [windowWasScrolled, setWindowWasScrolled] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0) {
        setWindowWasScrolled(true)
      }else {
        setWindowWasScrolled(false)
      }
    })
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full px-4 py-5 z-[99] duration-300",
      windowWasScrolled && 'bg-brand-dark'
    )}>
      <div className="container flex items-center justify-between gap-4">
        <Logo />
        <WebMenu />
        <div className="flex items-center gap-5">
          <CtaButton href="/" title="Agendar Reunião" className="hidden md:flex" />
          <MobileMenu />
        </div>
      </div>
    </header>

  )
}
