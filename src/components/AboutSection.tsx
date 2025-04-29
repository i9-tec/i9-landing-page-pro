
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
