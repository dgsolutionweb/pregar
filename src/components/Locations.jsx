import { motion } from 'framer-motion';
import tripImg from '../assets/trip.png';
import baixaImg from '../assets/baixa.jpg';
import fozImg from '../assets/foz.jpg';

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

const Locations = () => {
  return (
    <section className="py-20 relative">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(197,165,114,0.03) 0%, rgba(0,0,0,0) 70%)',
        }}
      />
      
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-gold/10 p-6 sm:p-8"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover opacity-20 transform scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-cormorant font-semibold text-gold mb-4">
                    {location.name}
                  </h3>
                  <p className="text-gray-300 mb-2 text-sm sm:text-base">
                    {location.address}
                  </p>
                  <a
                    href={`tel:${location.phone}`}
                    className="text-gold hover:text-gold-light transition-colors duration-300 text-sm sm:text-base"
                  >
                    {location.phone}
                  </a>

                  <div className="mt-6">
                    <h4 className="text-lg sm:text-xl font-cormorant text-gold mb-3">Horário de Funcionamento</h4>
                    <div className="space-y-1.5">
                      {Object.entries(location.schedule).map(([day, hours]) => (
                        <div
                          key={day}
                          className="flex justify-between items-center group hover:bg-gold/5 rounded px-2 py-1 transition-colors duration-200"
                        >
                          <span className="text-gray-400 capitalize text-sm sm:text-base">{day}</span>
                          <span className="text-gold group-hover:text-gold-light text-sm sm:text-base">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
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
                    <img src={tripImg} alt="TripAdvisor" className="w-6 h-6 sm:w-7 sm:h-7" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
