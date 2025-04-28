
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Sobre a i9 Sites & Landing Pages</h2>
            <p className="text-gray-600 mb-6">
              Somos uma equipe especializada no desenvolvimento de soluções digitais de alta performance para profissionais e empresas que buscam se destacar no mundo online.
            </p>
            <p className="text-gray-600 mb-6">
              Nossa missão é transformar a presença digital de nossos clientes, criando sites e landing pages que não apenas impressionam visualmente, mas que são verdadeiras máquinas de conversão.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-primary-800 mb-1">Nossa Missão</h3>
                <p className="text-sm text-gray-600">
                  Democratizar o acesso à presença digital de qualidade, aumentando os resultados de negócios em todos os segmentos.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-primary-800 mb-1">Nossa Visão</h3>
                <p className="text-sm text-gray-600">
                  Ser referência em desenvolvimento de sites com alta taxa de conversão e performance técnica inigualável.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-primary-800">Nossos Diferenciais</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-accent-orange font-bold mr-2">✓</span>
                <span>Foco total em conversão e resultados mensuráveis</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-orange font-bold mr-2">✓</span>
                <span>Especialização em nichos específicos para melhor atender cada segmento</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-orange font-bold mr-2">✓</span>
                <span>Otimização técnica de ponta para performance máxima no Google</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-orange font-bold mr-2">✓</span>
                <span>Design exclusivo para cada cliente, sem templates genéricos</span>
              </li>
            </ul>
            
            <Button className="btn-primary">Conheça nossa metodologia</Button>
          </div>
          
          <div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-primary-800">O que nossos clientes dizem</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">
                      DR
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-semibold">Dr. Ricardo Almeida</h4>
                      <p className="text-xs text-gray-500">Clínica Odontológica</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Desde que implementamos o novo site desenvolvido pela i9, o número de agendamentos aumentou em 70%. A facilidade de navegação e o design profissional transmitiram exatamente a confiança que queríamos passar aos novos pacientes."
                  </p>
                  <div className="mt-2 flex">
                    <span className="text-amber-400">★★★★★</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold">
                      ML
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-semibold">Maria Lima</h4>
                      <p className="text-xs text-gray-500">Corretora de Imóveis</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "O investimento no site da i9 se pagou em menos de um mês! A landing page especial para captação de vendedores interessados em vender seus imóveis trouxe 15 novos clientes logo na primeira semana."
                  </p>
                  <div className="mt-2 flex">
                    <span className="text-amber-400">★★★★★</span>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" className="text-sm px-4">Ver todos os depoimentos</Button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary-800">98%</span>
                  <span className="text-sm text-gray-600">Satisfação</span>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary-800">247+</span>
                  <span className="text-sm text-gray-600">Projetos</span>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary-800">14</span>
                  <span className="text-sm text-gray-600">Nichos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
