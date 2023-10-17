import Image from 'next/image'
import Hero from '@/components/Hero'
import FeaturedServices from '@/components/FeaturedServices'
import ValueProposition from '@/components/ValueProposition'
import Statistics from '@/components/Statistics'
import DiscountBanner from '@/components/DiscountBanner'
export default function Home() {
  return (
    <>
    <Hero />
    <FeaturedServices />
    <ValueProposition />
    <Statistics />
    <DiscountBanner />
    </>
  )
}
