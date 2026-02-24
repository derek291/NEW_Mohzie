'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, X } from 'lucide-react'

export function CompetitiveComparison() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCell, setHoveredCell] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    { name: 'Email-Native Experience', mohzie: true, gmelius: true, fyxer: true, mimecast: false, proofpoint: false },
    { name: 'Transform Threads to Workflows', mohzie: true, gmelius: false, fyxer: false, mimecast: false, proofpoint: false },
    { name: 'Structured RACI Roles', mohzie: true, gmelius: false, fyxer: false, mimecast: false, proofpoint: false },
    { name: 'Enforced Accountable Owner', mohzie: true, gmelius: false, fyxer: false, mimecast: false, proofpoint: false },
    { name: 'AI Thread Summaries', mohzie: true, gmelius: true, fyxer: true, mimecast: false, proofpoint: false },
    { name: 'Immutable Audit Trail', mohzie: true, gmelius: false, fyxer: false, mimecast: true, proofpoint: true },
    { name: 'Configurable Retention (3-10+ years)', mohzie: true, gmelius: false, fyxer: false, mimecast: true, proofpoint: true },
    { name: 'E-Discovery Support', mohzie: true, gmelius: false, fyxer: false, mimecast: true, proofpoint: true },
  ]

  const competitors = [
    { key: 'mohzie', name: 'Mohzie', category: 'Unified Platform' },
    { key: 'gmelius', name: 'Gmelius', category: 'Productivity Tool' },
    { key: 'fyxer', name: 'Fyxer', category: 'Productivity Tool' },
    { key: 'mimecast', name: 'Mimecast', category: 'Compliance Platform' },
    { key: 'proofpoint', name: 'Proofpoint', category: 'Compliance Platform' },
  ]

  return (
    <section 
      id="comparison"
      ref={sectionRef}
      className="section-padding bg-white border-t-2 border-black"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wider mb-4 text-accent font-medium">
              04 — Mohzie vs The Market
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
              Competitive Comparison
            </h2>
            <p className="text-xl text-black max-w-4xl leading-relaxed">
              Mohzie uniquely bridges the gap between productivity tools and compliance platforms. Productivity tools like Gmelius and Fyxer lack compliance-grade audit trails and structured RACI methodology. Compliance platforms like Mimecast and Proofpoint lack workflow transformation and email-native productivity features. Mohzie delivers both.
            </p>
          </div>

          {/* Comparison Matrix */}
          <div className="mb-16 overflow-x-auto">
            <div className="border border-black min-w-max">
              {/* Header Row */}
              <div className="grid grid-cols-6 gap-0 bg-black text-white">
                <div className="p-6 font-bold uppercase tracking-wide text-sm border-r border-white">
                  Feature
                </div>
                {competitors.map((comp) => (
                  <div 
                    key={comp.key}
                    className={`p-6 border-r border-white last:border-r-0 ${
                      comp.key === 'mohzie' ? 'bg-accent' : ''
                    }`}
                  >
                    <div className="font-bold text-base mb-1">{comp.name}</div>
                    <div className="text-xs opacity-80">{comp.category}</div>
                  </div>
                ))}
              </div>

              {/* Feature Rows */}
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-6 gap-0 hover:bg-muted transition-colors ${
                    index !== features.length - 1 ? 'border-b border-black' : ''
                  }`}
                >
                  <div className="p-6 font-medium text-black border-r border-black">
                    {feature.name}
                  </div>
                  {competitors.map((comp) => {
                    const hasFeature = feature[comp.key as keyof typeof feature] as boolean
                    const cellKey = `${comp.key}-${index}`
                    const isMohzie = comp.key === 'mohzie'
                    
                    return (
                      <div 
                        key={comp.key}
                        className={`p-6 flex items-center justify-center border-r border-black last:border-r-0 relative cursor-pointer ${
                          isMohzie && hasFeature ? 'bg-accent/5' : ''
                        }`}
                        onMouseEnter={() => setHoveredCell(cellKey)}
                        onMouseLeave={() => setHoveredCell(null)}
                      >
                        {hasFeature ? (
                          <Check className={`w-6 h-6 ${
                            isMohzie ? 'text-accent' : 'text-black'
                          } ${hoveredCell === cellKey ? 'scale-125' : ''} transition-transform`} />
                        ) : (
                          <X className={`w-6 h-6 text-black opacity-20 ${
                            hoveredCell === cellKey ? 'scale-125' : ''
                          } transition-transform`} />
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-accent pl-6">
              <h4 className="text-xl font-bold mb-4 text-black">Productivity Tools Gap</h4>
              <p className="text-base leading-relaxed text-black">
                Gmelius and Fyxer deliver email management but lack compliance infrastructure, structured RACI methodology, and enforceable accountability.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h4 className="text-xl font-bold mb-4 text-black">Compliance Platform Gap</h4>
              <p className="text-base leading-relaxed text-black">
                Mimecast and Proofpoint deliver audit trails but require separate workflow tools and lack email-native productivity features.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h4 className="text-xl font-bold mb-4 text-accent">Mohzie's Unique Position</h4>
              <p className="text-base leading-relaxed text-black">
                Only platform that transforms email threads into structured RACI workflows while automatically generating compliance-grade audit trails.
              </p>
            </div>
          </div>

          {/* Summary Statement */}
          <div className="mt-16 border-2 border-black p-12">
            <p className="text-2xl font-bold leading-relaxed text-black">
              Mohzie is the only platform that <span className="text-accent">transforms email threads into structured RACI workflows</span> while automatically generating <span className="text-accent">compliance-grade audit trails</span>, eliminating the productivity-compliance tradeoff.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
