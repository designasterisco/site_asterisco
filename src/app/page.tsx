import { CtaButton } from "@/components/cta-button";
import { AsteriskIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container flex flex-col justify-center items-center ">
          <div className="flex items-center gap-2 w-fit px-5 py-2 bg-white rounded-full font-secondary">
            <AsteriskIcon />
            Lorem ipsum dolor sit
          </div>
          <h1 className="mt-5 max-w-[900px] font-primary text-[60px] font-bold text-white text-center leading-tight">
            Lorem ipsum dolor 
            <span className="bg-gradient-to-r from-white to-brand-dark bg-clip-text text-transparent"> sit amet </span> 
            elit consectur
          </h1>
          <p className="mt-8 text-center max-w-[626px] text-white text-lg">Lorem ipsum dolor sit amet consectetur. Integer in curabitur pretium egestas. Neque tempor neque platea pharetra elit tempor. Morbi magna nisi nullam consequat adipiscing risus turpis. </p>
          <CtaButton href="/" className="mt-10 bg-white text-brand-dark hover:text-brand-green" />

          <div className="mt-10 p-1 h-8 px-1.5 border-[3px] border-white rounded-full">
            <div className="w-1 h-1 rounded-full bg-white animate-scroll" />
          </div>
        </div>
      </section>
    </>
  );
}
