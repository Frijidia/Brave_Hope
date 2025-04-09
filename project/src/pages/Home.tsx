import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            BRAVE EMG
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Une entreprise innovante dédiée à l'excellence dans le divertissement et la gestion d'événements
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Devenir le leader de référence dans l'industrie du divertissement et de la gestion événementielle, 
              en repoussant constamment les limites de l'innovation et de la créativité.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Offrir des solutions innovantes et créatives pour transformer chaque projet en succès mémorable, 
              en dépassant les attentes de nos clients à chaque étape.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Excellence, créativité, innovation et engagement envers nos clients et partenaires. 
              Nous cultivons un esprit d'équipe fort et une passion pour l'excellence.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            De la gestion d'artistes à l'organisation d'événements, en passant par le marketing digital 
            et le développement technologique, nous offrons une gamme complète de services pour répondre 
            à tous vos besoins.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;