
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ServiceType } from '@/types/service';
import ServiceCard from './ServiceCard';
import { EmblaCarouselType } from 'embla-carousel-react';

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
    <div className="overflow-hidden w-full">
      <Carousel ref={emblaRef} className="w-full">
        <CarouselContent>
          {filteredServices.map((service, index) => (
            <CarouselItem key={service.id} className="md:basis-1/3 lg:basis-1/4">
              <ServiceCard service={service} onSelect={onSelectService} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
