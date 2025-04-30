
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { ServiceType } from '@/types/service';
import ServiceCard from './ServiceCard';
import { UseEmblaCarouselType } from 'embla-carousel-react';

interface ServicesCarouselProps {
  emblaRef: React.RefCallback<HTMLDivElement> | React.MutableRefObject<HTMLDivElement | null>;
  filteredServices: ServiceType[];
  onSelectService: (service: ServiceType) => void;
}

const ServicesCarousel = ({ 
  emblaRef, 
  filteredServices, 
  onSelectService 
}: ServicesCarouselProps) => {
  return (
    <div className="overflow-hidden w-full relative">
      <Carousel ref={emblaRef} className="w-full">
        <CarouselContent>
          {filteredServices.map((service, index) => (
            <CarouselItem key={service.id} className="md:basis-1/3 lg:basis-1/4">
              <ServiceCard service={service} onSelect={onSelectService} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
          <CarouselPrevious className="pointer-events-auto relative left-0 translate-x-0 opacity-80" />
          <CarouselNext className="pointer-events-auto relative right-0 translate-x-0 opacity-80" />
        </div>
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
