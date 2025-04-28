
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

  return (
    <section id="nichos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Soluções Personalizadas para Seu Segmento</h2>
          <p className="section-subtitle">
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
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <div className="text-2xl mb-2">{nicho.icon}</div>
              <div className="text-sm font-medium">{nicho.title}</div>
            </button>
          ))}
        </div>

        <Card className="border border-gray-200 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary-800 to-primary-700">
            <CardTitle className="text-white text-2xl">{activeNicho.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-medium mb-4 text-primary-800">
                  Sites e Landing Pages para {activeNicho.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {activeNicho.description}
                </p>
                <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                  <h4 className="font-medium text-primary-800 mb-2">Funcionalidades especializadas:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                      Design específico para o setor
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                      Otimização para conversão
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                      SEO técnico para seu nicho
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                      Integração com sistemas próprios
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                      Copywriting específico
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                      Gatilhos mentais assertivos
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <h4 className="font-medium text-primary-800 mb-2">Segmentos que atendemos:</h4>
                  <ul className="space-y-2">
                    {activeNicho.segments.map((segment, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-1.5 h-1.5 bg-primary-800 rounded-full mr-2"></span>
                        {segment}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Button className="w-full btn-accent">Ver exemplos neste nicho</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NichosSection;
