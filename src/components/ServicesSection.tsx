
import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Code, Layout, Monitor, PenTool, Smartphone } from 'lucide-react';

type Service = {
  id: number;
  title: string;
  shortDescription: string;
  icon: React.ReactNode;
  fullDescription: string;
  priceRange: string;
  timeframe: string;
  benefits: string[];
  category: 'website' | 'landing' | 'design' | 'seo' | 'maintenance';
};

const services: Service[] = [
  {
    id: 1,
    title: 'Site Institucional',
    shortDescription: 'Apresente sua empresa com profissionalismo e credibilidade',
    icon: <Monitor className="h-10 w-10 mb-2 text-blue-600" />,
    fullDescription: 'Nossos sites institucionais são desenvolvidos com foco em transmitir a identidade e valores da sua empresa. Utilizamos design moderno, responsivo e otimizado para SEO, garantindo que sua presença online seja profissional e eficiente. Incluímos páginas essenciais como Home, Sobre, Serviços, Portfólio e Contato, todas personalizadas de acordo com sua marca.',
    priceRange: 'R$ 3.000 a R$ 7.000',
    timeframe: '15 a 30 dias',
    benefits: [
      'Design personalizado e responsivo',
      'Otimização para mecanismos de busca (SEO)',
      'Integração com Google Analytics',
      'Domínio e hospedagem (primeiro ano)',
      'Integração com redes sociais',
      'Formulário de contato'
    ],
    category: 'website'
  },
  {
    id: 2,
    title: 'Landing Page de Conversão',
    shortDescription: 'Aumente suas conversões com páginas estratégicas',
    icon: <Layout className="h-10 w-10 mb-2 text-green-600" />,
    fullDescription: 'Nossas landing pages são projetadas para maximizar conversões de campanhas específicas. Utilizamos princípios de UX/UI e copywriting persuasivo para criar páginas focadas em um único objetivo, seja captura de leads, venda de produtos ou divulgação de eventos. A estrutura é otimizada para carregamento rápido e alta taxa de conversão.',
    priceRange: 'R$ 1.500 a R$ 4.000',
    timeframe: '7 a 15 dias',
    benefits: [
      'Copywriting persuasivo',
      'Testes A/B para otimização',
      'Integração com ferramentas de email marketing',
      'Design responsivo e de alta conversão',
      'Botões de CTA estratégicos',
      'Depoimentos e elementos de prova social'
    ],
    category: 'landing'
  },
  {
    id: 3,
    title: 'E-commerce Completo',
    shortDescription: 'Venda seus produtos online com uma loja virtual profissional',
    icon: <Code className="h-10 w-10 mb-2 text-purple-600" />,
    fullDescription: 'Desenvolvemos lojas virtuais completas com foco em experiência de compra e facilidade de gestão. Nossos e-commerces incluem catálogo de produtos, carrinho de compras, integração com gateways de pagamento, gestão de estoque e relatórios de vendas. Utilizamos plataformas robustas como WooCommerce ou Shopify, dependendo das necessidades do seu negócio.',
    priceRange: 'R$ 6.000 a R$ 15.000',
    timeframe: '30 a 60 dias',
    benefits: [
      'Catálogo de produtos completo',
      'Integração com múltiplos gateways de pagamento',
      'Gestão de estoque automatizada',
      'Cálculo de frete em tempo real',
      'Área de cliente personalizada',
      'Relatórios de vendas e análise de dados'
    ],
    category: 'website'
  },
  {
    id: 4,
    title: 'Site para Profissionais de Saúde',
    shortDescription: 'Soluções digitais para médicos, dentistas e profissionais de saúde',
    icon: <Monitor className="h-10 w-10 mb-2 text-red-600" />,
    fullDescription: 'Nossos sites para profissionais de saúde são desenvolvidos considerando as particularidades do setor. Criamos soluções que transmitem confiança e profissionalismo, com áreas para apresentação do profissional, especialidades, sistema de agendamento online e blog para conteúdos educativos. Seguimos todas as normas dos conselhos regionais para comunicação digital na área de saúde.',
    priceRange: 'R$ 3.500 a R$ 8.000',
    timeframe: '20 a 40 dias',
    benefits: [
      'Sistema de agendamento online',
      'Área para artigos e conteúdo educativo',
      'Integração com WhatsApp Business',
      'Galeria de antes/depois (quando aplicável)',
      'Apresentação de especialidades e serviços',
      'Depoimentos de pacientes'
    ],
    category: 'website'
  },
  {
    id: 5,
    title: 'Site para Advogados',
    shortDescription: 'Presença digital para escritórios de advocacia e advogados autônomos',
    icon: <Monitor className="h-10 w-10 mb-2 text-blue-800" />,
    fullDescription: 'Desenvolvemos sites para advogados e escritórios jurídicos com foco em transmitir autoridade e credibilidade. Nossos projetos respeitam as normas da OAB para comunicação digital e incluem áreas para apresentação das áreas de atuação, equipe, artigos jurídicos e formulário para consultas. O design é elegante e profissional, condizente com a seriedade da profissão.',
    priceRange: 'R$ 3.500 a R$ 8.000',
    timeframe: '20 a 40 dias',
    benefits: [
      'Design elegante e profissional',
      'Blog para artigos jurídicos',
      'Áreas de atuação detalhadas',
      'Formulário para consultas iniciais',
      'Integração com redes sociais',
      'Otimização para SEO jurídico'
    ],
    category: 'website'
  },
  {
    id: 6,
    title: 'Site para Imobiliárias',
    shortDescription: 'Apresente seus imóveis e capte leads com um site especializado',
    icon: <Monitor className="h-10 w-10 mb-2 text-yellow-600" />,
    fullDescription: 'Nossos sites para imobiliárias são desenvolvidos para facilitar a busca e visualização de imóveis. Incluímos sistema de busca avançada, filtros por características, integração com portais imobiliários, tour virtual 360° e formulários de contato em cada imóvel. A administração é simplificada, permitindo o cadastro e atualização rápida do catálogo de imóveis.',
    priceRange: 'R$ 4.500 a R$ 10.000',
    timeframe: '25 a 45 dias',
    benefits: [
      'Sistema de busca avançada de imóveis',
      'Integração com portais imobiliários',
      'Tour virtual 360° (opcional)',
      'Calculadora de financiamento',
      'Área do cliente para favoritos',
      'Painel administrativo para corretores'
    ],
    category: 'website'
  },
  {
    id: 7,
    title: 'Landing Page para Captação de Leads',
    shortDescription: 'Aumente sua lista de contatos com pages de alta conversão',
    icon: <Layout className="h-10 w-10 mb-2 text-green-600" />,
    fullDescription: 'Nossas landing pages para captação de leads são projetadas com um único objetivo: maximizar inscrições no seu funil de vendas. Utilizamos princípios avançados de psicologia de conversão, como escassez, prova social e reciprocidade, além de formulários otimizados e CTAs estratégicos para aumentar ao máximo a taxa de conversão.',
    priceRange: 'R$ 1.800 a R$ 3.500',
    timeframe: '7 a 15 dias',
    benefits: [
      'Copywriting focado em conversão',
      'Formulários otimizados e simplificados',
      'Integração com CRM e ferramentas de email marketing',
      'Pop-ups estratégicos',
      'Depoimentos e social proof',
      'Monitoramento de conversões'
    ],
    category: 'landing'
  },
  {
    id: 8,
    title: 'Landing Page para Eventos',
    shortDescription: 'Promova seus eventos e maximize inscrições',
    icon: <Layout className="h-10 w-10 mb-2 text-purple-600" />,
    fullDescription: 'Nossas landing pages para eventos são projetadas para maximizar o número de inscrições e criar expectativa. Incluímos countdown timer, agenda detalhada, perfil dos palestrantes, informações sobre local e acomodação, além de sistema de inscrição integrado com gateways de pagamento. O design é personalizado de acordo com a identidade visual do evento.',
    priceRange: 'R$ 2.000 a R$ 4.500',
    timeframe: '10 a 20 dias',
    benefits: [
      'Countdown timer para criar urgência',
      'Sistema de inscrição online',
      'Agenda interativa do evento',
      'Perfil dos palestrantes',
      'Mapa de localização e informações de acesso',
      'Integração com redes sociais para compartilhamento'
    ],
    category: 'landing'
  },
  {
    id: 9,
    title: 'Site para Restaurantes',
    shortDescription: 'Apresente seu cardápio e receba pedidos online',
    icon: <Monitor className="h-10 w-10 mb-2 text-orange-600" />,
    fullDescription: 'Nossos sites para restaurantes são projetados para despertar o apetite dos visitantes e facilitar pedidos online. Incluímos cardápio digital com fotos profissionais, sistema de reservas, integração com iFood e outras plataformas de delivery, área para eventos e promoções. O design valoriza a identidade do estabelecimento e a experiência gastronômica oferecida.',
    priceRange: 'R$ 3.500 a R$ 7.500',
    timeframe: '15 a 30 dias',
    benefits: [
      'Cardápio digital interativo',
      'Sistema de reservas online',
      'Integração com plataformas de delivery',
      'Galeria de fotos do ambiente e pratos',
      'Apresentação da equipe e chef',
      'Área para eventos e cardápios especiais'
    ],
    category: 'website'
  },
  {
    id: 10,
    title: 'Redesign de Site',
    shortDescription: 'Modernize seu site existente com as últimas tendências',
    icon: <PenTool className="h-10 w-10 mb-2 text-indigo-600" />,
    fullDescription: 'Nosso serviço de redesign atualiza completamente o visual e a experiência do seu site existente. Mantemos o conteúdo relevante e a estrutura que funciona, enquanto modernizamos o design, melhoramos a navegabilidade e garantimos responsividade em todos os dispositivos. Também implementamos melhorias técnicas de SEO, velocidade de carregamento e segurança.',
    priceRange: 'R$ 2.500 a R$ 6.000',
    timeframe: '15 a 25 dias',
    benefits: [
      'Design moderno e alinhado às tendências atuais',
      'Melhoria da experiência do usuário (UX)',
      'Otimização da velocidade de carregamento',
      'Adaptação para dispositivos móveis',
      'Implementação de recursos de SEO',
      'Manutenção do conteúdo e URLs existentes quando benéfico'
    ],
    category: 'website'
  },
  {
    id: 11,
    title: 'Otimização de SEO',
    shortDescription: 'Melhore seu posicionamento nos motores de busca',
    icon: <Code className="h-10 w-10 mb-2 text-green-800" />,
    fullDescription: 'Nosso serviço de otimização para SEO visa melhorar o posicionamento do seu site nos motores de busca, especialmente no Google. Realizamos análise completa do site, otimização de palavras-chave, meta tags, estrutura de URLs, velocidade de carregamento, mobile-friendliness, entre outros fatores. O trabalho inclui relatórios mensais de desempenho e ajustes contínuos para manter e melhorar o posicionamento.',
    priceRange: 'R$ 800 a R$ 2.000/mês',
    timeframe: 'Serviço contínuo (mínimo 3 meses)',
    benefits: [
      'Análise de palavras-chave',
      'Otimização on-page e off-page',
      'Melhoria da estrutura do site',
      'Criação de conteúdo otimizado',
      'Construção de backlinks de qualidade',
      'Relatórios mensais de desempenho'
    ],
    category: 'seo'
  },
  {
    id: 12,
    title: 'Versão Mobile de Site',
    shortDescription: 'Adapte seu site para a experiência em dispositivos móveis',
    icon: <Smartphone className="h-10 w-10 mb-2 text-blue-600" />,
    fullDescription: 'Transformamos seu site desktop em uma versão totalmente adaptada para smartphones e tablets. Não se trata apenas de fazer o site "caber" em telas menores, mas sim de repensar a experiência para o contexto mobile, considerando navegação com dedos, velocidade de conexão variável e contextos de uso específicos. Implementamos técnicas de design responsivo ou criamos uma versão mobile dedicada, dependendo das necessidades.',
    priceRange: 'R$ 1.800 a R$ 4.000',
    timeframe: '10 a 20 dias',
    benefits: [
      'Design responsivo ou versão mobile dedicada',
      'Otimização de imagens para carregamento rápido',
      'Menus adaptados para navegação touch',
      'Botões de CTA de fácil acesso',
      'Teste em múltiplos dispositivos',
      'Melhoria no SEO (fator de ranqueamento mobile)'
    ],
    category: 'website'
  },
  {
    id: 13,
    title: 'Landing Page para Lançamentos',
    shortDescription: 'Maximize as vendas do seu infoproduto ou curso',
    icon: <Layout className="h-10 w-10 mb-2 text-red-600" />,
    fullDescription: 'Nossas landing pages para lançamentos são desenvolvidas seguindo as melhores práticas de marketing digital e vendas. Criamos páginas completas com storytelling persuasivo, vídeos de venda, depoimentos, detalhamento de módulos/benefícios, FAQs, garantias e seção de objeções. O design é focado em conduzir o visitante para a decisão de compra, com CTAs estratégicos e elementos de escassez.',
    priceRange: 'R$ 2.500 a R$ 6.000',
    timeframe: '15 a 25 dias',
    benefits: [
      'Copywriting de alto impacto',
      'Seções estruturadas para persuasão',
      'Elementos de escassez e urgência',
      'Integração com plataformas de pagamento',
      'Depoimentos e provas sociais',
      'Seção de garantia e FAQ detalhada'
    ],
    category: 'landing'
  },
  {
    id: 14,
    title: 'Blog Corporativo',
    shortDescription: 'Estabeleça autoridade com conteúdo relevante',
    icon: <Code className="h-10 w-10 mb-2 text-blue-600" />,
    fullDescription: 'Desenvolvemos blogs corporativos com foco em estratégia de conteúdo e SEO. Nossos blogs incluem categorias personalizadas, sistema de busca, área para newsletter, integração com redes sociais e painel administrativo intuitivo para publicação de artigos. Opcionalmente, oferecemos serviço de produção de conteúdo especializado para manter o blog atualizado e relevante.',
    priceRange: 'R$ 2.800 a R$ 5.500',
    timeframe: '15 a 25 dias',
    benefits: [
      'Estrutura otimizada para SEO',
      'Sistema de categorias e tags',
      'Integração com redes sociais',
      'Painel administrativo intuitivo',
      'Formulário para captação de leads',
      'Design alinhado à identidade da empresa'
    ],
    category: 'website'
  },
  {
    id: 15,
    title: 'Site para Escolas e Cursos',
    shortDescription: 'Apresente sua instituição e atraia novos alunos',
    icon: <Monitor className="h-10 w-10 mb-2 text-yellow-800" />,
    fullDescription: 'Nossos sites para instituições de ensino são desenvolvidos para apresentar a proposta pedagógica, infraestrutura, cursos oferecidos e diferenciais da instituição. Incluímos área para notícias e eventos, galeria de fotos, área de acesso restrito para alunos e responsáveis, formulário para matrícula e tour virtual da instituição.',
    priceRange: 'R$ 4.000 a R$ 9.000',
    timeframe: '20 a 45 dias',
    benefits: [
      'Apresentação de cursos e grade curricular',
      'Área de notícias e eventos',
      'Galeria de fotos da instituição',
      'Área restrita para alunos e pais',
      'Formulário para pré-matrícula',
      'Calendário acadêmico'
    ],
    category: 'website'
  },
  {
    id: 16,
    title: 'Manutenção de Sites',
    shortDescription: 'Mantenha seu site seguro, atualizado e funcionando perfeitamente',
    icon: <Code className="h-10 w-10 mb-2 text-gray-600" />,
    fullDescription: 'Nosso serviço de manutenção garante que seu site esteja sempre funcionando corretamente, seguro e atualizado. Incluímos atualizações de segurança, backup regular, monitoramento de uptime, pequenas alterações de conteúdo, suporte técnico e relatórios mensais de desempenho. Oferecemos planos flexíveis de acordo com as necessidades de cada cliente.',
    priceRange: 'R$ 200 a R$ 800/mês',
    timeframe: 'Serviço contínuo (mensal)',
    benefits: [
      'Atualizações de segurança',
      'Backup regular do site',
      'Monitoramento de uptime',
      'Pequenas atualizações de conteúdo',
      'Suporte técnico por email',
      'Relatórios mensais de desempenho'
    ],
    category: 'maintenance'
  },
  {
    id: 17,
    title: 'Design de Interface (UI/UX)',
    shortDescription: 'Crie interfaces intuitivas e atraentes para seu produto digital',
    icon: <PenTool className="h-10 w-10 mb-2 text-purple-600" />,
    fullDescription: 'Nosso serviço de design de interfaces (UI/UX) cria experiências digitais intuitivas, atraentes e centradas no usuário. Trabalhamos com pesquisa de usuários, wireframes, protótipos interativos e design visual completo. O resultado são interfaces que não apenas parecem boas, mas que realmente funcionam bem para os usuários finais, aumentando satisfação e conversões.',
    priceRange: 'R$ 3.000 a R$ 10.000',
    timeframe: '15 a 40 dias',
    benefits: [
      'Pesquisa e análise de usuários',
      'Wireframing e arquitetura da informação',
      'Protótipos interativos de alta fidelidade',
      'Design visual alinhado à identidade da marca',
      'Testes de usabilidade',
      'Documentação completa de design'
    ],
    category: 'design'
  },
  {
    id: 18,
    title: 'Site para Eventos',
    shortDescription: 'Promova seu evento e facilite a participação dos interessados',
    icon: <Monitor className="h-10 w-10 mb-2 text-pink-600" />,
    fullDescription: 'Desenvolvemos sites para eventos que funcionam como central de informações para participantes, patrocinadores e imprensa. Incluímos páginas detalhadas sobre programação, palestrantes, local, acomodações, inscrições online, sistema de credenciamento, área para patrocinadores e seção de FAQ. O design é personalizado de acordo com a identidade visual do evento.',
    priceRange: 'R$ 3.500 a R$ 8.000',
    timeframe: '15 a 35 dias',
    benefits: [
      'Sistema de inscrições online',
      'Grade de programação interativa',
      'Perfil dos palestrantes',
      'Informações sobre local e hospedagem',
      'Área para patrocinadores',
      'Galeria de edições anteriores'
    ],
    category: 'website'
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  
  useEffect(() => {
    // Configuração do carrossel automático
    const scrollSpeed = 0.3; // pixels por frame - velocidade muito baixa
    let animationFrameId: number;
    let lastTimestamp: number;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      if (carouselRef.current) {
        // Calcula o deslocamento com base no tempo decorrido para movimento suave
        const scrollAmount = (elapsed * scrollSpeed) / 1000;
        setCurrentPosition(prev => {
          const nextPosition = prev + scrollAmount;
          
          // Se chegamos ao fim, reiniciamos do começo
          const maxScroll = carouselRef.current ? carouselRef.current.scrollWidth - carouselRef.current.clientWidth : 0;
          if (nextPosition > maxScroll) {
            return 0; // Volta ao início suavemente
          }
          
          return nextPosition;
        });
        
        if (carouselRef.current) {
          carouselRef.current.scrollLeft = currentPosition;
        }
      }
      
      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [currentPosition]);

  return (
    <section id="servicos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Nossos Serviços</h2>
        <p className="section-subtitle text-center">
          Soluções completas para estabelecer sua presença digital com foco em resultados
        </p>

        <div 
          ref={carouselRef}
          className="flex overflow-hidden mt-12 py-4 px-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Duplicamos os serviços para criar um loop contínuo */}
          {[...services, ...services].map((service, index) => (
            <Dialog key={`${service.id}-${index}`}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col min-w-[300px] mx-2 flex-shrink-0">
                  <CardHeader>
                    <div className="text-center">
                      {service.icon}
                      <CardTitle className="text-xl font-bold text-primary-800 dark:text-blue-300">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-center text-sm">
                      {service.shortDescription}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-center pt-0">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800">
                      Saiba mais
                    </Badge>
                  </CardFooter>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl dark:bg-gray-800 dark:text-white">
                <DialogHeader>
                  <div className="flex items-center gap-3">
                    {service.icon}
                    <DialogTitle className="text-2xl font-bold text-primary-800 dark:text-blue-300">{service.title}</DialogTitle>
                  </div>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <DialogDescription className="text-gray-700 dark:text-gray-300 text-base">
                    {service.fullDescription}
                  </DialogDescription>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-primary-800 dark:text-blue-300 flex items-center">
                        <span className="mr-2">💰</span> Investimento
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">{service.priceRange}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-primary-800 dark:text-blue-300 flex items-center">
                        <Clock className="h-4 w-4 mr-2" /> Prazo estimado
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">{service.timeframe}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-primary-800 dark:text-blue-300 mb-2">O que está incluído:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      Cada projeto é único e pode incluir necessidades específicas. Entre em contato para um orçamento personalizado baseado nas necessidades do seu negócio.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
