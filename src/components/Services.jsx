import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Marketing Digital',
    description: 'Estratégias personalizadas para aumentar sua visibilidade online e atrair mais clientes.',
    icon: '🚀',
  },
  {
    title: 'Design Web',
    description: 'Criação de sites modernos e responsivos que convertem visitantes em clientes.',
    icon: '🎨',
  },
  {
    title: 'SEO Otimizado',
    description: 'Melhore seu ranking nos motores de busca e aumente seu tráfego orgânico.',
    icon: '📈',
  },
  {
    title: 'Mídia Social',
    description: 'Gestão profissional de redes sociais para engajar seu público-alvo.',
    icon: '💬',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas para impulsionar sua presença digital e alcançar resultados extraordinários.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 text-accent hover:text-primary transition-colors duration-300"
              >
                Saiba mais →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
