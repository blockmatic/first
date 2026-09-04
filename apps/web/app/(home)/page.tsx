import { GetStarted } from '@/components/landing/get-started'
import { Hero } from '@/components/landing/hero'
import { Spec } from '@/components/landing/spec'
import { StationRail } from '@/components/landing/station-rail'
import { What } from '@/components/landing/what'
import { Why } from '@/components/landing/why'

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <What />
      <Why />
      <StationRail />
      <Spec />
      <GetStarted />
    </main>
  )
}
