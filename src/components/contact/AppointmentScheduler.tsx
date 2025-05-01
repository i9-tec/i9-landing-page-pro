
import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { isBusinessDay } from '@/lib/date-utils';

interface AppointmentSchedulerProps {
  formData: {
    wantsAppointment: boolean;
    appointmentDate: Date | undefined;
    appointmentTime: string;
  };
  availableTimes: string[];
  handleSchedulingToggle: (checked: boolean) => void;
  handleDateSelect: (date: Date | undefined) => void;
  handleTimeSelect: (time: string) => void;
}

const AppointmentScheduler = ({
  formData,
  availableTimes,
  handleSchedulingToggle,
  handleDateSelect,
  handleTimeSelect
}: AppointmentSchedulerProps) => {
  return (
    <>
      <div className="flex items-center space-x-2 pt-2">
        <Switch 
          id="schedule-appointment"
          checked={formData.wantsAppointment}
          onCheckedChange={handleSchedulingToggle}
          className="data-[state=checked]:bg-primary-800"
        />
        <Label 
          htmlFor="schedule-appointment" 
          className="text-sm font-medium cursor-pointer text-gray-700 dark:text-gray-300"
        >
          Desejo agendar uma consulta online gratuita
        </Label>
      </div>
      
      {formData.wantsAppointment && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-gray-100 dark:border-gray-700">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Data da consulta *
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !formData.appointmentDate && "text-muted-foreground",
                    "dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  )}
                  disabled={!formData.wantsAppointment}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.appointmentDate ? (
                    format(formData.appointmentDate, "dd/MM/yyyy", { locale: ptBR })
                  ) : (
                    <span>Escolha uma data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 dark:bg-gray-800" align="start">
                <Calendar
                  mode="single"
                  selected={formData.appointmentDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => {
                    // Disable past dates, weekends, holidays and recess
                    return !isBusinessDay(date);
                  }}
                  initialFocus
                  locale={ptBR}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Disponível de segunda a sexta, exceto feriados e recesso de fim de ano (20/12 a 20/01)
            </p>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Horário *
            </label>
            <Select 
              value={formData.appointmentTime} 
              onValueChange={handleTimeSelect}
              disabled={!formData.appointmentDate || availableTimes.length === 0}
            >
              <SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <SelectValue placeholder="Selecione um horário" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800">
                {availableTimes.map(time => (
                  <SelectItem key={time} value={time}>{time}</SelectItem>
                ))}
                {availableTimes.length === 0 && formData.appointmentDate && (
                  <SelectItem value="" disabled>
                    Sem horários disponíveis
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Horário comercial: 08:00h às 17:00h
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentScheduler;
