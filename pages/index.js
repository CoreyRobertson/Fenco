import Approach from '@/components/Approach'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Quote from '@/components/Quote'
import ServicesMain from '@/components/ServicesMain'
import Testimonials from '@/components/Testimonials'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fenco Gates and Fencing | Melbourne's Premier Fencing Solutions</title>
        <meta name="description" content="Fenco offers premium fencing solutions in Melbourne, including gates, automation, modular walls, and commercial and residential fencing services. Transform your property with our expert craftsmanship and quality materials." />
        <meta name="keywords" content="Fenco Gates and Fencing, Melbourne fencing, gates and automation, modular walls, commercial fencing, residential fencing, Melbourne, fencing services, property security, quality craftsmanship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Fenco Gates and Fencing | Melbourne's Premier Fencing Solutions" />
        <meta property="og:description" content="Discover Fenco's range of fencing solutions, from gates and automation to modular walls and more. Serving Melbourne, we deliver top-quality craftsmanship and materials for all your fencing needs." />
        <meta property="og:image" content="/images/HeroDesktop.png" />
        <meta property="og:url" content="https://www.fencomelbourne.com.au/" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        <Hero />
        <ServicesMain />
        <Intro />
        <Approach />
        <Gallery />
        <Testimonials />
        <Quote />
      </main>
    </>
  )
}
