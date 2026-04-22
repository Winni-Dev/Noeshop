


// import React, { useState, useEffect, useCallback } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ArrowRight, Pause, Play } from 'lucide-react';
// import bracelet from '../IMAGES/bracelet.jpg';
// import pommade from '../IMAGES/pommade.webp';

// const Hero: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   // Détection mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const slides = [
//     {
//       id: 1,
//       image: bracelet,
//       title: 'Votre allié bien-être pour l\'hypertension et l\'équilibre glycémique.',
//       subtitle: 'Bracelet Noéva',
//       description: 'Un bracelet innovant qui accompagne votre quotidien et contribue à votre sérénité, sans effets secondaires.',
//       color: 'primary'
//     },
//     {
//       id: 2,
//       image: pommade,
//       title: 'Votre allié bien-être pour un confort optimal de votre corps.',
//       subtitle: 'Crème Articulations',
//       description: 'Elle assure un confort et une détente au quotidien.',
//       color: 'purple'
//     }
//   ];

//   const nextSlide = useCallback(() => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   }, [slides.length]);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     if (!autoPlay) return;
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, [autoPlay, nextSlide]);

//   return (
//     <section id="hero" className="relative min-h-screen overflow-hidden bg-black">
//       {/* Container des images - Optimisé pour GPU */}
//       <div className="absolute inset-0">
//         {slides.map((slide, index) => (
//           <div
//             key={`bg-${slide.id}`}
//             className="absolute inset-0"
//             style={{
//               opacity: currentSlide === index ? 1 : 0,
//               zIndex: currentSlide === index ? 10 : 0,
//               transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
//               willChange: 'opacity',
//               // Force l'accélération GPU
//               transform: 'translateZ(0)',
//               backfaceVisibility: 'hidden',
//               WebkitBackfaceVisibility: 'hidden',
//               // Empêche le repaint sur mobile
//               WebkitTransform: 'translate3d(0,0,0)',
//               perspective: 1000,
//             }}
//           >
//             {/* Image comme background-image optimisé */}
//             <div 
//               className="absolute inset-0"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 // Évite les animations de transform sur mobile
//                 transform: isMobile ? 'none' : `scale(${currentSlide === index ? 1 : 1.1})`,
//                 transition: isMobile ? 'none' : 'transform 10s linear',
//                 willChange: isMobile ? 'auto' : 'transform',
//               }}
//             />
            
//             {/* Overlay fixe - pas d'animation */}
//             <div 
//               className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40"
//               style={{
//                 pointerEvents: 'none'
//               }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Contenu superposé - tous montés en permanence */}
//       <div className="absolute inset-0">
//         {slides.map((slide, index) => (
//           <div
//             key={`content-${slide.id}`}
//             className="absolute inset-0"
//             style={{
//               opacity: currentSlide === index ? 1 : 0,
//               zIndex: currentSlide === index ? 20 : 0,
//               transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
//               transitionDelay: currentSlide === index ? '0.1s' : '0s',
//               pointerEvents: currentSlide === index ? 'auto' : 'none',
//               willChange: 'opacity',
//               // Force l'accélération GPU
//               transform: 'translateZ(0)',
//             }}
//           >
//             {/* Contenu principal */}
//             <div className="relative flex items-center justify-center h-screen px-4 md:px-8">
//               <div className="w-full max-w-3xl text-center">
//                 {/* Titre principal */}
//                 <div
//                   style={{
//                     opacity: currentSlide === index ? 1 : 0,
//                     transform: `translateY(${currentSlide === index ? 0 : '20px'})`,
//                     transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
//                     transitionDelay: '0.2s',
//                     willChange: 'opacity, transform',
//                   }}
//                   className="mb-4 text-lg font-medium leading-relaxed md:text-xl lg:text-2xl text-white/90 md:mb-6"
//                 >
//                   {slide.title}
//                 </div>
                
//                 {/* Sous-titre produit */}
//                 <div
//                   style={{
//                     opacity: currentSlide === index ? 1 : 0,
//                     transform: `translateY(${currentSlide === index ? 0 : '20px'})`,
//                     transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
//                     transitionDelay: '0.3s',
//                     willChange: 'opacity, transform',
//                   }}
//                   className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4"
//                 >
//                   {slide.subtitle}
//                 </div>
                
//                 {/* Description */}
//                 <div
//                   style={{
//                     opacity: currentSlide === index ? 1 : 0,
//                     transform: `translateY(${currentSlide === index ? 0 : '20px'})`,
//                     transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
//                     transitionDelay: '0.4s',
//                     willChange: 'opacity, transform',
//                   }}
//                   className="max-w-xl mx-auto mb-6 text-base md:text-lg text-white/80 md:mb-8"
//                 >
//                   {slide.description}
//                 </div>
//               </div>
//             </div>

//             {/* Bouton CTA */}
//             <div
//               style={{
//                 opacity: currentSlide === index ? 1 : 0,
//                 transform: `translateY(${currentSlide === index ? 0 : '20px'})`,
//                 transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
//                 transitionDelay: '0.5s',
//                 willChange: 'opacity, transform',
//               }}
//               className="absolute transform -translate-x-1/2 bottom-6 md:bottom-8 left-1/2"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' })}
//                 className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-medium text-white text-sm md:text-base ${
//                   slide.color === 'primary'
//                     ? 'bg-primary-600 hover:bg-primary-700'
//                     : 'bg-purple-600 hover:bg-purple-700'
//                 }`}
//                 style={{
//                   // Optimisation mobile
//                   transform: 'translateZ(0)',
//                   backfaceVisibility: 'hidden',
//                 }}
//               >
//                 Découvrir
//                 <ArrowRight className="inline ml-2 md:ml-3" size={16} />
//               </motion.button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Points indicateurs */}
//       <div className="absolute z-30 flex space-x-2 -translate-x-1/2 bottom-24 md:bottom-32 left-1/2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className="p-1 focus:outline-none"
//             aria-label={`Aller au slide ${index + 1}`}
//           >
//             <div
//               className="h-2 transition-all duration-300 bg-white rounded-full"
//               style={{
//                 width: currentSlide === index ? '24px' : '8px',
//                 opacity: currentSlide === index ? 1 : 0.5,
//                 // Optimisation GPU
//                 transform: 'translateZ(0)',
//               }}
//             />
//           </button>
//         ))}
//       </div>

//       {/* Boutons de navigation */}
//       <button
//         onClick={prevSlide}
//         className="absolute z-30 flex items-center justify-center w-10 h-10 transition-colors -translate-y-1/2 rounded-full left-2 md:left-4 top-1/2 md:w-12 md:h-12 bg-black/40 backdrop-blur-sm hover:bg-black/60"
//         aria-label="Précédent"
//         style={{
//           transform: 'translateY(-50%) translateZ(0)',
//           backfaceVisibility: 'hidden',
//         }}
//       >
//         <ChevronLeft size={24} className="text-white" />
//       </button>
      
//       <button
//         onClick={nextSlide}
//         className="absolute z-30 flex items-center justify-center w-10 h-10 transition-colors -translate-y-1/2 rounded-full right-2 md:right-4 top-1/2 md:w-12 md:h-12 bg-black/40 backdrop-blur-sm hover:bg-black/60"
//         aria-label="Suivant"
//         style={{
//           transform: 'translateY(-50%) translateZ(0)',
//           backfaceVisibility: 'hidden',
//         }}
//       >
//         <ChevronRight size={24} className="text-white" />
//       </button>

//       {/* Bouton play/pause */}
//       <div className="absolute z-30 bottom-6 md:bottom-8 right-4 md:right-8">
//         <button
//           onClick={() => setAutoPlay(!autoPlay)}
//           className="flex items-center justify-center w-10 h-10 transition-colors rounded-full md:w-12 md:h-12 bg-black/40 backdrop-blur-sm hover:bg-black/60"
//           aria-label={autoPlay ? "Mettre en pause" : "Lancer la lecture"}
//           style={{
//             transform: 'translateZ(0)',
//             backfaceVisibility: 'hidden',
//           }}
//         >
//           {autoPlay ? (
//             <Pause size={20} className="text-white" />
//           ) : (
//             <Play size={20} className="text-white" />
//           )}
//         </button>
//       </div>

//       {/* Indicateur de slide */}
//       <div className="absolute z-30 bottom-6 md:bottom-8 left-4 md:left-8">
//         <div className="text-sm text-white md:text-base">
//           <span className="font-bold">0{currentSlide + 1}</span>
//           <span className="mx-1 md:mx-2">/</span>
//           <span className="text-white/70">0{slides.length}</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Pause, Play } from 'lucide-react';
import seveDeVie from '../IMAGES/gelule.jpeg';
import slimBreathe from '../IMAGES/machine.jpeg';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = [
    {
      id: 1,
      image: seveDeVie,
      title: 'Dites adieu aux douleurs articulaires en 24h avec notre poudre naturelle',
      subtitle: 'Sève de Vie',
      description: 'Double action contre les douleurs de dos, nerfs et articulations. 0 pics glycémiques, 0 prise de poids, 100% sans gonflement. Cure de 20 gélules (1 mois) à seulement 13 000 FCFA avec livraison offerte à Abidjan.',
      color: 'primary'
    },
    {
      id: 2,
      image: slimBreathe,
      title: 'Retrouvez une silhouette affinée et une santé intime renforcée',
      subtitle: 'SlimBreathe',
      description: 'Appareil de gymnastique respiratoire hypopressive pour ventre plat et tonus du périnée. Améliore votre souffle et endurance. 14 000 FCFA avec livraison partout à Abidjan.',
      color: 'purple'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, nextSlide]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black">
      {/* Container des images - Optimisé pour GPU */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={`bg-${slide.id}`}
            className="absolute inset-0"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 10 : 0,
              transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'opacity',
              // Force l'accélération GPU
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              // Empêche le repaint sur mobile
              WebkitTransform: 'translate3d(0,0,0)',
              perspective: 1000,
            }}
          >
            {/* Image comme background-image optimisé */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // Évite les animations de transform sur mobile
                transform: isMobile ? 'none' : `scale(${currentSlide === index ? 1 : 1.1})`,
                transition: isMobile ? 'none' : 'transform 10s linear',
                willChange: isMobile ? 'auto' : 'transform',
              }}
            />
            
            {/* Overlay fixe - pas d'animation */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40"
              style={{
                pointerEvents: 'none'
              }}
            />
          </div>
        ))}
      </div>

      {/* Contenu superposé - tous montés en permanence */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={`content-${slide.id}`}
            className="absolute inset-0"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 20 : 0,
              transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: currentSlide === index ? '0.1s' : '0s',
              pointerEvents: currentSlide === index ? 'auto' : 'none',
              willChange: 'opacity',
              // Force l'accélération GPU
              transform: 'translateZ(0)',
            }}
          >
            {/* Contenu principal */}
            <div className="relative flex items-center justify-center h-screen px-4 md:px-8">
              <div className="w-full max-w-3xl text-center">
                {/* Titre principal */}
                <div
                  style={{
                    opacity: currentSlide === index ? 1 : 0,
                    transform: `translateY(${currentSlide === index ? 0 : '20px'})`,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: '0.2s',
                    willChange: 'opacity, transform',
                  }}
                  className="mb-4 text-lg font-medium leading-relaxed md:text-xl lg:text-2xl text-white/90 md:mb-6"
                >
                  {slide.title}
                </div>
                
                {/* Sous-titre produit */}
                <div
                  style={{
                    opacity: currentSlide === index ? 1 : 0,
                    transform: `translateY(${currentSlide === index ? 0 : '20px'})`,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: '0.3s',
                    willChange: 'opacity, transform',
                  }}
                  className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4"
                >
                  {slide.subtitle}
                </div>
                
                {/* Description */}
                <div
                  style={{
                    opacity: currentSlide === index ? 1 : 0,
                    transform: `translateY(${currentSlide === index ? 0 : '20px'})`,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: '0.4s',
                    willChange: 'opacity, transform',
                  }}
                  className="max-w-xl mx-auto mb-6 text-base md:text-lg text-white/80 md:mb-8"
                >
                  {slide.description}
                </div>
              </div>
            </div>

            {/* Bouton CTA */}
            <div
              style={{
                opacity: currentSlide === index ? 1 : 0,
                transform: `translateY(${currentSlide === index ? 0 : '20px'})`,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '0.5s',
                willChange: 'opacity, transform',
              }}
              className="absolute transform -translate-x-1/2 bottom-6 md:bottom-8 left-1/2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-medium text-white text-sm md:text-base ${
                  slide.color === 'primary'
                    ? 'bg-primary-600 hover:bg-primary-700'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
                style={{
                  // Optimisation mobile
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              >
                Découvrir
                <ArrowRight className="inline ml-2 md:ml-3" size={16} />
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      {/* Points indicateurs */}
      <div className="absolute z-30 flex space-x-2 -translate-x-1/2 bottom-24 md:bottom-32 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="p-1 focus:outline-none"
            aria-label={`Aller au slide ${index + 1}`}
          >
            <div
              className="h-2 transition-all duration-300 bg-white rounded-full"
              style={{
                width: currentSlide === index ? '24px' : '8px',
                opacity: currentSlide === index ? 1 : 0.5,
                // Optimisation GPU
                transform: 'translateZ(0)',
              }}
            />
          </button>
        ))}
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className="absolute z-30 flex items-center justify-center w-10 h-10 transition-colors -translate-y-1/2 rounded-full left-2 md:left-4 top-1/2 md:w-12 md:h-12 bg-black/40 backdrop-blur-sm hover:bg-black/60"
        aria-label="Précédent"
        style={{
          transform: 'translateY(-50%) translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute z-30 flex items-center justify-center w-10 h-10 transition-colors -translate-y-1/2 rounded-full right-2 md:right-4 top-1/2 md:w-12 md:h-12 bg-black/40 backdrop-blur-sm hover:bg-black/60"
        aria-label="Suivant"
        style={{
          transform: 'translateY(-50%) translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Bouton play/pause */}
      <div className="absolute z-30 bottom-6 md:bottom-8 right-4 md:right-8">
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="flex items-center justify-center w-10 h-10 transition-colors rounded-full md:w-12 md:h-12 bg-black/40 backdrop-blur-sm hover:bg-black/60"
          aria-label={autoPlay ? "Mettre en pause" : "Lancer la lecture"}
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        >
          {autoPlay ? (
            <Pause size={20} className="text-white" />
          ) : (
            <Play size={20} className="text-white" />
          )}
        </button>
      </div>

      {/* Indicateur de slide */}
      <div className="absolute z-30 bottom-6 md:bottom-8 left-4 md:left-8">
        <div className="text-sm text-white md:text-base">
          <span className="font-bold">0{currentSlide + 1}</span>
          <span className="mx-1 md:mx-2">/</span>
          <span className="text-white/70">0{slides.length}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;