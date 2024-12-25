import { motion, useScroll, useTransform } from 'framer-motion';
import pregarLogo from '../assets/pregar.jpg';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,165,114,0.08)_0%,rgba(0,0,0,0)_70%)]" 
      />
      
      <div className="container mx-auto px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <motion.img
            src={pregarLogo}
            alt="Pregar Logo"
            className="w-full h-auto max-h-[60vh]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="animate-bounce"
        >
          <svg 
            className="w-6 h-6 text-gold"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
