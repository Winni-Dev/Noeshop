// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
// import { useCart } from '../hooks/useCart';
// import { Link } from 'react-router-dom';
// import OrderPopup from '../components/OrderPopup';

// const CartPage: React.FC = () => {
//   const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();
//   const [showOrderPopup, setShowOrderPopup] = useState(false);

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('fr-CI', {
//       style: 'currency',
//       currency: 'XOF',
//       minimumFractionDigits: 0,
//     }).format(price);
//   };

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen pt-32 pb-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-2xl mx-auto text-center"
//           >
//             <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <ShoppingBag className="text-gray-400" size={48} />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Votre panier est vide
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Ajoutez des produits à votre panier pour commencer vos achats.
//             </p>
//             <Link
//               to="/"
//               className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
//             >
//               Voir les produits
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-32 pb-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon Panier</h1>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Cart items */}
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                 <div className="p-6 border-b">
//                   <div className="flex justify-between items-center">
//                     <h2 className="text-xl font-semibold text-gray-900">
//                       Produits ({items.length})
//                     </h2>
//                     <button
//                       onClick={clearCart}
//                       className="text-sm text-red-600 hover:text-red-700"
//                     >
//                       Vider le panier
//                     </button>
//                   </div>
//                 </div>
                
//                 <div className="divide-y">
//                   {items.map((item) => (
//                     <motion.div
//                       key={item.id}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="p-6 flex items-center"
//                     >
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-20 h-20 object-cover rounded-lg"
//                       />
                      
//                       <div className="ml-4 flex-1">
//                         <h3 className="font-semibold text-gray-900">{item.name}</h3>
//                         <p className="text-sm text-gray-600 line-clamp-2">
//                           {item.description}
//                         </p>
//                         <div className="mt-2 text-lg font-bold text-primary-600">
//                           {formatPrice(item.price)}
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center space-x-4">
//                         <div className="flex items-center space-x-2">
//                           <button
//                             onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                             className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
//                           >
//                             <Minus size={16} />
//                           </button>
//                           <span className="w-8 text-center font-semibold">{item.quantity}</span>
//                           <button
//                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                             className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
//                           >
//                             <Plus size={16} />
//                           </button>
//                         </div>
                        
//                         <button
//                           onClick={() => removeItem(item.id)}
//                           className="text-red-600 hover:text-red-700"
//                         >
//                           <Trash2 size={20} />
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             {/* Order summary */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-6">
//                   Récapitulatif
//                 </h2>
                
//                 <div className="space-y-4 mb-6">
//                   {items.map(item => (
//                     <div key={item.id} className="flex justify-between">
//                       <span className="text-gray-600">
//                         {item.name} x{item.quantity}
//                       </span>
//                       <span className="font-medium">
//                         {formatPrice(item.price * item.quantity)}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="border-t pt-4 mb-6">
//                   <div className="flex justify-between text-lg font-bold">
//                     <span>Total</span>
//                     <span className="text-primary-600">{formatPrice(getTotal())}</span>
//                   </div>
//                 </div>
                
//                 <button
//                   onClick={() => setShowOrderPopup(true)}
//                   className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
//                 >
//                   Commander maintenant
//                 </button>
                
//                 <Link
//                   to="/"
//                   className="w-full mt-4 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block text-center"
//                 >
//                   Continuer mes achats
//                 </Link>
                
//                 <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//                   <p className="text-sm text-gray-600">
//                     📦 Livraison rapide selon votre localisation
//                   </p>
//                   <p className="text-sm text-gray-600 mt-2">
//                     💬 Finalisation via WhatsApp pour un suivi personnalisé
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
      
//       <OrderPopup
//         isOpen={showOrderPopup}
//         onClose={() => setShowOrderPopup(false)}
//       />
//     </div>
//   );
// };

// export default CartPage;



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
// import { useCart } from '../hooks/useCart';
// import { Link, useNavigate } from 'react-router-dom';
// import OrderPopup from '../components/OrderPopup';
// import toast from 'react-hot-toast';

// const CartPage: React.FC = () => {
//   const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();
//   const [showOrderPopup, setShowOrderPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleSeeProducts = () => {
//     if (window.location.pathname === '/') {
//       // Si on est déjà sur la page d'accueil, scroll vers produits
//       const productsSection = document.getElementById('produits');
//       if (productsSection) {
//         const headerHeight = 80;
//         const elementPosition = productsSection.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       }
//     } else {
//       // Sinon naviguer vers l'accueil avec hash
//       navigate('/#produits');
//     }
//   };

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('fr-CI', {
//       style: 'currency',
//       currency: 'XOF',
//       minimumFractionDigits: 0,
//     }).format(price);
//   };

//   const handleRemoveItem = (productId: number, productName: string) => {
//     removeItem(productId);
//     toast.success(`${productName} retiré du panier`, {
//       position: 'bottom-right',
//     });
//   };

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen pt-32 pb-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-2xl mx-auto text-center"
//           >
//             <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <ShoppingBag className="text-gray-400" size={48} />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Votre panier est vide
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Ajoutez des produits à votre panier pour commencer vos achats.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={handleSeeProducts}
//                 className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
//               >
//                 Voir les produits
//               </button>
//               <Link
//                 to="/"
//                 className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
//               >
//                 <ArrowLeft className="mr-2" size={20} />
//                 Retour à l'accueil
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-32 pb-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-4xl mx-auto"
//         >
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-900">Mon Panier</h1>
//             <button
//               onClick={handleSeeProducts}
//               className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
//             >
//               <ArrowLeft className="mr-2" size={16} />
//               Continuer mes achats
//             </button>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Cart items */}
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                 <div className="p-6 border-b">
//                   <div className="flex justify-between items-center">
//                     <h2 className="text-xl font-semibold text-gray-900">
//                       Produits ({items.length})
//                     </h2>
//                     <button
//                       onClick={() => {
//                         clearCart();
//                         toast.success('Panier vidé', {
//                           position: 'bottom-right',
//                         });
//                       }}
//                       className="text-sm text-red-600 hover:text-red-700"
//                     >
//                       Vider le panier
//                     </button>
//                   </div>
//                 </div>
                
//                 <div className="divide-y">
//                   {items.map((item) => (
//                     <motion.div
//                       key={item.id}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="p-6 flex flex-col sm:flex-row items-center"
//                     >
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-20 h-20 object-cover rounded-lg mb-4 sm:mb-0"
//                       />
                      
//                       <div className="sm:ml-4 flex-1 mb-4 sm:mb-0">
//                         <h3 className="font-semibold text-gray-900">{item.name}</h3>
//                         <p className="text-sm text-gray-600 line-clamp-2">
//                           {item.description}
//                         </p>
//                         <div className="mt-2 text-lg font-bold text-primary-600">
//                           {formatPrice(item.price)}
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center justify-between w-full sm:w-auto">
//                         <div className="flex items-center space-x-2">
//                           <button
//                             onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                             className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
//                           >
//                             <Minus size={16} />
//                           </button>
//                           <span className="w-8 text-center font-semibold">{item.quantity}</span>
//                           <button
//                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                             className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
//                           >
//                             <Plus size={16} />
//                           </button>
//                         </div>
                        
//                         <button
//                           onClick={() => handleRemoveItem(item.id, item.name)}
//                           className="ml-4 text-red-600 hover:text-red-700 flex items-center"
//                         >
//                           <Trash2 size={20} />
//                           <span className="ml-2 sm:hidden">Supprimer</span>
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             {/* Order summary */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-6">
//                   Récapitulatif
//                 </h2>
                
//                 <div className="space-y-4 mb-6">
//                   {items.map(item => (
//                     <div key={item.id} className="flex justify-between">
//                       <span className="text-gray-600">
//                         {item.name} x{item.quantity}
//                       </span>
//                       <span className="font-medium">
//                         {formatPrice(item.price * item.quantity)}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="border-t pt-4 mb-6">
//                   <div className="flex justify-between text-lg font-bold">
//                     <span>Total</span>
//                     <span className="text-primary-600">{formatPrice(getTotal())}</span>
//                   </div>
//                 </div>
                
//                 <button
//                   onClick={() => setShowOrderPopup(true)}
//                   className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors mb-4"
//                 >
//                   Commander maintenant
//                 </button>
                
//                 <button
//                   onClick={handleSeeProducts}
//                   className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
//                 >
//                   Ajouter d'autres produits
//                 </button>
                
//                 <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//                   <p className="text-sm text-gray-600 mb-2">
//                     📦 Livraison rapide selon votre localisation
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     💬 Finalisation via WhatsApp pour un suivi personnalisé
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
      
//       <OrderPopup
//         isOpen={showOrderPopup}
//         onClose={() => setShowOrderPopup(false)}
//       />
//     </div>
//   );
// };

// export default CartPage;



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import OrderPopup from '../components/OrderPopup';
import toast from 'react-hot-toast';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const navigate = useNavigate();

  const handleSeeProducts = () => {
    navigate('/#produits');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CI', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleRemoveItem = (productId: number, productName: string) => {
    removeItem(productId);
    toast.success(`${productName} retiré du panier`, {
      position: 'bottom-right',
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center pt-16"
          >
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="text-gray-300" size={32} />
            </div>
            <h2 className="text-2xl font-medium text-gray-800 mb-3">
              Panier vide
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Ajoutez des produits pour commencer vos achats
            </p>
            <button
              onClick={handleSeeProducts}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
            >
              Explorer les produits
              <ChevronRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={handleSeeProducts}
              className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              <span className="text-sm">Retour aux produits</span>
            </button>
            <h1 className="text-2xl font-medium text-gray-900">Mon Panier</h1>
            <p className="text-sm text-gray-500 mt-1">
              {items.length} {items.length > 1 ? 'articles' : 'article'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                          <div className="text-xs text-gray-400">
                            {formatPrice(item.price)} / unité
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sticky top-24">
                <h2 className="font-medium text-gray-900 mb-5">Récapitulatif</h2>

                {/* Order Items List */}
                <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-2">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div className="flex-1">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="text-gray-400 ml-2">×{item.quantity}</span>
                      </div>
                      <span className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mb-5">
                  <div className="flex justify-between text-base font-medium">
                    <span>Total</span>
                    <span className="text-gray-900">{formatPrice(getTotal())}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => setShowOrderPopup(true)}
                    className="w-full bg-gray-900 text-white py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
                  >
                    Commander maintenant
                  </button>

                  <button
                    onClick={handleSeeProducts}
                    className="w-full border border-gray-200 text-gray-600 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-all"
                  >
                    Ajouter d'autres produits
                  </button>

                  <button
                    onClick={() => {
                      clearCart();
                      toast.success('Panier vidé');
                    }}
                    className="w-full text-red-500 hover:text-red-600 text-sm font-medium py-2 transition-colors"
                  >
                    Vider le panier
                  </button>
                </div>

                {/* Info Box */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <div className="flex items-start gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-500 text-xs">🚚</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Livraison rapide selon votre localisation
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-500 text-xs">💬</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Finalisation via WhatsApp pour un suivi personnalisé
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <OrderPopup
        isOpen={showOrderPopup}
        onClose={() => setShowOrderPopup(false)}
      />
    </div>
  );
};

export default CartPage;