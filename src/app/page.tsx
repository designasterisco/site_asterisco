import { CtaButton } from "@/components/cta-button";
import { SectionBadge } from "@/components/section-badge";
import { CardHoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServicesCarousel } from "@/components/services-carousel";
import { services } from "@/lib/services";
import { ProjectsTabs } from "@/components/projects-tabs";
export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-40 pb-10 sm:pb-16 relative">
          <video autoPlay loop muted playsInline  className="absolute top-0 left-0 h-full w-full z-0 object-cover">
            <source src="/assets/videos/video_hero.mp4" />
          </video>
        <div className="container relative flex flex-col justify-center items-center z-[50]">
          <Fade cascade  duration={500} triggerOnce>
            <SectionBadge title="Vamos colocar um Asterisco no seu negócio?" />
            <h1 className="mt-5 max-w-[900px] font-primary text-[32px] sm:text-[40px] md:text-[48px]  lg:text-[72px] font-bold text-white/15 text-center leading-tight">
              O destaque que você merece está bem 
              {/* bg-gradient-to-r from-white to-brand-dark bg-clip-text text-transparent */}
              <span className="text-white"> aqui!*</span>
            </h1>
            <p className="mt-8 font-primary font-light text-center max-w-[626px] text-white/70 text-md md:text-lg">O que fazemos é mostrar às pessoas algo que elas nunca viram e nunca vão encontrar em mais ninguém: <strong className="font-bold text-white">você!*</strong></p>
            <CtaButton href="https://api.whatsapp.com/send?phone=5584996419255&text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas" title="Agendar reunião" className="mt-10 bg-white text-brand-dark hover:text-brand-green" />

            <div className="mt-10 p-1 h-8 px-1.5 border-[3px] border-white rounded-full">
              <div className="w-1 h-1 rounded-full bg-white animate-scroll" />
            </div>
          </Fade>
        </div>
      </section>
      {/* LOGOS SECTION */}
      {/* <section className="py-10">
        <div className="container text-center gap-10">
          <Fade cascade  duration={700} triggerOnce>
            <h2 className="text-[28px] sm:text-[32px] font-primary font-semibold text-white leading-tight">Marcas que <strong className="text-brand-green">confiam</strong> no<br/> nosso trabalho</h2>
            <div className="mt-10 relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
              <div className="animate-slide-left inline-block">
                <Image src="/assets/images/placeholder/Logo.svg" alt="" width={200} height={40} className="inline mx-4"/>
                <Image src="/assets/images/placeholder/Logo-1.svg" alt="" width={200} height={40} className="inline mx-4"/>
                <Image src="/assets/images/placeholder/Logo-2.svg" alt="" width={200} height={40} className="inline mx-4"/>
                <Image src="/assets/images/placeholder/Logo-3.svg" alt="" width={200} height={40} className="inline mx-4"/>
                <Image src="/assets/images/placeholder/Logo-4.svg" alt="" width={200} height={40} className="inline mx-4"/>
              </div>

              <div className="animate-slide-left inline-block">
                <Image src="/assets/images/placeholder/Logo.svg" alt="" width={200} height={40} className="inline mx-4"/>
                <Image src="/assets/images/placeholder/Logo-1.svg" alt="" width={200} height={40} className="inline mx-4"/>
                <Image src="/assets/images/placeholder/Logo-2.svg" alt="" width={200} height={40} className="inline mx-4"/>
                <Image src="/assets/images/placeholder/Logo-3.svg" alt="" width={200} height={40} className="inline mx-4"/>
                <Image src="/assets/images/placeholder/Logo-4.svg" alt="" width={200} height={40} className="inline mx-4"/>
              </div>
            </div>
          </Fade>
        </div>
      </section> */}
      {/* ABOUT SECTION */}
      <section id="sobre-nos" className="py-20">
        <div className="container">
          <div className="flex items-center flex-col md:flex-row gap-16 mb-10">
            <div className="hidden sm:block w-1/2">
              <Fade duration={2000} triggerOnce>
                <Image 
                  src={'/assets/images/img-asterisco_sobre.webp'}
                  alt=""
                  width={530}
                  height={530}
                />
              </Fade>
            </div>
            <div className="sm:w-1/2">
              <Fade cascade  duration={600} triggerOnce>

                <SectionBadge title="Sobre nós" />
                <div className="mt-4 mb-8 relative w-full sm:max-w-[470px]">
                  <h2 className="text-[32px] sm:text-4xl md:text-[44px] leading-none font-primary text-white font-bold">
                    Muito prazer,
                    <br/>
                    <span className="text-brand-green">somos a Asterisco!*</span>
                  </h2>
                  <span className="absolute -top-2 sm:top-0 right-2 md:right-10 w-fit text-sm text-white/40 text-md font-secondary">
                    a mais nova parceira <br/>
                    do seu negócio!
                  </span>
                </div>
                <div className="text-white font-primary">
                  <p className="mb-4">
                    Somos um estúdio de design <strong>especializado na criação de marcas e websites</strong>, com uma proposta simples, mas extremamente poderosa: <strong>te destacar no seu mercado!*</strong>
                  </p>
                  <p className="mb-4">
                    Aqui, cada projeto é desenvolvido com <strong>métodos autorais e exclusivos</strong>, combinando pesquisa, estratégia, estética e funcionalidade. O resultado? Uma experiência que <strong>seu cliente vai lembrar</strong>, que você vai se orgulhar e que impulsionará o seu negócio.   
                  </p>
                  <p><strong>Vamos colocar um Asterisco na sua marca?* ✨</strong></p>
                </div>
                <CtaButton href="https://api.whatsapp.com/send?phone=5584996419255&text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas" title="Agendar reunião" className="mt-10 bg-white text-brand-dark hover:text-brand-green" />
              </Fade>
            </div>
          </div>
          <div id="servicos">
            <div className="sm:block hidden">
              <CardHoverEffect
                items={services}
              />
            </div>
            <div className="sm:hidden block">
              <ServicesCarousel services={services} />
            </div>
          </div>
        </div>
      </section>
      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="md:pt-10 pb-20">
        <div className="container">
          <div className="flex flex-col gap-4 sm:gap-7 items-center justify-center ">
            <SectionBadge title="Portfolio" />
            <h2 className="text-center text-[32px] sm:text-4xl md:text-5xl font-bold font-primary text-white">Nossos Cases de <span className="text-brand-green">Sucesso</span></h2>
          </div>
        </div>
        <div className="container relative flex flex-col mx-auto w-full  items-start justify-start mt-20">
          <ProjectsTabs />
        </div>
      </section>
      {/* CONTACT SECTION */}
      <section className="py-20 bg-[#0c0d0c] overflow-hidden group/asterisk-detail">
        <div className="container px-4 flex items-center justify-center relative">
          <Image src="/assets/images/asterisc_contact_detail.svg" alt="" width={647} height={435} className="absolute top-1/2 -translate-y-1/2 -left-28 object-cover opacity-15 group-hover/asterisk-detail:opacity-40 duration-300 " />
          <div className="relative z-50 w-full max-w-[630px] flex flex-col justify-center items-center">
            <Fade cascade duration={500} triggerOnce>
              <h2 className="text-3xl font-bold font-primary text-white text-center mb-4">Se você realmente quer transformar a sua marca em algo único</h2>
              <p className="text-white/70 font-primary font-light text-center px-16 mb-10">marca uma reunião com a gente que tem um atendimento feito só pra você te esperando!*</p>
              <Link
                href="https://api.whatsapp.com/send?phone=5584996419255&text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas"
                className={"py-2 px-5 lg:px-4 w-fit rounded-full flex items-center gap-2 group duration-300 bg-white text-brand-green text-md font-primary"}
              >
                <ArrowUpRight className="size-5 group-hover:rotate-45 duration-300" />
                <div className="text-sm">
                  Coloque um <span className="font-bold">Asterisco</span><br/>
                  no seu negócio!
                </div>
              </Link>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}
