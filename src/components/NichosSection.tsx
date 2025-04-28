
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Exemplo de projetos para cada nicho
const nichoExamples = {
  saude: [
    {
      id: 'saude-1',
      title: 'Clínica Odontológica Sorrir',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
      description: 'Site completo para clínica odontológica, com sistema de agendamento online integrado e galeria de procedimentos realizados.',
      features: ['Sistema de agendamento online', 'Blog de saúde bucal', 'Área de especialidades', 'Depoimentos de pacientes']
    },
    {
      id: 'saude-2',
      title: 'Centro Médico Vida Plena',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
      description: 'Portal para centro médico multidisciplinar com ferramentas para agendamento de consultas e exames.',
      features: ['Agendamento de consultas', 'Resultados de exames online', 'Apresentação da equipe médica', 'Área do paciente']
    },
    {
      id: 'saude-3',
      title: 'Nutricionista Ana Campos',
      image: 'https://images.unsplash.com/photo-1556911073-52527ac43761',
      description: 'Site para nutricionista autônoma com sistema para venda de planos alimentares personalizados.',
      features: ['Venda de planos alimentares', 'Blog com receitas saudáveis', 'Captação de leads por e-mail', 'Área de depoimentos']
    }
  ],
  juridico: [
    {
      id: 'juridico-1',
      title: 'Escritório Âncora Advocacia',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
      description: 'Site institucional para escritório de advocacia com foco em direito empresarial e tributário.',
      features: ['Apresentação das áreas de atuação', 'Blog jurídico', 'Área para agendamento de consultas', 'Seção de jurisprudência']
    },
    {
      id: 'juridico-2',
      title: 'Advogado João Santos',
      image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f',
      description: 'Landing page para advogado autônomo especializado em direito trabalhista com alta taxa de conversão.',
      features: ['Formulário de contato otimizado', 'Seção de casos de sucesso', 'Depoimentos em vídeo', 'Chat online']
    },
    {
      id: 'juridico-3',
      title: 'Consultoria Jurídica Legal',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      description: 'Portal para consultoria jurídica online com atendimento remoto para todo o Brasil.',
      features: ['Agendamento de consultoria online', 'Pagamento de honorários', 'Sistema de documentos', 'FAQ interativo']
    }
  ],
  imobiliario: [
    {
      id: 'imob-1',
      title: 'Imobiliária Nova Casa',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
      description: 'Portal imobiliário completo com filtros de busca avançados e integração com sistemas de gestão imobiliária.',
      features: ['Busca avançada de imóveis', 'Tour virtual 360°', 'Calculadora de financiamento', 'Área do corretor']
    },
    {
      id: 'imob-2',
      title: 'Corretora Patrícia Imóveis',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716',
      description: 'Site para corretora autônoma com destaque para imóveis de alto padrão.',
      features: ['Filtro por bairros exclusivos', 'Galerias em alta resolução', 'Depoimentos em vídeo', 'Integração com portais']
    },
    {
      id: 'imob-3',
      title: 'Construtora Horizonte',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      description: 'Site para construtora com apresentação de empreendimentos em lançamento e em construção.',
      features: ['Status da obra em tempo real', 'Área para cadastro de interesse', 'Simulação de personalização', 'VR dos apartamentos']
    }
  ],
  educacao: [
    {
      id: 'educ-1',
      title: 'Curso de Inglês Fluent',
      image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe',
      description: 'Landing page para curso de inglês online com alto índice de conversão para matrículas.',
      features: ['Teste de nível gratuito', 'Demonstração de aula', 'Depoimentos de alunos', 'Chat para dúvidas']
    },
    {
      id: 'educ-2',
      title: 'Escola Infantil Crescer',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
      description: 'Site institucional para escola infantil com área para matrícula online e tour virtual da escola.',
      features: ['Tour virtual das instalações', 'Calendário escolar', 'Área restrita para pais', 'Blog educativo']
    },
    {
      id: 'educ-3',
      title: 'Mentoria Sucesso nos Concursos',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
      description: 'Site para venda de mentorias para concursos públicos com área de membros integrada.',
      features: ['Vendas de pacotes de mentoria', 'Depoimentos de aprovados', 'Calculadora de estudos', 'Integração com área de membros']
    }
  ],
  freelancers: [
    {
      id: 'free-1',
      title: 'Fotógrafa Ana Luz',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d',
      description: 'Portfólio digital para fotógrafa profissional com galeria de ensaios e sistema de orçamentos.',
      features: ['Galerias por categoria', 'Sistema de orçamentos', 'Agendamento de sessões', 'Integração com Instagram']
    },
    {
      id: 'free-2',
      title: 'Designer Gráfico Carlos Silva',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      description: 'Site portfólio para designer gráfico com projetos categorizados e sistema de contato.',
      features: ['Portfólio interativo', 'Filtro por tipo de projeto', 'Formulário de briefing', 'Integração com Behance']
    },
    {
      id: 'free-3',
      title: 'Arquiteta Marina Designs',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
      description: 'Portfólio para arquiteta com visualização 3D de projetos e solicitação de orçamentos.',
      features: ['Visualização 3D de projetos', 'Antes e depois', 'Depoimentos em vídeo', 'Agendamento de visitas técnicas']
    }
  ],
  comercio: [
    {
      id: 'com-1',
      title: 'Restaurante Sabor & Arte',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      description: 'Site para restaurante com cardápio digital, sistema de reservas e integração com delivery.',
      features: ['Cardápio digital', 'Sistema de reservas', 'Integração com iFood', 'Área de eventos']
    },
    {
      id: 'com-2',
      title: 'Barbearia Vintage',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1',
      description: 'Site para barbearia com agendamento online e apresentação dos serviços e profissionais.',
      features: ['Agendamento online', 'Galeria de cortes', 'Perfil dos barbeiros', 'Programa de fidelidade']
    },
    {
      id: 'com-3',
      title: 'Pet Shop Amor de Pet',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7',
      description: 'Site para pet shop com venda de produtos e agendamento de serviços de estética.',
      features: ['Loja de produtos', 'Agendamento de banho e tosa', 'Blog de dicas', 'Clube de assinatura']
    }
  ],
  ecommerce: [
    {
      id: 'ecom-1',
      title: 'Loja Eco Beleza',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
      description: 'E-commerce completo para produtos de beleza naturais e orgânicos com alta performance.',
      features: ['Checkout otimizado', 'Filtros avançados', 'Sistema de reviews', 'Programa de afiliados']
    },
    {
      id: 'ecom-2',
      title: 'Artesanato em Casa',
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b',
      description: 'Loja virtual para produtos artesanais com sistema de personalização de itens.',
      features: ['Personalização de produtos', 'Histórias dos artesãos', 'Rastreamento de pedidos', 'Clube de assinantes']
    },
    {
      id: 'ecom-3',
      title: 'Academia Digital',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
      description: 'Plataforma para venda de infoprodutos na área fitness com área de membros.',
      features: ['Venda de cursos', 'Área de membros', 'Comunidade privada', 'Certificados automáticos']
    }
  ],
  turismo: [
    {
      id: 'tur-1',
      title: 'Pousada Mar Azul',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
      description: 'Site para pousada beira-mar com sistema de reservas e tour virtual pelos ambientes.',
      features: ['Reservas online', 'Tour virtual 360°', 'Galeria de acomodações', 'Integração com Booking']
    },
    {
      id: 'tur-2',
      title: 'Agência Viagem Perfeita',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
      description: 'Site para agência de viagens com pacotes personalizados e sistema de reservas.',
      features: ['Montagem de pacotes', 'Pagamento online', 'Blog de destinos', 'Área do cliente']
    },
    {
      id: 'tur-3',
      title: 'Guia Aventura Radical',
      image: 'https://images.unsplash.com/photo-1527007622069-259a4f06c42e',
      description: 'Site para guia de turismo de aventura com agendamento de passeios e experiências.',
      features: ['Agenda de experiências', 'Vídeos dos passeios', 'Depoimentos dos aventureiros', 'Sistema de vouchers']
    }
  ]
};

// Dados dos nichos
const nichosData = [
  {
    id: 'saude',
    title: 'Saúde e Bem-estar',
    icon: '🩺',
    description: 'Sites otimizados para profissionais e clínicas da área da saúde, com foco em agendamentos e credibilidade.',
    segments: [
      'Consultórios de odontologia',
      'Clínicas de estética e dermatologia',
      'Nutricionistas',
      'Psicólogos',
      'Fisioterapeutas',
      'Clínicas veterinárias'
    ]
  },
  {
    id: 'juridico',
    title: 'Serviços Jurídicos',
    icon: '⚖️',
    description: 'Presença digital de prestígio para advogados e escritórios, comunicando autoridade e confiança.',
    segments: [
      'Advogados autônomos',
      'Escritórios de advocacia',
      'Consultores jurídicos'
    ]
  },
  {
    id: 'imobiliario',
    title: 'Mercado Imobiliário',
    icon: '🏢',
    description: 'Sites imobiliários com funcionalidades específicas para destacar imóveis e facilitar contato.',
    segments: [
      'Corretores de imóveis',
      'Imobiliárias',
      'Construtoras e incorporadoras'
    ]
  },
  {
    id: 'educacao',
    title: 'Educação e Treinamentos',
    icon: '📚',
    description: 'Plataformas para profissionais da educação, com foco em captação de alunos e apresentação de cursos.',
    segments: [
      'Professores particulares',
      'Escolas de idiomas',
      'Cursos livres (online e presenciais)',
      'Mentores e coaches'
    ]
  },
  {
    id: 'freelancers',
    title: 'Profissionais Autônomos',
    icon: '💼',
    description: 'Portfólios e sites profissionais para freelancers demonstrarem seu trabalho e conquistarem clientes.',
    segments: [
      'Designers gráficos',
      'Fotógrafos',
      'Videomakers',
      'Desenvolvedores e programadores',
      'Arquitetos e engenheiros'
    ]
  },
  {
    id: 'comercio',
    title: 'Comércio e Serviços Locais',
    icon: '🛍️',
    description: 'Sites para negócios locais aumentarem sua visibilidade online e captarem clientes na região.',
    segments: [
      'Pet shops',
      'Salões de beleza e barbearias',
      'Restaurantes e cafeterias',
      'Oficinas mecânicas',
      'Prestadores de serviços (eletricistas, encanadores, etc.)'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce e Negócios Digitais',
    icon: '🛒',
    description: 'Lojas virtuais e plataformas otimizadas para venda de produtos e serviços online.',
    segments: [
      'Lojas virtuais de nicho (moda, cosméticos, produtos naturais)',
      'Infoprodutores (cursos online, eBooks, consultorias)'
    ]
  },
  {
    id: 'turismo',
    title: 'Turismo e Hospitalidade',
    icon: '✈️',
    description: 'Sites para o setor de turismo, com visuais atraentes e ferramentas de reserva/contato.',
    segments: [
      'Pousadas e hotéis',
      'Guias turísticos',
      'Agências de viagem'
    ]
  }
];

const NichosSection = () => {
  const [activeNicho, setActiveNicho] = useState(nichosData[0]);
  const [isExamplesModalOpen, setIsExamplesModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('0');

  const handleOpenExamplesModal = () => {
    setIsExamplesModalOpen(true);
    setActiveTab('0');
  };

  return (
    <section id="nichos" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title dark:text-white">Soluções Personalizadas para Seu Segmento</h2>
          <p className="section-subtitle dark:text-gray-300">
            Desenvolvemos sites e landing pages otimizados especificamente para as necessidades do seu nicho de mercado.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-12">
          {nichosData.map((nicho) => (
            <button
              key={nicho.id}
              onClick={() => setActiveNicho(nicho)}
              className={`p-4 rounded-md transition-all ${
                activeNicho.id === nicho.id
                  ? 'bg-primary-800 text-white dark:bg-blue-700'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <div className="text-2xl mb-2">{nicho.icon}</div>
              <div className="text-sm font-medium">{nicho.title}</div>
            </button>
          ))}
        </div>

        <Card className="border border-gray-200 shadow-lg overflow-hidden dark:border-gray-700 dark:bg-gray-800">
          <CardHeader className="bg-gradient-to-r from-primary-800 to-primary-700 dark:from-blue-800 dark:to-blue-700">
            <CardTitle className="text-white text-2xl">{activeNicho.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-medium mb-4 text-primary-800 dark:text-blue-300">
                  Sites e Landing Pages para {activeNicho.title}
                </h3>
                <p className="text-gray-700 mb-6 dark:text-gray-300">
                  {activeNicho.description}
                </p>
                <div className="bg-blue-50 p-4 rounded-md border border-blue-100 dark:bg-gray-700 dark:border-gray-600">
                  <h4 className="font-medium text-primary-800 mb-2 dark:text-blue-300">Funcionalidades especializadas:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                      Design específico para o setor
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                      Otimização para conversão
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                      SEO técnico para seu nicho
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                      Integração com sistemas próprios
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                      Copywriting específico
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                      Gatilhos mentais assertivos
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                  <h4 className="font-medium text-primary-800 mb-2 dark:text-blue-300">Segmentos que atendemos:</h4>
                  <ul className="space-y-2">
                    {activeNicho.segments.map((segment, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-primary-800 dark:bg-blue-500 rounded-full mr-2"></span>
                        {segment}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Button 
                    className="w-full btn-accent dark:bg-orange-600 dark:hover:bg-orange-700"
                    onClick={handleOpenExamplesModal}
                  >
                    Ver exemplos neste nicho
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Modal de exemplos */}
        <Dialog open={isExamplesModalOpen} onOpenChange={setIsExamplesModalOpen}>
          <DialogContent className="sm:max-w-4xl dark:bg-gray-800">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold dark:text-white">
                Exemplos de Sites para {activeNicho.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="mt-4">
              <Tabs defaultValue="0" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-8">
                  {nichoExamples[activeNicho.id as keyof typeof nichoExamples]?.map((example, idx) => (
                    <TabsTrigger 
                      key={example.id} 
                      value={idx.toString()}
                      className="dark:data-[state=active]:bg-blue-700 dark:data-[state=active]:text-white"
                    >
                      Exemplo {idx + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {nichoExamples[activeNicho.id as keyof typeof nichoExamples]?.map((example, idx) => (
                  <TabsContent key={example.id} value={idx.toString()}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="rounded-lg overflow-hidden shadow-md mb-4">
                          <img 
                            src={example.image}
                            alt={example.title}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">{example.title}</h3>
                        <p className="text-gray-700 mb-4 dark:text-gray-300">{example.description}</p>
                        
                        <h4 className="font-medium mb-2 text-primary-800 dark:text-blue-300">Funcionalidades principais:</h4>
                        <ul className="space-y-2 mb-6">
                          {example.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                              <span className="w-1.5 h-1.5 bg-accent-orange rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <Button className="btn-primary dark:bg-blue-700 dark:hover:bg-blue-800">
                          Quero um projeto similar
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default NichosSection;
