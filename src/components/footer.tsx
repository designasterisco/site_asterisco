import React from 'react'
import { Logo } from './logo'

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-[#0c0d0c]">
      <div className="container flex items-center justify-center sm:justify-between">
        <p className="text-center sm:text-start font-primary text-sm text-white font-thin"> &copy; Todos os direitos reservados - {new Date().getFullYear()}</p>
        <div className="sm:block hidden">
          <Logo />
        </div>
      </div>
    </footer>
  )
}
