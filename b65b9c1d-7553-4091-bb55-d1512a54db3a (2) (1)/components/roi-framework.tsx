'use client'

import { useEffect, useRef, useState } from 'react'
import { Clock, TrendingUp, Shield, Calculator } from 'lucide-react'
import { ROICalculator } from './roi-calculator'

export function ROIFramework() {
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

  const timeSavingsData = [
    { metric: 'Email Time per Day', value: '28%', source: 'McKinsey' },
    { metric: 'Non-Essential Emails', value: '86%', source: 'Mimecast' },
    { metric: 'Daily Email Hours', value: '2.5 hrs', source: 'Industry Average' },
    { metric: 'Weekly Search Time', value: '1 day', source: 'Industry Average' },
  ]

  const productivityGains = [
    {
      title: 'Faster Response Times',
      description: 'Explicit Accountable owners reduce decision bottlenecks and handoff delays'
    },
    {
      title: 'Reduced Errors',
      description: 'Structured roles prevent miscommunication and duplicate work'
    },
    {
      title: 'Prevented Dropped Tasks',
      description: 'Immutable audit trail ensures no request falls through cracks'
    },
  ]

  const complianceSavings = [
    {
      metric: 'E-Discovery Cost',
      value: '$18K/GB',
      description: 'Average traditional e-discovery cost; Mohzie reduces scope and expense'
    },
    {
      metric: 'Audit Readiness',
      description: 'Automated retention policies eliminate manual compliance burden'
    },
    {
      metric: 'Legal Exposure',
      description: 'Defensible records with clear chain of custody minimize regulatory risk'
    },
  ]

  return (
    <section 
      id="roi"
      ref={sectionRef}
      className="section-padding bg-white border-t-2 border-black"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wider mb-4 text-accent font-medium">
              05 — ROI Framework
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
              Quantifying Value
            </h2>
            <p className="text-xl text-black max-w-4xl leading-relaxed">
              Mohzie delivers measurable returns across three dimensions: time savings from streamlined email workflows, productivity gains from clear accountability, and compliance cost reduction from automated audit trails.
            </p>
          </div>

          {/* Three Value Dimensions */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {/* Time Savings */}
            <div className="border border-black p-8 hover:border-accent transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border-2 border-accent flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-black">Time Savings</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                {timeSavingsData.map((item, index) => (
                  <div key={index} className="border-l-2 border-black pl-4">
                    <div className="text-sm text-black mb-1">{item.metric}</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-black">{item.value}</span>
                      <span className="text-xs text-black">({item.source})</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-black pt-6">
                <div className="text-sm font-bold mb-2 text-black">Formula</div>
                <div className="text-sm leading-relaxed text-black font-mono bg-muted p-4">
                  Annual Hours Saved = (Employees) × (Email Hours/Day) × (Efficiency Gain %) × (Work Days/Year)
                </div>
                <div className="mt-4 text-sm text-black">
                  <span className="font-bold">Typical Efficiency Gain:</span> 30-40% reduction in email processing time
                </div>
              </div>
            </div>

            {/* Productivity Gains */}
            <div className="border border-black p-8 hover:border-accent transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border-2 border-accent flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-black">Productivity Gains</h3>
              </div>
              
              <div className="space-y-6 mb-6">
                {productivityGains.map((item, index) => (
                  <div key={index}>
                    <div className="font-bold text-black mb-2">{item.title}</div>
                    <div className="text-sm leading-relaxed text-black">{item.description}</div>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-black pt-6">
                <div className="text-sm font-bold mb-2 text-black">Formula</div>
                <div className="text-sm leading-relaxed text-black font-mono bg-muted p-4">
                  Annual Value = (Hours Saved) × (Hourly Rate) + (Error Reduction Cost) + (Prevented Task Value)
                </div>
              </div>
            </div>

            {/* Compliance Cost Savings */}
            <div className="border border-black p-8 hover:border-accent transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border-2 border-accent flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-black">Compliance Savings</h3>
              </div>
              
              <div className="space-y-6 mb-6">
                {complianceSavings.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-bold text-black">{item.metric}</span>
                      {item.value && (
                        <span className="text-xl font-bold text-accent">{item.value}</span>
                      )}
                    </div>
                    <div className="text-sm leading-relaxed text-black">{item.description}</div>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-black pt-6">
                <div className="text-sm font-bold mb-2 text-black">Formula</div>
                <div className="text-sm leading-relaxed text-black font-mono bg-muted p-4">
                  Annual Savings = (E-Discovery Reduction) + (Audit Prep Hours × Rate) + (Risk Mitigation)
                </div>
              </div>
            </div>
          </div>

          {/* Interactive ROI Calculator */}
          <div className="border-t-4 border-accent pt-16">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 border-2 border-accent flex items-center justify-center">
                <Calculator className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">Interactive ROI Calculator</h3>
                <p className="text-lg text-black mt-2">Estimate your organization's potential savings</p>
              </div>
            </div>

            <ROICalculator />
          </div>
        </div>
      </div>
    </section>
  )
}
