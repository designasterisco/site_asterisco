import React from 'react'
import { Logo } from './logo'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <>
      <footer className="py-6 px-4 bg-[#0c0d0c]">
        <div className="container flex items-center justify-center sm:justify-between">
          <p className="text-center sm:text-start font-primary text-sm text-white font-thin"> &copy; Todos os direitos reservados - {new Date().getFullYear()}</p>
          <div className="sm:block hidden">
            <Logo />
          </div>
        </div>
      </footer>
      <Link 
        href="https://api.whatsapp.com/send?phone=5584996419255&text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas"
        className="fixed bottom-8 right-8 flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#25d366] "  
        target="_blank"
        title="Botão de contato Whatsapp"
      >
        <Image 
          src="/assets/icons/ic_whatsapp.svg" 
          alt="Ícone Whatsapp" 
          width={44} 
          height={44} 
          title="Ícone Whatsapp" />
      </Link>
    </>
  )
}
