
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ServiceType } from '@/types/service';

interface ServiceCardProps {
  service: ServiceType;
  onSelect: (service: ServiceType) => void;
}

const ServiceCard = ({ service, onSelect }: ServiceCardProps) => {
  return (
    <Card 
      className="h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer dark:border-gray-700 dark:hover:border-blue-500"
      onClick={() => onSelect(service)}
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
            onSelect(service);
          }}
        >
          Saiba mais
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
