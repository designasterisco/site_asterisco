import { CtaButton } from "@/components/cta-button";
import { SectionBadge } from "@/components/section-badge";
import { Tabs } from "@/components/ui/animated-tabs";
import { CardHoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";

import { criacaoDeSiteProjects, edicaoDeVideosProjects, identidadeVisualProjects } from '@/lib/projects'
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function Home() {
  return (
    <>
      <section className="pt-40 pb-10 sm:pb-16">
        <div className="container flex flex-col justify-center items-center ">
          <SectionBadge title="Vamos colocar um Asterisco no seu negócio?" />
          <h1 className="mt-5 max-w-[900px] font-primary text-[32px] sm:text-[40px] md:text-[48px]  lg:text-[72px] font-bold text-white/15 text-center leading-tight">
            O destaque que você merece está bem 
            {/* bg-gradient-to-r from-white to-brand-dark bg-clip-text text-transparent */}
            <span className="text-white"> aqui!*</span>
          </h1>
          <p className="mt-8 font-primary font-light text-center max-w-[626px] text-white/70 text-md md:text-lg">O que fazemos é mostrar às pessoas algo que elas nunca viram e nunca vão encontrar em mais ninguém: <strong className="font-bold text-white">você!*</strong></p>
          <CtaButton href="/" title="Agendar reunião" className="mt-10 bg-white text-brand-dark hover:text-brand-green" />

          <div className="mt-10 p-1 h-8 px-1.5 border-[3px] border-white rounded-full">
            <div className="w-1 h-1 rounded-full bg-white animate-scroll" />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container text-center gap-10">
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
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="flex items-center flex-col md:flex-row gap-16 mb-10">
            <div className="w-1/2">
              <Image 
                src={'/assets/images/img-asterisco_sobre.webp'}
                alt=""
                width={530}
                height={530}
              />
            </div>
            <div className="w-1/2">
              <SectionBadge title="Sobre nós" />
              <div className="mt-4 mb-8 relative w-full max-w-[470px]">
                <h2 className="text-[44px] leading-none font-primary text-white font-bold">
                  Muito prazer,
                  <br/>
                  <span className="text-brand-green">somos a Asterisco!*</span>
                </h2>
                <span className="absolute top-0 right-10 w-fit text-sm text-white/40 text-md font-secondary">
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
              <CtaButton href="/" title="Agendar reunião" className="mt-10 bg-white text-brand-dark hover:text-brand-green" />

            </div>
          </div>
          <CardHoverEffect
            items={[
              {
              icon: '/assets/images/asterisco_logo_p1.svg',
              title: "Identidade Visual",
              description: "Lorem ipsum dolor sit amet consectetur. Integer in curabitur pretium egestas. Neque tempor neque platea pharetra elit tempor. Morbi magna nisi nullam consequat adipiscing",
              link: "#"
              },
              {
                icon: '/assets/images/asterisco_logo_p1.svg',
                title: "Criação de Sites",
                description: "Lorem ipsum dolor sit amet consectetur. Integer in curabitur pretium egestas. Neque tempor neque platea pharetra elit tempor. Morbi magna nisi nullam consequat adipiscing",
                link: "#"
              },
              {
                icon: '/assets/images/asterisco_logo_p1.svg',
                title: "Edição de Videos",
                description: "Lorem ipsum dolor sit amet consectetur. Integer in curabitur pretium egestas. Neque tempor neque platea pharetra elit tempor. Morbi magna nisi nullam consequat adipiscing",
                link: "#"
              },  
            ]}
          />
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col gap-7 items-center justify-center mb-12">
            <SectionBadge title="Portfolio" />
            <h2 className="text-center text-5xl font-bold font-primary text-white">Nossos Cases de <span className="text-brand-green">Sucesso</span></h2>
          </div>
        </div>
        <div className="relative md:h-[105rem] [perspective:1000px] b flex flex-col mx-auto w-full  items-start justify-start my-40">
          <Tabs
            contentClassName="mb-20"
            containerClassName="justify-center"
            tabClassName="rounded-none border-b border-b-[2x] border-b-brand-light/20 px-8"
            titleTabClassName="text-white/20 font-primary text-lg"
            activeTabClassName="bg-transparent rounded-none border-b-brand-light border-b-[2px]"
            titleActiveTabClassName="text-white font-primary text-lg"
            tabs={[
              {
                title: 'Identidade Visual',
                value: 'identidade-visual',
                content: identidadeVisualProjects,
              },
              {
                title: 'Criação de Sites',
                value: 'criacao-de-sites',
                content: criacaoDeSiteProjects,
              },
              {
                title: 'Edição de Videos',
                value: 'edicao-de-videos',
                content: edicaoDeVideosProjects,
              },
            ]}
          />
        </div>
      </section>
      <section className="py-20 bg-[url(/assets/images/contact_us_bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="container px-4 flex items-center justify-center">
          <div className="w-full max-w-[630px] flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold font-primary text-white text-center mb-4">Se você realmente quer transformar a sua marca em algo único</h2>
            <p className="text-white/70 font-primary font-light text-center px-16 mb-10">marca uma reunião com a gente que tem um atendimento feito só pra você te esperando!*</p>
            <Link
              href=""
              className={"py-2 px-5 lg:px-4 w-fit rounded-full flex items-center gap-2 group duration-300 bg-white text-brand-green text-md font-primary"}
            >
              <ArrowUpRight className="size-5 group-hover:rotate-45 duration-300" />
              <div className="text-sm">
                Coloque um <span className="font-bold">Asterisco</span><br/>
                no seu negócio!
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
