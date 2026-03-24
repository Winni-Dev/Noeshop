
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  children?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, children }) => {
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    setAdding(true);
    addItem(product, quantity);
    toast.success('Ajouté au panier', {
      position: 'top-right',
      style: {
        borderRadius: '12px',
        background: '#10B981',
        color: '#fff',
      },
    });
    setTimeout(() => setAdding(false), 800);
    setQuantity(1);
  };

  // Simple price formatting (no currency style for XOF)
  const formatPrice = (price: number) => `${price.toLocaleString()} FCFA`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative h-full"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {/* Image container */}
        <div className="relative">
          <div className="relative h-56 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            {children}
          </div>
        </div>
        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Title and description */}
          <div className="mb-3 flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-1.5 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
              {product.description}
            </p>
          </div>
          {/* Price section */}
          <div className="mb-4 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                </div>
                {product.price > 25000 && (
                  <div className="flex items-center mt-0.5">
                    <span className="text-gray-400 text-xs line-through mr-1">
                      {formatPrice(product.price * 1.25)}
                    </span>
                    <span className="text-red-600 text-xs font-semibold">
                      Économie
                    </span>
                  </div>
                )}
              </div>
              {/* Quantity control */}
              <div className="flex items-center space-x-1.5 bg-gray-50 rounded-full p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xs"
                  aria-label="Réduire la quantité"
                >
                  <Minus size={14} className="text-gray-600" />
                </button>
                <span className="w-6 text-center font-bold text-gray-900 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xs"
                  aria-label="Augmenter la quantité"
                >
                  <Plus size={14} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          {/* Add to cart button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            disabled={adding}
            className={`w-full py-2.5 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-sm ${
              adding
                ? 'bg-green-600 text-white shadow'
                : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-md'
            }`}
          >
            {adding ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                <span>Ajouté</span>
              </>
            ) : (
              <>
                <span className="mr-2">Ajouter au panier</span>
                <Check size={16} />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
