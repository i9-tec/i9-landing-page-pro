
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { isValid } from 'date-fns';
import { getAvailableTimes } from '@/lib/date-utils';
import ContactInfo from './contact/ContactInfo';
import ContactFormFields from './contact/ContactFormFields';
import AppointmentScheduler from './contact/AppointmentScheduler';
import SubmitButton from './contact/SubmitButton';
import { format } from 'date-fns';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    category: '',
    message: '',
    wantsAppointment: false,
    appointmentDate: undefined as Date | undefined,
    appointmentTime: '',
  });
  
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Check URL parameters for pre-selected service on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('service');
    if (serviceId) {
      setFormData(prev => ({ ...prev, interest: serviceId }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({ ...prev, appointmentTime: time }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    setFormData(prev => ({ 
      ...prev, 
      appointmentDate: date,
      appointmentTime: '' // Reset time when date changes
    }));
    
    if (date && isValid(date)) {
      const times = getAvailableTimes(date);
      setAvailableTimes(times);
    } else {
      setAvailableTimes([]);
    }
  };

  const handleSchedulingToggle = (checked: boolean) => {
    setFormData(prev => ({ ...prev, wantsAppointment: checked }));
    if (!checked) {
      setFormData(prev => ({ 
        ...prev, 
        appointmentDate: undefined, 
        appointmentTime: '' 
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de envio
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: formData.wantsAppointment 
          ? `Entraremos em contato em breve. Sua consulta foi agendada para ${format(formData.appointmentDate!, 'dd/MM/yyyy')} às ${formData.appointmentTime}.`
          : "Entraremos em contato em breve.",
      });
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        category: '',
        message: '',
        wantsAppointment: false,
        appointmentDate: undefined,
        appointmentTime: '',
      });
    }, 1000);
  };

  // Check if the form is valid for submission - needed for the Submit button
  const isFormValid = formData.wantsAppointment 
    ? Boolean(formData.appointmentDate && formData.appointmentTime)
    : true;

  return (
    <section id="contato" className="py-16 bg-gradient-to-br from-primary-800 to-primary-900 text-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6 text-primary-800 dark:text-blue-300">Solicite um orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <ContactFormFields
                formData={formData}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
              />
              
              <AppointmentScheduler
                formData={formData}
                availableTimes={availableTimes}
                handleSchedulingToggle={handleSchedulingToggle}
                handleDateSelect={handleDateSelect}
                handleTimeSelect={handleTimeSelect}
              />
              
              <SubmitButton 
                loading={loading} 
                disabled={formData.wantsAppointment && (!formData.appointmentDate || !formData.appointmentTime)}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
