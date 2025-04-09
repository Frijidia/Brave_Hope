import { Users, Music, Calendar, Image, MessageSquare, Star, Award, Headphones, Mic, Video, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Talents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div className="absolute inset-0 bg-[url('/images/talents-hero.jpg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">BRAVE TALENTS</h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl">
              Le pôle dédié à la gestion complète de carrière des artistes
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
            Une approche complète pour accompagner les artistes à chaque étape de leur carrière
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
              <Users className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Management Artistique</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Définition et suivi des objectifs de carrière</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Gestion administrative et contractuelle</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Optimisation des opportunités professionnelles</span>
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
              <Music className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Production Musicale</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Enregistrement et production en studio</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Mastering et post-production</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Distribution digitale et physique</span>
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
              <MessageSquare className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Promotion & Marketing</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Stratégie de communication digitale</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Gestion des réseaux sociaux</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Relations presse et médias</span>
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
              <Calendar className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Événementiel & Tournées</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Organisation de concerts et tournées</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Gestion logistique et technique</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Coordination des équipes</span>
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
              <Image className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Image & Branding</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Développement de l'identité visuelle</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Coaching en image et communication</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Gestion des relations publiques</span>
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
              <Award className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Développement de Carrière</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Stratégie de développement à long terme</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Formation et coaching artistique</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span>Gestion des droits et royalties</span>
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
              Découvrez comment nous avons accompagné des artistes vers le succès
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
                  <h3 className="text-xl font-bold text-white">Artiste 1</h3>
                  <p className="text-gray-400">Chanteur</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Grâce à BRAVE TALENTS, j'ai pu développer ma carrière de manière professionnelle et atteindre de nouveaux sommets."
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
                  <h3 className="text-xl font-bold text-white">Artiste 2</h3>
                  <p className="text-gray-400">Compositeur</p>
                </div>
              </div>
              <p className="text-gray-300">
                "L'accompagnement personnalisé de BRAVE TALENTS m'a permis de me concentrer sur ma créativité tout en développant mon business."
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
                  <h3 className="text-xl font-bold text-white">Artiste 3</h3>
                  <p className="text-gray-400">Producteur</p>
                </div>
              </div>
              <p className="text-gray-300">
                "La vision stratégique de BRAVE TALENTS a transformé ma carrière et m'a ouvert de nouvelles opportunités."
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Prêt à Développer Votre Carrière ?</h2>
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

export default Talents;