
import { useState, useRef, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Search, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ServiceType } from '@/types/service';
import { services } from '@/data/services';

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
          <div className="relative max-w-md mx-auto mt-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input 
              type="search" 
              placeholder="Buscar serviços..." 
              className="pl-10 bg-white dark:bg-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-hidden w-full">
          <Carousel
            ref={emblaRef}
            className="w-full"
          >
            <CarouselContent>
              {filteredServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <Card 
                    className="h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer dark:border-gray-700 dark:hover:border-blue-500"
                    onClick={() => setSelectedService(service)}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="text-3xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-primary-800 dark:text-white">{service.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow dark:text-gray-300">{service.shortDescription}</p>
                      <Button 
                        variant="link" 
                        className="text-blue-600 dark:text-blue-400 p-0 justify-start hover:text-blue-800 dark:hover:text-blue-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(service);
                        }}
                      >
                        Saiba mais
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="btn-primary dark:bg-blue-700 dark:hover:bg-blue-800"
            onClick={() => {
              const contactSection = document.getElementById('contato');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Solicite um orçamento
          </Button>
        </div>
        
        {/* Service details modal */}
        <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
          <DialogContent className="sm:max-w-md md:max-w-2xl">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center text-2xl">
                    <span className="text-3xl mr-2">{selectedService.icon}</span> 
                    {selectedService.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-gray-700 dark:text-gray-300">
                    {selectedService.shortDescription}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-4 space-y-4">
                  <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
                    {selectedService.fullDescription}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Faixa de Preço</h4>
                      <p className="text-lg font-medium">{selectedService.priceRange}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Prazo Aproximado</h4>
                      <p className="text-lg font-medium">{selectedService.timeframe}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button 
                      onClick={handleScheduleConsultation}
                      className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 dark:bg-blue-700 dark:hover:bg-blue-800"
                    >
                      Agendar consultoria <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ServicesSection;
