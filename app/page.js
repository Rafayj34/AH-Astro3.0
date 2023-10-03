import Image from 'next/image'
import Hero from '@/components/Hero'
import FeaturedServices from '@/components/FeaturedServices'
import ValueProposition from '@/components/ValueProposition'
export default function Home() {
  return (
    <>
    <Hero />
    <FeaturedServices />
    <ValueProposition />
    </>
  )
}
