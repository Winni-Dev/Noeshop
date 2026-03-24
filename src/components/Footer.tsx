// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MessageCircle, Mail } from 'lucide-react';
// import logo from '../IMAGES/logoN.png';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="w-10 h-10 rounded-full flex items-center justify-center">
//                 {/* <span className="text-white font-bold text-xl">B</span> */}
//                 <img src={logo} alt="Logo" />
//               </div>
//               <div>
//                 <h2 className="text-xl font-bold">Noéva<span className="text-primary-400">care</span></h2>
//                 <p className="text-gray-400 text-sm">Bracelet & Pommade</p>
//               </div>
//             </div>
//             <p className="text-gray-400 mb-4">
//               Votre bien-être naturel est notre priorité. Produits de qualité, service personnalisé.
//             </p>
//             {/* <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Instagram size={20} />
//               </a>
//               <a href="https://wa.me/2250714113978" className="text-gray-400 hover:text-white">
//                 <MessageCircle size={20} />
//               </a>
//               <a href="mailto:contact@bienetreshop.ci" className="text-gray-400 hover:text-white">
//                 <Mail size={20} />
//               </a>
//             </div> */}
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Navigation</h3>
//             <ul className="space-y-2">
//               <li><Link to="/" className="text-gray-400 hover:text-white">Accueil</Link></li>
//               <li><Link to="/#produits" className="text-gray-400 hover:text-white">Produits</Link></li>
//               <li><Link to="/#avis" className="text-gray-400 hover:text-white">Avis clients</Link></li>
//               <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
//               <li><Link to="/panier" className="text-gray-400 hover:text-white">Panier</Link></li>
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Légal</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-400 hover:text-white">Conditions générales</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white">Mentions légales</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white">Politique de retour</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact rapide</h3>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-2">
//                 <MessageCircle size={18} className="text-primary-400" />
//                 <a href="https://wa.me/2250714113978" className="text-gray-400 hover:text-white">
//                   WhatsApp: +2250714113978
//                 </a>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Mail size={18} className="text-primary-400" />
//                 <a href="mailto:noevacare@gmail.com" className="text-gray-400 hover:text-white">
//                   noevacare@gmail.com
//                 </a>
//               </div>
//             </div>
            
//             <div className="mt-6 p-4 bg-gray-800 rounded-lg">
//               <p className="text-sm text-gray-300">
//                 ⚡ Livraison rapide selon votre localisation
//               </p>
//               <p className="text-sm text-gray-300 mt-2">
//                 🔒 Paiement sécurisé
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//           <p>© {new Date().getFullYear()} NoévaCare. Tous droits réservés.</p>
//           {/* <p className="text-sm mt-2">
//             Site développé avec React, TypeScript et Tailwind CSS
//           </p> */}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import logo from '../IMAGES/logoN.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src={logo} alt="Logo" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Noé<span className="text-primary-400">shop</span></h2>
                <p className="text-gray-400 text-sm">Sève de Vie & SlimBreathe</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Vos produits préférés au meilleur prix à Abidjan. Qualité naturelle, service personnalisé.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Accueil</Link></li>
              <li><Link to="/#produits" className="text-gray-400 hover:text-white">Produits</Link></li>
              <li><Link to="/#apropos" className="text-gray-400 hover:text-white">À propos</Link></li>
              <li><Link to="/#avis" className="text-gray-400 hover:text-white">Avis clients</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Conditions générales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mentions légales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Politique de retour</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact rapide</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MessageCircle size={18} className="text-primary-400" />
                <a href="https://wa.me/2250712681195" className="text-gray-400 hover:text-white">
                  WhatsApp: +225 07 12 68 11 95
                </a>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300">
                🚚 Livraison offerte à Abidjan sous 24h
              </p>
              <p className="text-sm text-gray-300 mt-2">
                💳 Paiement à la livraison (Abidjan)
              </p>
              <p className="text-sm text-gray-300 mt-2">
                📱 Disponible 7j/7 sur WhatsApp
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Noéshop. Tous droits réservés.</p>
          <p className="text-sm mt-2">Vos produits préférés au meilleur prix à Abidjan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;