
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { type CheckedState } from "@radix-ui/react-checkbox";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [essentialChecked, setEssentialChecked] = useState(true);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    const preferences = {
      essential: essentialChecked,
      analytics: analyticsChecked,
      marketing: marketingChecked
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setOpen(false);
  };

  const handleAcceptAll = () => {
    const preferences = {
      essential: true,
      analytics: true,
      marketing: true
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setOpen(false);
  };
  
  // Essential cookies cannot be unchecked
  const handleEssentialChange = () => {
    setEssentialChecked(true);
  };

  // Fixed type issues by using proper handlers for checkbox changes
  const handleAnalyticsChange = (checked: CheckedState) => {
    setAnalyticsChecked(checked === true);
  };

  const handleMarketingChange = (checked: CheckedState) => {
    setMarketingChecked(checked === true);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      // Prevent closing by clicking outside
      if (!isOpen && !localStorage.getItem('cookieConsent')) {
        return;
      }
      setOpen(isOpen);
    }}>
      <DialogContent className="sm:max-w-md dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold dark:text-white">Política de Cookies</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            Utilizamos cookies para melhorar sua experiência em nosso site. Por favor, selecione quais tipos de cookies você permite que utilizemos.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 my-4">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="essential" 
              checked={essentialChecked} 
              onCheckedChange={handleEssentialChange} 
              disabled={true}
            />
            <div>
              <Label 
                htmlFor="essential" 
                className="font-medium text-gray-900 dark:text-gray-100"
              >
                Cookies Essenciais
              </Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Necessários para o funcionamento básico do site. Não podem ser desabilitados.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="analytics" 
              checked={analyticsChecked} 
              onCheckedChange={handleAnalyticsChange}
            />
            <div>
              <Label 
                htmlFor="analytics"
                className="font-medium text-gray-900 dark:text-gray-100"
              >
                Cookies Analíticos
              </Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Nos ajudam a entender como os visitantes interagem com o site.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="marketing" 
              checked={marketingChecked} 
              onCheckedChange={handleMarketingChange}
            />
            <div>
              <Label 
                htmlFor="marketing"
                className="font-medium text-gray-900 dark:text-gray-100"
              >
                Cookies de Marketing
              </Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Usados para exibir anúncios relevantes e campanhas de marketing.
              </p>
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            onClick={handleAccept}
            className="dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:border-gray-600"
          >
            Aceitar Selecionados
          </Button>
          <Button 
            onClick={handleAcceptAll}
            className="bg-primary-800 hover:bg-primary-900 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Aceitar Todos
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
