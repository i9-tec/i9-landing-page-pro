
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface ServiceSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ServiceSearch = ({ searchQuery, setSearchQuery }: ServiceSearchProps) => {
  return (
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
  );
};

export default ServiceSearch;
