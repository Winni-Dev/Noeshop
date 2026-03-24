


// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { products } from '../data/products';
// import ProductOrderForm from '../components/ProductOrderForm';
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   ArrowLeft,
//   CheckCircle,
//   Truck,
//   Shield,
//   Star,
//   Zap,
//   ShoppingCart,
//   Minus,
//   Plus,
//   Timer,
//   Gauge,
//   Wind,
//   Brain,
//   Baby,
//   AirVent
// } from 'lucide-react';

// // Import testimonial images
// import TE1 from '../IMAGES/TE1.jpg';
// import TE2 from '../IMAGES/TE2.jpg';
// import TE3 from '../IMAGES/TE3.jpg';
// import TE4 from '../IMAGES/TE4.jpg';
// import TE5 from '../IMAGES/TE5.jpg';
// import TE6 from '../IMAGES/TE6.jpg';
// import TE7 from '../IMAGES/TE7.jpg';

// // Import proof of shipping images
// import P1 from '../IMAGES/P1.jpeg';
// import P2 from '../IMAGES/P2.jpeg';
// import P3 from '../IMAGES/P3.jpeg';
// import P4 from '../IMAGES/P4.jpeg';
// import P5 from '../IMAGES/P5.jpeg';
// import P6 from '../IMAGES/P6.jpeg';
// import P7 from '../IMAGES/P7.jpeg';
// import P8 from '../IMAGES/P8.jpeg';
// import P9 from '../IMAGES/P9.jpeg';
// import P10 from '../IMAGES/P10.jpeg';

// const ProductDetail: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const product = products.find((p) => p.id === Number(id));
//   const [quantity, setQuantity] = useState(1);
//   const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
//   const [currentProofIndex, setCurrentProofIndex] = useState(0);
//   const [isImageLoading, setIsImageLoading] = useState(true);

//   // Testimonial and proof images based on product
//   const testimonialImages = [TE1, TE2, TE3, TE4, TE5, TE6, TE7];
//   const proofImages = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10];

//   // Auto-rotate testimonial carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [testimonialImages.length]);

//   // Auto-rotate proof carousel for all products
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [proofImages.length]);

//   const handleOpenOrder = () => {
//     setIsOrderFormOpen(true);
//   };

//   const nextTestimonial = useCallback(() => {
//     setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialImages.length);
//   }, [testimonialImages.length]);

//   const prevTestimonial = useCallback(() => {
//     setCurrentTestimonialIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
//   }, [testimonialImages.length]);

//   const nextProof = useCallback(() => {
//     setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
//   }, [proofImages.length]);

//   const prevProof = useCallback(() => {
//     setCurrentProofIndex((prev) => (prev - 1 + proofImages.length) % proofImages.length);
//   }, [proofImages.length]);

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white flex items-center justify-center p-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center"
//         >
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Produit introuvable</h2>
//           <button
//             onClick={() => navigate(-1)}
//             className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
//           >
//             ← Retour aux produits
//           </button>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
//       {/* Header */}
//       <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
//         <div className="max-w-4xl mx-auto px-4 py-3">
//           <button
//             onClick={() => navigate(-1)}
//             className="group flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
//           >
//             <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
//             <span className="font-medium text-sm">Retour</span>
//           </button>
//         </div>
//       </div>

//       {/* Main Product Card - Single card for mobile */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-4xl mx-auto px-4 py-4"
//       >
//         {/* Mobile: Single Card Layout */}
//         <div className="lg:hidden bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
//           {/* Product Image */}
//           <div className="relative">
//             {isImageLoading && (
//               <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
//             )}
//             <img
//               src={product.image}
//               alt={product.name}
//               className={`w-full h-[250px] object-cover transition-opacity duration-300 ${
//                 isImageLoading ? 'opacity-0' : 'opacity-100'
//               }`}
//               onLoad={() => setIsImageLoading(false)}
//             />
//             {product.badge && (
//               <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
//                 <span className="text-xs font-semibold text-primary-600">{product.badge}</span>
//               </div>
//             )}
//           </div>

//           {/* Product Info */}
//           <div className="p-5">
//             <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
//             <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            
//             {/* Ratings */}
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="flex">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
//                 ))}
//               </div>
//               <span className="text-gray-600 text-xs">4.9 (3.2k+ avis)</span>
//             </div>

//             {/* Price */}
//             <div className="bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl p-4 mb-4">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-xs text-gray-600 mb-1">Prix unitaire</p>
//                   <div className="flex items-baseline gap-2">
//                     <p className="text-xl font-bold text-primary-600">
//                       {product.price.toLocaleString()} FCFA
//                     </p>
//                   </div>
//                 </div>
//                 {product.id === 1 && (
//                   <div className="bg-green-100 text-green-800 px-2 py-1 rounded-lg">
//                     <p className="text-xs font-semibold">Cure 1 mois</p>
//                   </div>
//                 )}
//                 {product.id === 2 && (
//                   <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded-lg">
//                     <p className="text-xs font-semibold">Écran intelligent</p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Quantity and Order Section - On same card */}
//             <div className="space-y-4 border-t border-gray-100 pt-4">
//               {/* Quantity Selector */}
//               <div className="flex items-center justify-between">
//                 <p className="font-medium text-gray-900">Quantité</p>
//                 <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-3 py-1.5">
//                   <button
//                     onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                     className="w-7 h-7 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
//                     aria-label="Diminuer la quantité"
//                   >
//                     <Minus size={14} />
//                   </button>
//                   <span className="text-lg font-bold text-gray-900 min-w-[30px] text-center">{quantity}</span>
//                   <button
//                     onClick={() => setQuantity((q) => q + 1)}
//                     className="w-7 h-7 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
//                     aria-label="Augmenter la quantité"
//                   >
//                     <Plus size={14} />
//                   </button>
//                 </div>
//               </div>

//               {/* Total Price */}
//               <div className="flex items-center justify-between py-2">
//                 <span className="text-gray-600">Total :</span>
//                 <div className="text-right">
//                   <p className="text-xl font-bold text-primary-600">
//                     {(product.price * quantity).toLocaleString()} FCFA
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     {product.id === 1 ? 'Livraison offerte à Abidjan' : 'Livraison partout à Abidjan'}
//                   </p>
//                 </div>
//               </div>

//               {/* Order Button */}
//               <motion.button
//                 whileTap={{ scale: 0.98 }}
//                 onClick={handleOpenOrder}
//                 className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
//               >
//                 <ShoppingCart size={20} />
//                 <span>Commander maintenant</span>
//               </motion.button>

//               {/* Quick Info */}
//               <div className="grid grid-cols-3 gap-2 mt-4">
//                 <div className="bg-gray-50 rounded-lg p-2 text-center">
//                   <Truck className="w-4 h-4 text-primary-600 mx-auto mb-1" />
//                   <p className="text-xs text-gray-700">24h à Abidjan</p>
//                 </div>
//                 <div className="bg-gray-50 rounded-lg p-2 text-center">
//                   <Shield className="w-4 h-4 text-primary-600 mx-auto mb-1" />
//                   <p className="text-xs text-gray-700">Paiement sécurisé</p>
//                 </div>
//                 <div className="bg-gray-50 rounded-lg p-2 text-center">
//                   <CheckCircle className="w-4 h-4 text-primary-600 mx-auto mb-1" />
//                   <p className="text-xs text-gray-700">Garantie 30j</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Desktop: Two Column Layout */}
//         <div className="hidden lg:grid lg:grid-cols-2 gap-6 items-start">
//           {/* Left Column - Product Image */}
//           <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
//             <div className="relative">
//               {isImageLoading && (
//                 <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
//               )}
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className={`w-full h-[400px] object-cover transition-opacity duration-300 ${
//                   isImageLoading ? 'opacity-0' : 'opacity-100'
//                 }`}
//                 onLoad={() => setIsImageLoading(false)}
//               />
//               {product.badge && (
//                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
//                   <span className="text-sm font-semibold text-primary-600">{product.badge}</span>
//                 </div>
//               )}
//             </div>
            
//             {/* Trust Badges */}
//             <div className="grid grid-cols-3 gap-3 p-4">
//               <div className="bg-gray-50 rounded-xl p-3 text-center">
//                 <Truck className="w-6 h-6 text-primary-600 mx-auto mb-1" />
//                 <p className="text-xs font-medium text-gray-700">
//                   {product.id === 1 ? 'Livraison offerte' : 'Livraison rapide'}
//                 </p>
//               </div>
//               <div className="bg-gray-50 rounded-xl p-3 text-center">
//                 <Shield className="w-6 h-6 text-primary-600 mx-auto mb-1" />
//                 <p className="text-xs font-medium text-gray-700">Paiement sécurisé</p>
//               </div>
//               <div className="bg-gray-50 rounded-xl p-3 text-center">
//                 <CheckCircle className="w-6 h-6 text-primary-600 mx-auto mb-1" />
//                 <p className="text-xs font-medium text-gray-700">Garantie satisfait</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Product Info with Order */}
//           <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6">
//             <div className="space-y-6">
//               {/* Product Header */}
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
//                 <p className="text-gray-600">{product.description}</p>
                
//                 {/* Ratings */}
//                 <div className="flex items-center space-x-2 mt-4">
//                   <div className="flex">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                   <span className="text-gray-600 font-medium">4.9 (3.2k+ avis)</span>
//                 </div>
//               </div>

//               {/* Price */}
//               <div className="bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl p-5">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm text-gray-600 mb-1">Prix unitaire</p>
//                     <div className="flex items-baseline gap-3">
//                       <p className="text-2xl font-bold text-primary-600">
//                         {product.price.toLocaleString()} FCFA
//                       </p>
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {product.id === 1 ? 'Cure de 20 gélules (1 mois)' : 'Appareil avec écran intelligent'}
//                     </p>
//                   </div>
//                   {product.id === 1 && (
//                     <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg">
//                       <p className="text-sm font-semibold">20 GÉLULES</p>
//                     </div>
//                   )}
//                   {product.id === 2 && (
//                     <div className="bg-teal-100 text-teal-800 px-3 py-2 rounded-lg">
//                       <p className="text-sm font-semibold">Écran intelligent</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Quantity and Order */}
//               <div className="space-y-6">
//                 {/* Quantity Selector */}
//                 <div className="space-y-3">
//                   <div className="flex items-center justify-between">
//                     <p className="font-medium text-gray-900">Quantité</p>
//                     <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-4 py-2">
//                       <button
//                         onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                         className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
//                         aria-label="Diminuer la quantité"
//                       >
//                         <Minus size={16} />
//                       </button>
//                       <span className="text-xl font-bold text-gray-900 min-w-[40px] text-center">{quantity}</span>
//                       <button
//                         onClick={() => setQuantity((q) => q + 1)}
//                         className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
//                         aria-label="Augmenter la quantité"
//                       >
//                         <Plus size={16} />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Total Price */}
//                   <div className="border-t border-gray-200 pt-4">
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-600">Total :</span>
//                       <div className="text-right">
//                         <p className="text-2xl font-bold text-primary-600">
//                           {(product.price * quantity).toLocaleString()} FCFA
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {product.id === 1 ? 'Livraison offerte à Abidjan' : 'Livraison partout à Abidjan'}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Order Button */}
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={handleOpenOrder}
//                     className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
//                   >
//                     <ShoppingCart size={24} />
//                     <span>Commander maintenant</span>
//                   </motion.button>

//                   {/* Safety Message */}
//                   <p className="text-center text-sm text-gray-500 mt-2">
//                     Paiement 100% sécurisé • Livraison sous 24h à Abidjan
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Product Description Sections */}
//       <div className="max-w-4xl mx-auto px-4 pb-8">
//         {product.id === 1 ? (
//           <SeveDeVieDescription />
//         ) : (
//           <SlimBreatheDescription />
//         )}

//         {/* Testimonials Section */}
//         <TestimonialsSection
//           images={testimonialImages}
//           currentIndex={currentTestimonialIndex}
//           onNext={nextTestimonial}
//           onPrev={prevTestimonial}
//         />

//         {/* Proof of Shipping Section */}
//         <ProofSection
//           images={proofImages}
//           currentIndex={currentProofIndex}
//           onNext={nextProof}
//           onPrev={prevProof}
//         />
//       </div>

//       {/* Order Form Modal */}
//       <ProductOrderForm 
//         product={product} 
//         quantity={quantity} 
//         isOpen={isOrderFormOpen} 
//         onClose={() => setIsOrderFormOpen(false)} 
//       />
//     </div>
//   );
// };

// // Sève de Vie Description Component
// const SeveDeVieDescription: React.FC = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     className="mt-6 lg:mt-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
//   >
//     <div className="p-5 lg:p-8">
//       <div className="text-center mb-6 lg:mb-8">
//         <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">Sève de Vie™</h2>
//         <p className="text-gray-600 text-sm lg:text-base">Dites adieu aux douleurs articulaires en 24h</p>
//       </div>

//       {/* Hero Statement */}
//       <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 lg:p-6 mb-6 lg:mb-8">
//         <p className="text-base lg:text-lg font-semibold text-center text-gray-900">
//           "Double action naturelle contre les douleurs de dos, de nerfs et d'articulations"
//         </p>
//       </div>

//       {/* Benefits Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 lg:mb-8">
//         {[
//           { icon: Timer, title: "Soulagement 24h", benefits: ["Action rapide", "Douleurs atténuées"] },
//           { icon: Gauge, title: "0 Pics glycémiques", benefits: ["Dosage contrôlé", "Glycémie stable"] },
//           { icon: Zap, title: "0 Prise de poids", benefits: ["Action naturelle", "Minceur préservée"] },
//           { icon: Shield, title: "100% Naturel", benefits: ["Sans chimie", "Sans gonflement"] },
//         ].map((benefit, index) => (
//           <motion.div
//             key={benefit.title}
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-4 shadow-sm"
//           >
//             <div className="w-10 h-10 lg:w-12 lg:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
//               <benefit.icon className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600" />
//             </div>
//             <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
//             <ul className="space-y-1">
//               {benefit.benefits.map((item, idx) => (
//                 <li key={idx} className="flex items-center text-sm text-gray-600">
//                   <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-2 flex-shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>

//       {/* Key Features */}
//       <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-5 lg:p-6 text-white">
//         <h3 className="text-lg font-bold mb-4 text-center">Cure complète 1 mois</h3>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="text-center">
//             <div className="text-2xl font-bold">20</div>
//             <p className="text-amber-100 text-sm">Gélules</p>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold">24h</div>
//             <p className="text-amber-100 text-sm">Soulagement</p>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold">100%</div>
//             <p className="text-amber-100 text-sm">Naturel</p>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold">Offerte</div>
//             <p className="text-amber-100 text-sm">Livraison Abidjan</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// // SlimBreathe Description Component
// const SlimBreatheDescription: React.FC = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     className="mt-6 lg:mt-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
//   >
//     <div className="p-5 lg:p-8">
//       <div className="text-center mb-6 lg:mb-8">
//         <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">SlimBreathe™</h2>
//         <p className="text-gray-600 text-sm lg:text-base">Ventre plat & tonus du périnée</p>
//       </div>

//       {/* Hero Statement */}
//       <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 lg:p-6 mb-6 lg:mb-8">
//         <p className="text-base lg:text-lg font-semibold text-center text-gray-900">
//           "Retrouvez une silhouette affinée et une santé intime renforcée"
//         </p>
//       </div>

//       {/* Features Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 lg:mb-8">
//         {[
//           { icon: Wind, title: "Respiration Hypopressive", benefits: ["Muscles profonds", "Ventre plat"] },
//           { icon: Baby, title: "Rééducation du Périnée", benefits: ["Idéal post-accouchement", "Tonus renforcé"] },
//           { icon: AirVent, title: "Capacité Respiratoire", benefits: ["Souffle amélioré", "Endurance physique"] },
//           { icon: Brain, title: "Écran Intelligent", benefits: ["Suivi en temps réel", "Compteur automatique"] },
//         ].map((feature, index) => (
//           <motion.div
//             key={feature.title}
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             className="bg-gradient-to-br from-white to-teal-50 rounded-xl p-4 shadow-sm"
//           >
//             <div className="w-10 h-10 lg:w-12 lg:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
//               <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-teal-600" />
//             </div>
//             <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
//             <ul className="space-y-1">
//               {feature.benefits.map((item, idx) => (
//                 <li key={idx} className="flex items-center text-sm text-gray-600">
//                   <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-2 flex-shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>

//       {/* Key Features */}
//       <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-5 lg:p-6 text-white">
//         <h3 className="text-lg font-bold mb-4 text-center">Pourquoi vous allez l'adorer</h3>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="text-center">
//             <div className="text-2xl font-bold">Ventre Plat</div>
//             <p className="text-teal-100 text-sm">Cible le bas-ventre</p>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold">Périnée</div>
//             <p className="text-teal-100 text-sm">Tonus renforcé</p>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold">Écran</div>
//             <p className="text-teal-100 text-sm">Suivi intelligent</p>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold">12k FCFA</div>
//             <p className="text-teal-100 text-sm">Livraison incluse</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// const TestimonialsSection: React.FC<{
//   images: string[];
//   currentIndex: number;
//   onNext: () => void;
//   onPrev: () => void;
// }> = ({ images, currentIndex, onNext, onPrev }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     className="mt-6 lg:mt-8"
//   >
//     <div className="text-center mb-4 lg:mb-6">
//       <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2">Témoignages clients</h3>
//       <p className="text-gray-600 text-sm lg:text-base">Découvrez les retours de nos clients satisfaits</p>
//     </div>
    
//     <div className="relative bg-gradient-to-br from-primary-50 to-white rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={currentIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           src={images[currentIndex]}
//           alt="Témoignage client"
//           className="w-full h-[250px] lg:h-[300px] object-cover"
//         />
//       </AnimatePresence>
      
//       {/* Navigation */}
//       <div className="absolute inset-0 flex items-center justify-between px-3 lg:px-4">
//         <button
//           onClick={onPrev}
//           className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
//         >
//           <ChevronLeft size={18} className="text-gray-900" />
//         </button>
//         <button
//           onClick={onNext}
//           className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
//         >
//           <ChevronRight size={18} className="text-gray-900" />
//         </button>
//       </div>
      
//       {/* Counter */}
//       <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
//         <p className="text-xs font-medium text-gray-900">
//           {currentIndex + 1}/{images.length}
//         </p>
//       </div>
//     </div>
//   </motion.div>
// );

// const ProofSection: React.FC<{
//   images: string[];
//   currentIndex: number;
//   onNext: () => void;
//   onPrev: () => void;
// }> = ({ images, currentIndex, onNext, onPrev }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     className="mt-6 lg:mt-8"
//   >
//     <div className="text-center mb-4 lg:mb-6">
//       <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2">Livraisons confirmées</h3>
//       <p className="text-gray-600 text-sm lg:text-base">Preuves d'expédition à travers la Côte d'Ivoire</p>
//     </div>
    
//     <div className="relative bg-gradient-to-br from-beige-50 to-white rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={currentIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           src={images[currentIndex]}
//           alt="Preuve d'expédition"
//           className="w-full h-[200px] lg:h-[250px] object-cover"
//         />
//       </AnimatePresence>
      
//       {/* Navigation */}
//       <div className="absolute inset-0 flex items-center justify-between px-3 lg:px-4">
//         <button
//           onClick={onPrev}
//           className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
//         >
//           <ChevronLeft size={18} className="text-gray-900" />
//         </button>
//         <button
//           onClick={onNext}
//           className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
//         >
//           <ChevronRight size={18} className="text-gray-900" />
//         </button>
//       </div>
      
//       {/* Footer */}
//       <div className="bg-white p-3 lg:p-4">
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="font-medium text-gray-900 text-sm">Suivi en temps réel</p>
//             <p className="text-xs text-gray-600">Colis {currentIndex + 1}/{images.length}</p>
//           </div>
//           <div className="flex items-center space-x-1 text-green-600">
//             <CheckCircle size={16} />
//             <span className="font-medium text-sm">Livré à Abidjan</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// export default ProductDetail;



import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductOrderForm from '../components/ProductOrderForm';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft,
  CheckCircle,
  Truck,
  Shield,
  Star,
  Zap,
  ShoppingCart,
  Minus,
  Plus,
  Timer,
  Gauge,
  Wind,
  Brain,
  Baby,
  AirVent
} from 'lucide-react';

// Import proof of shipping images
import P1 from '../IMAGES/P1.jpeg';
import P2 from '../IMAGES/P2.jpeg';
import P3 from '../IMAGES/P3.jpeg';
import P4 from '../IMAGES/P4.jpeg';
import P5 from '../IMAGES/P5.jpeg';
import P6 from '../IMAGES/P6.jpeg';
import P7 from '../IMAGES/P7.jpeg';
import P8 from '../IMAGES/P8.jpeg';
import P9 from '../IMAGES/P9.jpeg';
import P10 from '../IMAGES/P10.jpeg';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [currentProofIndex, setCurrentProofIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const proofImages = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10];

  // Auto-rotate proof carousel for all products
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [proofImages.length]);

  const handleOpenOrder = () => {
    setIsOrderFormOpen(true);
  };

  const nextProof = useCallback(() => {
    setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
  }, [proofImages.length]);

  const prevProof = useCallback(() => {
    setCurrentProofIndex((prev) => (prev - 1 + proofImages.length) % proofImages.length);
  }, [proofImages.length]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Produit introuvable</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            ← Retour aux produits
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Retour</span>
          </button>
        </div>
      </div>

      {/* Main Product Card - Single card for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-4"
      >
        {/* Mobile: Single Card Layout */}
        <div className="lg:hidden bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Product Image */}
          <div className="relative">
            {isImageLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
            )}
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-[250px] object-cover transition-opacity duration-300 ${
                isImageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setIsImageLoading(false)}
            />
            {product.badge && (
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                <span className="text-xs font-semibold text-primary-600">{product.badge}</span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-5">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            
            {/* Ratings */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 text-xs">4.9 (3.2k+ avis)</span>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Prix unitaire</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-xl font-bold text-primary-600">
                      {product.price.toLocaleString()} FCFA
                    </p>
                  </div>
                  {/* Mobile: Spécification 20 gélules pour Sève de Vie */}
                  {product.id === 1 && (
                    <p className="text-xs text-amber-600 font-semibold mt-1">✓ 20 gélules (1 mois de cure)</p>
                  )}
                  {product.id === 2 && (
                    <p className="text-xs text-teal-600 font-semibold mt-1">✓ Écran intelligent avec compteur</p>
                  )}
                </div>
                {product.id === 1 && (
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-lg">
                    <p className="text-xs font-semibold">20 GÉLULES</p>
                  </div>
                )}
                {product.id === 2 && (
                  <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded-lg">
                    <p className="text-xs font-semibold">Écran intelligent</p>
                  </div>
                )}
              </div>
            </div>

            {/* Quantity and Order Section - On same card */}
            <div className="space-y-4 border-t border-gray-100 pt-4">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-900">Quantité</p>
                <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-3 py-1.5">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-7 h-7 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
                    aria-label="Diminuer la quantité"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-lg font-bold text-gray-900 min-w-[30px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-7 h-7 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
                    aria-label="Augmenter la quantité"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Total :</span>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary-600">
                    {(product.price * quantity).toLocaleString()} FCFA
                  </p>
                  <p className="text-xs text-gray-500">
                    {product.id === 1 ? 'Livraison offerte à Abidjan' : 'Livraison partout à Abidjan'}
                  </p>
                </div>
              </div>

              {/* Order Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleOpenOrder}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span>Commander maintenant</span>
              </motion.button>

              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <Truck className="w-4 h-4 text-primary-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-700">24h à Abidjan</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <Shield className="w-4 h-4 text-primary-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-700">Paiement sécurisé</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <CheckCircle className="w-4 h-4 text-primary-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-700">Garantie 30j</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Two Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Column - Product Image */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="relative">
              {isImageLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
              )}
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-[400px] object-cover transition-opacity duration-300 ${
                  isImageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setIsImageLoading(false)}
              />
              {product.badge && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-sm font-semibold text-primary-600">{product.badge}</span>
                </div>
              )}
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 p-4">
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <Truck className="w-6 h-6 text-primary-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">
                  {product.id === 1 ? 'Livraison offerte' : 'Livraison rapide'}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <Shield className="w-6 h-6 text-primary-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">Paiement sécurisé</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <CheckCircle className="w-6 h-6 text-primary-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">Garantie satisfait</p>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info with Order */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6">
            <div className="space-y-6">
              {/* Product Header */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
                
                {/* Ratings */}
                <div className="flex items-center space-x-2 mt-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">4.9 (3.2k+ avis)</span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Prix unitaire</p>
                    <div className="flex items-baseline gap-3">
                      <p className="text-2xl font-bold text-primary-600">
                        {product.price.toLocaleString()} FCFA
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {product.id === 1 ? 'Cure de 20 gélules (1 mois)' : 'Appareil avec écran intelligent'}
                    </p>
                  </div>
                  {product.id === 1 && (
                    <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg">
                      <p className="text-sm font-semibold">20 GÉLULES</p>
                    </div>
                  )}
                  {product.id === 2 && (
                    <div className="bg-teal-100 text-teal-800 px-3 py-2 rounded-lg">
                      <p className="text-sm font-semibold">Écran intelligent</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity and Order */}
              <div className="space-y-6">
                {/* Quantity Selector */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">Quantité</p>
                    <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-4 py-2">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
                        aria-label="Diminuer la quantité"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-xl font-bold text-gray-900 min-w-[40px] text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
                        aria-label="Augmenter la quantité"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Total Price */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total :</span>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary-600">
                          {(product.price * quantity).toLocaleString()} FCFA
                        </p>
                        <p className="text-sm text-gray-500">
                          {product.id === 1 ? 'Livraison offerte à Abidjan' : 'Livraison partout à Abidjan'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Order Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOpenOrder}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <ShoppingCart size={24} />
                    <span>Commander maintenant</span>
                  </motion.button>

                  {/* Safety Message */}
                  <p className="text-center text-sm text-gray-500 mt-2">
                    Paiement 100% sécurisé • Livraison sous 24h à Abidjan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Product Description Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        {product.id === 1 ? (
          <SeveDeVieDescription />
        ) : (
          <SlimBreatheDescription />
        )}

        {/* Proof of Shipping Section */}
        <ProofSection
          images={proofImages}
          currentIndex={currentProofIndex}
          onNext={nextProof}
          onPrev={prevProof}
        />
      </div>

      {/* Order Form Modal */}
      <ProductOrderForm 
        product={product} 
        quantity={quantity} 
        isOpen={isOrderFormOpen} 
        onClose={() => setIsOrderFormOpen(false)} 
      />
    </div>
  );
};

// Sève de Vie Description Component
const SeveDeVieDescription: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 lg:mt-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
  >
    <div className="p-5 lg:p-8">
      <div className="text-center mb-6 lg:mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">Sève de Vie™</h2>
        <p className="text-gray-600 text-sm lg:text-base">Dites adieu aux douleurs articulaires en 24h</p>
      </div>

      {/* Hero Statement */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 lg:p-6 mb-6 lg:mb-8">
        <p className="text-base lg:text-lg font-semibold text-center text-gray-900">
          "Double action naturelle contre les douleurs de dos, de nerfs et d'articulations"
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 lg:mb-8">
        {[
          { icon: Timer, title: "Soulagement 24h", benefits: ["Action rapide", "Douleurs atténuées"] },
          { icon: Gauge, title: "0 Pics glycémiques", benefits: ["Dosage contrôlé", "Glycémie stable"] },
          { icon: Zap, title: "0 Prise de poids", benefits: ["Action naturelle", "Minceur préservée"] },
          { icon: Shield, title: "100% Naturel", benefits: ["Sans chimie", "Sans gonflement"] },
        ].map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-4 shadow-sm"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
              <benefit.icon className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600" />
            </div>
            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
            <ul className="space-y-1">
              {benefit.benefits.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-5 lg:p-6 text-white">
        <h3 className="text-lg font-bold mb-4 text-center">Cure complète 1 mois - 20 gélules</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">20</div>
            <p className="text-amber-100 text-sm">Gélules</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">24h</div>
            <p className="text-amber-100 text-sm">Soulagement</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">100%</div>
            <p className="text-amber-100 text-sm">Naturel</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">Offerte</div>
            <p className="text-amber-100 text-sm">Livraison Abidjan</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// SlimBreathe Description Component
const SlimBreatheDescription: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 lg:mt-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
  >
    <div className="p-5 lg:p-8">
      <div className="text-center mb-6 lg:mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">SlimBreathe™</h2>
        <p className="text-gray-600 text-sm lg:text-base">Ventre plat & tonus du périnée</p>
      </div>

      {/* Hero Statement */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 lg:p-6 mb-6 lg:mb-8">
        <p className="text-base lg:text-lg font-semibold text-center text-gray-900">
          "Retrouvez une silhouette affinée et une santé intime renforcée"
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 lg:mb-8">
        {[
          { icon: Wind, title: "Respiration Hypopressive", benefits: ["Muscles profonds", "Ventre plat"] },
          { icon: Baby, title: "Rééducation du Périnée", benefits: ["Idéal post-accouchement", "Tonus renforcé"] },
          { icon: AirVent, title: "Capacité Respiratoire", benefits: ["Souffle amélioré", "Endurance physique"] },
          { icon: Brain, title: "Écran Intelligent", benefits: ["Suivi en temps réel", "Compteur automatique"] },
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-white to-teal-50 rounded-xl p-4 shadow-sm"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
              <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-teal-600" />
            </div>
            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
            <ul className="space-y-1">
              {feature.benefits.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-5 lg:p-6 text-white">
        <h3 className="text-lg font-bold mb-4 text-center">Pourquoi vous allez l'adorer</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">Ventre Plat</div>
            <p className="text-teal-100 text-sm">Cible le bas-ventre</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">Périnée</div>
            <p className="text-teal-100 text-sm">Tonus renforcé</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">Écran</div>
            <p className="text-teal-100 text-sm">Suivi intelligent</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">12k FCFA</div>
            <p className="text-teal-100 text-sm">Livraison incluse</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProofSection: React.FC<{
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}> = ({ images, currentIndex, onNext, onPrev }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 lg:mt-8"
  >
    <div className="text-center mb-4 lg:mb-6">
      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2">Livraisons confirmées</h3>
      <p className="text-gray-600 text-sm lg:text-base">Preuves d'expédition à travers la Côte d'Ivoire</p>
    </div>
    
    <div className="relative bg-gradient-to-br from-beige-50 to-white rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          src={images[currentIndex]}
          alt="Preuve d'expédition"
          className="w-full h-[200px] lg:h-[250px] object-cover"
        />
      </AnimatePresence>
      
      {/* Navigation */}
      <div className="absolute inset-0 flex items-center justify-between px-3 lg:px-4">
        <button
          onClick={onPrev}
          className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
        >
          <ChevronLeft size={18} className="text-gray-900" />
        </button>
        <button
          onClick={onNext}
          className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
        >
          <ChevronRight size={18} className="text-gray-900" />
        </button>
      </div>
      
      {/* Footer */}
      <div className="bg-white p-3 lg:p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900 text-sm">Suivi en temps réel</p>
            <p className="text-xs text-gray-600">Colis {currentIndex + 1}/{images.length}</p>
          </div>
          <div className="flex items-center space-x-1 text-green-600">
            <CheckCircle size={16} />
            <span className="font-medium text-sm">Livré à Abidjan</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProductDetail;