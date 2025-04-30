
import { ServiceType } from '@/types/service';

export const services: ServiceType[] = [
  {
    id: "analytics-insights",
    icon: "📊",
    title: "Analytics e Insights",
    shortDescription: "Implementação de ferramentas de análise e relatórios de performance.",
    fullDescription: "Configuramos ferramentas avançadas de análise como Google Analytics 4, Tag Manager, Search Console, entre outras, com implementação de eventos personalizados, funis de conversão, objetivos e dashboards. Fornecemos relatórios periódicos com insights acionáveis sobre o comportamento dos usuários e recomendações de melhorias baseadas em dados.",
    priceRange: "R$ 1.500 a R$ 4.500 + R$ 600/mês para relatórios contínuos",
    timeframe: "10 a 20 dias para implementação inicial",
    includedFeatures: [
      "Configuração de Google Analytics 4",
      "Implementação de Google Tag Manager",
      "Configuração de eventos personalizados",
      "Criação de dashboards personalizados",
      "Relatórios mensais de desempenho",
      "Recomendações baseadas em dados"
    ],
    recommendedFor: [
      "Empresas que desejam tomar decisões baseadas em dados",
      "Sites com objetivos de conversão definidos",
      "Empresas com investimento em marketing digital",
      "Negócios que precisam otimizar funis de venda"
    ]
  },
  {
    id: "auditoria-site",
    icon: "🔍",
    title: "Auditoria de Website",
    shortDescription: "Análise técnica completa do seu site com recomendações de melhorias.",
    fullDescription: "Realizamos uma análise profunda do seu site atual, identificando problemas técnicos, oportunidades de melhoria em SEO, usabilidade, acessibilidade, performance e conversão. Entregamos um relatório detalhado com recomendações priorizadas e plano de ação para implementação das melhorias identificadas.",
    priceRange: "R$ 1.500 a R$ 4.000",
    timeframe: "7 a 15 dias",
    includedFeatures: [
      "Análise técnica completa",
      "Avaliação de SEO on-page",
      "Análise de usabilidade e experiência do usuário",
      "Verificação de acessibilidade",
      "Testes de performance",
      "Análise de segurança",
      "Relatório detalhado com recomendações"
    ],
    recommendedFor: [
      "Sites com mais de 1 ano sem otimizações",
      "Empresas com baixas taxas de conversão",
      "Negócios com problemas de posicionamento em buscadores",
      "Sites com problemas de desempenho"
    ]
  },
  {
    id: "blog-portal",
    icon: "📝",
    title: "Blogs e Portais",
    shortDescription: "Plataformas de conteúdo otimizadas para atrair público qualificado.",
    fullDescription: "Criamos blogs e portais de conteúdo com arquitetura de informação otimizada, categorização eficiente, e design que favorece a leitura e o engajamento. Implementamos recursos para newsletter, comentários, compartilhamento em redes sociais e sistema de busca avançada. Ideal para estratégias de marketing de conteúdo.",
    priceRange: "R$ 4.500 a R$ 12.000",
    timeframe: "25 a 45 dias",
    includedFeatures: [
      "Arquitetura de informação otimizada",
      "Sistema de categorias e tags",
      "Recursos de compartilhamento social",
      "Sistema de comentários",
      "Formulário para newsletter",
      "Busca avançada",
      "Design responsivo"
    ],
    recommendedFor: [
      "Empresas com estratégia de inbound marketing",
      "Negócios que investem em marketing de conteúdo",
      "Especialistas que desejam demonstrar autoridade",
      "Veículos de mídia e portais de notícias"
    ]
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-commerce",
    shortDescription: "Lojas virtuais intuitivas e seguras para vender produtos online.",
    fullDescription: "Desenvolvimento completo de lojas virtuais com design personalizado, catálogo de produtos, carrinhos de compras, integração com meios de pagamento e sistema de entrega. Incluímos recursos de gestão de estoque, relatórios de vendas, e painel administrativo intuitivo. Plataformas: WooCommerce, Shopify e Magento.",
    priceRange: "R$ 8.000 a R$ 25.000",
    timeframe: "30 a 60 dias",
    includedFeatures: [
      "Catálogo de produtos completo",
      "Integração com gateways de pagamento",
      "Cálculo automático de frete",
      "Gestão de estoque",
      "Painel administrativo intuitivo",
      "Relatórios de vendas",
      "Design responsivo e personalizado"
    ],
    recommendedFor: [
      "Empresas que desejam vender produtos online",
      "Lojas físicas que querem expandir para o digital",
      "Marcas com grande volume de produtos",
      "Empresas que buscam automação de vendas"
    ]
  },
  {
    id: "email-marketing",
    icon: "📧",
    title: "Email Marketing",
    shortDescription: "Criação de templates e estratégias para campanhas de email efetivas.",
    fullDescription: "Desenvolvemos templates responsivos para email marketing que funcionam em diferentes clientes de email, com design alinhado à identidade da sua marca. Oferecemos também consultoria estratégica para segmentação de listas, sequências de nutrição, testes A/B e otimização de taxas de abertura e clique. Integração com as principais plataformas de automação.",
    priceRange: "R$ 800 a R$ 3.500",
    timeframe: "5 a 15 dias",
    includedFeatures: [
      "Templates responsivos personalizados",
      "Compatibilidade com principais clientes de email",
      "Integração com plataformas de automação",
      "Estratégia de segmentação",
      "Plano de sequências de nutrição",
      "Testes A/B"
    ],
    recommendedFor: [
      "Empresas com listas de email ativas",
      "Negócios com estratégia de nutrição de leads",
      "E-commerces para recuperação de carrinhos abandonados",
      "Empresas com comunicação regular com clientes"
    ]
  },
  {
    id: "inbound-marketing",
    icon: "🧲",
    title: "Estratégia de Inbound Marketing",
    shortDescription: "Planejamento completo para atrair, converter e fidelizar clientes online.",
    fullDescription: "Desenvolvemos estratégias completas de inbound marketing integradas ao seu website, incluindo planejamento de conteúdo, SEO, automação de marketing, nutrição de leads e análise de resultados. Criamos a estrutura técnica necessária no site para suportar todas as etapas do funil de vendas, desde a atração até a conversão e fidelização.",
    priceRange: "R$ 4.500 a R$ 12.000 + R$ 2.500/mês para execução contínua",
    timeframe: "15 a 30 dias para estratégia inicial",
    includedFeatures: [
      "Planejamento estratégico completo",
      "Calendário editorial",
      "Configuração de automação de marketing",
      "Implementação de fluxos de nutrição",
      "Relatórios de desempenho",
      "Otimização contínua baseada em resultados"
    ],
    recommendedFor: [
      "Empresas B2B com ciclos de venda longos",
      "Negócios que dependem de geração de leads qualificados",
      "Empresas que desejam automatizar processos de marketing",
      "Negócios que buscam escalabilidade em aquisição de clientes"
    ]
  },
  {
    id: "integracao-apis",
    icon: "🔄",
    title: "Integração com APIs",
    shortDescription: "Conectamos seu site a sistemas externos para ampliar funcionalidades.",
    fullDescription: "Implementamos integrações entre seu site e sistemas externos através de APIs, permitindo funcionalidades avançadas como sincronização com CRMs, ERPs, plataformas de pagamento, redes sociais, mapas, sistemas de reserva, entre outros. Desenvolvemos também APIs customizadas para necessidades específicas do seu negócio.",
    priceRange: "R$ 2.500 a R$ 8.000",
    timeframe: "15 a 30 dias",
    includedFeatures: [
      "Análise de requisitos de integração",
      "Desenvolvimento de conectores personalizados",
      "Documentação técnica completa",
      "Testes de integração",
      "Monitoramento e manutenção",
      "Suporte técnico especializado"
    ],
    recommendedFor: [
      "Empresas com sistemas legados que precisam ser integrados",
      "Negócios que utilizam múltiplas plataformas",
      "Empresas que precisam automatizar processos entre sistemas",
      "Startups que precisam escalar operações"
    ]
  },
  {
    id: "landing-page",
    icon: "📱",
    title: "Landing Pages",
    shortDescription: "Páginas estratégicas focadas em conversão para campanhas específicas.",
    fullDescription: "Criamos landing pages altamente otimizadas para converter visitantes em leads ou clientes. Focamos em copy persuasivo, elementos visuais estratégicos, e formulários eficientes. Cada elemento é pensado para maximizar a taxa de conversão, ideal para campanhas de marketing digital, lançamentos de produtos ou serviços específicos.",
    priceRange: "R$ 1.800 a R$ 4.500",
    timeframe: "7 a 15 dias",
    includedFeatures: [
      "Design personalizado com foco em conversão",
      "Copywriting persuasivo",
      "Formulários otimizados",
      "Integração com CRM ou ferramenta de email",
      "Testes A/B",
      "Página de confirmação personalizada",
      "Responsividade para todos os dispositivos"
    ],
    recommendedFor: [
      "Empresas com campanhas de marketing digital ativas",
      "Negócios que lançam produtos ou serviços específicos",
      "Profissionais que oferecem webinars ou eventos",
      "Empresas que investem em mídia paga"
    ]
  },
  {
    id: "manutencao",
    icon: "🚀",
    title: "Manutenção e Suporte",
    shortDescription: "Acompanhamento contínuo do seu site para garantir segurança e atualizações.",
    fullDescription: "Oferecemos serviços de manutenção mensal para garantir que seu site permaneça seguro, atualizado e funcionando perfeitamente. Incluímos atualizações de segurança, backups regulares, monitoramento de performance, pequenas alterações de conteúdo, suporte técnico por e-mail e resolução rápida de problemas. Planos customizáveis conforme necessidade.",
    priceRange: "R$ 350 a R$ 1.200/mês",
    timeframe: "Contínuo (suporte em até 24h)",
    includedFeatures: [
      "Atualizações de segurança",
      "Backups regulares",
      "Monitoramento de uptime",
      "Pequenas alterações de conteúdo",
      "Suporte técnico por email",
      "Resolução rápida de problemas",
      "Relatórios mensais de desempenho"
    ],
    recommendedFor: [
      "Empresas sem equipe técnica interna",
      "Sites que necessitam de alta disponibilidade",
      "Negócios que precisam de atualizações frequentes",
      "Empresas preocupadas com segurança digital"
    ]
  },
  {
    id: "membership",
    icon: "🔑",
    title: "Sites com Área de Membros",
    shortDescription: "Plataformas com conteúdo exclusivo para assinantes ou clientes registrados.",
    fullDescription: "Desenvolvemos sites com áreas de acesso exclusivo para membros, permitindo a monetização de conteúdo premium ou oferecimento de serviços exclusivos. Implementamos sistema completo de cadastro, login, recuperação de senha, níveis de acesso, pagamentos recorrentes, proteção de conteúdo e dashboard personalizado para usuários.",
    priceRange: "R$ 7.500 a R$ 18.000",
    timeframe: "35 a 60 dias",
    includedFeatures: [
      "Sistema completo de cadastro e login",
      "Níveis de acesso personalizados",
      "Integração com plataformas de pagamento",
      "Proteção de conteúdo por assinatura",
      "Área de membros responsiva",
      "Relatórios de assinaturas e receita",
      "Gestão de conteúdo exclusivo"
    ],
    recommendedFor: [
      "Criadores de conteúdo que desejam monetizar seu conhecimento",
      "Empresas que oferecem serviços por assinatura",
      "Escolas e cursos online",
      "Comunidades e associações profissionais"
    ]
  },
  {
    id: "migracao-site",
    icon: "🚚",
    title: "Migração de Site",
    shortDescription: "Transferência segura do seu site atual para nova plataforma ou servidor.",
    fullDescription: "Realizamos a migração completa do seu site para uma nova plataforma, CMS ou servidor, garantindo zero tempo de inatividade e preservação de dados, URLs e posicionamento em buscadores. O processo inclui análise do site atual, plano de migração, implementação, testes extensivos e ajustes pós-migração para garantir que tudo funcione perfeitamente.",
    priceRange: "R$ 1.800 a R$ 6.500",
    timeframe: "10 a 30 dias",
    includedFeatures: [
      "Análise completa do site atual",
      "Plano detalhado de migração",
      "Preservação de URLs e redirecionamentos",
      "Migração de conteúdo e mídia",
      "Testes extensivos pós-migração",
      "Verificação SEO pós-migração",
      "Período de garantia para ajustes"
    ],
    recommendedFor: [
      "Empresas com sites em plataformas desatualizadas",
      "Negócios que precisam escalar seus sites atuais",
      "Sites com problemas de performance ou segurança",
      "Empresas que desejam mudar de provedor de hospedagem"
    ]
  },
  {
    id: "one-page",
    icon: "📄",
    title: "Sites One Page",
    shortDescription: "Sites compactos de uma única página ideal para apresentação concisa de negócios.",
    fullDescription: "Desenvolvemos sites one page elegantes e objetivos que apresentam todas as informações essenciais do seu negócio em uma única página com navegação por âncoras. Ideal para startups, profissionais autônomos ou projetos específicos que precisam de uma presença online rápida e efetiva, com mensagem clara e chamada para ação direta.",
    priceRange: "R$ 2.200 a R$ 4.500",
    timeframe: "10 a 20 dias",
    includedFeatures: [
      "Design personalizado e responsivo",
      "Navegação por âncoras",
      "Otimização para conversão",
      "Formulário de contato",
      "Integração com redes sociais",
      "Otimização para SEO",
      "Chamadas para ação estratégicas"
    ],
    recommendedFor: [
      "Profissionais autônomos e freelancers",
      "Startups em fase inicial",
      "Projetos específicos ou temporários",
      "Pequenas empresas com serviços focados"
    ]
  },
  {
    id: "otimizacao-conversao",
    icon: "📈",
    title: "Otimização de Conversão",
    shortDescription: "Análise e implementação de melhorias para aumentar taxas de conversão do site.",
    fullDescription: "Realizamos análise detalhada do comportamento dos usuários no seu site atual e implementamos melhorias estratégicas para aumentar as taxas de conversão. Utilizamos testes A/B, mapas de calor, análise de funil, melhorias em chamadas para ação, simplificação de formulários e otimização de jornada do usuário baseada em dados.",
    priceRange: "R$ 3.000 a R$ 7.500",
    timeframe: "20 a 45 dias",
    includedFeatures: [
      "Análise de comportamento de usuários",
      "Testes A/B",
      "Mapas de calor e gravações de sessões",
      "Otimização de formulários",
      "Melhoria de chamadas para ação",
      "Otimização de funil de conversão",
      "Relatórios de resultados"
    ],
    recommendedFor: [
      "Sites com tráfego significativo mas baixa conversão",
      "E-commerces com alto índice de abandono de carrinho",
      "Empresas que investem em aquisição de tráfego",
      "Negócios que dependem de geração de leads online"
    ]
  },
  {
    id: "portfolio-digital",
    icon: "🔬",
    title: "Portfólios Digitais",
    shortDescription: "Apresentação impactante de trabalhos e projetos para profissionais criativos.",
    fullDescription: "Desenvolvemos portfólios digitais para fotógrafos, designers, arquitetos e outros profissionais criativos. Focamos em destacar os trabalhos através de galerias visuais de alto impacto, com opções de filtragem por categorias, depoimentos de clientes e informações sobre o processo criativo. Design minimalista que coloca seu trabalho em primeiro plano.",
    priceRange: "R$ 2.800 a R$ 6.500",
    timeframe: "15 a 30 dias",
    includedFeatures: [
      "Galerias visuais de alto impacto",
      "Sistema de categorização de projetos",
      "Páginas detalhadas de case studies",
      "Integração com redes sociais",
      "Design responsivo e elegante",
      "Seção de depoimentos de clientes",
      "Formulário de contato personalizado"
    ],
    recommendedFor: [
      "Fotógrafos e videomakers",
      "Designers gráficos e de UI/UX",
      "Arquitetos e designers de interiores",
      "Artistas visuais e ilustradores",
      "Agências criativas"
    ]
  },
  {
    id: "pwa",
    icon: "📲",
    title: "Progressive Web Apps",
    shortDescription: "Aplicações web que funcionam como apps nativos, oferecendo melhor experiência.",
    fullDescription: "Desenvolvemos Progressive Web Apps (PWAs) que combinam o melhor de sites e aplicativos nativos. Estes aplicativos funcionam offline, podem ser instalados na tela inicial de dispositivos móveis, oferecem notificações push e carregamento rápido. Ideal para negócios que desejam uma presença digital avançada sem o custo de desenvolvimento de apps nativos.",
    priceRange: "R$ 6.000 a R$ 15.000",
    timeframe: "30 a 50 dias",
    includedFeatures: [
      "Funcionamento offline",
      "Instalação na tela inicial",
      "Notificações push",
      "Experiência semelhante a aplicativos nativos",
      "Carregamento rápido",
      "Sincronização em segundo plano",
      "Atualizações automáticas"
    ],
    recommendedFor: [
      "E-commerces que desejam melhorar experiência mobile",
      "Empresas com público que acessa frequentemente via celular",
      "Negócios que precisam de funcionalidades offline",
      "Empresas que não podem investir em apps nativos"
    ]
  },
  {
    id: "redesign",
    icon: "🎨",
    title: "Redesign de Sites",
    shortDescription: "Modernização completa de sites existentes para melhorar aparência e resultados.",
    fullDescription: "Transformamos sites desatualizados em plataformas modernas e eficientes. Nosso redesign inclui análise do site atual, identificação de pontos de melhoria, novo design visual, reorganização de conteúdo, implementação de melhores práticas de UX/UI e otimização técnica. Ideal para sites com mais de 3 anos ou com indicadores de performance insatisfatórios.",
    priceRange: "R$ 4.000 a R$ 12.000",
    timeframe: "25 a 45 dias",
    includedFeatures: [
      "Análise completa do site atual",
      "Redesign visual moderno",
      "Arquitetura de informação otimizada",
      "Melhorias em usabilidade e experiência do usuário",
      "Otimização para dispositivos móveis",
      "Implementação de melhores práticas de SEO",
      "Melhorias de performance"
    ],
    recommendedFor: [
      "Empresas com sites com mais de 3 anos",
      "Negócios com sites visualmente desatualizados",
      "Empresas com problemas de conversão em dispositivos móveis",
      "Negócios que mudaram posicionamento ou identidade visual"
    ]
  },
  {
    id: "seo-consultoria",
    icon: "📊",
    title: "Consultoria em SEO",
    shortDescription: "Estratégias para melhorar o posicionamento nos buscadores e aumentar tráfego orgânico.",
    fullDescription: "Nossa consultoria em SEO inclui análise técnica completa do seu site, pesquisa de palavras-chave, otimização on-page, estratégia de link building e monitoramento contínuo. Oferecemos relatórios mensais de performance e recomendações para melhorias constantes no posicionamento do seu site nos motores de busca.",
    priceRange: "R$ 1.200 a R$ 3.500/mês",
    timeframe: "Resultados iniciais em 60 a 90 dias",
    includedFeatures: [
      "Análise técnica do site",
      "Pesquisa avançada de palavras-chave",
      "Otimização on-page",
      "Estratégia de construção de links",
      "Monitoramento de posições",
      "Relatórios mensais de performance",
      "Recomendações contínuas"
    ],
    recommendedFor: [
      "Empresas que dependem de tráfego orgânico",
      "Negócios em mercados competitivos",
      "Sites com baixa visibilidade nos buscadores",
      "Empresas que investem em marketing de conteúdo"
    ]
  },
  {
    id: "site-advogados",
    icon: "⚖️",
    title: "Sites para Advogados",
    shortDescription: "Plataformas profissionais focadas em transmitir confiança e autoridade jurídica.",
    fullDescription: "Criamos sites para advogados e escritórios de advocacia focados em transmitir credibilidade, profissionalismo e autoridade na área do direito. Incluímos áreas de especialidades, perfil dos advogados, casos de sucesso, blog jurídico e formulários de contato segmentados por área. Design elegante e textos persuasivos que respeitam a linguagem jurídica.",
    priceRange: "R$ 4.000 a R$ 9.500",
    timeframe: "20 a 35 dias",
    includedFeatures: [
      "Design elegante e profissional",
      "Páginas de áreas de atuação",
      "Perfis detalhados dos advogados",
      "Blog jurídico otimizado para SEO",
      "Formulários segmentados por área",
      "Seção de casos de sucesso",
      "Integração com agenda para consultas"
    ],
    recommendedFor: [
      "Advogados autônomos",
      "Escritórios de advocacia",
      "Consultores jurídicos",
      "Profissionais recém-formados em direito"
    ]
  },
  {
    id: "site-imobiliarias",
    icon: "🏢",
    title: "Sites para Imobiliárias",
    shortDescription: "Plataformas com catálogo de imóveis e ferramentas de busca avançada.",
    fullDescription: "Criamos sites para imobiliárias e corretores com catálogo completo de imóveis, busca avançada por filtros (localização, preço, características), tour virtual 360°, calculadora de financiamento, formulários de interesse, área do corretor e integração com plataformas imobiliárias. Design focado na valorização dos imóveis com chamadas para ação efetivas.",
    priceRange: "R$ 5.500 a R$ 14.000",
    timeframe: "30 a 50 dias",
    includedFeatures: [
      "Catálogo completo de imóveis",
      "Busca avançada com múltiplos filtros",
      "Tour virtual 360°",
      "Calculadora de financiamento",
      "Área do corretor",
      "Formulários de interesse",
      "Integração com plataformas imobiliárias"
    ],
    recommendedFor: [
      "Imobiliárias de pequeno e médio porte",
      "Corretores autônomos",
      "Construtoras com imóveis para venda",
      "Empresas de administração de imóveis"
    ]
  },
  {
    id: "site-institucional",
    icon: "🌐",
    title: "Site Institucional",
    shortDescription: "Sites profissionais que transmitem credibilidade e convertem visitantes em clientes.",
    fullDescription: "Desenvolvemos sites institucionais modernos e responsivos que transmitem a identidade da sua marca com precisão. Nosso foco está em criar uma experiência intuitiva para seus visitantes, com design personalizado, otimização para mecanismos de busca, e integração com ferramentas de analytics. Ideal para empresas que desejam uma presença online sólida e profissional.",
    priceRange: "R$ 3.500 a R$ 8.000",
    timeframe: "20 a 30 dias",
    includedFeatures: [
      "Design personalizado e responsivo",
      "Páginas institucionais completas",
      "Blog corporativo",
      "Formulários de contato",
      "Integração com redes sociais",
      "Otimização para SEO",
      "Integração com Google Analytics"
    ],
    recommendedFor: [
      "Pequenas e médias empresas",
      "Startups em fase de crescimento",
      "Empresas que buscam presença online profissional",
      "Negócios que dependem de credibilidade online"
    ]
  },
  {
    id: "site-multilinguagem",
    icon: "🌎",
    title: "Sites Multilíngues",
    shortDescription: "Websites com tradução para múltiplos idiomas para alcance global.",
    fullDescription: "Desenvolvemos sites com suporte a múltiplos idiomas, permitindo que sua empresa alcance públicos internacionais. Implementamos sistema de detecção automática de idioma, troca fácil entre línguas, URLs específicas por idioma para melhor SEO, e adaptação de conteúdo considerando aspectos culturais de cada mercado-alvo.",
    priceRange: "R$ 5.500 a R$ 15.000",
    timeframe: "30 a 60 dias",
    includedFeatures: [
      "Suporte a múltiplos idiomas",
      "Detecção automática de idioma",
      "URLs específicas por idioma",
      "Adaptação de conteúdo para diferentes culturas",
      "Painel de administração bilíngue",
      "SEO otimizado para cada idioma",
      "Conjunto completo de traduções"
    ],
    recommendedFor: [
      "Empresas com atuação internacional",
      "Exportadores e importadores",
      "Empresas de turismo e hospitalidade",
      "Negócios em regiões bilíngues"
    ]
  },
  {
    id: "site-restaurantes",
    icon: "🍽️",
    title: "Sites para Restaurantes",
    shortDescription: "Websites especializados para estabelecimentos gastronômicos com cardápio online.",
    fullDescription: "Desenvolvemos sites exclusivos para restaurantes, cafés, bares e estabelecimentos gastronômicos, com design que reflete a identidade do local. Incluímos cardápio digital interativo, sistema de reservas, integração com serviços de delivery, galeria de fotos de alta qualidade, história do estabelecimento e localização com mapa interativo.",
    priceRange: "R$ 3.800 a R$ 8.500",
    timeframe: "20 a 35 dias",
    includedFeatures: [
      "Cardápio digital interativo",
      "Sistema de reservas online",
      "Integração com serviços de delivery",
      "Galeria de fotos de alta qualidade",
      "Localização com mapa interativo",
      "Seção para eventos e promoções",
      "Depoimentos de clientes"
    ],
    recommendedFor: [
      "Restaurantes e cafés",
      "Bares e pubs",
      "Confeitarias e padarias",
      "Serviços de catering",
      "Food trucks"
    ]
  },
  {
    id: "site-saude",
    icon: "🏥",
    title: "Sites para Área de Saúde",
    shortDescription: "Soluções específicas para profissionais e clínicas da área da saúde.",
    fullDescription: "Desenvolvemos sites especializados para médicos, dentistas, psicólogos, clínicas e hospitais, considerando as particularidades do setor de saúde. Implementamos sistemas de agendamento online, áreas restritas para pacientes, integração com prontuários eletrônicos, e conteúdo educativo. Todos os sites seguem normas de confidencialidade e ética médica.",
    priceRange: "R$ 4.500 a R$ 10.000",
    timeframe: "25 a 40 dias",
    includedFeatures: [
      "Sistema de agendamento online",
      "Área restrita para pacientes",
      "Conformidade com normas de privacidade",
      "Blog com conteúdo educativo",
      "Perfil detalhado dos profissionais",
      "Apresentação de especialidades",
      "Formulários de anamnese digital"
    ],
    recommendedFor: [
      "Médicos e consultórios",
      "Clínicas e policlínicas",
      "Dentistas e clínicas odontológicas",
      "Psicólogos e terapeutas",
      "Nutricionistas e profissionais de saúde autônomos"
    ]
  },
  {
    id: "sites-eventos",
    icon: "🎪",
    title: "Sites para Eventos",
    shortDescription: "Plataformas completas para divulgação e gestão de eventos presenciais ou online.",
    fullDescription: "Criamos sites específicos para eventos como conferências, workshops, feiras e shows, com funcionalidades como programação detalhada, perfil de palestrantes, venda de ingressos, mapa do local, inscrições online, contagem regressiva, galeria de edições anteriores e integração com ferramentas de videoconferência para eventos híbridos ou online.",
    priceRange: "R$ 3.500 a R$ 9.000",
    timeframe: "15 a 30 dias",
    includedFeatures: [
      "Programação detalhada do evento",
      "Perfis dos palestrantes/atrações",
      "Sistema de venda de ingressos",
      "Mapa do local com informações de acesso",
      "Contagem regressiva",
      "Galeria de edições anteriores",
      "Formulário de inscrição personalizado"
    ],
    recommendedFor: [
      "Organizadores de conferências e congressos",
      "Empresas que realizam workshops e treinamentos",
      "Produtores de shows e festivais",
      "Organizadores de feiras e exposições",
      "Instituições que promovem eventos acadêmicos"
    ]
  },
  {
    id: "social-media",
    icon: "👥",
    title: "Integração com Redes Sociais",
    shortDescription: "Conecte seu site às suas redes sociais para amplificar seu alcance digital.",
    fullDescription: "Implementamos integrações avançadas entre seu site e redes sociais, incluindo feeds dinâmicos de conteúdo, botões de compartilhamento otimizados, login social, exibição de avaliações e depoimentos das redes sociais, tags para remarketing, open graph para compartilhamento otimizado e widgets personalizados de engajamento social.",
    priceRange: "R$ 1.200 a R$ 3.800",
    timeframe: "7 a 20 dias",
    includedFeatures: [
      "Feeds dinâmicos de redes sociais",
      "Botões de compartilhamento otimizados",
      "Login social integrado",
      "Tags para remarketing",
      "Open Graph para compartilhamento ideal",
      "Exibição de avaliações e depoimentos",
      "Widgets personalizados"
    ],
    recommendedFor: [
      "Empresas com presença ativa nas redes sociais",
      "Negócios que dependem de engajamento online",
      "E-commerces que utilizam social selling",
      "Criadores de conteúdo e influenciadores"
    ]
  },
  {
    id: "web-design",
    icon: "🖥️",
    title: "Web Design Personalizado",
    shortDescription: "Layouts exclusivos que refletem sua identidade visual e otimizam a experiência do usuário.",
    fullDescription: "Criamos designs exclusivos para websites baseados na identidade visual da sua marca. Nosso processo envolve pesquisa de referências, wireframes, protótipos interativos e finalização de alta fidelidade. Focamos em usabilidade, acessibilidade e experiência do usuário, garantindo que seu site não apenas impressione visualmente, mas também seja funcional.",
    priceRange: "R$ 2.500 a R$ 6.000",
    timeframe: "15 a 25 dias",
    includedFeatures: [
      "Design exclusivo baseado na identidade da marca",
      "Wireframes e protótipos interativos",
      "Design responsivo para todos os dispositivos",
      "Otimização de experiência do usuário",
      "Paleta de cores e tipografia personalizada",
      "Elementos visuais exclusivos",
      "Entrega de arquivos-fonte"
    ],
    recommendedFor: [
      "Empresas que valorizam design único e diferenciado",
      "Marcas com identidade visual bem definida",
      "Negócios que competem em mercados visuais",
      "Empresas que buscam se destacar da concorrência"
    ]
  },
  {
    id: "wordpress-customizado",
    icon: "📦",
    title: "WordPress Customizado",
    shortDescription: "Desenvolvimento de temas e plugins personalizados para WordPress.",
    fullDescription: "Criamos temas e plugins WordPress totalmente personalizados para atender necessidades específicas do seu negócio. Diferente de usar templates prontos, desenvolvemos soluções exclusivas com código limpo, otimizado e seguindo as melhores práticas de desenvolvimento WordPress, garantindo performance, segurança e facilidade de uso sem limitações.",
    priceRange: "R$ 5.000 a R$ 15.000",
    timeframe: "25 a 50 dias",
    includedFeatures: [
      "Tema totalmente personalizado",
      "Plugins exclusivos para funcionalidades específicas",
      "Painel administrativo customizado",
      "Otimização de performance",
      "Segurança reforçada",
      "Compatibilidade com principais plugins",
      "Documentação completa"
    ],
    recommendedFor: [
      "Empresas com necessidades específicas não atendidas por temas prontos",
      "Negócios que precisam de funcionalidades personalizadas",
      "Sites com alto volume de tráfego",
      "Empresas que já utilizam WordPress e precisam de personalização"
    ]
  }
];
