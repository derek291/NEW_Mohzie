import { HeroSection } from '@/components/hero-section'
import { ExecutiveSummary } from '@/components/executive-summary'
import { PlatformOverview } from '@/components/platform-overview'
import { FeatureBuckets } from '@/components/feature-buckets'
import { TargetIndustries } from '@/components/target-industries'
import { CompetitiveComparison } from '@/components/competitive-comparison'
import { ROIFramework } from '@/components/roi-framework'
import { GTMStrategy } from '@/components/gtm-strategy'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ExecutiveSummary />
      <PlatformOverview />
      <FeatureBuckets />
      <TargetIndustries />
      <CompetitiveComparison />
      <ROIFramework />
      <GTMStrategy />
      <Footer />
    </main>
  )
}
