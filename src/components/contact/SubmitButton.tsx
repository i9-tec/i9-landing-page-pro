
import React from 'react';
import { Button } from '@/components/ui/button';

interface SubmitButtonProps {
  loading: boolean;
  disabled: boolean;
}

const SubmitButton = ({ loading, disabled }: SubmitButtonProps) => {
  return (
    <div>
      <Button 
        type="submit" 
        className="w-full btn-accent py-6 bg-primary text-white hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white" 
        disabled={loading || disabled}
      >
        {loading ? "Enviando..." : "Solicitar Orçamento Gratuito"}
      </Button>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
        Ao enviar, você concorda com nossa política de privacidade
      </p>
    </div>
  );
};

export default SubmitButton;
