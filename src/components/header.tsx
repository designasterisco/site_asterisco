import React from 'react'
import { Logo } from './logo'
import { WebMenu } from './webmenu'
import { CtaButton } from './cta-button'
import { MobileMenu } from './mobile-menu'

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full px-4 py-5 z-[50] bg-brand-dark">
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
