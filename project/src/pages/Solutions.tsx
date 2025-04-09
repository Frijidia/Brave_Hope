import { Code, Cog, BarChart, Shield, Star, Award, Database, Cloud, Server, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div className="absolute inset-0 bg-[url('/images/solutions-hero.jpg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">BRAVE SOLUTIONS</h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl">
              Solutions digitales innovantes pour transformer votre entreprise
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions technologiques sur mesure pour votre réussite
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
              <Code className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Développement Digital</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Applications web et mobiles</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Logiciels métiers sur mesure</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Solutions e-commerce</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-gray-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
              <Cog className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Automatisation</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>ERP et CRM personnalisés</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Plateformes collaboratives</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Workflows automatisés</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
              <BarChart className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligence des Données</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Analyse de données avancée</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Tableaux de bord interactifs</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Reporting automatisé</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gray-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cybersécurité</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Protection des données</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Sécurisation des transactions</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Hébergement sécurisé</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
              <Cloud className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Computing</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Solutions cloud hybrides</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Migration vers le cloud</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Optimisation des coûts</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-gray-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Solutions IoT</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Objets connectés</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Analyse en temps réel</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Automatisation intelligente</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nos Success Stories</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Découvrez comment nous avons transformé les entreprises avec nos solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-800 p-8 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-700 mr-4"></div>
                <div>
                  <h3 className="text-xl font-bold text-white">Entreprise 1</h3>
                  <p className="text-gray-400">Secteur de la finance</p>
                </div>
              </div>
              <p className="text-gray-300">
                "BRAVE SOLUTIONS a développé une plateforme qui a augmenté notre efficacité opérationnelle de 40%."
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-800 p-8 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-700 mr-4"></div>
                <div>
                  <h3 className="text-xl font-bold text-white">Entreprise 2</h3>
                  <p className="text-gray-400">Secteur de la santé</p>
                </div>
              </div>
              <p className="text-gray-300">
                "La solution d'automatisation a réduit nos coûts opérationnels de 30% tout en améliorant la qualité de service."
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-800 p-8 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-700 mr-4"></div>
                <div>
                  <h3 className="text-xl font-bold text-white">Entreprise 3</h3>
                  <p className="text-gray-400">Secteur du retail</p>
                </div>
              </div>
              <p className="text-gray-300">
                "L'analyse de données en temps réel nous a permis d'augmenter nos ventes de 25%."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Prêt à Transformer Votre Entreprise ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de vos besoins et découvrir comment nos solutions peuvent vous aider
          </p>
          <Link to="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Nous Contacter
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Solutions;