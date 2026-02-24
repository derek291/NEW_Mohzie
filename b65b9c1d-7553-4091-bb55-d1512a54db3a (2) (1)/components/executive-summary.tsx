'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function ExecutiveSummary() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const sections = [
    { id: 'overview', label: 'Platform Overview', number: '01' },
    { id: 'features', label: 'Three Feature Buckets', number: '02' },
    { id: 'industries', label: 'Target Industries', number: '03' },
    { id: 'comparison', label: 'Market Comparison', number: '04' },
    { id: 'roi', label: 'ROI Framework', number: '05' },
    { id: 'gtm', label: 'GTM Strategy', number: '06' }
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-white border-t border-black"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <div className={`transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wider mb-4 text-accent font-medium">
              Executive Summary
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-black leading-tight">
              Key Takeaways
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold mb-4 text-black">The Problem</h3>
                <p className="text-lg leading-relaxed text-black">
                  Organizations face a fundamental tension: email is where work happens, but chaotic threads lack accountability, governance, and compliance infrastructure.
                </p>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-bold mb-4 text-black">The Solution</h3>
                <p className="text-lg leading-relaxed text-black">
                  Mohzie transforms email threads into RACI-based workflows with enforced accountability, while automatically generating compliance-grade audit trails.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-bold mb-4 text-black">Dual Market Approach</h3>
                <p className="text-lg leading-relaxed text-black">
                  Productivity-led growth for non-regulated SMB/mid-market teams seeking email clarity. Sales-led growth for regulated industries requiring compliance without sacrificing productivity.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold mb-4 text-black">Unique Position</h3>
                <p className="text-lg leading-relaxed text-black">
                  Only platform bridging productivity tools (Gmelius, Fyxer) and compliance platforms (Mimecast, Proofpoint) with email-native RACI workflows plus governance infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-black mb-12" />

          <div>
            <h3 className="text-2xl font-bold mb-8 text-black">Document Contents</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group border border-black p-6 hover:bg-black hover:text-white transition-all duration-300 text-left cursor-pointer"
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl font-bold group-hover:text-accent transition-colors">
                      {section.number}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-base font-medium">{section.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
