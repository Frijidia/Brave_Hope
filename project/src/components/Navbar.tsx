import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Music, Megaphone, Calendar, Code, GraduationCap, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { 
      name: 'BRAVE TALENTS', 
      path: '/talents', 
      description: 'Gestion complète de carrière des artistes',
      details: 'De la formalisation à l\'accompagnement stratégique, la promotion, en passant par la gestion administrative et le développement de l\'image.',
      icon: Music,
      image: '/images/talents-bg.jpg'
    },
    { 
      name: 'BRAVE PRESENCE', 
      path: '/presence', 
      description: 'Publicité, régie et communication 360°',
      details: 'Accompagnement des marques dans le déploiement de stratégies de communication percutantes.',
      icon: Megaphone,
      image: '/images/presence-bg.jpg'
    },
    { 
      name: 'BRAVE EVENTS', 
      path: '/events', 
      description: 'Conception et organisation d\'événements',
      details: 'Spécialisé dans l\'événementiel avec une approche stratégique et créative.',
      icon: Calendar,
      image: '/images/events-bg.jpg'
    },
    { 
      name: 'BRAVE SOLUTIONS', 
      path: '/solutions', 
      description: 'Solutions digitales sur mesure',
      details: 'Développement de solutions digitales innovantes pour la transformation numérique.',
      icon: Code,
      image: '/images/solutions-bg.jpg'
    },
    { 
      name: 'BRAVE ACADEMY', 
      path: '/academy', 
      description: 'Formation et développement des compétences',
      details: 'Programmes adaptés aux réalités du marché pour professionnels et entrepreneurs.',
      icon: GraduationCap,
      image: '/images/academy-bg.jpg'
    },
    { 
      name: 'BRAVE MARKETING', 
      path: '/marketing', 
      description: 'Marketing stratégique et opérationnel',
      details: 'Accompagnement dans la conception et l\'optimisation des stratégies marketing.',
      icon: BarChart,
      image: '/images/marketing-bg.jpg'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-black shadow-xl' : 'bg-black/80'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link 
            to="/" 
            className="font-bold text-xl sm:text-2xl text-white hover:text-gray-300 transition-colors"
          >
            BRAVE EMG
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`nav-link text-sm font-medium ${
                location.pathname === '/' ? 'text-white after:w-full' : 'text-gray-300 hover:text-white'
              }`}
            >
              Accueil
            </Link>

            <Link
              to="/about"
              className={`nav-link text-sm font-medium ${
                location.pathname === '/about' ? 'text-white after:w-full' : 'text-gray-300 hover:text-white'
              }`}
            >
              À propos
            </Link>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Services Dropdown */}
              <div className={`absolute top-full left-0 w-80 bg-black/95 p-4 rounded-lg shadow-xl transform transition-all duration-300 ${
                isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <div className="grid grid-cols-1 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`nav-link text-sm font-medium ${
                location.pathname === '/contact' ? 'text-white after:w-full' : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-black/95 fixed inset-0 z-40 pt-20 ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 space-y-4">
          <Link
            to="/"
            className={`block text-lg font-medium ${
              location.pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>

          <Link
            to="/about"
            className={`block text-lg font-medium ${
              location.pathname === '/about' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setIsOpen(false)}
          >
            À propos
          </Link>

          <div className="space-y-2">
            <button
              className="flex items-center justify-between w-full text-lg font-medium text-gray-300 hover:text-white"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span>Services</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`pl-4 space-y-2 ${isServicesOpen ? 'block' : 'hidden'}`}>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className={`block text-base ${
                    location.pathname === service.path ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    setIsServicesOpen(false);
                  }}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className={`block text-lg font-medium ${
              location.pathname === '/contact' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;