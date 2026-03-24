import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  return (
    <section id="produits" className="py-20 bg-beige-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Produits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos produits soigneusement sélectionnés pour votre bien-être quotidien.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product}>
                <a href={`/produit/${product.id}`} className="block focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-2xl" style={{display:'block', position:'absolute', top:0, left:0, width:'100%', height:'224px', zIndex:2}} aria-label={product.name}></a>
              </ProductCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Offre Spéciale
          </h3>
          <p className="text-gray-600 mb-4">
            Commandez les deux produits ensemble et bénéficiez de 5% de réduction !
          </p>
          {/* <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-500 line-through">43 800 FCFA</span>
              <span className="text-2xl font-bold text-primary-600 ml-4">37 230 FCFA</span>
            </div>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-700 transition-colors">
              Commander le pack
            </button>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;