'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center">
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Hong LUU
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Data & AI Problem Solver
          </TextEffect>
        </div>
      </div>
    </header>
  )
}