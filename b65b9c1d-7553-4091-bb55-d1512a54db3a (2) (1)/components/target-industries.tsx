'use client'

import { useEffect, useRef, useState } from 'react'
import { Building2, Users, Briefcase } from 'lucide-react'

export function TargetIndustries() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeView, setActiveView] = useState<'regulated' | 'nonregulated'>('regulated')
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

  const regulatedIndustries = [
    {
      title: 'Healthcare',
      icon: Building2,
      framework: 'HIPAA Security Rule, HIPAA Privacy Rule, HITECH Act',
      requirements: [
        {
          label: 'Encryption Requirements',
          detail: 'End-to-end encryption for ePHI in transit and at rest (AES 256-bit minimum)'
        },
        {
          label: 'Access Controls',
          detail: 'Role-based permissions, multi-factor authentication, automatic session timeouts'
        },
        {
          label: 'Audit Trails',
          detail: 'Immutable logs capturing who accessed what PHI, when, and why with tamper-proof timestamps'
        },
        {
          label: 'Business Associate Agreement',
          detail: 'Required BAA execution for any third-party handling PHI'
        },
        {
          label: 'Retention',
          detail: '6-10+ years for patient records and communications containing PHI'
        }
      ],
      painPoint: 'Balancing collaborative email workflows with strict PHI protection and audit requirements'
    },
    {
      title: 'Financial Services',
      icon: Briefcase,
      framework: 'SEC Rule 17a-4, FINRA Rules 4511/4513/3110',
      requirements: [
        {
          label: 'Retention Standards',
          detail: '5-7 years minimum for broker-dealer communications, customer complaints'
        },
        {
          label: 'WORM Format',
          detail: 'Write Once Read Many archival with non-erasable, non-rewritable storage'
        },
        {
          label: 'Supervision Requirements',
          detail: 'Documented oversight of email communications, review of customer interactions'
        },
        {
          label: 'E-Discovery Ready',
          detail: 'Immediate retrieval capability for regulatory audits and legal holds'
        },
        {
          label: 'Third-Party Designee',
          detail: 'Independent access for regulators in case of firm unwillingness/inability'
        }
      ],
      painPoint: 'Manual supervision burden across high-volume client email threads while maintaining productivity'
    },
    {
      title: 'Insurance',
      icon: Users,
      framework: 'NAIC Model Laws #668 (Data Security), #672 (Privacy of Consumer Information), State-Specific Regulations',
      requirements: [
        {
          label: 'Data Security',
          detail: 'Information security program with administrative, technical, physical safeguards'
        },
        {
          label: 'Cybersecurity Event Response',
          detail: '72-hour breach notification, incident investigation documentation'
        },
        {
          label: 'Retention',
          detail: '3-7 years for policy communications, claims correspondence, consumer complaints'
        },
        {
          label: 'Privacy Protections',
          detail: 'Opt-out mechanisms, consumer data access controls, third-party disclosure limits'
        }
      ],
      painPoint: 'Coordinating complex claims workflows across email while maintaining defensible audit trails'
    }
  ]

  const nonRegulatedIndustries = [
    {
      industry: 'Professional Services',
      teams: 'Project managers, client-facing consultants',
      painPoint: 'Multi-client email threads with unclear ownership, lost deliverables'
    },
    {
      industry: 'Consulting',
      teams: 'Engagement teams, account managers',
      painPoint: 'Complex stakeholder communications requiring clear accountability chains'
    },
    {
      industry: 'Marketing Agencies',
      teams: 'Account teams, creative project managers',
      painPoint: 'Campaign coordination across email with missed approvals, role confusion'
    },
    {
      industry: 'Real Estate',
      teams: 'Transaction coordinators, agents',
      painPoint: 'Deal workflows via email lacking clear responsible parties, audit trail gaps'
    },
    {
      industry: 'Technology (SMB/Mid)',
      teams: 'Customer success, sales, product teams',
      painPoint: 'High-volume client communications without structured ownership or follow-up'
    }
  ]

  return (
    <section 
      id="industries"
      ref={sectionRef}
      className="section-padding bg-white border-t-2 border-black"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wider mb-4 text-accent font-medium">
              03 — Target Industries
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
              Dual Market Segments
            </h2>
            <p className="text-xl text-black max-w-4xl leading-relaxed">
              Mohzie serves two distinct market segments with tailored value propositions: regulated industries requiring compliance-grade governance alongside productivity, and non-regulated SMB/mid-market organizations seeking to transform email chaos into structured workflows.
            </p>
          </div>

          {/* Toggle View */}
          <div className="flex gap-4 mb-16 border-b border-black pb-4">
            <button
              onClick={() => setActiveView('regulated')}
              className={`px-8 py-4 border border-black font-bold uppercase tracking-wide text-sm transition-all duration-300 cursor-pointer ${
                activeView === 'regulated'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-accent hover:text-white hover:border-accent'
              }`}
            >
              Regulated Industries
            </button>
            <button
              onClick={() => setActiveView('nonregulated')}
              className={`px-8 py-4 border border-black font-bold uppercase tracking-wide text-sm transition-all duration-300 cursor-pointer ${
                activeView === 'nonregulated'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-accent hover:text-white hover:border-accent'
              }`}
            >
              Non-Regulated SMB/Mid-Market
            </button>
          </div>

          {/* Regulated Industries View */}
          {activeView === 'regulated' && (
            <div className="space-y-16">
              {regulatedIndustries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <div 
                    key={index}
                    className="border-t-4 border-accent pt-12"
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 border-2 border-black flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-3 text-black">{industry.title}</h3>
                        <div className="text-base text-black">
                          <span className="font-bold">Compliance Framework: </span>
                          {industry.framework}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {industry.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="border border-black p-6">
                          <div className="font-bold text-black mb-2">{req.label}</div>
                          <div className="text-sm leading-relaxed text-black">{req.detail}</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-black text-white p-6 border-l-4 border-accent">
                      <div className="font-bold mb-2 text-accent text-sm uppercase tracking-wider">Key Pain Point</div>
                      <div className="text-base">{industry.painPoint}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Non-Regulated View */}
          {activeView === 'nonregulated' && (
            <div>
              <div className="mb-12 border-l-4 border-accent pl-8">
                <h3 className="text-2xl font-bold mb-4 text-black">Primary Value Proposition</h3>
                <p className="text-lg leading-relaxed text-black">
                  Transform email chaos into structured, accountable workflows with RACI clarity—compliance features as strategic upside, not primary driver.
                </p>
              </div>

              <h4 className="text-2xl font-bold mb-8 text-black">Target Industries (Lowest Hanging Fruit)</h4>
              
              <div className="border border-black">
                <div className="grid md:grid-cols-3 gap-0 border-b border-black bg-black text-white">
                  <div className="p-6 font-bold uppercase tracking-wide text-sm border-r border-white">Industry</div>
                  <div className="p-6 font-bold uppercase tracking-wide text-sm border-r border-white">Key Teams</div>
                  <div className="p-6 font-bold uppercase tracking-wide text-sm">Primary Pain Point</div>
                </div>
                
                {nonRegulatedIndustries.map((item, index) => (
                  <div 
                    key={index}
                    className={`grid md:grid-cols-3 gap-0 hover:bg-muted transition-colors ${
                      index !== nonRegulatedIndustries.length - 1 ? 'border-b border-black' : ''
                    }`}
                  >
                    <div className="p-6 font-bold text-black border-r border-black">{item.industry}</div>
                    <div className="p-6 text-black border-r border-black">{item.teams}</div>
                    <div className="p-6 text-black">{item.painPoint}</div>
                  </div>
                ))}
              </div>

              <div className="mt-16 grid md:grid-cols-2 gap-12">
                <div className="border-l-4 border-accent pl-8">
                  <h4 className="text-xl font-bold mb-4 text-accent">Project Management Teams</h4>
                  <p className="text-base leading-relaxed text-black">
                    Coordinate deliverables across email threads where RACI clarity prevents dropped tasks and ensures single Accountable owner per initiative.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-8">
                  <h4 className="text-xl font-bold mb-4 text-black">Client-Facing Teams</h4>
                  <p className="text-base leading-relaxed text-black">
                    Sales, Customer Success, Account Management teams managing high-volume external communications requiring structured handoffs, clear next-action owners, and defensible records of commitments.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
