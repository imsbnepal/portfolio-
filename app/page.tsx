import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Script from 'next/script';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "person",
    "name": "IMSB Nepal",
    "url": "https://imsbnepal.com",
    "jobTitle": "Backend Developer | Frontend Developer",
    "Address": {
      "@type": "PostalAddress",
      "addressCountry": "Nepal"
    },
    "sameAs": [
      "https://github.com/imsbnepal"
    ]
  };
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
