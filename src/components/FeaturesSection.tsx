
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Alta Performance',
      description: 'Sites otimizados para carregamento rápido e máxima pontuação no Google PageSpeed Insights.'
    },
    {
      icon: '📱',
      title: '100% Responsivo',
      description: 'Design adaptável a todos os dispositivos, garantindo experiência perfeita em celulares e tablets.'
    },
    {
      icon: '🔍',
      title: 'SEO Otimizado',
      description: 'Estrutura de código semântica para melhor posicionamento nas buscas do Google.'
    },
    {
      icon: '💰',
      title: 'Foco em Conversão',
      description: 'Elementos estratégicos de conversão para transformar visitantes em clientes.'
    },
    {
      icon: '🎨',
      title: 'Design Exclusivo',
      description: 'Criação personalizada para refletir a identidade da sua marca e impressionar visitantes.'
    },
    {
      icon: '⚡',
      title: 'Entrega Rápida',
      description: 'Metodologia ágil que garante implementação e publicação em tempo recorde.'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Por que escolher a i9?</h2>
          <p className="section-subtitle">
            Desenvolvemos projetos digitais com foco em resultados reais para o seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-800 to-primary-700 rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Garantia de Satisfação Total</h3>
              <p className="text-blue-100 mb-4">
                Estamos tão confiantes na qualidade do nosso trabalho que oferecemos garantia de satisfação. Se você não estiver 100% satisfeito com o resultado, nós revisamos o projeto até atender completamente suas expectativas.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-800 font-bold text-2xl mr-4">
                  ✓
                </div>
                <p className="text-white font-medium">Sem riscos, apenas resultados garantidos</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img 
                src="/placeholder.svg" 
                alt="Selo de Garantia" 
                className="h-32 w-32"
                width="128"
                height="128"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
