'use client'

import { useEffect, useRef, useState } from 'react'

export function PlatformOverview() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section 
      id="overview"
      ref={sectionRef}
      className="section-padding bg-white border-t-2 border-black"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wider mb-4 text-accent font-medium">
              01 — Platform Overview
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-12">
              Core Positioning
            </h2>
          </div>

          <div className="mb-24">
            <div className="border-2 border-black p-12 bg-white">
              <p className="text-3xl md:text-4xl font-bold leading-tight text-black">
                Mohzie solves the fundamental tension between email productivity and organizational governance by transforming chaotic email threads into structured, accountable workflows.
              </p>
            </div>
          </div>

          <div className="h-px bg-accent mb-16" />

          <div>
            <h3 className="text-3xl font-bold mb-12 text-black">The Dual Value Proposition</h3>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 border-2 border-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">01</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-4 text-black">RACI-Based Productivity</h4>
                      <p className="text-lg leading-relaxed text-black">
                        Eliminates confusion about ownership and accelerates decision-making through structured roles and clear accountability.
                      </p>
                    </div>
                  </div>

                  <div className="pl-20 space-y-4">
                    <div className="border-l-2 border-black pl-6">
                      <div className="font-bold text-black mb-1">Clear Accountable Owner</div>
                      <div className="text-black text-sm">Every thread has maximum two Accountable parties who must confirm closure</div>
                    </div>
                    <div className="border-l-2 border-black pl-6">
                      <div className="font-bold text-black mb-1">Structured Roles</div>
                      <div className="text-black text-sm">Responsible executors, Consulted experts, Informed stakeholders</div>
                    </div>
                    <div className="border-l-2 border-black pl-6">
                      <div className="font-bold text-black mb-1">AI-Powered Summaries</div>
                      <div className="text-black text-sm">Eliminate endless scrolling through 50+ message threads</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 border-2 border-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">02</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-4 text-black">Compliance-Grade Audit Trails</h4>
                      <p className="text-lg leading-relaxed text-black">
                        Automatically generates defensible records without forcing teams into separate systems or manual processes.
                      </p>
                    </div>
                  </div>

                  <div className="pl-20 space-y-4">
                    <div className="border-l-2 border-black pl-6">
                      <div className="font-bold text-black mb-1">Immutable Logs</div>
                      <div className="text-black text-sm">Tamper-evident records with complete timestamps and user attribution</div>
                    </div>
                    <div className="border-l-2 border-black pl-6">
                      <div className="font-bold text-black mb-1">Configurable Retention</div>
                      <div className="text-black text-sm">3-10+ year policies aligned with HIPAA, SEC, FINRA, NAIC requirements</div>
                    </div>
                    <div className="border-l-2 border-black pl-6">
                      <div className="font-bold text-black mb-1">E-Discovery Ready</div>
                      <div className="text-black text-sm">Searchable, exportable records for compliance review and legal holds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 border-t-2 border-black pt-16">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h4 className="text-xl font-bold mb-4 text-accent">For Non-Regulated Teams</h4>
                <p className="text-lg leading-relaxed text-black">
                  Mohzie ends email chaos by giving every important thread a clear Accountable owner, structured roles (Responsible, Consulted, Informed), and AI-powered summaries that eliminate endless scrolling.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-accent">For Regulated Industries</h4>
                <p className="text-lg leading-relaxed text-black">
                  These same workflows automatically produce immutable audit logs, configurable retention policies, and tamper-evident histories that satisfy HIPAA, SEC, FINRA, and NAIC requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
