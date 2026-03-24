// import { Product } from '../types';
// import bracelet from '../IMAGES/bracelet_blanc.jpeg'
// import pomade from '../IMAGES/pommade.png'

// export const products: Product[] = [
//   {
//     id: 1,
//     name: 'Bracelet Énergétique',
//     description: 'Bracelet en pierres naturelles pour équilibrer les énergies et réduire le stress.',
//     price: 13000,
//     benefits: [
//       'Réduction du stress',
//       'Équilibre énergétique',
//       'Amélioration du sommeil',
//       'Protection contre les ondes négatives'
//     ],
//     image: bracelet
//   },
//   {
//     id: 2,
//     name: 'Pommade Naturelle',
//     description: 'Pommade 100% naturelle pour les douleurs musculaires et articulaires.',
//     price: 3500,
//     benefits: [
//       'Soulagement des douleurs',
//       'Anti-inflammatoire naturel',
//       'Hydratation profonde',
//       'Sans produits chimiques'
//     ],
//     image: pomade
//   }
// ];

// export const testimonials = [
//   {
//     id: 1,
//     name: 'Marie K.',
//     comment: 'Le bracelet m\'a vraiment aidé avec mon stress quotidien. Je le recommande !',
//     rating: 5
//   },
//   {
//     id: 2,
//     name: 'Jean P.',
//     comment: 'La pommade est magique pour mes douleurs articulaires. Naturelle et efficace.',
//     rating: 5
//   },
//   {
//     id: 3,
//     name: 'Sophie L.',
//     comment: 'Livraison rapide et produits de qualité. Service client très réactif sur WhatsApp.',
//     rating: 4
//   }
// ];

// export const advantages = [
//   {
//     id: 1,
//     title: 'Livraison Rapide',
//     description: 'Livraison sous 24h à Abidjan, 2-3 jours pour l\'intérieur du pays.',
//     icon: '🚚'
//   },
//   {
//     id: 2,
//     title: 'Paiement Sécurisé',
//     description: 'Paiement à la livraison ou acompte sécurisé selon votre localisation.',
//     icon: '🔒'
//   },
//   {
//     id: 3,
//     title: 'Produits Naturels',
//     description: 'Tous nos produits sont 100% naturels et fabriqués avec soin.',
//     icon: '🌿'
//   },
//   {
//     id: 4,
//     title: 'Support Client',
//     description: 'Disponible sur WhatsApp pour répondre à toutes vos questions.',
//     icon: '💬'
//   }
// ];



import { Product } from '../types';
import seveDeVieImage from '../IMAGES/gelule.jpeg';
import slimBreatheImage from '../IMAGES/machine.jpeg';

export const products: Product[] = [
  {
    id: 1,
    name: 'Sève de Vie',
    description: 'Poudre naturelle en gélules qui soulage les douleurs articulaires, de dos et de nerfs en seulement 24h. Formule 100% naturelle sans pics glycémiques, sans prise de poids et sans gonflement.',
    price: 13000,
    benefits: [
      'Double action contre les douleurs articulaires, de dos et de nerfs',
      '0 pics de glycémie - dosage contrôlé',
      '0 prise de poids - action naturelle profonde',
      '100% sans gonflement - sans chimie',
      '20 gélules pour 1 mois de traitement',
      'Livraison offerte à Abidjan'
    ],
    image: seveDeVieImage,
    badge: 'CURE 1 MOIS - 20 GÉLULES',
    originalPrice: null,
    inStock: true
  },
  {
    id: 2,
    name: 'SlimBreathe',
    description: 'Appareil de gymnastique respiratoire hypopressive pour ventre plat et tonus du périnée. Compact et intelligent, il améliore votre souffle et votre endurance physique avec un écran de suivi en temps réel.',
    price: 12000,
    benefits: [
      'Méthode de respiration hypopressive - muscles profonds',
      'Ventre plat - cible le bas-ventre durablement',
      'Rééducation du périnée - idéal après accouchement',
      'Capacité respiratoire - souffle et endurance améliorés',
      'Écran intelligent avec compteur automatique',
      'Livraison partout à Abidjan'
    ],
    image: slimBreatheImage,
    badge: 'APPAREIL RESPIRATOIRE',
    originalPrice: null,
    inStock: true
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Marie K.',
    comment: 'La Sève de Vie a changé ma vie ! Mes douleurs articulaires ont disparu en quelques jours. Je recommande vivement !',
    rating: 5,
    product: 'Sève de Vie'
  },
  {
    id: 2,
    name: 'Jean P.',
    comment: 'Le SlimBreathe est incroyable ! En 2 semaines, mon ventre est déjà plus plat et je me sens beaucoup plus tonique.',
    rating: 5,
    product: 'SlimBreathe'
  },
  {
    id: 3,
    name: 'Sophie L.',
    comment: 'Livraison rapide et produits de qualité. La Sève de Vie m\'a soulagé de mes douleurs de dos en 24h comme promis. Service client très réactif sur WhatsApp.',
    rating: 5,
    product: 'Sève de Vie'
  },
  {
    id: 4,
    name: 'Aminata D.',
    comment: 'Après mon accouchement, le SlimBreathe m\'a beaucoup aidé à retrouver mon périnée et ma silhouette. Un appareil magique !',
    rating: 5,
    product: 'SlimBreathe'
  },
  {
    id: 5,
    name: 'Koffi B.',
    comment: 'Commande reçue en 24h à Abidjan. La Sève de Vie est vraiment efficace contre mes douleurs de nerfs. Merci Noéshop !',
    rating: 5,
    product: 'Sève de Vie'
  }
];

export const advantages = [
  {
    id: 1,
    title: 'Livraison Rapide',
    description: 'Livraison offerte à Abidjan sous 24h, 2-3 jours pour l\'intérieur du pays.',
    icon: '🚚'
  },
  {
    id: 2,
    title: 'Paiement Sécurisé',
    description: 'Paiement à la livraison ou acompte sécurisé selon votre localisation.',
    icon: '🔒'
  },
  {
    id: 3,
    title: 'Produits Naturels',
    description: 'Sève de Vie 100% naturelle - sans chimie, sans gonflement, sans pics glycémiques.',
    icon: '🌿'
  },
  {
    id: 4,
    title: 'Support Client',
    description: 'Disponible sur WhatsApp pour répondre à toutes vos questions et suivre votre commande.',
    icon: '💬'
  }
];

export const packOffre = {
  name: 'Pack Bien-être Complet',
  products: ['Sève de Vie', 'SlimBreathe'],
  totalPrice: 25000,
  packPrice: 22500,
  savings: 2500,
  description: 'Commandez la Sève de Vie (20 gélules) et l\'Appareil SlimBreathe ensemble et bénéficiez de 10% de réduction + livraison offerte !'
};