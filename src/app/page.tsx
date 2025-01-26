import { CtaButton } from "@/components/cta-button";
import { SectionBadge } from "@/components/section-badge";
import { Services } from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="pt-40 pb-10 sm:pb-16">
        <div className="container flex flex-col justify-center items-center ">
          <SectionBadge title="Lorem ipsum dolor sit" />
          <h1 className="mt-5 max-w-[900px] font-primary text-[32px] sm:text-[40px] md:text-[48px]  lg:text-[60px] font-bold text-white text-center leading-tight">
            Lorem ipsum dolor 
            <span className="bg-gradient-to-r from-white to-brand-dark bg-clip-text text-transparent"> sit amet </span> 
            elit consectur
          </h1>
          <p className="mt-8 font-primary text-center max-w-[626px] text-white text-md md:text-lg">Lorem ipsum dolor sit amet consectetur. Integer in curabitur pretium egestas. Neque tempor neque platea pharetra elit tempor. Morbi magna nisi nullam consequat adipiscing risus turpis. </p>
          <CtaButton href="/" className="mt-10 bg-white text-brand-dark hover:text-brand-green" />

          <div className="mt-10 p-1 h-8 px-1.5 border-[3px] border-white rounded-full">
            <div className="w-1 h-1 rounded-full bg-white animate-scroll" />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container text-center gap-10">
          <h2 className="text-[28px] sm:text-[32px] font-primary text-white leading-tight">Marcas que confiam no<br/> nosso trabalho</h2>
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
        <div className="container flex items-center flex-col md:flex-row gap-16">
          <div className="w-full md:max-w-[655px]">
            <SectionBadge title="Sobre nós" />
            <h2 className="mt-8 mb-6 text-white text-[28px] font-bold font-primary leading-tight">
              Lorem ipsum dolor sit amet consectetur. Integer in 
              <span className="text-brand-green"> curabitur pretium egestas </span>. 
              Neque tempor neque platea pharetra elit tempor.
            </h2>
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Image 
                  src="/assets/icons/ic_check.svg" 
                  alt="" 
                  width={30}
                  height={30}
                />
                <p className="text-md font-primary text-white/80">Lorem ipsum dolor sit amet consectetur. Integer in curabitur pretium egestas. Neque tempor neque platea pharetra elit tempor.</p>
              </div>
              <div className="flex items-start gap-3">
                <Image 
                  src="/assets/icons/ic_check.svg" 
                  alt="" 
                  width={30}
                  height={30}
                />
                <p className="text-md font-primary text-white/80">Lorem ipsum dolor sit amet consectetur. Integer in curabitur pretium egestas. Neque tempor neque platea pharetra elit tempor.</p>
              </div>
              <div className="flex items-start gap-3">
                <Image 
                  src="/assets/icons/ic_check.svg" 
                  alt="" 
                  width={30}
                  height={30}
                />
                <p className="text-md font-primary text-white/80">Lorem ipsum dolor sit amet consectetur. Integer in curabitur pretium egestas. Neque tempor neque platea pharetra elit tempor.</p>
              </div>
            </div>
            <CtaButton href="/" className="mt-10 bg-white text-brand-dark hover:text-brand-green" />
          </div>
          <div className="w-full md:max-w-[540px]">
            <Services />
          </div>
        </div>
      </section>
    </>
  );
}
