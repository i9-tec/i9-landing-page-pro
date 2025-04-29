
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from '@/components/ui/dialog';

const methodologyData = {
  title: "Nossa Metodologia de Desenvolvimento",
  description: "Desenvolvemos sites e landing pages que realmente convertem visitantes em clientes através de uma metodologia comprovada e exclusiva que combina design atraente, otimização técnica e estratégias de conversão.",
  steps: [
    {
      title: "1. Análise e Descoberta",
      description: "Iniciamos com uma análise profunda do seu negócio, público-alvo e concorrência. Entendemos suas necessidades específicas, objetivos comerciais e particularidades do seu segmento de mercado. Esta fase envolve reuniões detalhadas, questionários estratégicos e pesquisa de mercado para garantir que tenhamos uma compreensão completa do projeto antes de iniciar.",
      details: [
        "Identificação do público-alvo e suas necessidades",
        "Análise detalhada da concorrência no ambiente digital",
        "Definição de objetivos mensuráveis para o projeto",
        "Levantamento completo de requisitos técnicos e funcionais",
        "Mapeamento da jornada do cliente ideal"
      ]
    },
    {
      title: "2. Planejamento Estratégico",
      description: "Com base nas informações coletadas, desenvolvemos uma estratégia personalizada para seu site ou landing page. Definimos a estrutura, hierarquia de informações, funcionalidades necessárias e pontos de conversão. Nesta fase, criamos um blueprint detalhado que servirá como guia para todo o desenvolvimento.",
      details: [
        "Elaboração da arquitetura da informação e fluxo de navegação",
        "Definição de pontos estratégicos de conversão",
        "Planejamento de conteúdo orientado à conversão",
        "Seleção de tecnologias adequadas às necessidades do projeto",
        "Criação de wireframes e protótipos funcionais"
      ]
    },
    {
      title: "3. Design Orientado à Conversão",
      description: "Nossos designers criam layouts exclusivos, focados não apenas na estética, mas principalmente em guiar o visitante para a ação desejada. Utilizamos princípios de psicologia visual e neuromarketing para desenvolver interfaces que geram confiança e estimulam a tomada de decisão.",
      details: [
        "Design exclusivo e personalizado para seu negócio",
        "Aplicação de princípios de psicologia de cores e neuromarketing",
        "Criação de elementos visuais que direcionam o olhar para pontos de conversão",
        "Design responsivo otimizado para todos os dispositivos",
        "Testes A/B de elementos visuais para maximizar eficácia"
      ]
    },
    {
      title: "4. Desenvolvimento Técnico Otimizado",
      description: "Nossos programadores implementam o design com código limpo e otimizado, garantindo velocidade, compatibilidade e segurança. Utilizamos as tecnologias mais modernas do mercado para criar sites que não apenas impressionam visualmente, mas também têm excelente desempenho técnico.",
      details: [
        "Codificação limpa e estruturada seguindo melhores práticas",
        "Otimização para alta velocidade de carregamento",
        "Implementação de recursos SEO técnico avançados",
        "Integração com ferramentas de análise e rastreamento",
        "Testes de compatibilidade em múltiplos navegadores e dispositivos"
      ]
    },
    {
      title: "5. Implementação de Elementos de Conversão",
      description: "Integramos elementos estratégicos como formulários otimizados, botões de ação persuasivos, depoimentos, garantias e outros gatilhos mentais que aumentam significativamente a taxa de conversão do seu site.",
      details: [
        "Criação de formulários otimizados para máxima taxa de preenchimento",
        "Implementação de Call-to-Actions (CTAs) estrategicamente posicionados",
        "Integração de elementos de prova social e credibilidade",
        "Utilização de gatilhos de escassez e urgência quando apropriado",
        "Implementação de chatbots e ferramentas de atendimento instantâneo"
      ]
    },
    {
      title: "6. Testes e Otimização Contínua",
      description: "Antes do lançamento, realizamos testes rigorosos de usabilidade e performance. Após o lançamento, monitoramos constantemente o comportamento dos visitantes para identificar oportunidades de otimização e melhorar continuamente os resultados.",
      details: [
        "Testes de usabilidade com usuários reais",
        "Implementação de monitoramento de comportamento dos visitantes",
        "Análise regular de dados e métricas de conversão",
        "Otimização baseada em dados comportamentais",
        "Atualizações periódicas baseadas em resultados e novas tendências"
      ]
    },
    {
      title: "7. Treinamento de Equipe",
      description: "Oferecemos sessões personalizadas para sua equipe sobre como gerenciar e atualizar o site, fornecemos documentação detalhada e recursos educativos específicos para as necessidades do seu negócio.",
      details: [
        "Sessões de treinamento personalizadas para sua equipe",
        "Documentação detalhada com tutoriais e manuais",
        "Recursos educativos específicos para seu negócio",
        "Período de acompanhamento para esclarecer dúvidas",
        "Avaliações práticas para garantir a capacitação plena da equipe"
      ]
    },
    {
      title: "8. Análise de Resultados",
      description: "Implementamos monitoramento contínuo de KPIs, preparamos relatórios detalhados sobre tráfego, taxas de conversão e comportamento do usuário para avaliar o desempenho do site.",
      details: [
        "Monitoramento contínuo de KPIs definidos na fase inicial",
        "Relatórios detalhados sobre métricas de desempenho",
        "Análise comparativa entre resultados e metas estabelecidas",
        "Identificação de oportunidades de melhoria baseadas em dados",
        "Recomendações estratégicas para otimizações futuras"
      ]
    },
    {
      title: "9. Suporte e Manutenção",
      description: "Oferecemos pacotes de suporte técnico com diferentes níveis de SLA, realizamos atualizações regulares de segurança e monitoramos proativamente a performance e disponibilidade do site.",
      details: [
        "Pacotes de suporte técnico com diferentes níveis de SLA",
        "Atualizações regulares de segurança e correções",
        "Melhorias incrementais baseadas em feedback dos usuários",
        "Monitoramento proativo de performance e disponibilidade",
        "Revisões periódicas para identificar oportunidades de otimização"
      ]
    },
    {
      title: "10. Estratégia de Marketing Digital",
      description: "Desenvolvemos um plano abrangente de marketing digital complementar ao seu site, implementamos estratégias de SEO avançadas e criamos campanhas para amplificar o alcance.",
      details: [
        "Desenvolvimento de plano abrangente de marketing digital",
        "Estratégias de SEO avançadas para posicionamento orgânico",
        "Campanhas de mídia paga para amplificação de alcance",
        "Estratégias de nurturing e automação de marketing",
        "Calendário editorial para blog e redes sociais"
      ]
    },
    {
      title: "11. Análise de Concorrência",
      description: "Realizamos um mapeamento completo dos principais concorrentes no seu segmento, identificando pontos fortes, fracos e oportunidades de diferenciação para seu negócio.",
      details: [
        "Mapeamento completo dos principais concorrentes",
        "Análise de estratégias de conteúdo, design e UX/UI",
        "Avaliação de palavras-chave e posicionamento de mercado",
        "Análise de autoridade de domínio e backlinks",
        "Identificação de lacunas no mercado e oportunidades"
      ]
    },
    {
      title: "12. Wireframing Avançado",
      description: "Criamos esquemas estruturais de todas as páginas importantes do seu site, focando na hierarquia de informações, fluxos de navegação e pontos de conversão para uma experiência otimizada.",
      details: [
        "Esquemas estruturais de todas as páginas importantes",
        "Foco em hierarquia de informações e fluxos de navegação",
        "Desenvolvimento de wireframes em diferentes níveis de fidelidade",
        "Uso de ferramentas especializadas para protótipos interativos",
        "Validação contínua com stakeholders do projeto"
      ]
    },
    {
      title: "13. Otimização de Conversão",
      description: "Implementamos um processo sistemático para aumentar a taxa de conversão do site, utilizando técnicas de CRO como testes A/B, mapas de calor e análise de funil para identificar pontos de melhoria.",
      details: [
        "Implementação de técnicas avançadas de CRO",
        "Realização de testes A/B e mapas de calor",
        "Análise detalhada de funil de conversão",
        "Otimização de elementos críticos como CTAs e formulários",
        "Implementação de gatilhos de persuasão e microcopy estratégico"
      ]
    },
    {
      title: "14. Arquitetura de Informação",
      description: "Criamos a estrutura organizacional e navegacional do site para garantir que os usuários encontrem facilmente o que procuram, com taxonomias claras e hierarquias lógicas de conteúdo.",
      details: [
        "Estrutura organizacional e navegacional otimizada",
        "Taxonomias claras e hierarquias lógicas de conteúdo",
        "Mapeamento da jornada do usuário e fluxos de navegação",
        "Técnicas de card sorting e tree testing",
        "Foco na redução da carga cognitiva para melhor usabilidade"
      ]
    },
    {
      title: "15. Governança de Conteúdo",
      description: "Implementamos um sistema estruturado para gerenciar o ciclo de vida completo do conteúdo do seu site, com papéis e responsabilidades claros para criação, aprovação e manutenção.",
      details: [
        "Sistema estruturado para gestão de conteúdo",
        "Definição de papéis e responsabilidades claros",
        "Diretrizes editoriais e padrões de qualidade",
        "Calendários editoriais estratégicos",
        "Métricas de performance por tipo de conteúdo"
      ]
    },
    {
      title: "16. Integração com Plataformas de Marketing",
      description: "Implementamos integrações avançadas com as principais plataformas de marketing digital para maximizar o retorno sobre investimento das suas campanhas.",
      details: [
        "Integração com Google Analytics e Tag Manager",
        "Configuração de pixel do Facebook e LinkedIn Insight Tag",
        "Implementação de ferramentas de automação de marketing",
        "Configuração de eventos para remarketing e conversões",
        "Dashboards personalizados para acompanhamento de resultados"
      ]
    },
    {
      title: "17. Desenvolvimento de Conteúdo Estratégico",
      description: "Criamos conteúdo persuasivo e otimizado tanto para visitantes quanto para algoritmos de busca, aumentando a relevância do seu site.",
      details: [
        "Copywriting persuasivo orientado à conversão",
        "Criação de conteúdo baseado em pesquisa de palavras-chave",
        "Desenvolvimento de materiais ricos para captação de leads",
        "Conteúdo educativo para diferentes etapas do funil",
        "Otimização de conteúdo para perguntas frequentes dos usuários"
      ]
    },
    {
      title: "18. Validação Técnica Avançada",
      description: "Realizamos testes técnicos rigorosos para garantir que seu site funcione perfeitamente em todas as condições possíveis.",
      details: [
        "Testes de carga para avaliar desempenho sob tráfego intenso",
        "Validação de compatibilidade cross-browser e cross-device",
        "Avaliação de acessibilidade conforme diretrizes WCAG",
        "Testes de segurança e penetração",
        "Otimização de fluxos de preenchimento de formulários"
      ]
    },
    {
      title: "19. Automatização de Processos",
      description: "Implementamos soluções automatizadas para reduzir trabalho manual e aumentar a eficiência operacional do seu negócio.",
      details: [
        "Automação de respostas a formulários e leads gerados",
        "Integração com CRM e ferramentas de gestão",
        "Configuração de notificações e alertas customizados",
        "Automação de relatórios de performance",
        "Fluxos de trabalho otimizados para gestão de conteúdo"
      ]
    },
    {
      title: "20. Análise Avançada de Dados",
      description: "Utilizamos técnicas sofisticadas de análise de dados para extrair insights valiosos sobre o comportamento dos visitantes e oportunidades de melhoria.",
      details: [
        "Implementação de análise avançada de funil de conversão",
        "Segmentação detalhada de usuários por comportamento",
        "Modelagem de atribuição para identificar canais mais eficientes",
        "Análise preditiva para identificar tendências",
        "Benchmarking contínuo contra métricas do setor"
      ]
    }
  ]
};

const AboutSection = () => {
  const [methodologyModalOpen, setMethodologyModalOpen] = useState(false);

  return (
    <section id="sobre" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title dark:text-white">Sobre a i9 Sites & Landing Pages</h2>
            <p className="text-gray-600 mb-6 dark:text-gray-300">
              Somos uma equipe especializada no desenvolvimento de soluções digitais de alta performance para profissionais e empresas que buscam se destacar no mundo online.
            </p>
            <p className="text-gray-600 mb-6 dark:text-gray-300">
              Nossa missão é transformar a presença digital de nossos clientes, criando sites e landing pages que não apenas impressionam visualmente, mas que são verdadeiras máquinas de conversão.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg dark:bg-gray-800 dark:border dark:border-gray-700">
                <h3 className="font-medium text-primary-800 mb-1 dark:text-white">Nossa Missão</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Democratizar o acesso à presença digital de qualidade, aumentando os resultados de negócios em todos os segmentos.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg dark:bg-gray-800 dark:border dark:border-gray-700">
                <h3 className="font-medium text-primary-800 mb-1 dark:text-white">Nossa Visão</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Ser referência em desenvolvimento de sites com alta taxa de conversão e performance técnica inigualável.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-primary-800 dark:text-white">Nossos Diferenciais</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-accent-orange font-bold mr-2">✓</span>
                <span className="dark:text-gray-300">Foco total em conversão e resultados mensuráveis</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-orange font-bold mr-2">✓</span>
                <span className="dark:text-gray-300">Especialização em nichos específicos para melhor atender cada segmento</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-orange font-bold mr-2">✓</span>
                <span className="dark:text-gray-300">Otimização técnica de ponta para performance máxima no Google</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-orange font-bold mr-2">✓</span>
                <span className="dark:text-gray-300">Design exclusivo para cada cliente, sem templates genéricos</span>
              </li>
            </ul>
            
            <Button className="btn-primary dark:bg-blue-700 dark:hover:bg-blue-800" onClick={() => setMethodologyModalOpen(true)}>
              Conheça nossa metodologia
            </Button>
          </div>
          
          <div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-primary-800 dark:text-white">O que nossos clientes dizem</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-sm dark:bg-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold dark:bg-blue-900 dark:text-blue-200">
                      DR
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-semibold dark:text-white">Dr. Ricardo Almeida</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Clínica Odontológica</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm dark:text-gray-300">
                    "Desde que implementamos o novo site desenvolvido pela i9, o número de agendamentos aumentou em 70%. A facilidade de navegação e o design profissional transmitiram exatamente a confiança que queríamos passar aos novos pacientes."
                  </p>
                  <div className="mt-2 flex">
                    <span className="text-amber-400">★★★★★</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm dark:bg-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold dark:bg-green-900 dark:text-green-200">
                      ML
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-semibold dark:text-white">Maria Lima</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Corretora de Imóveis</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm dark:text-gray-300">
                    "O investimento no site da i9 se pagou em menos de um mês! A landing page especial para captação de vendedores interessados em vender seus imóveis trouxe 15 novos clientes logo na primeira semana."
                  </p>
                  <div className="mt-2 flex">
                    <span className="text-amber-400">★★★★★</span>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" className="text-sm px-4 dark:text-gray-200 dark:hover:bg-gray-700">Ver todos os depoimentos</Button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary-800 dark:text-white">98%</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Satisfação</span>
                </div>
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary-800 dark:text-white">247+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Projetos</span>
                </div>
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary-800 dark:text-white">14</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Nichos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para a metodologia */}
      <Dialog open={methodologyModalOpen} onOpenChange={setMethodologyModalOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto dark:bg-gray-800 dark:border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold dark:text-white">{methodologyData.title}</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-300">
              {methodologyData.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-8">
            {methodologyData.steps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg dark:bg-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-white">{step.title}</h3>
                <p className="text-gray-700 mb-4 dark:text-gray-300">{step.description}</p>
                <div className="pl-4 border-l-4 border-accent-orange">
                  <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Detalhes do processo:</h4>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="text-accent-orange font-bold mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Conversamos sobre seu projeto e desenvolvemos um plano personalizado para suas necessidades específicas.
            </p>
            <DialogClose asChild>
              <Button variant="outline" className="dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
                Fechar
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
