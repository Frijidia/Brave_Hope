import { Sparkles, Truck, Users, MessageSquare, Star, Award, Calendar, Music, Video, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div className="absolute inset-0 bg-[url('/images/events-hero.jpg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">BRAVE EVENTS</h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl">
              Création d'expériences événementielles uniques et mémorables
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
            Une expertise complète pour des événements exceptionnels
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
              <Sparkles className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conception d'Événements</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Lancements de produits</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Conférences et séminaires</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Soirées de gala et concerts</span>
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
              <Truck className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestion Logistique</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Coordination des prestataires</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Gestion des lieux</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Mise en place technique</span>
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
              <Users className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Animation & Expérience</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Animations interactives</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Performances artistiques</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Dispositifs innovants</span>
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
              <MessageSquare className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication Événementielle</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Promotion digitale</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Relations presse</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Création de contenus</span>
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
              <Calendar className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestion de Tournées</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Planification des dates</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Coordination des équipes</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Gestion des contrats</span>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Événements Hybrides</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Streaming en direct</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Interactions virtuelles</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Plateformes dédiées</span>
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
              Découvrez comment nous avons créé des événements mémorables
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
                  <h3 className="text-xl font-bold text-white">Festival 1</h3>
                  <p className="text-gray-400">Événement culturel</p>
                </div>
              </div>
              <p className="text-gray-300">
                "BRAVE EVENTS a créé une expérience immersive unique qui a attiré plus de 10 000 participants."
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
                  <h3 className="text-xl font-bold text-white">Conférence 2</h3>
                  <p className="text-gray-400">Événement professionnel</p>
                </div>
              </div>
              <p className="text-gray-300">
                "L'organisation impeccable et l'innovation technologique ont fait de cet événement un succès retentissant."
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
                  <h3 className="text-xl font-bold text-white">Tournée 3</h3>
                  <p className="text-gray-400">Événement musical</p>
                </div>
              </div>
              <p className="text-gray-300">
                "La gestion logistique et la production de BRAVE EVENTS ont permis une tournée sans accroc dans 15 villes."
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Prêt à Créer un Événement Mémorable ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons le rendre exceptionnel
          </p>
          <Link to="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Nous Contacter
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;