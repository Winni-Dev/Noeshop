import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Globe, CreditCard } from 'lucide-react';
import wave from '../IMAGES/wave.png';

const Delivery: React.FC = () => {
  const deliveryOptions = [
    {
      id: 1,
      title: 'Abidjan',
      icon: <MapPin className="text-green-600" size={24} />,
      description: 'Livraison sous 24 heures',
      price: 'Gratuite',
      payment: 'Paiement à la livraison',
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-200'
    },
    {
      id: 2,
      title: 'Intérieur du pays',
      icon: <Truck className="text-blue-600" size={24} />,
      description: 'Livraison 2-3 jours',
      price: 'sur devis',
      payment: 'paiement 100% requis avant expédition',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      id: 3,
      title: 'Extérieur du pays',
      icon: <Globe className="text-purple-600" size={24} />,
      description: 'Livraison 5-7 jours',
      price: 'Sur devis',
      payment: 'Paiement total + frais d\'expédition',
      color: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    }
  ];

  const paymentMethods = [
    { id: 1, name: 'Cash à la livraison', icon: '💵' },
    { id: 2, name: 'Mobile Money', icon: '📱' },
    { id: 3, name: 'Virement bancaire', icon: '🏦' },
    { id: 4, name: 'Wave', icon: <img src={wave} alt="Wave" className="w-24 h-10 mx-auto" /> }
  ];

  return (
    <section  id="livraison" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Livraison & Paiement
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous adaptons notre service selon votre localisation pour vous offrir la meilleure expérience
          </p>
        </motion.div>

        {/* Delivery options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {deliveryOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${option.color} rounded-2xl p-6 border ${option.borderColor} shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  {option.icon}
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {option.price}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {option.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {option.description}
              </p>
              
              <div className="flex items-center space-x-2 text-sm">
                <CreditCard size={16} className="text-gray-500" />
                <span className="font-medium">{option.payment}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-beige-50 rounded-3xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Méthodes de paiement acceptées
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{method.icon}</div>
                <div className="font-medium text-gray-900">{method.name}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-white rounded-xl">
            <p className="text-center text-gray-600">
              <span className="font-semibold">Important :</span> Pour les commandes hors Abidjan, 
              la totalité est requise avant l'expédition. Nous vous enverrons les détails par WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Delivery;