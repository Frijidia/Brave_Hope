import { Megaphone, Target, BarChart, Globe, Users, Star, Award, TrendingUp, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Presence = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div className="absolute inset-0 bg-[url('/images/presence-hero.jpg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">BRAVE PRESENCE</h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl">
              Publicité, régie et communication 360° pour une présence optimale
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
            Une approche complète pour maximiser votre présence et votre impact
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
              <Megaphone className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Publicité & Régie</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Gestion de campagnes publicitaires</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Régie publicitaire multi-supports</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Optimisation des investissements média</span>
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
              <Target className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stratégie de Communication</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Définition de l'identité de marque</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Plan de communication intégré</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Positionnement stratégique</span>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Digital</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Stratégie digitale complète</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Gestion des réseaux sociaux</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Analyse et optimisation des performances</span>
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
              <Globe className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication 360°</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Campagnes cross-canal</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Relations presse et médias</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Communication événementielle</span>
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
              <Users className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Influence & Relations</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Stratégie d'influence</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Gestion des relations presse</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Partenariats stratégiques</span>
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
              <TrendingUp className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance & ROI</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Analyse des performances</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Optimisation des investissements</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Reporting et recommandations</span>
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
              Découvrez comment nous avons transformé la présence de nos clients
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
                  <h3 className="text-xl font-bold text-white">Marque 1</h3>
                  <p className="text-gray-400">Secteur de la mode</p>
                </div>
              </div>
              <p className="text-gray-300">
                "BRAVE PRESENCE a révolutionné notre présence digitale et augmenté notre visibilité de 300%."
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
                  <h3 className="text-xl font-bold text-white">Marque 2</h3>
                  <p className="text-gray-400">Secteur du luxe</p>
                </div>
              </div>
              <p className="text-gray-300">
                "La stratégie de communication 360° a transformé notre image de marque et notre engagement client."
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
                  <h3 className="text-xl font-bold text-white">Marque 3</h3>
                  <p className="text-gray-400">Secteur de la tech</p>
                </div>
              </div>
              <p className="text-gray-300">
                "L'approche data-driven de BRAVE PRESENCE a optimisé nos investissements publicitaires de 40%."
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Prêt à Booster Votre Présence ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner
          </p>
          <Link to="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Nous Contacter
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Presence;