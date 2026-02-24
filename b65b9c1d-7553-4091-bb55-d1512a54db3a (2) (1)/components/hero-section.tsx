'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-16">
            <Image
              src="https://static.wixstatic.com/media/372943_ce0bf21ba97b40a1a99f20b6aa567631~mv2.png"
              alt="Mohzie"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-12 max-w-5xl text-black tracking-tight">
            Transforming Email Chaos into Structured Accountability
          </h1>

          <div className="border-l-2 border-accent pl-8 mb-16">
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl text-black">
              A comprehensive platform overview for Mohzie: transforming chaotic email threads into structured, accountable workflows with compliance-grade governance.
            </p>
          </div>

          <div className="h-px bg-black w-full mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm uppercase tracking-wide font-medium">
            <div>
              <div className="text-accent mb-2">Last Updated</div>
              <div className="text-black">February 2026</div>
            </div>
            <div>
              <div className="text-accent mb-2">Document Type</div>
              <div className="text-black">Internal Reference</div>
            </div>
            <div>
              <div className="text-accent mb-2">Classification</div>
              <div className="text-black">Team Resource</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-black animate-pulse" />
      </div>
    </section>
  )
}
