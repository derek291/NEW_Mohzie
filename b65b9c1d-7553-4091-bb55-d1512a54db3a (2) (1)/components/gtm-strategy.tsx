'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Building2, Target, TrendingUp, FileText, MessageSquare } from 'lucide-react'

export function GTMStrategy() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTrack, setActiveTrack] = useState<'plg' | 'slg'>('plg')
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

  const plgTrack = {
    title: 'Track 1: Productivity-Led Growth',
    subtitle: 'Non-Regulated SMB/Mid-Market',
    color: 'accent',
    targetSegments: [
      'Professional services (10-500 employees)',
      'Consulting firms',
      'Marketing agencies',
      'Real estate organizations',
      'Technology companies (SMB/mid-market)'
    ],
    idealTeams: [
      'Project management teams managing client deliverables',
      'Client-facing teams (customer success, sales, account management)',
      'Teams handling high-volume communications'
    ],
    coreMessage: 'End email chaos. Give every thread a clear owner.',
    valueProps: [
      'RACI-based workflows transform reply-all madness into structured accountability',
      'AI summaries that surface what matters without endless scrolling',
      'Intelligent inbox segmentation that prioritizes actionable threads',
      'Clear ownership eliminates confusion about next steps'
    ],
    tactics: [
      {
        icon: Users,
        title: 'Freemium/Trial Model',
        description: 'Bottom-up adoption starting with individual teams, low friction onboarding'
      },
      {
        icon: FileText,
        title: 'Content Marketing',
        description: 'Thought leadership on email productivity, RACI methodology guides, project management best practices'
      },
      {
        icon: MessageSquare,
        title: 'Viral In-Product Invites',
        description: 'Network effects as users assign RACI roles to external collaborators'
      },
      {
        icon: Users,
        title: 'Community Building',
        description: 'Productivity-focused user communities and case studies from early adopters'
      }
    ]
  }

  const slgTrack = {
    title: 'Track 2: Sales-Led Growth',
    subtitle: 'Regulated Industries/Enterprise',
    color: 'black',
    targetSegments: [
      'Healthcare organizations (HIPAA/BAA compliance)',
      'Financial services (SEC 17a-4/FINRA requirements)',
      'Insurance firms (NAIC regulations)',
      'Legal practices (e-discovery needs)',
      'Enterprise organizations requiring audit controls'
    ],
    keyStakeholders: [
      'Compliance officers',
      'Legal counsel',
      'IT security teams',
      'Risk management',
      'Chief Information Security Officers (CISOs)'
    ],
    coreMessage: 'Achieve compliance without sacrificing productivity.',
    valueProps: [
      'Compliance-grade audit trails with tamper-evident records',
      'Configurable retention policies (3-10+ years) aligned with regulations',
      'Immutable records with complete chain of custody',
      'Delivered through productivity-enhancing workflows teams want to use',
      'No separate systems or manual compliance processes'
    ],
    tactics: [
      {
        icon: FileText,
        title: 'Industry-Specific Collateral',
        description: 'HIPAA compliance briefs, SEC/FINRA retention guides, insurance regulatory whitepapers'
      },
      {
        icon: Target,
        title: 'Direct Outreach',
        description: 'Target compliance officers and legal counsel with regulatory pain points and solutions'
      },
      {
        icon: TrendingUp,
        title: 'Upgrade Path Positioning',
        description: 'Position as enterprise-grade evolution from Gmelius/Fyxer for organizations requiring audit controls'
      },
      {
        icon: Building2,
        title: 'Proof Points',
        description: 'Security certifications (SOC 2, HIPAA BAA), compliance case studies, regulatory documentation'
      }
    ]
  }

  const currentTrack = activeTrack === 'plg' ? plgTrack : slgTrack

  return (
    <section 
      id="gtm"
      ref={sectionRef}
      className="section-padding bg-white border-t-2 border-black"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wider mb-4 text-accent font-medium">
              06 — Go-to-Market Strategy
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
              Dual-Track Approach
            </h2>
            <p className="text-xl text-black max-w-4xl leading-relaxed">
              Two parallel go-to-market strategies targeting distinct segments with tailored messaging, tactics, and value propositions.
            </p>
          </div>

          {/* Track Toggle */}
          <div className="flex gap-4 mb-16 border-b border-black pb-4">
            <button
              onClick={() => setActiveTrack('plg')}
              className={`px-8 py-4 border border-black font-bold uppercase tracking-wide text-sm transition-all duration-300 cursor-pointer ${
                activeTrack === 'plg'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-accent hover:text-white hover:border-accent'
              }`}
            >
              Productivity-Led Growth
            </button>
            <button
              onClick={() => setActiveTrack('slg')}
              className={`px-8 py-4 border border-black font-bold uppercase tracking-wide text-sm transition-all duration-300 cursor-pointer ${
                activeTrack === 'slg'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-accent hover:text-white hover:border-accent'
              }`}
            >
              Sales-Led Growth
            </button>
          </div>

          {/* Track Content */}
          <div>
            <div className="mb-12">
              <h3 className="text-4xl font-bold mb-3 text-black">{currentTrack.title}</h3>
              <p className="text-2xl text-accent font-medium">{currentTrack.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-bold mb-4 text-black">
                    {activeTrack === 'plg' ? 'Target Segments' : 'Target Segments'}
                  </h4>
                  <ul className="space-y-2">
                    {currentTrack.targetSegments.map((segment, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                        <span className="text-black">{segment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h4 className="text-xl font-bold mb-4 text-black">
                    {activeTrack === 'plg' ? 'Ideal Teams' : 'Key Stakeholders'}
                  </h4>
                  <ul className="space-y-2">
                    {(activeTrack === 'plg' ? currentTrack.idealTeams : slgTrack.keyStakeholders).map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-black mt-2 flex-shrink-0" />
                        <span className="text-black">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="border-2 border-accent p-6 bg-white">
                  <div className="text-sm uppercase tracking-wider text-accent font-bold mb-3">
                    Core Message
                  </div>
                  <p className="text-2xl font-bold text-black leading-tight">
                    "{currentTrack.coreMessage}"
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-black">Value Proposition</h4>
                  <ul className="space-y-3">
                    {currentTrack.valueProps.map((prop, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent mt-1.5 flex-shrink-0" />
                        <span className="text-black leading-relaxed">{prop}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Tactics Grid */}
            <div className="border-t-2 border-black pt-12">
              <h4 className="text-2xl font-bold mb-8 text-black">Tactics & Execution</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {currentTrack.tactics.map((tactic, index) => {
                  const Icon = tactic.icon
                  return (
                    <div 
                      key={index}
                      className="border border-black p-6 hover:border-accent transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 border-2 border-black group-hover:border-accent flex items-center justify-center flex-shrink-0 transition-colors">
                          <Icon className="w-6 h-6 text-black group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-black group-hover:text-accent transition-colors">
                            {tactic.title}
                          </h5>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-black">{tactic.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-16 border-t-4 border-accent pt-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="border-l-4 border-accent pl-8">
                <h4 className="text-2xl font-bold mb-4 text-black">Why Dual-Track?</h4>
                <p className="text-lg leading-relaxed text-black">
                  Different buyer personas, procurement processes, and decision criteria require tailored approaches. PLG drives bottom-up adoption for productivity gains. SLG enables top-down sales for compliance requirements.
                </p>
              </div>
              <div className="border-l-4 border-black pl-8">
                <h4 className="text-2xl font-bold mb-4 text-black">Unified Platform</h4>
                <p className="text-lg leading-relaxed text-black">
                  Both tracks leverage the same core platform. PLG users can upgrade to compliance features. SLG customers benefit from productivity workflows their teams actually want to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
