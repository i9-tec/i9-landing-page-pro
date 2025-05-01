
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ServiceType } from '@/types/service';
import { services } from '@/data/services';
import { businessCategories } from './businessCategories';

interface ContactFormFieldsProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    interest: string;
    category: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const ContactFormFields = ({ formData, handleChange, handleSelectChange }: ContactFormFieldsProps) => {
  return (
    <>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Nome completo *
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Digite seu nome"
          className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            E-mail *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="seu@email.com"
            className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Telefone/WhatsApp *
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(00) 00000-0000"
            className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Serviço de interesse *
        </label>
        <Select 
          value={formData.interest} 
          onValueChange={(value) => handleSelectChange('interest', value)}
          required
        >
          <SelectTrigger id="interest" className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <SelectValue placeholder="Selecione um serviço" />
          </SelectTrigger>
          <SelectContent className="dark:bg-gray-800 max-h-[300px]">
            {services.map((service) => (
              <SelectItem key={service.id} value={service.id}>
                <div className="flex items-center">
                  <span className="mr-2">{service.icon}</span>
                  {service.title}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Categoria de negócio (opcional)
        </label>
        <Select 
          value={formData.category} 
          onValueChange={(value) => handleSelectChange('category', value)}
        >
          <SelectTrigger id="category" className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <SelectValue placeholder="Selecione seu segmento" />
          </SelectTrigger>
          <SelectContent className="dark:bg-gray-800">
            {businessCategories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Mensagem
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Conte-nos um pouco sobre seu projeto"
          className="w-full min-h-[100px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
    </>
  );
};

export default ContactFormFields;
