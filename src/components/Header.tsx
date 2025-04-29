
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 100; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="https://i9empreendendo.com/wp-content/uploads/2024/10/cropped-i9logo-2_preview_rev_1.png" 
            alt="i9 Sites & Landing Pages" 
            className="h-10"
          />
          <span className={`font-bold text-xl ${isScrolled ? 'text-primary-800 dark:text-white' : 'text-primary-800 dark:text-white'}`}>
            i9 Sites
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              {[
                { name: 'Início', id: '' },
                { name: 'Serviços', id: 'servicos' },
                { name: 'Nichos', id: 'nichos' },
                { name: 'Portfólio', id: 'portfolio' },
                { name: 'Sobre', id: 'sobre' },
                { name: 'Contato', id: 'contato' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={`#${item.id}`} 
                    onClick={(e) => handleScroll(e, item.id || 'home')}
                    className={`font-medium hover:text-primary-800 dark:hover:text-primary-200 transition-colors ${
                      isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-800 dark:text-gray-100'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a 
              href="#contato" 
              onClick={(e) => handleScroll(e, 'contato')}
              className="btn-primary inline-flex items-center justify-center"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
        
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <div className={`w-6 h-0.5 bg-gray-800 dark:bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 dark:bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="container mx-auto px-4">
          <ul className="space-y-4">
            {[
              { name: 'Início', id: '' },
              { name: 'Serviços', id: 'servicos' },
              { name: 'Nichos', id: 'nichos' },
              { name: 'Portfólio', id: 'portfolio' },
              { name: 'Sobre', id: 'sobre' },
              { name: 'Contato', id: 'contato' }
            ].map((item) => (
              <li key={item.name}>
                <a 
                  href={`#${item.id}`} 
                  onClick={(e) => handleScroll(e, item.id || 'home')}
                  className="block py-2 text-gray-800 dark:text-gray-100 font-medium hover:text-primary-800 dark:hover:text-primary-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-2 flex items-center gap-4">
              <ThemeToggle />
              <a 
                href="#contato" 
                onClick={(e) => handleScroll(e, 'contato')}
                className="btn-primary inline-block w-full text-center py-2"
              >
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
