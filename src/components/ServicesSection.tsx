
import { useState, useRef, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ServiceType } from '@/types/service';
import { services } from '@/data/services';
import ServiceSearch from './services/ServiceSearch';
import ServicesCarousel from './services/ServicesCarousel';
import ServiceDetailsModal from './services/ServiceDetailsModal';

const ServicesSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  
  // Create autoplay plugin instance first
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 8000, // Longer delay for slower movement
      stopOnInteraction: false,
    })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: true,     // Make scrolling smoother
      slidesToScroll: 1,  // Scroll one slide at a time
      duration: 100,      // Duration of the animation in milliseconds (higher = slower)
    }, 
    [autoplayPlugin.current]
  );

  // Configure the carousel to be continuous
  useEffect(() => {
    if (emblaApi) {
      // Make sure we have a reference to the api
      emblaApi.reInit();
    }
  }, [emblaApi]);

  // Filter services based on search query
  const filteredServices = searchQuery 
    ? services.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      ) 
    : services;

  const handleScheduleConsultation = () => {
    if (selectedService) {
      // Scroll to contact form and pre-select the service
      const contactSection = document.getElementById('contato');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Find the select element and set its value
        const selectElement = document.querySelector('#interest') as HTMLSelectElement;
        if (selectElement) {
          selectElement.value = selectedService.id;
          // Trigger a change event so React can capture it
          const event = new Event('change', { bubbles: true });
          selectElement.dispatchEvent(event);
        }
      }
      // Close the modal
      setSelectedService(null);
    }
  };

  return (
    <section id="servicos" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções digitais completas para destacar seu negócio online
          </p>
          
          {/* Search bar */}
          <ServiceSearch 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
        </div>

        {/* Services carousel */}
        <ServicesCarousel 
          emblaRef={emblaRef} 
          filteredServices={filteredServices}
          onSelectService={setSelectedService}
        />
        
        {/* Service details modal */}
        <ServiceDetailsModal 
          selectedService={selectedService}
          onClose={() => setSelectedService(null)}
          onScheduleConsultation={handleScheduleConsultation}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
