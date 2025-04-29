
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleOrçamentoClick = () => {
    // Scroll to the contact section
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePortfolioClick = () => {
    // Scroll to the portfolio section
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-6 font-heading leading-tight dark:text-white">
              Sites e Landing Pages que <span className="text-accent-orange">convertem visitantes</span> em clientes
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg dark:text-gray-300">
              Desenvolvemos soluções digitais de alta performance e design moderno, específicas para o seu segmento de atuação com foco em conversão e resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-accent" onClick={handleOrçamentoClick}>
                Solicitar Orçamento
              </Button>
              <Button variant="outline" className="btn-secondary" onClick={handlePortfolioClick}>
                Ver Portfólio
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="bg-green-100 text-green-800 rounded-full px-4 py-1 text-sm font-medium flex items-center dark:bg-green-900 dark:text-green-200">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>Entrega rápida garantida</span>
              </div>
              <div className="ml-4 bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium flex items-center dark:bg-blue-900 dark:text-blue-200">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span>100% Responsivo</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slide-in">
            <div className="relative">
              <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Sites e Landing Pages Profissionais" 
                  className="w-full"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-orange rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
