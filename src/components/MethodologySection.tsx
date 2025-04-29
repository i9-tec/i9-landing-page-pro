
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type MethodologyStep = {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
};

const methodologySteps: MethodologyStep[] = [
  {
    id: 1,
    title: "Descoberta e Briefing",
    shortDescription: "Análise detalhada das necessidades do seu negócio",
    fullDescription: "Na fase de Descoberta e Briefing, realizamos uma análise completa do seu negócio, objetivos e público-alvo. Conduzimos entrevistas detalhadas para entender profundamente suas necessidades, analisamos concorrentes do seu setor e identificamos oportunidades de diferenciação. Definimos métricas de sucesso claras para o projeto e criamos um documento de briefing abrangente que servirá como guia para todas as etapas seguintes. Esta fase é fundamental para garantir que o projeto atenda precisamente às suas expectativas e objetivos de negócio.",
    icon: "🔍"
  },
  {
    id: 2,
    title: "Planejamento Estratégico",
    shortDescription: "Definição da estrutura e objetivos do projeto",
    fullDescription: "Durante o Planejamento Estratégico, desenvolvemos o mapa do site com a arquitetura de informação ideal para seu público. Definimos os principais fluxos de usuário para otimizar a jornada e experiência de navegação, estabelecemos a estratégia de conteúdo alinhada aos objetivos de SEO e conversão, e criamos um cronograma detalhado com marcos e entregas específicas. Também identificamos as tecnologias mais adequadas para o projeto, considerando escalabilidade, performance e especificidades do seu negócio. Esta etapa estabelece os fundamentos para um desenvolvimento eficiente e orientado a resultados.",
    icon: "📋"
  },
  {
    id: 3,
    title: "Design e Prototipagem",
    shortDescription: "Criação da identidade visual e experiência do usuário",
    fullDescription: "Na fase de Design e Prototipagem, desenvolvemos wireframes detalhados para visualizar a estrutura das páginas antes da aplicação visual. Criamos protótipos interativos que permitem testar a navegação e usabilidade com usuários reais, desenvolvemos o design visual completo alinhado à sua identidade de marca, e definimos o sistema de design com componentes reutilizáveis para garantir consistência. Realizamos testes de usabilidade para validar as decisões de design e fazer ajustes necessários. Esta etapa transforma conceitos abstratos em interfaces visuais concretas que comunicam sua marca e facilitam a interação do usuário.",
    icon: "🎨"
  },
  {
    id: 4,
    title: "Desenvolvimento",
    shortDescription: "Programação do site com as melhores tecnologias",
    fullDescription: "Durante o Desenvolvimento, implementamos o frontend responsivo que se adapta perfeitamente a todos os dispositivos e tamanhos de tela. Codificamos o backend robusto para gerenciar dados e funcionalidades dinâmicas, integramos ferramentas essenciais como CMS para gerenciamento de conteúdo, formulários e sistemas de pagamento. Implementamos práticas avançadas de SEO técnico para otimização em buscadores e realizamos testes extensivos de performance, compatibilidade cross-browser e segurança. Aplicamos metodologias ágeis com entregas incrementais para feedback contínuo durante todo o processo de desenvolvimento.",
    icon: "💻"
  },
  {
    id: 5,
    title: "Teste e Otimização",
    shortDescription: "Garantia de qualidade e performance",
    fullDescription: "Na fase de Teste e Otimização, realizamos testes abrangentes de controle de qualidade através de múltiplos navegadores, dispositivos e sistemas. Otimizamos a velocidade de carregamento com técnicas avançadas como lazy loading, minificação e compressão de recursos. Realizamos auditorias de acessibilidade para conformidade com diretrizes WCAG e garantir que todos os usuários possam acessar seu site. Implementamos testes de segurança contra vulnerabilidades comuns e realizamos otimização final de SEO para maximizar a visibilidade nos motores de busca. Esta etapa assegura que seu site seja rápido, acessível, seguro e bem posicionado nas buscas.",
    icon: "🔧"
  },
  {
    id: 6,
    title: "Lançamento",
    shortDescription: "Publicação do site e configurações iniciais",
    fullDescription: "Durante a etapa de Lançamento, configuramos o ambiente de produção com hospedagem otimizada e certificados SSL para segurança. Realizamos a migração cuidadosa de dados quando necessário, configuramos ferramentas de análise como Google Analytics e Tag Manager para monitoramento de desempenho. Implementamos sitemaps e redirecionamentos para otimizar a indexação por mecanismos de busca, e realizamos testes finais de pós-lançamento para verificar todas as funcionalidades em ambiente de produção. Esta fase marca a transição do desenvolvimento para um site ativo e funcional, pronto para receber visitantes e converter objetivos de negócio.",
    icon: "🚀"
  },
  {
    id: 7,
    title: "Treinamento de Equipe",
    shortDescription: "Capacitação para gerenciamento autônomo do site",
    fullDescription: "Na fase de Treinamento de Equipe, oferecemos sessões personalizadas para sua equipe sobre como gerenciar e atualizar o site, fornecemos documentação detalhada com tutoriais em vídeo e manuais de operação, criamos recursos educativos específicos para as necessidades do seu negócio. Disponibilizamos um período de acompanhamento pós-treinamento para esclarecer dúvidas e realizamos avaliações práticas para garantir que sua equipe esteja plenamente capacitada. Este treinamento empodera sua equipe para manter o site atualizado e funcionando de forma ideal, reduzindo a dependência de suporte técnico constante.",
    icon: "👨‍🏫"
  },
  {
    id: 8,
    title: "Análise de Resultados",
    shortDescription: "Avaliação de métricas e performance",
    fullDescription: "Durante a Análise de Resultados, implementamos monitoramento contínuo de KPIs definidos na fase inicial do projeto, preparamos relatórios detalhados sobre tráfego, taxas de conversão e comportamento do usuário. Realizamos análise comparativa entre os resultados obtidos e as metas estabelecidas, identificamos oportunidades de melhoria baseadas em dados reais de uso, e desenvolvemos recomendações estratégicas para otimizações futuras. Esta etapa fecha o ciclo do projeto inicial e estabelece bases para a evolução contínua do seu site, garantindo que ele continue gerando resultados crescentes ao longo do tempo.",
    icon: "📊"
  },
  {
    id: 9,
    title: "Suporte e Manutenção",
    shortDescription: "Acompanhamento contínuo e atualizações regulares",
    fullDescription: "Na fase de Suporte e Manutenção, oferecemos pacotes de suporte técnico com diferentes níveis de SLA para atender suas necessidades específicas, realizamos atualizações regulares de segurança e correções de vulnerabilidades, implementamos melhorias incrementais baseadas em feedback dos usuários e dados analíticos. Fornecemos monitoramento proativo de performance e disponibilidade do site, e conduzimos revisões periódicas para identificar oportunidades de crescimento e otimização contínua. Este suporte continuado garante que seu site permaneça seguro, atualizado e eficiente, adaptando-se às mudanças do mercado e às necessidades evolutivas do seu negócio.",
    icon: "🛠️"
  },
  {
    id: 10,
    title: "Estratégia de Marketing Digital",
    shortDescription: "Ampliação da visibilidade e geração de leads",
    fullDescription: "Na etapa de Estratégia de Marketing Digital, desenvolvemos um plano abrangente de marketing digital complementar ao seu site, implementamos estratégias de SEO avançadas para melhorar o posicionamento orgânico, criamos campanhas de mídia paga (Google Ads, redes sociais) para amplificar o alcance. Estabelecemos estratégias de nurturing e automação de marketing para converter visitantes em leads e clientes, e desenvolvemos um calendário editorial para blog e redes sociais alinhado aos objetivos de negócio. Esta fase potencializa o investimento feito no site, transformando-o em um verdadeiro gerador de oportunidades de negócio através de estratégias integradas de atração, conversão e fidelização.",
    icon: "📣"
  },
  {
    id: 11,
    title: "Análise de Concorrência",
    shortDescription: "Estudo detalhado do cenário competitivo",
    fullDescription: "Durante a Análise de Concorrência, realizamos um mapeamento completo dos principais concorrentes no seu segmento, identificando seus pontos fortes, fracos e oportunidades de diferenciação. Analisamos estratégias de conteúdo, design, UX/UI, palavras-chave e posicionamento de mercado destes competidores. Avaliamos métricas como autoridade de domínio, backlinks, tempo de permanência e taxa de conversão quando possível. O objetivo é identificar lacunas no mercado e oportunidades de inovação para seu projeto digital, garantindo que sua presença online se destaque da concorrência com diferenciais competitivos claros e relevantes.",
    icon: "🔎"
  },
  {
    id: 12,
    title: "Wireframing Avançado",
    shortDescription: "Estruturação detalhada da experiência do usuário",
    fullDescription: "No processo de Wireframing Avançado, criamos esquemas estruturais de todas as páginas importantes do seu site, focando na hierarquia de informações, fluxos de navegação e pontos de conversão. Desenvolvemos wireframes de baixa, média e alta fidelidade para diferentes estágios do projeto, sempre validando com stakeholders. Utilizamos ferramentas especializadas como Figma, Adobe XD ou Sketch para protótipos interativos que simulam a experiência real do usuário. Esta metodologia permite visualizar e testar a usabilidade do site antes do desenvolvimento, economizando recursos e garantindo que a estrutura atenda perfeitamente aos objetivos estratégicos e necessidades dos usuários.",
    icon: "📐"
  },
  {
    id: 13,
    title: "Otimização de Conversão",
    shortDescription: "Maximização da taxa de conversão do site",
    fullDescription: "Na fase de Otimização de Conversão, implementamos um processo sistemático para aumentar o percentual de visitantes que realizam ações desejadas no site. Utilizamos técnicas de CRO (Conversion Rate Optimization) como testes A/B, mapas de calor, gravações de sessão e análise de funil para identificar pontos de fricção na jornada do usuário. Otimizamos elementos críticos como chamadas para ação, formulários, páginas de destino e checkout com base em dados comportamentais reais. Implementamos gatilhos de persuasão e microcopy estratégico para superar objeções e facilitar a tomada de decisão. Esta abordagem científica e orientada a dados resulta em melhorias contínuas nas taxas de conversão e ROI do seu investimento digital.",
    icon: "📈"
  },
  {
    id: 14,
    title: "Arquitetura de Informação",
    shortDescription: "Estruturação estratégica dos conteúdos e dados",
    fullDescription: "Na etapa de Arquitetura de Informação, criamos a estrutura organizacional e navegacional do seu site para garantir que os usuários encontrem facilmente o que procuram. Desenvolvemos taxonomias claras, categorizações lógicas e hierarquias de conteúdo que facilitam a descoberta de informações. Mapeamos a jornada do usuário e os principais fluxos de navegação para otimizar a experiência em cada ponto de contato. Utilizamos técnicas como card sorting e tree testing para validar a organização do conteúdo com usuários reais. Esta metodologia estabelece os alicerces para uma experiência de usuário fluida e intuitiva, reduzindo a carga cognitiva e aumentando os índices de satisfação e engajamento.",
    icon: "🏗️"
  },
  {
    id: 15,
    title: "Governança de Conteúdo",
    shortDescription: "Gestão estratégica e sustentável de conteúdos",
    fullDescription: "Na fase de Governança de Conteúdo, implementamos um sistema estruturado para gerenciar o ciclo de vida completo do conteúdo do seu site. Definimos papéis e responsabilidades claros para criação, aprovação, publicação e manutenção de conteúdos. Estabelecemos diretrizes editoriais, padrões de qualidade e processos de workflow eficientes para garantir consistência e relevância em todas as comunicações digitais. Criamos calendários editoriais estratégicos alinhados com objetivos de negócio e datas sazonais importantes para seu segmento. Implementamos métricas de performance por tipo de conteúdo para otimização contínua da estratégia. Esta estrutura de governança assegura que seu conteúdo digital permaneça atualizado, relevante e alinhado aos objetivos estratégicos a longo prazo.",
    icon: "📝"
  }
];

const MethodologySection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">Nossa Metodologia</h2>
        <p className="section-subtitle">
          Processo estruturado para garantir resultados excepcionais em todos os projetos
        </p>
        
        <div className="mt-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="btn-secondary">
                Conheça nossa metodologia
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto dark:bg-gray-800">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary-800 dark:text-blue-300">
                  Nossa Metodologia de Desenvolvimento
                </DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-300">
                  Abordagem estruturada para entregar projetos de alta qualidade com previsibilidade e excelência.
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6 space-y-8">
                {methodologySteps.map((step) => (
                  <div key={step.id} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="flex items-center text-xl font-bold text-primary-800 dark:text-blue-300 mb-2">
                      <span className="mr-3 text-2xl">{step.icon}</span>
                      <span>Etapa {step.id}: {step.title}</span>
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">{step.fullDescription}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h4 className="font-bold text-primary-800 dark:text-blue-300 mb-2">Por que nossa metodologia se destaca?</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>Processo transparente com comunicação constante durante todo o projeto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>Flexibilidade para adaptação a mudanças e requisitos específicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>Foco em resultados mensuráveis alinhados aos objetivos de negócio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>Qualidade técnica e visual superior com atenção aos detalhes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>Acompanhamento pós-lançamento para garantir sucesso contínuo</span>
                  </li>
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
