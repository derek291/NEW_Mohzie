'use client'

import { useEffect, useRef, useState } from 'react'
import { Zap, Search, Shield } from 'lucide-react'

interface Feature {
  title: string
  description: string
  details: string[]
}

export function FeatureBuckets() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<'productivity' | 'smart archive' | 'governance'>('productivity')
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

  const buckets = {
    productivity: {
      icon: Zap,
      color: 'accent',
      title: '1. Productivity',
      tagline: 'Transform Email Chaos Into Clear Ownership',
      features: [
        {
          title: 'RACI-Based Email Workflows',
          description: 'Transform any email thread into a structured workflow with clear roles',
          details: [
            'One Accountable owner (maximum two)',
            'Responsible executors who perform the work',
            'Consulted experts who provide input',
            'Informed stakeholders who receive updates',
            'System enforces Accountable party confirmation at closure'
          ]
        },
        {
          title: 'AI Summaries',
          description: 'Generate concise summaries at milestones or closure',
          details: [
            'Highlights key decisions and actions',
            'Surfaces team contributions',
            'Eliminates need to read 50+ messages',
            'Automatically updates at workflow milestones',
            'Provides at-a-glance thread status'
          ]
        },
        {
          title: 'Intelligent Inbox Segmentation',
          description: 'Separate views for different workflow states',
          details: [
            'Unread workflow requiring action',
            'In-progress workflow being executed',
            'Completed workflow and read emails',
            'Clear visual indicators of ownership',
            'Priority sorting by role and status'
          ]
        },
        {
          title: 'Conversation Control',
          description: 'Replace reply-all chaos with structured branching',
          details: [
            '"Add to Conversation" inherits existing roles',
            '"Create New Conversation" branches with new Accountable',
            'Informed participants auto-minimized to reduce noise',
            'Restoration at key milestones',
            'Prevents unnecessary inbox flooding'
          ]
        }
      ]
    },
    Smart Archive: {
      icon: Search,
      color: 'black',
      title: '2. Smart Archive',
      tagline: 'Reconstruct State & Preserve Integrity',
      features: [
        {
          title: 'Conversation Refresh',
          description: 'Reconstruct authoritative current state of any thread on-demand',
          details: [
            'Prevents responses to stale information',
            'Preserves draft content during refresh',
            'Pulls latest updates from all participants',
            'Maintains chronological integrity',
            'Shows who has seen what and when'
          ]
        },
        {
          title: 'Retroactive Thread Attachment',
          description: 'Attach side conversations or email branches back to main workflow',
          details: [
            'Full participant attribution preserved',
            'Role assignment for attached threads',
            'Maintains audit trail of attachment action',
            'Prevents information silos',
            'Creates complete conversation history'
          ]
        },
        {
          title: 'Message Integrity Preservation',
          description: 'Every workflow action logged with complete context',
          details: [
            'Role changes with before/after states',
            'Minimization and restoration events',
            'Branch creation and merging',
            'User attribution with timestamps',
            'Searchable event logs'
          ]
        }
      ]
    },
    governance: {
      icon: Shield,
      color: 'accent',
      title: '3. Governance',
      tagline: 'Compliance-Grade Infrastructure',
      features: [
        {
          title: 'Immutable Audit Trails',
          description: 'Tamper-evident logs of all workflow events',
          details: [
            'Assignments and role changes',
            'Decisions and approvals',
            'Evidence attachments',
            'Participant changes',
            'Complete timestamps and user IDs',
            'Searchable and exportable for compliance'
          ]
        },
        {
          title: 'Configurable Inheritance Rules',
          description: 'Organizational control over role and metadata persistence',
          details: [
            'Which roles persist upon reply',
            'Behavior on branch creation',
            'Auto-drop Informed after initial send',
            'Restoration triggers at milestones',
            'Reassignment suggestions on status change'
          ]
        },
        {
          title: 'Retention Policies',
          description: 'Configurable periods aligned with industry standards',
          details: [
            'HIPAA: 6-10+ years for healthcare',
            'SEC/FINRA: 5-7 years for financial services',
            'NAIC: 3-7 years for insurance',
            'Automated archival processes',
            'Post-contract retention service option'
          ]
        },
        {
          title: 'Role-Based Access Controls',
          description: 'Granular permissions for workflow management',
          details: [
            'View, edit, close workflow permissions',
            'Salesforce & HubSpot CRM integration',
            'Zendesk support tool integration',
            'Jira project management sync',
            'ServiceNow ITSM integration'
          ]
        }
      ]
    }
  }

  const currentBucket = buckets[activeTab]
  const Icon = currentBucket.icon

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="section-padding bg-white border-t-2 border-black"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wider mb-4 text-accent font-medium">
              02 — Three Feature Buckets
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
              Platform Capabilities
            </h2>
            <p className="text-xl text-black max-w-3xl leading-relaxed">
              Three integrated capability sets serving both regulated and non-regulated contexts
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 mb-16 border-b border-black pb-4">
            {(['productivity', 'Smart Archive', 'governance'] as const).map((bucket) => (
              <button
                key={bucket}
                onClick={() => setActiveTab(bucket)}
                className={`px-8 py-4 border border-black font-bold uppercase tracking-wide text-sm transition-all duration-300 cursor-pointer ${
                  activeTab === bucket
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-accent hover:text-white hover:border-accent'
                }`}
              >
                {bucket}
              </button>
            ))}
          </div>

          {/* Active Bucket Content */}
          <div className="mb-16">
            <div className="flex items-start gap-6 mb-12">
              <div className={`w-20 h-20 border-2 flex items-center justify-center ${
                currentBucket.color === 'accent' ? 'border-accent' : 'border-black'
              }`}>
                <Icon className={`w-10 h-10 ${
                  currentBucket.color === 'accent' ? 'text-accent' : 'text-black'
                }`} />
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-3 text-black">{currentBucket.title}</h3>
                <p className="text-xl text-black">{currentBucket.tagline}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {currentBucket.features.map((feature, index) => (
                <div 
                  key={index}
                  className="border border-black p-8 hover:border-accent transition-all duration-300 group"
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <h4 className="text-2xl font-bold mb-4 text-black group-hover:text-accent transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-base mb-6 text-black leading-relaxed font-medium">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-accent mt-2.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed text-black">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Context Applications */}
          <div className="border-t-2 border-black pt-16">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="border-l-4 border-accent pl-8">
                <h4 className="text-2xl font-bold mb-4 text-black">Non-Regulated Context</h4>
                <p className="text-lg leading-relaxed text-black">
                  Features focus on eliminating email chaos, establishing clear ownership, and accelerating team productivity through structured workflows and AI assistance.
                </p>
              </div>
              <div className="border-l-4 border-black pl-8">
                <h4 className="text-2xl font-bold mb-4 text-black">Regulated Context</h4>
                <p className="text-lg leading-relaxed text-black">
                  Same features automatically generate compliance-grade audit trails, immutable records, and retention policies meeting HIPAA, SEC, FINRA, and NAIC requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
