


// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Moon, 
//   Zap, 
//   Droplets, 
//   Activity, 
//   Leaf,
//   Sparkles,
//   Play,
//   CheckCircle,
//   ArrowRight,
//   TrendingUp,
//   Flame,
//   Thermometer,
//   Droplet,
//   Flower2,
//   ChevronLeft,
//   ChevronRight,
//   Bone,
//   HeartPulse
// } from 'lucide-react';
// import pommadeImage from '../IMAGES/CrmePNG.png';
// import video from '../IMAGES/Prsentationdubracelet.mp4';
// import mainVideo from '../IMAGES/main.mp4';

// const About: React.FC = () => {
//   const [, setShowVideo] = useState(false);
//   const [stats, setStats] = useState({
//     users: 0,
//     improvement: 0,
//     countries: 0,
//     support: 0
//   });
  
//   const [isStatsInView, setIsStatsInView] = useState(false);
//   const benefitsScrollRef = useRef<HTMLDivElement>(null);
//   const mechanismScrollRef = useRef<HTMLDivElement>(null);
//   const statsRef = useRef<HTMLDivElement>(null);

//   const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
//     if (ref.current) {
//       ref.current.scrollBy({ left: -300, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
//     if (ref.current) {
//       ref.current.scrollBy({ left: 300, behavior: 'smooth' });
//     }
//   };

//   // Animation des statistiques
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsStatsInView(true);
          
//           // Animation des chiffres
//           const duration = 2000; // 2 secondes
//           const steps = 100;
//           const incrementUsers = 2500 / steps;
//           const incrementImprovement = 94 / steps;
//           const incrementCountries = 30 / steps;
          
//           let currentStep = 0;
          
//           const timer = setInterval(() => {
//             currentStep++;
            
//             setStats({
//               users: Math.min(2500, Math.floor(incrementUsers * currentStep)),
//               improvement: Math.min(94, Math.floor(incrementImprovement * currentStep)),
//               countries: Math.min(30, Math.floor(incrementCountries * currentStep)),
//               support: 24
//             });
            
//             if (currentStep >= steps) {
//               clearInterval(timer);
//               // S'assurer que les valeurs finales sont exactes
//               setStats({
//                 users: 2500,
//                 improvement: 94,
//                 countries: 30,
//                 support: 24
//               });
//             }
//           }, duration / steps);
          
//           return () => observer.disconnect();
//         }
//       },
//       { threshold: 0.5 }
//     );
    
//     if (statsRef.current) {
//       observer.observe(statsRef.current);
//     }
    
//     return () => observer.disconnect();
//   }, []);

//   const benefitCards = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
//       title: 'Stabilise naturellement',
//       description: 'Aide à stabiliser la tension et la glycémie de façon naturelle.',
//       features: ['Tension équilibrée', 'Glycémie stable', 'Effet naturel'],
//       icon: <Droplets className="text-blue-500" size={20} />,
//       color: 'border-l-blue-500',
//       stats: '94% des utilisateurs'
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
//       title: 'Favorise la détente',
//       description: 'Apporte confort et relaxation au quotidien.',
//       features: ['Stress réduit', 'Sommeil amélioré', 'Détente profonde'],
//       icon: <Moon className="text-indigo-500" size={20} />,
//       color: 'border-l-indigo-500',
//       stats: '87% de relaxation'
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&auto=format&fit=crop&q=80",
//       title: 'Améliore la vitalité',
//       description: 'Contribue à une meilleure énergie et gestion du stress.',
//       features: ['Énergie accrue', 'Vitalité durable', 'Performance optimale'],
//       icon: <Zap className="text-yellow-500" size={20} />,
//       color: 'border-l-yellow-500',
//       stats: '92% plus d\'énergie'
//     }
//   ];

//   // Card avec vidéo en premier
//   const videoCard = {
//     id: 4,
//     title: 'Élégant & pratique',
//     description: 'Design raffiné adapté à tous les styles de vie.',
//     features: ['Design moderne', 'Pratique quotidien', 'Discret & élégant'],
//     icon: <Sparkles className="text-purple-500" size={20} />,
//     color: 'border-l-purple-500',
//     stats: '96% de satisfaction'
//   };

//   const mechanismCards = [
//     {
//       title: 'Amélioration circulatoire',
//       description: 'Favorise une meilleure circulation sanguine.',
//       icon: '💓',
//       details: ['Circulation optimisée', 'Oxygénation tissulaire']
//     },
//     {
//       title: 'Régulation métabolique',
//       description: 'Accompagne l\'équilibre glycémique naturel.',
//       icon: '⚖️',
//       details: ['Équilibre glycémique', 'Métabolisme actif']
//     },
//     {
//       title: 'Détente & vitalité',
//       description: 'Réduit la fatigue et apporte confort.',
//       icon: '😌',
//       details: ['Fatigue réduite', 'Récupération améliorée']
//     },
//     {
//       title: 'Harmonie énergétique',
//       description: 'Réduit le stress et améliore la qualité de vie.',
//       icon: '✨',
//       details: ['Stress diminué', 'Équilibre émotionnel']
//     }
//   ];

//   const creamFeatures = [
//     {
//       icon: <Flame className="text-red-500" size={20} />,
//       title: 'Effet chauffant',
//       description: 'Augmente la température locale et la circulation sanguine'
//     },
//     {
//       icon: <Thermometer className="text-blue-500" size={20} />,
//       title: 'Anti-inflammatoire',
//       description: 'Aide à bloquer les cytokines pro-inflammatoires'
//     },
//     {
//       icon: <Droplet className="text-green-500" size={20} />,
//       title: 'Soulagement rapide',
//       description: 'Réduit l\'ankylose et améliore la mobilité'
//     },
//     {
//       icon: <Flower2 className="text-purple-500" size={20} />,
//       title: 'Soins anti-âge',
//       description: 'Effets liftants et raffermissants pour la peau'
//     }
//   ];

//   const creamIngredients = [
//     // {
//     //   name: 'Venin d\'abeille',
//     //   benefit: 'Effet chauffant naturel',
//     //   color: 'from-yellow-50 to-yellow-100',
//     //   icon: <ThermometerSun className="text-yellow-600" size={16} />
//     // },
//     {
//       name: 'Arnica',
//       benefit: 'Détente après effort',
//       color: 'from-green-50 to-green-100',
//       icon: <Leaf className="text-green-600" size={16} />
//     },
//     {
//       name: 'Glucosamine',
//       benefit: 'Confort articulaire',
//       color: 'from-blue-50 to-blue-100',
//       icon: <Bone className="text-blue-600" size={16} />
//     },
//     {
//       name: 'Vitamine K2',
//       benefit: 'Peau souple et nourrie',
//       color: 'from-purple-50 to-purple-100',
//       icon: <HeartPulse className="text-purple-600" size={16} />
//     }
//   ];

//   return (
//     <section id="apropos" className="py-12 md:py-20 bg-gradient-to-b from-white to-beige-50">
//       <div className="container px-4 mx-auto">
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center md:mb-16"
//         >
//           <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-primary-50 rounded-full mb-4 md:mb-6">
//             <Leaf className="mr-2 text-primary-600" size={16} />
//             <span className="text-sm font-medium text-primary-700 md:text-base">Naturel & Équilibré</span>
//           </div>
//           <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl md:mb-6">
//             Découvrez <span className="text-primary-600">Noéva™</span>
//           </h1>
//           <p className="max-w-3xl px-2 mx-auto text-lg text-gray-600 md:text-xl">
//             Votre allié naturel pour retrouver équilibre, vitalité et sérénité au quotidien
//           </p>
//         </motion.div>

//         {/* Benefits Cards avec défilement horizontal sur mobile - VIDÉO EN PREMIER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 md:mb-20"
//         >
//           <div className="mb-8 text-center md:mb-12">
//             <div className="inline-flex items-center px-3 py-1.5 bg-primary-50 rounded-full mb-3 md:mb-4">
//               <Sparkles className="mr-2 text-primary-600" size={16} />
//               <span className="text-sm font-medium text-primary-700">Bienfaits Principaux</span>
//             </div>
//             <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl md:mb-4">
//               Transformez votre quotidien avec Noéva™
//             </h2>
//             <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
//               4 piliers fondamentaux pour votre bien-être global
//             </p>
//           </div>

//           {/* Contrôles de défilement mobile */}
//           <div className="relative">
//             <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
//               {/* Carte vidéo en premier */}
//               <motion.div
//                 key={videoCard.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//                 className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl"
//               >
//                 <div className="relative h-40 overflow-hidden md:h-48">
//                   {/* Vidéo au lieu d'image */}
//                   <video
//                     src={mainVideo}
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     className="object-cover w-full h-full"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
//                   <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
//                     {videoCard.icon}
//                   </div>
                  
//                   <div className="absolute flex items-center justify-center w-8 h-8 rounded-full shadow-sm top-3 right-3 bg-white/90 backdrop-blur-sm">
//                     <span className="text-sm font-bold text-gray-900">01</span>
//                   </div>
//                 </div>
                
//                 <div className="p-4 md:p-6">
//                   <div className={`border-l-4 ${videoCard.color} pl-3 mb-3`}>
//                     <h3 className="text-base font-bold text-gray-900 md:text-lg">
//                       {videoCard.title}
//                     </h3>
//                   </div>
                  
//                   <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
//                     {videoCard.description}
//                   </p>
                  
//                   <div className="mb-4 space-y-2">
//                     {videoCard.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center text-xs md:text-sm">
//                         <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
//                         <span className="text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="pt-3 border-t border-gray-100">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs text-gray-500">Résultat moyen</span>
//                       <span className="text-sm font-bold text-primary-600">{videoCard.stats}</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Les 3 autres cartes */}
//               {benefitCards.map((card, index) => (
//                 <motion.div
//                   key={card.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: (index + 1) * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl"
//                 >
//                   <div className="relative h-40 overflow-hidden md:h-48">
//                     <img
//                       src={card.image}
//                       alt={card.title}
//                       className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
//                     <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
//                       {card.icon}
//                     </div>
                    
//                     <div className="absolute flex items-center justify-center w-8 h-8 rounded-full shadow-sm top-3 right-3 bg-white/90 backdrop-blur-sm">
//                       <span className="text-sm font-bold text-gray-900">0{card.id + 1}</span>
//                     </div>
//                   </div>
                  
//                   <div className="p-4 md:p-6">
//                     <div className={`border-l-4 ${card.color} pl-3 mb-3`}>
//                       <h3 className="text-base font-bold text-gray-900 md:text-lg">
//                         {card.title}
//                       </h3>
//                     </div>
                    
//                     <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
//                       {card.description}
//                     </p>
                    
//                     <div className="mb-4 space-y-2">
//                       {card.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-center text-xs md:text-sm">
//                           <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
//                           <span className="text-gray-700">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="pt-3 border-t border-gray-100">
//                       <div className="flex items-center justify-between">
//                         <span className="text-xs text-gray-500">Résultat moyen</span>
//                         <span className="text-sm font-bold text-primary-600">{card.stats}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Version mobile avec défilement horizontal */}
//             <div className="relative md:hidden">
//               <button
//                 onClick={() => scrollLeft(benefitsScrollRef)}
//                 className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg left-2 top-1/2 bg-white/90 backdrop-blur-sm"
//               >
//                 <ChevronLeft size={20} className="text-gray-700" />
//               </button>
              
//               <div 
//                 ref={benefitsScrollRef}
//                 className="flex pb-4 pl-2 pr-2 space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//               >
//                 {/* Carte vidéo en premier sur mobile aussi */}
//                 <div className="flex-shrink-0 w-80 snap-center">
//                   <div className="h-full overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl">
//                     <div className="relative h-48 overflow-hidden">
//                       <video
//                         src={mainVideo}
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="object-cover w-full h-full"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      
//                       <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
//                         {videoCard.icon}
//                       </div>
//                     </div>
                    
//                     <div className="p-4">
//                       <div className={`border-l-4 ${videoCard.color} pl-3 mb-3`}>
//                         <h3 className="text-lg font-bold text-gray-900">
//                           {videoCard.title}
//                         </h3>
//                       </div>
                      
//                       <p className="mb-4 text-sm leading-relaxed text-gray-600">
//                         {videoCard.description}
//                       </p>
                      
//                       <div className="mb-4 space-y-2">
//                         {videoCard.features.slice(0, 2).map((feature, idx) => (
//                           <div key={idx} className="flex items-center text-sm">
//                             <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
//                             <span className="text-gray-700">{feature}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {benefitCards.map((card) => (
//                   <div
//                     key={card.id}
//                     className="flex-shrink-0 w-80 snap-center"
//                   >
//                     <div className="h-full overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl">
//                       <div className="relative h-48 overflow-hidden">
//                         <img
//                           src={card.image}
//                           alt={card.title}
//                           className="object-cover w-full h-full"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        
//                         <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
//                           {card.icon}
//                         </div>
//                       </div>
                      
//                       <div className="p-4">
//                         <div className={`border-l-4 ${card.color} pl-3 mb-3`}>
//                           <h3 className="text-lg font-bold text-gray-900">
//                             {card.title}
//                           </h3>
//                         </div>
                        
//                         <p className="mb-4 text-sm leading-relaxed text-gray-600">
//                           {card.description}
//                         </p>
                        
//                         <div className="mb-4 space-y-2">
//                           {card.features.slice(0, 2).map((feature, idx) => (
//                             <div key={idx} className="flex items-center text-sm">
//                               <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
//                               <span className="text-gray-700">{feature}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <button
//                 onClick={() => scrollRight(benefitsScrollRef)}
//                 className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg right-2 top-1/2 bg-white/90 backdrop-blur-sm"
//               >
//                 <ChevronRight size={20} className="text-gray-700" />
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Video Section - Version simplifiée */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 md:mb-20"
//         >
//           <div className="p-6 bg-gradient-to-r from-primary-50 to-beige-50 rounded-2xl md:rounded-3xl md:p-8 lg:p-12">
//             <div className="grid items-center gap-8 lg:grid-cols-2 md:gap-12">
//               <div>
//                 <div className="inline-flex items-center px-3 py-1.5 bg-white rounded-full mb-4 md:mb-6 shadow-sm">
//                   <Play className="mr-2 text-primary-600" size={16} />
//                   <span className="text-sm font-medium text-primary-700">Vidéo Explicative</span>
//                 </div>
//                 <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:mb-6">
//                   Comment agit le bracelet Noéva™ ?
//                 </h2>
                
//                 <div className="space-y-3 md:space-y-4">
//                   {[
//                     'Améliore la circulation sanguine',
//                     'Soutient la régulation métabolique',
//                     'Favorise la détente et réduit la fatigue',
//                     'Contribue à l\'harmonie énergétique'
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-start">
//                       <CheckCircle className="text-green-500 mt-0.5 md:mt-1 mr-3 flex-shrink-0" size={18} />
//                       <span className="text-sm text-gray-700 md:text-base">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="overflow-hidden border-4 border-white shadow-xl aspect-video rounded-xl md:rounded-2xl md:shadow-2xl">
//                   <video
//                     src={video}
//                     controls
//                     autoPlay
//                     muted
//                     playsInline
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
                
//                 <div className="absolute hidden p-4 bg-white border border-gray-100 shadow-lg -bottom-4 -right-4 rounded-xl md:rounded-2xl lg:block">
//                   <div className="flex items-center text-xl font-bold md:text-2xl text-primary-600">
//                     <TrendingUp className="mr-2" size={16} />
//                     98%
//                   </div>
//                   <div className="text-xs text-gray-600 md:text-sm">de satisfaction</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Section Crème Noéva */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 md:mb-20"
//         >
//           <div className="overflow-hidden shadow-xl bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl md:rounded-3xl">
//             {/* En-tête section */}
//             <div className="p-6 md:p-8 lg:p-12">
//               <div className="mb-8 text-center md:mb-12">
//                 <div className="inline-flex items-center px-3 py-1.5 bg-white/80 rounded-full mb-3 md:mb-4">
//                   <Droplet className="mr-2 text-indigo-600" size={16} />
//                   <span className="text-sm font-medium text-indigo-700">Notre gamme complète</span>
//                 </div>
//                 <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl md:mb-4">
//                   Crème Noéva™ : Votre allié bien-être pour un confort optimal
//                 </h2>
//                 <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
//                   Elle assure un confort et une détente au quotidien
//                 </p>
//               </div>

//               <div className="grid gap-8 mb-8 lg:grid-cols-2 md:gap-12 md:mb-12">
//                 {/* Colonne gauche - Image et description */}
//                 <div className="order-2 lg:order-1">
//                   {/* Image de la pommade avec effet */}
//                   <div className="relative mb-6 md:mb-8">
//                     <div className="p-6 shadow-lg bg-gradient-to-br from-white to-indigo-50 rounded-xl md:rounded-2xl md:p-8">
//                       <div className="relative w-full h-64 overflow-hidden rounded-lg md:h-72 md:rounded-xl">
//                         <img
//                           src={pommadeImage}
//                           alt="Crème Noéva™ pour articulations"
//                           className="object-contain w-full h-full transition-transform duration-500 transform hover:scale-105"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-indigo-50/30 to-transparent" />
//                       </div>
                      
//                       {/* Badge produit */}
//                       <div className="absolute top-4 right-4">
//                         <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
//                           CRÈME ARTICULATIONS
//                         </div>
//                       </div>
                      
//                       {/* Étiquette texture */}
//                       <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
//                         <div className="text-xs font-medium text-gray-700">Texture légère • Pénétration rapide</div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
//                     Présentation de la crème Noéva™
//                   </h3>
//                   <p className="mb-4 text-sm leading-relaxed text-gray-700 md:mb-6 md:text-base">
//                     La crème Noéva™ est un produit cosmétique et thérapeutique utilisé pour ses propriétés 
//                     anti-inflammatoires et raffermissantes, ciblant les douleurs articulaires et musculaires 
//                     (arthrose, tendinite) grâce à sa formule, et offrant des effets anti-âge pour la peau 
//                     (rides, éclat).
//                   </p>
//                   <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base">
//                     La crème s'applique par massage sur les zones concernées et pénètre rapidement en apportant 
//                     un confort. Sa texture est légère, non collante et pénètre rapidement.
//                   </p>
//                 </div>
                
//                 {/* Colonne droite - Composition et fonctionnement */}
//                 <div className="order-1 lg:order-2">
//                   {/* Composition */}
//                   <div className="mb-8 md:mb-12">
//                     <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
//                       Composition naturelle
//                     </h3>
//                     <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-2 md:gap-4">
//                       {creamIngredients.map((ingredient, index) => (
//                         <div
//                           key={index}
//                           className={`bg-gradient-to-br ${ingredient.color} rounded-lg md:rounded-xl p-4 md:p-5 border border-white/50`}
//                         >
//                           <div className="flex items-center mb-2">
//                             <div className="flex items-center justify-center w-8 h-8 mr-3 bg-white rounded-lg shadow-sm">
//                               {ingredient.icon}
//                             </div>
//                             <div className="text-sm font-bold text-gray-900 md:text-base">
//                               {ingredient.name}
//                             </div>
//                           </div>
//                           <div className="text-xs text-gray-600 md:text-sm pl-11">
//                             {ingredient.benefit}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Fonctionnement */}
//                   <div>
//                     <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
//                       Comment agit la crème Noéva™ ?
//                     </h3>
//                     <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base">
//                       La crème Noéva™ utilise des principes de stimulation naturelle qui favorisent 
//                       une sensation immédiate d'apaisement.
//                     </p>
                    
//                     <div className="grid grid-cols-2 gap-4 md:gap-6">
//                       {creamFeatures.map((feature, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, y: 20 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: index * 0.1 }}
//                           whileHover={{ y: -3 }}
//                           className="p-4 transition-all bg-white border border-gray-100 rounded-lg shadow-sm md:rounded-xl hover:shadow-md"
//                         >
//                           <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50">
//                             {feature.icon}
//                           </div>
//                           <h4 className="mb-1 text-sm font-bold text-gray-900 md:text-base">
//                             {feature.title}
//                           </h4>
//                           <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
//                             {feature.description}
//                           </p>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Bénéfices clés */}
//               <div className="p-6 border border-white shadow-sm bg-white/80 rounded-xl md:rounded-2xl md:p-8">
//                 <h4 className="mb-4 text-lg font-bold text-center text-gray-900 md:text-xl md:mb-6">
//                   Bénéfices principaux de la crème Noéva™
//                 </h4>
//                 <div className="grid gap-4 md:grid-cols-3 md:gap-6">
//                   {[
//                     'Cible arthrose et tendinite',
//                     'Effets anti-âge pour la peau',
//                     'Application par massage rapide',
//                     'Soulagement des douleurs articulaires',
//                     'Améliore l\'éclat de la peau',
//                     'Texture non collante et pénétrante'
//                   ].map((benefit, index) => (
//                     <div key={index} className="flex items-start">
//                       <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
//                       <span className="text-sm text-gray-700 md:text-base">{benefit}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Mechanism Section avec défilement horizontal sur mobile */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 md:mb-20"
//         >
//           <div className="mb-8 text-center md:mb-12">
//             <div className="inline-flex items-center px-3 py-1.5 bg-green-50 rounded-full mb-3 md:mb-4">
//               <Activity className="mr-2 text-green-600" size={16} />
//               <span className="text-sm font-medium text-green-700">Mécanisme d'Action</span>
//             </div>
//             <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl md:mb-4">
//               Comment Noéva™ agit sur votre organisme
//             </h2>
//             <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
//               Un soutien naturel pour retrouver un équilibre durable
//             </p>
//           </div>

//           <div className="relative">
//             <div className="hidden max-w-6xl gap-6 mx-auto md:grid md:grid-cols-2">
//               {mechanismCards.map((card, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl"
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="flex-shrink-0 text-3xl md:text-4xl">{card.icon}</div>
//                     <div className="flex-1">
//                       <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl md:mb-3">
//                         {card.title}
//                       </h3>
//                       <p className="mb-3 text-sm leading-relaxed text-gray-600 md:mb-4 md:text-base">
//                         {card.description}
//                       </p>
//                       <div className="flex flex-wrap gap-2">
//                         {card.details.map((detail, idx) => (
//                           <span
//                             key={idx}
//                             className="px-2 py-1 text-xs text-gray-700 border border-gray-200 rounded-lg bg-gray-50 md:text-sm"
//                           >
//                             {detail}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Version mobile avec défilement horizontal */}
//             <div className="relative md:hidden">
//               <button
//                 onClick={() => scrollLeft(mechanismScrollRef)}
//                 className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg left-2 top-1/2 bg-white/90 backdrop-blur-sm"
//               >
//                 <ChevronLeft size={20} className="text-gray-700" />
//               </button>
              
//               <div 
//                 ref={mechanismScrollRef}
//                 className="flex pb-4 pl-2 pr-2 space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//               >
//                 {mechanismCards.map((card, index) => (
//                   <div
//                     key={index}
//                     className="flex-shrink-0 w-80 snap-center"
//                   >
//                     <div className="h-full p-6 bg-white border border-gray-100 shadow-lg rounded-xl">
//                       <div className="mb-4 text-4xl">{card.icon}</div>
//                       <h3 className="mb-3 text-xl font-bold text-gray-900">
//                         {card.title}
//                       </h3>
//                       <p className="mb-4 leading-relaxed text-gray-600">
//                         {card.description}
//                       </p>
//                       <div className="space-y-2">
//                         {card.details.map((detail, idx) => (
//                           <div key={idx} className="flex items-center">
//                             <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
//                             <span className="text-sm text-gray-700">{detail}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <button
//                 onClick={() => scrollRight(mechanismScrollRef)}
//                 className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg right-2 top-1/2 bg-white/90 backdrop-blur-sm"
//               >
//                 <ChevronRight size={20} className="text-gray-700" />
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Stats section avec animation */}
//         <motion.div
//           ref={statsRef}
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="mb-12 md:mb-20"
//         >
//           <div className="p-6 text-white shadow-xl bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl md:rounded-3xl md:p-8">
//             <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8">
//               {[
//                 { 
//                   number: isStatsInView ? `${stats.users.toLocaleString()}+` : '0+', 
//                   label: 'Utilisateurs satisfaits' 
//                 },
//                 { 
//                   number: isStatsInView ? `${stats.improvement}%` : '0%', 
//                   label: 'Amélioration bien-être' 
//                 },
//                 { 
//                   number: isStatsInView ? `${stats.countries}+` : '0+', 
//                   label: 'Pays de livraison' 
//                 },
//                 { 
//                   number: '24/7', 
//                   label: 'Support disponible' 
//                 }
//               ].map((stat, index) => (
//                 <div key={index}>
//                   <div className="mb-1 text-2xl font-bold md:text-3xl lg:text-4xl md:mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-xs text-white/90 md:text-sm">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <div className="p-6 bg-white border border-gray-200 shadow-lg rounded-2xl md:rounded-3xl md:p-8">
//             <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:mb-6">
//               Prêt à retrouver votre équilibre ?
//             </h2>
//             <p className="max-w-2xl mx-auto mb-6 text-sm text-gray-600 md:mb-8 md:text-base">
//               Rejoignez les milliers de personnes qui ont déjà choisi Noéva™
//             </p>
            
//             <div className="flex flex-col justify-center gap-3 sm:flex-row md:gap-4">
//               <button
//                 onClick={() => {
//                   const productsSection = document.getElementById('produits');
//                   if (productsSection) {
//                     const headerHeight = 80;
//                     const elementPosition = productsSection.getBoundingClientRect().top;
//                     const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    
//                     window.scrollTo({
//                       top: offsetPosition,
//                       behavior: 'smooth'
//                     });
//                   }
//                 }}
//                 className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-primary-600 md:px-8 hover:bg-primary-700 hover:shadow-xl md:text-base"
//               >
//                 <span>Découvrir les produits</span>
//                 <ArrowRight className="ml-2" size={18} />
//               </button>
              
//               <button
//                 onClick={() => setShowVideo(true)}
//                 className="flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 border-2 rounded-full border-primary-600 text-primary-600 md:px-8 hover:bg-primary-50 md:text-base"
//               >
//                 <Play className="mr-2" size={18} />
//                 <span>Voir la vidéo</span>
//               </button>
//             </div>
            
//             <p className="mt-6 text-xs text-gray-500 md:text-sm md:mt-8">
//               Livraison gratuite • Garantie 30 jours • Support 7j/7
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // CSS inline pour éviter les problèmes de SSR
// const styles = `
//   .scrollbar-hide {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }
  
//   .scrollbar-hide::-webkit-scrollbar {
//     display: none;
//   }
  
//   .snap-x {
//     scroll-snap-type: x mandatory;
//   }
  
//   .snap-center {
//     scroll-snap-align: center;
//   }
  
//   .snap-mandatory {
//     scroll-snap-stop: always;
//   }
// `;

// // Ajoute le style si on est côté client
// if (typeof window !== 'undefined') {
//   const styleSheet = document.createElement('style');
//   styleSheet.textContent = styles;
//   document.head.appendChild(styleSheet);
// }

// export default About;


import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Moon,
  Zap,
  Leaf,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Bone,
  Heart,
  HeartPulse,
  Shield,
  Gauge,
  Timer,
  Wind,
  Baby,
  Activity,
  Droplets,
  ArrowRight
} from 'lucide-react';
import seveDeVieImage from '../IMAGES/gelule.jpeg';
import slimBreatheImage from '../IMAGES/machine.jpeg';
import mainVideo from '../IMAGES/ventrevideo.mp4';

const About: React.FC = () => {
  const [stats, setStats] = useState({
    users: 0,
    improvement: 0,
    countries: 0,
    support: 0
  });
  
  const [isStatsInView, setIsStatsInView] = useState(false);
  const benefitsScrollRef = useRef<HTMLDivElement>(null);
  const mechanismScrollRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Animation des statistiques
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsStatsInView(true);
          
          const duration = 2000;
          const steps = 100;
          const incrementUsers = 12500 / steps;
          const incrementImprovement = 97 / steps;
          const incrementCountries = 30 / steps;
          
          let currentStep = 0;
          
          const timer = setInterval(() => {
            currentStep++;
            
            setStats({
              users: Math.min(12500, Math.floor(incrementUsers * currentStep)),
              improvement: Math.min(97, Math.floor(incrementImprovement * currentStep)),
              countries: Math.min(30, Math.floor(incrementCountries * currentStep)),
              support: 24
            });
            
            if (currentStep >= steps) {
              clearInterval(timer);
              setStats({
                users: 12500,
                improvement: 97,
                countries: 30,
                support: 24
              });
            }
          }, duration / steps);
          
          return () => observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Cartes pour la section "Bienfaits" - Produit Sève de Vie
  const benefitCards = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/7298677/pexels-photo-7298677.jpeg",
      title: 'Double Action Anti-Douleur',
      description: 'Soulage les douleurs de dos, de nerfs et d\'articulations en seulement 24h.',
      features: ['Soulagement rapide', 'Action profonde', 'Douleurs atténuées'],
      icon: <Bone className="text-blue-500" size={20} />,
      color: 'border-l-blue-500',
      stats: 'Soulagement en 24h'
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/8965128/pexels-photo-8965128.jpeg",
      title: '0 Pics Glycémiques',
      description: 'Un dosage contrôlé qui permet d\'éviter les pics de glycémie indésirables.',
      features: ['Glycémie stable', 'Dosage maîtrisé', 'Sécurité optimale'],
      icon: <Gauge className="text-green-500" size={20} />,
      color: 'border-l-green-500',
      stats: 'Glycémie contrôlée'
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/3769002/pexels-photo-3769002.jpeg",
      title: '0 Prise de Poids',
      description: 'Évitez de grossir grâce à une action naturelle profonde sans effets secondaires.',
      features: ['Minceur préservée', 'Action naturelle', 'Sans calories'],
      icon: <Zap className="text-yellow-500" size={20} />,
      color: 'border-l-yellow-500',
      stats: 'Maintien du poids'
    }
  ];

  // Carte vidéo - Appareil SlimBreathe
  const videoCard = {
    id: 4,
    title: 'SlimBreathe : Ventre Plat & Tonus du Périnée',
    description: 'Méthode de respiration hypopressive pour travailler les muscles profonds de la sangle abdominale.',
    features: ['Ventre plat', 'Périnée renforcé', 'Endurance améliorée'],
    icon: <Wind className="text-purple-500" size={20} />,
    color: 'border-l-purple-500',
    stats: '98% de satisfaction'
  };

  const mechanismCards = [
    {
      title: 'Respiration Hypopressive',
      description: 'Technique de respiration qui permet de travailler les muscles profonds du ventre.',
      icon: <Wind className="text-blue-500" size={32} />,
      details: ['Ventre plat garanti', 'Taille affinée', 'Muscles renforcés']
    },
    {
      title: 'Rééducation du Périnée',
      description: 'Idéal pour les femmes souhaitant renforcer leur tonus après l\'accouchement.',
      icon: <Baby className="text-pink-500" size={32} />,
      details: ['Post-partum', 'Tonus musculaire', 'Confort intime']
    },
    {
      title: 'Amélioration Respiratoire',
      description: 'Développez votre capacité respiratoire et votre endurance physique.',
      icon: <Heart className="text-green-500" size={32} />,
      details: ['Souffle amélioré', 'Endurance accrue', 'Performance sportive']
    }
  ];

  // Caractéristiques de la Sève de Vie (Poudre en gélules)
  const seveDeVieFeatures = [
    {
      icon: <Timer className="text-orange-500" size={20} />,
      title: 'Soulagement en 24h',
      description: 'Action rapide contre les douleurs articulaires, de dos et de nerfs'
    },
    {
      icon: <Shield className="text-green-500" size={20} />,
      title: '100% Naturel',
      description: 'Sans chimie, juste la puissance des plantes traditionnelles'
    },
    {
      icon: <Gauge className="text-blue-500" size={20} />,
      title: 'Sans pics glycémiques',
      description: 'Dosage contrôlé pour une glycémie stable'
    },
    {
      icon: <Moon className="text-indigo-500" size={20} />,
      title: 'Sans gonflement',
      description: 'Évite la rétention d\'eau et les ballonnements'
    }
  ];

  // Ingrédients de la Sève de Vie
  const seveDeVieIngredients = [
    {
      name: 'Plantes traditionnelles',
      benefit: 'Action naturelle profonde',
      color: 'from-green-50 to-green-100',
      icon: <Leaf className="text-green-600" size={16} />
    },
    {
      name: 'Dosage contrôlé',
      benefit: 'Évite les pics glycémiques',
      color: 'from-blue-50 to-blue-100',
      icon: <Gauge className="text-blue-600" size={16} />
    },
    {
      name: 'Formule équilibrée',
      benefit: '0 prise de poids',
      color: 'from-yellow-50 to-yellow-100',
      icon: <Zap className="text-yellow-600" size={16} />
    },
    {
      name: 'Sans additifs chimiques',
      benefit: '100% naturel, sans gonflement',
      color: 'from-purple-50 to-purple-100',
      icon: <Shield className="text-purple-600" size={16} />
    }
  ];

  // Caractéristiques du SlimBreathe
  const slimBreatheFeatures = [
    {
      icon: <Wind className="text-teal-500" size={20} />,
      title: 'Méthode Hypopressive',
      description: 'Travaille les muscles profonds de la sangle abdominale'
    },
    {
      icon: <HeartPulse className="text-red-500" size={20} />,
      title: 'Tonus du Périnée',
      description: 'Idéal pour la rééducation post-accouchement'
    },
    {
      icon: <Activity className="text-blue-500" size={20} />,
      title: 'Capacité Respiratoire',
      description: 'Améliore votre souffle et votre endurance physique'
    }
  ];

  return (
    <section id="apropos" className="py-12 md:py-20 bg-gradient-to-b from-white to-beige-50">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-primary-50 rounded-full mb-4 md:mb-6">
            <Leaf className="mr-2 text-primary-600" size={16} />
            <span className="text-sm font-medium text-primary-700 md:text-base">Naturel & Efficace</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl md:mb-6">
            Découvrez <span className="text-primary-600">Noéshop</span>
          </h1>
          <p className="max-w-3xl px-2 mx-auto text-lg text-gray-600 md:text-xl">
            Vos produits préférés au meilleur prix à Abidjan
          </p>
        </motion.div>

        {/* Benefits Cards avec défilement horizontal sur mobile - VIDÉO SlimBreathe en premier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="mb-8 text-center md:mb-12">
            <div className="inline-flex items-center px-3 py-1.5 bg-primary-50 rounded-full mb-3 md:mb-4">
              
              <span className="text-sm font-medium text-primary-700">Nos Produits Stars</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl md:mb-4">
              Sève de Vie & SlimBreathe
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
              Des solutions naturelles pour votre bien-être au quotidien
            </p>
          </div>

          {/* Contrôles de défilement mobile */}
          <div className="relative">
            <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {/* Carte vidéo SlimBreathe en premier */}
              <motion.div
                key={videoCard.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl"
              >
                <div className="relative h-40 overflow-hidden md:h-48">
                  <video
                    src={mainVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
                    {videoCard.icon}
                  </div>
                  
                  <div className="absolute flex items-center justify-center w-8 h-8 rounded-full shadow-sm top-3 right-3 bg-white/90 backdrop-blur-sm">
                    <span className="text-sm font-bold text-gray-900">01</span>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <div className={`border-l-4 ${videoCard.color} pl-3 mb-3`}>
                    <h3 className="text-base font-bold text-gray-900 md:text-lg">
                      {videoCard.title}
                    </h3>
                  </div>
                  
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
                    {videoCard.description}
                  </p>
                  
                  <div className="mb-4 space-y-2">
                    {videoCard.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Satisfaction client</span>
                      <span className="text-sm font-bold text-primary-600">{videoCard.stats}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Les 3 cartes Sève de Vie */}
              {benefitCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 1) * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl"
                >
                  <div className="relative h-40 overflow-hidden md:h-48">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
                      {card.icon}
                    </div>
                    
                    <div className="absolute flex items-center justify-center w-8 h-8 rounded-full shadow-sm top-3 right-3 bg-white/90 backdrop-blur-sm">
                      <span className="text-sm font-bold text-gray-900">0{card.id + 1}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6">
                    <div className={`border-l-4 ${card.color} pl-3 mb-3`}>
                      <h3 className="text-base font-bold text-gray-900 md:text-lg">
                        {card.title}
                      </h3>
                    </div>
                    
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
                      {card.description}
                    </p>
                    
                    <div className="mb-4 space-y-2">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs md:text-sm">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Résultat</span>
                        <span className="text-sm font-bold text-primary-600">{card.stats}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Version mobile avec défilement horizontal */}
            <div className="relative md:hidden">
              <button
                onClick={() => scrollLeft(benefitsScrollRef)}
                className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg left-2 top-1/2 bg-white/90 backdrop-blur-sm"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              
              <div 
                ref={benefitsScrollRef}
                className="flex pb-4 pl-2 pr-2 space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Carte SlimBreathe en premier sur mobile */}
                <div className="flex-shrink-0 w-80 snap-center">
                  <div className="h-full overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl">
                    <div className="relative h-48 overflow-hidden">
                      <video
                        src={mainVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      
                      <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
                        {videoCard.icon}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className={`border-l-4 ${videoCard.color} pl-3 mb-3`}>
                        <h3 className="text-lg font-bold text-gray-900">
                          {videoCard.title}
                        </h3>
                      </div>
                      
                      <p className="mb-4 text-sm leading-relaxed text-gray-600">
                        {videoCard.description}
                      </p>
                      
                      <div className="mb-4 space-y-2">
                        {videoCard.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {benefitCards.map((card) => (
                  <div
                    key={card.id}
                    className="flex-shrink-0 w-80 snap-center"
                  >
                    <div className="h-full overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        
                        <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
                          {card.icon}
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className={`border-l-4 ${card.color} pl-3 mb-3`}>
                          <h3 className="text-lg font-bold text-gray-900">
                            {card.title}
                          </h3>
                        </div>
                        
                        <p className="mb-4 text-sm leading-relaxed text-gray-600">
                          {card.description}
                        </p>
                        
                        <div className="mb-4 space-y-2">
                          {card.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => scrollRight(benefitsScrollRef)}
                className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg right-2 top-1/2 bg-white/90 backdrop-blur-sm"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Section Sève de Vie - Gélules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="overflow-hidden shadow-xl bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl md:rounded-3xl">
            <div className="p-6 md:p-8 lg:p-12">
              {/* En-tête section */}
              <div className="mb-8 text-center md:mb-12">
                <div className="inline-flex items-center px-3 py-1.5 bg-white/80 rounded-full mb-3 md:mb-4">
                  <Droplets className="mr-2 text-amber-600" size={16} />
                  <span className="text-sm font-medium text-amber-700">Poudre Naturelle</span>
                </div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl md:mb-4">
                  Sève de Vie™ : Dites adieu aux douleurs articulaires
                </h2>
                <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
                  Une formule naturelle en 20 gélules pour 1 mois de bien-être
                </p>
              </div>

              <div className="grid gap-8 mb-8 lg:grid-cols-2 md:gap-12 md:mb-12">
                {/* Colonne gauche - Image et description */}
                <div className="order-2 lg:order-1">
                  <div className="relative mb-6 md:mb-8">
                    <div className="p-6 shadow-lg bg-gradient-to-br from-white to-amber-50 rounded-xl md:rounded-2xl md:p-8">
                      <div className="relative w-full h-64 overflow-hidden rounded-lg md:h-72 md:rounded-xl">
                        <img
                          src={seveDeVieImage}
                          alt="Sève de Vie - Gélules naturelles"
                          className="object-contain w-full h-full transition-transform duration-500 transform hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-50/30 to-transparent" />
                      </div>
                      
                      {/* Badge produit */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                          CURE 1 MOIS - 20 GÉLULES
                        </div>
                      </div>
                      
                      {/* Étiquette prix */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                        <div className="text-xs font-medium text-gray-700">13 000 FCFA • Livraison offerte à Abidjan</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
                    Pourquoi choisir Sève de Vie ?
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-700 md:mb-6 md:text-base">
                    La Sève de Vie est une poudre naturelle en gélules qui agit en double action contre les douleurs 
                    articulaires, de dos et de nerfs. Grâce à sa formule unique à base de plantes traditionnelles, 
                    elle offre un soulagement rapide en seulement 24h.
                  </p>
                  <div className="p-4 mb-6 bg-white/60 rounded-xl md:p-6">
                    <div className="grid grid-cols-3 gap-2 text-center md:gap-4">
                      <div>
                        <div className="text-lg font-bold text-amber-600 md:text-xl">24h</div>
                        <div className="text-xs text-gray-600 md:text-sm">Soulagement rapide</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-amber-600 md:text-xl">0</div>
                        <div className="text-xs text-gray-600 md:text-sm">Pics glycémiques</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-amber-600 md:text-xl">0</div>
                        <div className="text-xs text-gray-600 md:text-sm">Prise de poids</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Colonne droite - Composition et fonctionnement */}
                <div className="order-1 lg:order-2">
                  {/* Composition */}
                  <div className="mb-8 md:mb-12">
                    <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
                      Une formule 100% naturelle
                    </h3>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {seveDeVieIngredients.map((ingredient, index) => (
                        <div
                          key={index}
                          className={`bg-gradient-to-br ${ingredient.color} rounded-lg md:rounded-xl p-4 md:p-5 border border-white/50`}
                        >
                          <div className="flex items-center mb-2">
                            <div className="flex items-center justify-center w-8 h-8 mr-3 bg-white rounded-lg shadow-sm">
                              {ingredient.icon}
                            </div>
                            <div className="text-sm font-bold text-gray-900 md:text-base">
                              {ingredient.name}
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 md:text-sm pl-11">
                            {ingredient.benefit}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Fonctionnement */}
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
                      Comment agit Sève de Vie ?
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base">
                      La Sève de Vie utilise la puissance des plantes traditionnelles pour une action naturelle profonde, 
                      sans chimie et sans effets secondaires indésirables comme les gonflements.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                      {seveDeVieFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -3 }}
                          className="p-4 transition-all bg-white border border-gray-100 rounded-lg shadow-sm md:rounded-xl hover:shadow-md"
                        >
                          <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50">
                            {feature.icon}
                          </div>
                          <h4 className="mb-1 text-sm font-bold text-gray-900 md:text-base">
                            {feature.title}
                          </h4>
                          <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
                            {feature.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bénéfices clés */}
              <div className="p-6 border border-white shadow-sm bg-white/80 rounded-xl md:rounded-2xl md:p-8">
                <h4 className="mb-4 text-lg font-bold text-center text-gray-900 md:text-xl md:mb-6">
                  Les atouts de Sève de Vie
                </h4>
                <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                  {[
                    'Soulage douleurs articulaires, dos et nerfs',
                    '0 pics de glycémie grâce au dosage contrôlé',
                    '0 prise de poids - action naturelle profonde',
                    '100% sans gonflement - sans chimie',
                    '20 gélules pour 1 mois de traitement',
                    'Livraison offerte à Abidjan'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-gray-700 md:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 mt-6 text-center border-t border-gray-200">
                  <span className="text-2xl font-bold text-amber-600">13 000 FCFA</span>
                  <span className="ml-2 text-gray-500">(Cure 20 gélules)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section SlimBreathe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="overflow-hidden shadow-xl bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl md:rounded-3xl">
            <div className="p-6 md:p-8 lg:p-12">
              <div className="mb-8 text-center md:mb-12">
                <div className="inline-flex items-center px-3 py-1.5 bg-white/80 rounded-full mb-3 md:mb-4">
                  <Wind className="mr-2 text-teal-600" size={16} />
                  <span className="text-sm font-medium text-teal-700">Gymnastique Respiratoire</span>
                </div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl md:mb-4">
                  SlimBreathe™ : Ventre Plat & Tonus du Périnée
                </h2>
                <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
                  Retrouvez une silhouette affinée et une santé intime renforcée
                </p>
              </div>

              <div className="grid gap-8 mb-8 lg:grid-cols-2 md:gap-12 md:mb-12">
                <div className="order-2 lg:order-1">
                  <div className="relative mb-6 md:mb-8">
                    <div className="p-6 shadow-lg bg-gradient-to-br from-white to-teal-50 rounded-xl md:rounded-2xl md:p-8">
                      <div className="relative w-full h-64 overflow-hidden rounded-lg md:h-72 md:rounded-xl">
                        <img
                          src={slimBreatheImage}
                          alt="SlimBreathe - Appareil de gymnastique respiratoire"
                          className="object-contain w-full h-full transition-transform duration-500 transform hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-50/30 to-transparent" />
                      </div>
                      
                      <div className="absolute top-4 right-4">
                        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                          APPAREIL RESPIRATOIRE
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                        <div className="text-xs font-medium text-gray-700">14 000 FCFA • Livraison partout à Abidjan</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
                    Pourquoi adopter SlimBreathe ?
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-700 md:mb-6 md:text-base">
                    SlimBreathe est un appareil de gymnastique respiratoire qui utilise la méthode hypopressive 
                    pour travailler les muscles profonds de la sangle abdominale. Compact et pratique, il est 
                    votre meilleur allié pour un ventre plat et un périnée renforcé.
                  </p>
                  <div className="p-4 mb-6 bg-white/60 rounded-xl md:p-6">
                    <div className="grid grid-cols-3 gap-2 text-center md:gap-4">
                      <div>
                        <div className="text-lg font-bold text-teal-600 md:text-xl">Ventre Plat</div>
                        <div className="text-xs text-gray-600 md:text-sm">Cible le bas-ventre</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-teal-600 md:text-xl">Périnée</div>
                        <div className="text-xs text-gray-600 md:text-sm">Tonus renforcé</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-teal-600 md:text-xl">Endurance</div>
                        <div className="text-xs text-gray-600 md:text-sm">Souffle amélioré</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="mb-8 md:mb-12">
                    <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
                      Caractéristiques techniques
                    </h3>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {[
                        { name: 'Méthode Hypopressive', benefit: 'Muscles profonds', icon: <Wind className="text-teal-600" size={16} />, color: 'from-teal-50 to-teal-100' },
                        { name: 'Rééducation périnée', benefit: 'Idéal post-accouchement', icon: <Baby className="text-pink-600" size={16} />, color: 'from-pink-50 to-pink-100' },
                        { name: 'Endurance physique', benefit: 'Souffle amélioré', icon: <Activity className="text-blue-600" size={16} />, color: 'from-blue-50 to-blue-100' }
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className={`bg-gradient-to-br ${feature.color} rounded-lg md:rounded-xl p-4 md:p-5 border border-white/50`}
                        >
                          <div className="flex items-center mb-2">
                            <div className="flex items-center justify-center w-8 h-8 mr-3 bg-white rounded-lg shadow-sm">
                              {feature.icon}
                            </div>
                            <div className="text-sm font-bold text-gray-900 md:text-base">
                              {feature.name}
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 md:text-sm pl-11">
                            {feature.benefit}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
                      Les bienfaits de SlimBreathe
                    </h3>
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                      {slimBreatheFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -3 }}
                          className="p-4 transition-all bg-white border border-gray-100 rounded-lg shadow-sm md:rounded-xl hover:shadow-md"
                        >
                          <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-gradient-to-br from-teal-50 to-cyan-50">
                            {feature.icon}
                          </div>
                          <h4 className="mb-1 text-sm font-bold text-gray-900 md:text-base">
                            {feature.title}
                          </h4>
                          <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
                            {feature.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-white shadow-sm bg-white/80 rounded-xl md:rounded-2xl md:p-8">
                <h4 className="mb-4 text-lg font-bold text-center text-gray-900 md:text-xl md:mb-6">
                  Pourquoi vous allez adorer SlimBreathe
                </h4>
                <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                  {[
                    'Ventre plat : cible le bas-ventre durablement',
                    'Rééducation du périnée : idéal après accouchement',
                    'Capacité respiratoire : souffle et endurance améliorés',
                    'Compact et pratique : utilisation quotidienne facile',
                    'Livraison partout à Abidjan'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-gray-700 md:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 mt-6 text-center border-t border-gray-200">
                  <span className="text-2xl font-bold text-teal-600">14 000 FCFA</span>
                  <span className="ml-2 text-gray-500">(Livraison incluse)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mechanism Section - Les bienfaits de la respiration hypopressive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="mb-8 text-center md:mb-12">
            <div className="inline-flex items-center px-3 py-1.5 bg-green-50 rounded-full mb-3 md:mb-4">
              <Activity className="mr-2 text-green-600" size={16} />
              <span className="text-sm font-medium text-green-700">Les bienfaits de SlimBreathe</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl md:mb-4">
              Comment SlimBreathe transforme votre corps
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
              Une méthode innovante pour des résultats visibles et durables
            </p>
          </div>

          <div className="relative">
            <div className="hidden max-w-6xl gap-6 mx-auto md:grid md:grid-cols-2">
              {mechanismCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{card.icon}</div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl md:mb-3">
                        {card.title}
                      </h3>
                      <p className="mb-3 text-sm leading-relaxed text-gray-600 md:mb-4 md:text-base">
                        {card.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {card.details.map((detail, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs text-gray-700 border border-gray-200 rounded-lg bg-gray-50 md:text-sm"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Version mobile */}
            <div className="relative md:hidden">
              <button
                onClick={() => scrollLeft(mechanismScrollRef)}
                className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg left-2 top-1/2 bg-white/90 backdrop-blur-sm"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              
              <div 
                ref={mechanismScrollRef}
                className="flex pb-4 pl-2 pr-2 space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {mechanismCards.map((card, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 snap-center"
                  >
                    <div className="h-full p-6 bg-white border border-gray-100 shadow-lg rounded-xl">
                      <div className="mb-4">{card.icon}</div>
                      <h3 className="mb-3 text-xl font-bold text-gray-900">
                        {card.title}
                      </h3>
                      <p className="mb-4 leading-relaxed text-gray-600">
                        {card.description}
                      </p>
                      <div className="space-y-2">
                        {card.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => scrollRight(mechanismScrollRef)}
                className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg right-2 top-1/2 bg-white/90 backdrop-blur-sm"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="p-6 text-white shadow-xl bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl md:rounded-3xl md:p-8">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8">
              {[
                { number: isStatsInView ? `${stats.users.toLocaleString()}+` : '0+', label: 'Clients satisfaits' },
                { number: isStatsInView ? `${stats.improvement}%` : '0%', label: 'Résultats positifs' },
                { number: isStatsInView ? `${stats.countries}+` : '0+', label: 'Villes en Côte d\'Ivoire' },
                { number: '24/7', label: 'Support client' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="mb-1 text-2xl font-bold md:text-3xl lg:text-4xl md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs text-white/90 md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-6 bg-white border border-gray-200 shadow-lg rounded-2xl md:rounded-3xl md:p-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:mb-6">
              Prêt à transformer votre bien-être ?
            </h2>
            <p className="max-w-2xl mx-auto mb-6 text-sm text-gray-600 md:mb-8 md:text-base">
              Rejoignez les milliers de personnes qui ont déjà choisi Noéshop pour leur santé et leur forme
            </p>
            
            <div className="flex flex-col justify-center gap-3 sm:flex-row md:gap-4">
              <button
                onClick={() => {
                  const productsSection = document.getElementById('produits');
                  if (productsSection) {
                    const headerHeight = 80;
                    const elementPosition = productsSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-primary-600 md:px-8 hover:bg-primary-700 hover:shadow-xl md:text-base"
              >
                <span>Découvrir nos produits</span>
                <ArrowRight className="ml-2" size={18} />
              </button>
              
              {/* <button
                onClick={() => setShowVideo(true)}
                className="flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 border-2 rounded-full border-primary-600 text-primary-600 md:px-8 hover:bg-primary-50 md:text-base"
              >
                <Play className="mr-2" size={18} />
                <span>Voir la vidéo</span>
              </button> */}
            </div>
            
            <p className="mt-6 text-xs text-gray-500 md:text-sm md:mt-8">
              Livraison offerte à Abidjan • Paiement sécurisé • Satisfaction garantie
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// CSS inline pour éviter les problèmes de SSR
const styles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .snap-x {
    scroll-snap-type: x mandatory;
  }
  
  .snap-center {
    scroll-snap-align: center;
  }
  
  .snap-mandatory {
    scroll-snap-stop: always;
  }
`;

if (typeof window !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default About;