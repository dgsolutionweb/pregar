import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import baixaImg from '../assets/baixa.jpg';
import fozImg from '../assets/foz.jpg';
import tripIcon from '../assets/trip.png';

const locations = [
  {
    name: 'BAIXA',
    address: 'Largo São Domingos 96, 4050-255 Porto',
    phone: '22 203 4153',
    tripAdvisorLink: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d10760035-Reviews-Pregar-Porto_Porto_District_Northern_Portugal.html',
    instagramLink: 'https://www.instagram.com/pregar.baixa/',
    schedule: {
      'segunda-feira': '12:00-23:00',
      'terça-feira': '12:00-23:00',
      'quarta-feira': '12:00-23:00',
      'quinta-feira': '12:00-23:00',
      'sexta-feira': '12:00-00:00',
      'sábado': '12:00-00:00',
      'domingo': '12:00-23:00'
    },
    image: baixaImg
  },
  {
    name: 'FOZ',
    address: 'R. do Passeio Alegre 932, 4150-574 Porto',
    phone: '22 618 9028',
    tripAdvisorLink: 'https://www.tripadvisor.com/Restaurant_Review-g189180-d28003190-Reviews-Pregar_Foz-Porto_Porto_District_Northern_Portugal.html',
    instagramLink: 'https://www.instagram.com/pregar.foz/',
    schedule: {
      'segunda-feira': '12:30-23:00',
      'terça-feira': 'Encerrado',
      'quarta-feira': '12:30-23:00',
      'quinta-feira': '12:30-23:00',
      'sexta-feira': '12:30-00:00',
      'sábado': '12:30-00:00',
      'domingo': '12:30-23:00'
    },
    image: fozImg
  }
];

const LocationCard = ({ location, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="location-card group bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gold/10"
    >
      <div className="relative overflow-hidden rounded-lg mb-8 group">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-[300px] md:h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 
                     group-hover:opacity-40 transition-opacity duration-500"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="relative z-10"
      >
        <h3 className="text-5xl font-cormorant mb-4 gold-gradient-text">{location.name}</h3>
        <p className="text-gray-400 mb-2 text-lg font-light hover:text-gray-300 transition-colors duration-300">
          {location.address}
        </p>
        <a 
          href={`tel:${location.phone.replace(/\s/g, '')}`}
          className="text-gold mb-8 text-xl block hover:text-gold-light transition-colors duration-300 transform hover:translate-x-2 transition-transform"
        >
          Telefone: {location.phone}
        </a>
        
        <h4 className="text-2xl text-gold-light mb-6 font-display tracking-wider">HORÁRIO</h4>
        <div className="space-y-3">
          {Object.entries(location.schedule).map(([day, hours]) => (
            <motion.div
              key={day}
              className="schedule-item group/item"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="font-light group-hover/item:text-gold-light transition-colors duration-300">{day}</span>
              <span className="font-medium group-hover/item:text-gold transition-colors duration-300">{hours}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <motion.a
            href={location.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </motion.a>
          <motion.a
            href={location.tripAdvisorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={tripIcon} 
              alt="TripAdvisor"
              className="w-7 h-7 object-contain"
            />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Locations = () => {
  return (
    <section id="locations" className="section bg-black relative overflow-hidden py-20">
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,165,114,0.08)_0%,rgba(0,0,0,0)_70%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="container relative mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {locations.map((location, index) => (
            <LocationCard key={location.name} location={location} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
