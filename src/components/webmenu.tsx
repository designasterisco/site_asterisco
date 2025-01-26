import Link from 'next/link'
import React from 'react'

export const menuLinks = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Sobre nós',
    href: '#sobre-nos',
  },
  {
    label: 'Serviços',
    href: '#servicos',
  },
  {
    label: 'Portfólio',
    href: '#portfolio',
  },
]

export const WebMenu = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {
        menuLinks.map(link => (
          <Link 
            key={link.label} 
            href={link.href}
            className="font-primary text-white text-md font-normal hover:text-brand-light-yellow duration-200"
          >
            {link.label}
          </Link>
        ))
      }
    </nav>
  )
}
