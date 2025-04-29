
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import NichosSection from '@/components/NichosSection';
import Portfolio from '@/components/Portfolio';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import MethodologySection from '@/components/MethodologySection';

const Index = () => {
  // Função para revelar elementos conforme o scroll
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal-animation');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealElements);
    revealElements(); // Chama inicialmente para elementos já visíveis
    
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  // Adicionando Schema.org para SEO estruturado
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'i9 Sites & Landing Page',
      'description': 'Desenvolvimento de sites e landing pages de alta performance para diversos segmentos.',
      'image': 'https://i9empreendendo.com/wp-content/uploads/2024/10/cropped-i9logo-2_preview_rev_1.png',
      'telephone': '+551199999999',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'São Paulo',
        'addressRegion': 'SP',
        'addressCountry': 'BR'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': -23.5505,
        'longitude': -46.6333
      },
      'url': 'https://www.i9sites.com.br',
      'sameAs': [
        'https://www.facebook.com/i9sites',
        'https://www.instagram.com/i9sites',
        'https://www.linkedin.com/company/i9sites'
      ],
      'openingHours': 'Mo,Tu,We,Th,Fr 08:00-18:00',
      'priceRange': '$$'
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Meta tags para SEO */}
      <div className="hidden">
        <meta name="description" content="Desenvolvimento de sites e landing pages de alta performance para diversos segmentos como saúde, jurídico, imobiliário, educação e mais. Foco em conversão e resultados." />
        <meta name="keywords" content="sites, landing pages, desenvolvimento web, site para consultório, site para advogados, site para imobiliária" />
        <meta property="og:title" content="i9 Sites & Landing Pages | Criação de Sites Profissionais" />
        <meta property="og:description" content="Sites e landing pages que convertem visitantes em clientes. Soluções digitais de alta performance para diversos segmentos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.i9sites.com.br" />
        <meta property="og:image" content="https://i9empreendendo.com/wp-content/uploads/2024/10/cropped-i9logo-2_preview_rev_1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="i9 Sites & Landing Pages | Criação de Sites Profissionais" />
        <meta name="twitter:description" content="Sites e landing pages que convertem visitantes em clientes. Soluções digitais de alta performance para diversos segmentos." />
        <meta name="twitter:image" content="https://i9empreendendo.com/wp-content/uploads/2024/10/cropped-i9logo-2_preview_rev_1.png" />
      </div>

      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <MethodologySection />
        <NichosSection />
        <Portfolio />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
