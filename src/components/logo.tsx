import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const Logo = () => {
  return (
    <Link href="/">

      <div className="relative w-28 flex">
        <Image
          src="/assets/images/asterisco_logo_p1.svg"
          alt=""
          width={36}
          height={37}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-moveLeft delay-200" 
        />
        <Image
          src="/assets/images/asterisco_logo_p2.svg"
          alt=""
          width={36}
          height={37}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-moveMiddle delay-200" 
        />
        <Image
          src="/assets/images/asterisco_logo_p3.svg"
          alt=""
          width={36}
          height={37}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-moveRight delay-200" 
        />
      </div>
    </Link>
  )
}
