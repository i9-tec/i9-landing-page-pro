
import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Clínica Odontológica Sorrir',
    nicho: 'Saúde',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
    description: 'Site completo para clínica odontológica, com sistema de agendamento e galeria de especialidades.',
    features: ['Agendamento online', 'Galeria de antes e depois', 'Blog com dicas de saúde bucal', 'Depoimentos de pacientes'],
    images: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95'
    ]
  },
  {
    id: 2,
    title: 'Escritório Jurídico Âncora',
    nicho: 'Jurídico',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
    description: 'Site institucional para escritório de advocacia com foco em direito empresarial e tributário.',
    features: ['Áreas de atuação', 'Perfil dos advogados', 'Blog jurídico', 'Formulário de contato especializado'],
    images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85'
    ]
  },
  {
    id: 3,
    title: 'Imobiliária Nova Casa',
    nicho: 'Imobiliário',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    description: 'Portal imobiliário completo com filtros de busca e integração com sistema de imóveis.',
    features: ['Busca avançada de imóveis', 'Galeria de fotos e vídeos', 'Calculadora de financiamento', 'Área do corretor'],
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716'
    ]
  },
  {
    id: 4,
    title: 'Curso de Inglês Fluent',
    nicho: 'Educação',
    image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe',
    description: 'Landing page para captação de alunos para curso de inglês online com alto índice de conversão.',
    features: ['Vídeo demonstrativo', 'Depoimentos em vídeo', 'FAQs interativos', 'Formulário de matrícula'],
    images: [
      'https://images.unsplash.com/photo-1503428593586-e225b39bddfe',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8'
    ]
  },
  {
    id: 5,
    title: 'Fotógrafa Ana Luz',
    nicho: 'Freelancer',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d',
    description: 'Portfólio digital para fotógrafa profissional com galeria de ensaios e sistema de orçamentos.',
    features: ['Galeria responsiva', 'Filtros por categoria', 'Integração com Instagram', 'Área de cliente'],
    images: [
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d',
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5'
    ]
  },
  {
    id: 6,
    title: 'Restaurante Sabor & Arte',
    nicho: 'Comércio Local',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    description: 'Site para restaurante com cardápio digital, sistema de reservas e integração com delivery.',
    features: ['Cardápio interativo', 'Reservas online', 'Integração com iFood', 'Galeria de pratos'],
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'
    ]
  },
  {
    id: 7,
    title: 'Loja Eco Beleza',
    nicho: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
    description: 'E-commerce completo para produtos de beleza naturais e orgânicos com alta performance.',
    features: ['Categorias intuitivas', 'Checkout otimizado', 'Filtros avançados', 'Selos de segurança'],
    images: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9'
    ]
  },
  {
    id: 8,
    title: 'Pousada Mar Azul',
    nicho: 'Turismo',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    description: 'Site para pousada beira-mar com sistema de reservas e tour virtual pelos ambientes.',
    features: ['Reservas online', 'Tour 360°', 'Mapa interativo', 'Integração com TripAdvisor'],
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    ]
  }
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Configure autoplay for continuous slow movement
  const autoplayRef = useRef(
    Autoplay({ 
      delay: 0, // No delay between slides for continuous movement
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      playOnInit: true,
      jump: false, // Prevent jumping to the start when reaching the end
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  );

  const handleOpenModal = (item: typeof portfolioItems[0]) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title dark:text-white">Nosso Portfólio</h2>
          <p className="section-subtitle dark:text-gray-300">
            Conheça alguns dos projetos que desenvolvemos para diferentes segmentos
          </p>
        </div>

        <div className="mb-10 overflow-hidden">
          <Carousel
            className="w-full"
            plugins={[autoplayRef.current]}
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
              skipSnaps: false,
              containScroll: false,
              slidesToScroll: 1,
              duration: 50, // Very slow transition for smooth continuous movement
            }}
          >
            <CarouselContent>
              {portfolioItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                  <div 
                    className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 cursor-pointer card-hover h-full"
                    onClick={() => handleOpenModal(item)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <span className="inline-block bg-primary-100 dark:bg-blue-900 text-primary-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
                        {item.nicho}
                      </span>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-3">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-10">
          <Button className="btn-primary dark:bg-blue-700 dark:hover:bg-blue-800">Ver todos os projetos</Button>
        </div>

        <Dialog open={open} onOpenChange={handleCloseModal}>
          <DialogContent className="sm:max-w-4xl overflow-y-auto max-h-[90vh] dark:bg-gray-800 dark:text-gray-100">
            {selectedItem && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold dark:text-white">{selectedItem.title}</DialogTitle>
                  <DialogDescription>
                    <span className="inline-block bg-primary-100 dark:bg-blue-900 text-primary-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded mt-2">
                      {selectedItem.nicho}
                    </span>
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6 relative">
                  <div className="rounded-lg overflow-hidden shadow-lg relative">
                    <img 
                      src={selectedItem.images[currentImageIndex]} 
                      alt={`${selectedItem.title} preview ${currentImageIndex + 1}`}
                      className="w-full h-auto"
                    />
                    
                    {selectedItem.images.length > 1 && (
                      <>
                        <button 
                          onClick={(e) => { e.stopPropagation(); prevImage(); }} 
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2"
                          aria-label="Imagem anterior"
                        >
                          ◀
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); nextImage(); }} 
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2"
                          aria-label="Próxima imagem"
                        >
                          ▶
                        </button>
                      </>
                    )}
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    {selectedItem.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 mx-1 rounded-full ${
                          currentImageIndex === index ? "bg-primary-800 dark:bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
                        }`}
                        aria-label={`Ver imagem ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2 dark:text-white">Descrição</h3>
                  <p className="text-gray-700 dark:text-gray-300">{selectedItem.description}</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 dark:text-white">Funcionalidades</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedItem.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-accent-orange dark:bg-orange-500 rounded-full mr-2"></span>
                        <span className="dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex justify-end">
                  <Button className="btn-accent dark:bg-orange-600 dark:hover:bg-orange-700">
                    Quero um projeto similar
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
