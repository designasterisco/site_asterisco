import { AsteriskIcon } from 'lucide-react';
import React from 'react'

interface SectionBadgeProps {
  title: string;
}

export const SectionBadge = ({ title }: SectionBadgeProps) => {
  return (
    <div className="flex items-center justify-center text-center gap-2 w-fit px-5 py-2 bg-white rounded-full font-secondary">
      <AsteriskIcon />
      {title}
    </div>
  )
}
