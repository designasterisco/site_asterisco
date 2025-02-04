import Link from 'next/link'
import React, { type AnchorHTMLAttributes } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CtaButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  title: string;
}

export const CtaButton = ({title, ...rest}: CtaButtonProps) => {
  return (
    <Link
      href=""
      {...rest}
      className={cn(
        "py-3 px-5 lg:px-8 w-fit rounded-full flex items-center gap-2 group hover:text-brand-light-yellow duration-300 bg-brand-green text-white text-md font-primary",      
        rest.className,
      )}
    >
      <ArrowUpRight className="size-5 group-hover:rotate-45 duration-300" />
      {title}
    </Link>
  )
}
