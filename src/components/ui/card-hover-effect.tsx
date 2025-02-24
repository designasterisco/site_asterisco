'use client'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactElement } from "react";
import { ArrowUpRight } from "lucide-react";

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: ReactElement<SVGAElement>;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map(({ title, description, link, icon }, idx) => (
        <Link
          href={link}
          key={title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-white dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="overflow-hidden relative group">
            <Image 
              src="/assets/images/asterisco_logo_p1.svg" 
              alt={title} 
              width={180}
              height={180}
              className="absolute -top-20 -right-20 opacity-30 group-hover:opacity-100 duration-200 delay-200"
            />
            {icon}
            <CardTitle className="text-xl font-primary">{title}</CardTitle>
            <CardDescription className="text-white/70 font-primary font-thin">{description}</CardDescription>
            <div className="group-hover:h-10 group-hover:opacity-100 duration-500">
            <div
              className={"mt-10 py-2 px-5 lg:px-4 w-fit rounded-full flex items-center gap-2 group group-hover:bg-brand-green group-hover:text-white duration-300 bg-white text-brand-green text-md font-primary"}
            >
              <ArrowUpRight className="size-5 group-hover:rotate-45 duration-300" />
              Quero essa solução
            </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
