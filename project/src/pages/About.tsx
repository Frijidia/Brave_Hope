import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  Heart, 
  Users, 
  Briefcase, 
  Globe, 
  BarChart, 
  Building2,
  FileText,
  Calculator,
  Megaphone,
  CalendarCheck
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">À propos de BRAVE EMG</h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl">
              Créativité, stratégie et innovation au service de votre succès
            </p>
          </motion.div>
        </div>
      </div>

      {/* Domaines d'activités */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Domaines d'activités</h2>
          <p className="text-lg text-gray-600 mb-8">
            BRAVE EMG est une agence de communication globale qui conjugue créativité, stratégie et
            innovation pour accompagner ses clients dans la construction d'une identité forte et impactante.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Stratégie de communication</h3>
                  <p className="text-gray-600">Conseil, accompagnement et suivi en image de marque, positionnement et notoriété.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <CalendarCheck className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Événementiel et production</h3>
                  <p className="text-gray-600">Conception et organisation d'événements d'envergure, animation, scénographie et gestion logistique.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Megaphone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Médias et publicité</h3>
                  <p className="text-gray-600">Élaboration et diffusion de contenus percutants, gestion de campagnes promotionnelles et relations presse.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Solutions digitales</h3>
                  <p className="text-gray-600">Développement de plateformes web et mobiles performantes.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <BarChart className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Importation</h3>
                  <p className="text-gray-600">Aménagement d'espaces professionnels et fourniture de matériel de qualité.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mission */}
      <div className="bg-gray-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Notre Mission</h2>
            <p className="text-lg text-gray-300 mb-8">
              Chez BRAVE EMG, notre mission est d'accompagner les entreprises, institutions et créateurs dans
              le développement de leur image, la valorisation de leurs projets et l'optimisation de leur présence
              sur le marché.
            </p>
            <p className="text-lg text-gray-300">
              Nous concevons des stratégies de communication innovantes, créons des expériences
              événementielles mémorables et développons des solutions digitales performantes pour aider nos
              clients à se démarquer.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Valeurs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Créativité & Innovation</h3>
                  <p className="text-gray-600">Nous repoussons les limites de l'imagination pour proposer des concepts uniques et des solutions avant-gardistes.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Engagement & Fiabilité</h3>
                  <p className="text-gray-600">Nous bâtissons des relations solides basées sur la transparence, le respect des délais et la confiance mutuelle.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Esprit d'équipe & Collaboration</h3>
                  <p className="text-gray-600">Nous croyons en la force du collectif et privilégions le travail collaboratif pour assurer la réussite de chaque projet.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Organigramme */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Notre Organisation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Building2 className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Gérance</h3>
                    <p className="text-gray-600">Organe central de direction et de pilotage stratégique de BRAVE EMG.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Secrétariat de Direction</h3>
                    <p className="text-gray-600">Soutien administratif, organisationnel et communicationnel.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Calculator className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Direction Administrative et Financière</h3>
                    <p className="text-gray-600">Gestion financière, ressources humaines, administratives et juridiques.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 