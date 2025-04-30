
import { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const ServicesSection = () => {
  // Create autoplay plugin instance first
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      containScroll: 'trimSnaps',
      speed: 10, // Lower speed for slower movement
    }, 
    [autoplayPlugin.current]
  );

  // Configure the carousel to be continuous
  useEffect(() => {
    if (emblaApi) {
      // Make sure we have a reference to the api
      emblaApi.reInit();
    }
  }, [emblaApi]);

  const services = [
    {
      icon: "🌐",
      title: "Sites Institucionais",
      description: "Sites profissionais que transmitem credibilidade e convertem visitantes em clientes. Ideal para empresas que desejam estabelecer presença online sólida."
    },
    {
      icon: "📱",
      title: "Landing Pages",
      description: "Páginas estratégicas focadas em conversão para campanhas específicas. Maximizamos resultados de investimentos em tráfego pago."
    },
    {
      icon: "🛒",
      title: "E-commerce",
      description: "Lojas virtuais intuitivas e seguras que oferecem experiência de compra fluida e aumento nas vendas online."
    },
    {
      icon: "📊",
      title: "Consultoria em SEO",
      description: "Estratégias para melhorar o posicionamento nos buscadores e aumentar tráfego orgânico qualificado para seu negócio."
    },
    {
      icon: "📝",
      title: "Blogs e Portais",
      description: "Plataformas de conteúdo otimizadas para atrair público qualificado e estabelecer autoridade no seu segmento."
    },
    {
      icon: "🖥️",
      title: "Web Design Personalizado",
      description: "Layouts exclusivos que refletem sua identidade visual e otimizam a experiência do usuário, elevando sua marca."
    },
    {
      icon: "🏥",
      title: "Sites para Área de Saúde",
      description: "Soluções específicas para profissionais e clínicas da área da saúde, com recursos de agendamentos e áreas restritas."
    },
    {
      icon: "⚖️",
      title: "Sites para Advogados",
      description: "Plataformas profissionais focadas em transmitir confiança, com recursos específicos para escritórios jurídicos."
    },
    {
      icon: "🔬",
      title: "Portfólios Digitais",
      description: "Apresentação impactante de trabalhos e projetos para profissionais criativos e empresas que desejam mostrar seus cases."
    },
    {
      icon: "📲",
      title: "Progressive Web Apps",
      description: "Aplicações web que funcionam como apps nativos, oferecendo melhor experiência mesmo offline."
    },
    {
      icon: "🚀",
      title: "Manutenção e Suporte",
      description: "Acompanhamento contínuo do seu site para garantir segurança, atualizações e melhorias constantes."
    },
    {
      icon: "🎨",
      title: "Redesign de Sites",
      description: "Modernização completa de sites existentes para melhorar aparência, usabilidade e resultados de negócio."
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções digitais completas para destacar seu negócio online
          </p>
        </div>

        <div className="overflow-hidden w-full">
          <Carousel
            ref={emblaRef}
            className="w-full"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <Card className="h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 dark:border-gray-700 dark:hover:border-blue-500">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="text-3xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-primary-800 dark:text-white">{service.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow dark:text-gray-300">{service.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button className="btn-primary dark:bg-blue-700 dark:hover:bg-blue-800">
            Solicite um orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
