
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ServiceType } from '@/types/service';

interface ServiceDetailsModalProps {
  selectedService: ServiceType | null;
  onClose: () => void;
  onScheduleConsultation: () => void;
}

const ServiceDetailsModal = ({ 
  selectedService, 
  onClose, 
  onScheduleConsultation 
}: ServiceDetailsModalProps) => {
  if (!selectedService) return null;
  
  return (
    <Dialog open={!!selectedService} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg md:max-w-2xl lg:max-w-3xl w-11/12 mx-auto">
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
          
          <div className="mt-6 space-y-4">
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
            
            {selectedService.includedFeatures && (
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Recursos Inclusos</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedService.includedFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {selectedService.recommendedFor && (
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Recomendado Para</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedService.recommendedFor.map((recommendation, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{recommendation}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="flex justify-end gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button 
              variant="outline"
              onClick={onClose}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Fechar
            </Button>
            <Button 
              onClick={onScheduleConsultation}
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Agendar consultoria <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsModal;
