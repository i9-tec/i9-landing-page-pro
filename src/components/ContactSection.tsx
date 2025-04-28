
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de envio
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contato" className="py-16 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 font-heading">Vamos criar sua presença digital?</h2>
            <p className="mb-8 text-blue-100">
              Preencha o formulário ao lado e nossa equipe entrará em contato para entender seu projeto e oferecer a melhor solução para suas necessidades.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Por que solicitar um orçamento agora?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white text-primary-800 flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <span>Análise gratuita de necessidades</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white text-primary-800 flex items-center justify-center font-bold mr-3">
                    2
                  </div>
                  <span>Proposta personalizada para seu segmento</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white text-primary-800 flex items-center justify-center font-bold mr-3">
                    3
                  </div>
                  <span>Condições especiais para os primeiros contatos do mês</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white text-primary-800 flex items-center justify-center font-bold mr-3">
                    4
                  </div>
                  <span>Suporte prioritário e garantia de satisfação</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/5511999999999" className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a href="tel:+551199999999" className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-md transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                (11) 99999-9999
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6 text-primary-800">Solicite um orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu nome"
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone/WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                  Área de interesse *
                </label>
                <Select 
                  value={formData.interest} 
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione seu segmento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saude">Saúde e Bem-estar</SelectItem>
                    <SelectItem value="juridico">Serviços Jurídicos</SelectItem>
                    <SelectItem value="imobiliario">Mercado Imobiliário</SelectItem>
                    <SelectItem value="educacao">Educação e Treinamentos</SelectItem>
                    <SelectItem value="freelancers">Profissionais Autônomos</SelectItem>
                    <SelectItem value="comercio">Comércio e Serviços Locais</SelectItem>
                    <SelectItem value="ecommerce">E-commerce e Negócios Digitais</SelectItem>
                    <SelectItem value="turismo">Turismo e Hospitalidade</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos um pouco sobre seu projeto"
                  className="w-full min-h-[100px]"
                />
              </div>
              
              <div>
                <Button type="submit" className="w-full btn-accent py-6" disabled={loading}>
                  {loading ? "Enviando..." : "Solicitar Orçamento Gratuito"}
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Ao enviar, você concorda com nossa política de privacidade
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
