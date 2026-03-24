// import React from 'react';
// import { motion } from 'framer-motion';
// import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const ContactSection: React.FC = () => {
//   const contactInfo = [
//     {
//       icon: <Phone className="text-primary-600" size={24} />,
//       title: 'Téléphone',
//       value: '+2250714113978',
//       description: 'Disponible sur WhatsApp'
//     },
//     {
//       icon: <Mail className="text-primary-600" size={24} />,
//       title: 'Email',
//       value: 'noevacare@gmail.com',
//       description: 'Réponse sous 24h'
//     },
//     {
//       icon: <MapPin className="text-primary-600" size={24} />,
//       title: 'Localisation',
//       value: 'Abidjan, Côte d\'Ivoire',
//       description: 'Livraison nationale et internationale'
//     }
//   ];

//   return (
//     <section id="contact-section" className="py-20 bg-beige-50">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Contact info */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Besoin d'aide ?
//             </h2>
            
//             <p className="text-gray-600 mb-8">
//               Notre équipe est disponible pour répondre à toutes vos questions. 
//               Contactez-nous par WhatsApp pour une réponse rapide, ou utilisez 
//               notre formulaire de contact pour les demandes détaillées.
//             </p>
            
//             <div className="space-y-6 mb-8">
//               {contactInfo.map((info, index) => (
//                 <div key={index} className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
//                     {info.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">{info.title}</h3>
//                     <p className="text-gray-900 font-medium">{info.value}</p>
//                     <p className="text-gray-600 text-sm">{info.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* WhatsApp button */}
//             <a
//               href="https://wa.me/2250714113978"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors mb-4 mr-4"
//             >
//               <MessageCircle className="mr-2" size={20} />
//               WhatsApp
//             </a>
            
//             {/* Contact page link */}
//             <Link
//               to="/contact"
//               className="inline-flex items-center border border-primary-600 text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
//             >
//               Page Contact
//             </Link>
//           </motion.div>
          
//           {/* FAQ */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-3xl p-8 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               Questions fréquentes
//             </h3>
            
//             <div className="space-y-6">
//               {[
//                 {
//                   question: 'Combien de temps dure la livraison ?',
//                   answer: 'À Abidjan : 24h. Intérieur du pays : 2-3 jours. International : 5-7 jours.'
//                 },
//                 {
//                   question: 'Puis-je payer à la livraison ?',
//                   answer: 'Oui, uniquement pour les commandes à Abidjan. Pour l\'intérieur et l\'international, la totalité est requise.'
//                 },
//                 {
//                   question: 'Les produits sont-ils garantis ?',
//                   answer: 'Oui, tous nos produits sont garantis 30 jours. Si vous n\'êtes pas satisfait, contactez-nous.'
//                 },
//                 {
//                   question: 'Comment passer commande ?',
//                   answer: 'Ajoutez les produits au panier, cliquez sur "Commander", remplissez le formulaire et nous vous contacterons sur WhatsApp.'
//                 }
//               ].map((faq, index) => (
//                 <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
//                   <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
            
//             <div className="mt-8 p-4 bg-primary-50 rounded-xl">
//               <p className="text-primary-700 text-sm">
//                 💡 <strong>Astuce :</strong> Pour une réponse immédiate, contactez-nous directement 
//                 sur WhatsApp. Notre équipe est disponible du lundi au samedi de 8h à 20h.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;



import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-primary-600" size={24} />,
      title: 'Téléphone / WhatsApp',
      value: '+225 07 12 68 11 95',
      description: 'Disponible 7j/7 de 8h à 20h'
    },
    {
      icon: <MapPin className="text-primary-600" size={24} />,
      title: 'Localisation',
      value: 'Abidjan, Côte d\'Ivoire',
      description: 'Livraison partout à Abidjan et dans toute la Côte d\'Ivoire'
    }
  ];

  return (
    <section id="contact-section" className="py-20 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Besoin d'aide ?
            </h2>
            
            <p className="text-gray-600 mb-8">
              Notre équipe est disponible pour répondre à toutes vos questions. 
              Contactez-nous par WhatsApp pour une réponse rapide, ou utilisez 
              notre formulaire de contact pour les demandes détaillées.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    <p className="text-gray-900 font-medium">{info.value}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* WhatsApp button */}
            <a
              href="https://wa.me/2250712681195"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors mb-4 mr-4"
            >
              <MessageCircle className="mr-2" size={20} />
              Nous contacter sur WhatsApp
            </a>
            
            {/* Contact page link */}
            <Link
              to="/contact"
              className="inline-flex items-center border border-primary-600 text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
            >
              Page Contact
            </Link>
          </motion.div>
          
          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Combien de temps dure la livraison ?',
                  answer: 'À Abidjan : livraison offerte sous 24h. Intérieur du pays : 2-3 jours.'
                },
                {
                  question: 'Puis-je payer à la livraison ?',
                  answer: 'Oui, pour toutes les commandes à Abidjan. Pour l\'intérieur du pays, le paiement se fait par Mobile Money avant expédition.'
                },
                {
                  question: 'Les produits sont-ils garantis ?',
                  answer: 'Oui, tous nos produits sont garantis 30 jours. Si vous n\'êtes pas satisfait, contactez-nous sur WhatsApp.'
                },
                {
                  question: 'Comment passer commande ?',
                  answer: 'Contactez-nous directement sur WhatsApp au +225 07 12 68 11 95, ou utilisez le formulaire de commande. Nous vous répondrons dans l\'heure.'
                },
                {
                  question: 'Quels sont les modes de paiement acceptés ?',
                  answer: 'Nous acceptons : Paiement à la livraison (Abidjan), Mobile Money (MTN, Orange), et virement bancaire.'
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-primary-50 rounded-xl">
              <p className="text-primary-700 text-sm">
                💡 <strong>Astuce :</strong> Pour une réponse immédiate, contactez-nous directement 
                sur WhatsApp au <strong className="font-bold">+225 07 12 68 11 95</strong>. Notre équipe est disponible 
                du lundi au samedi de 8h à 20h.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;