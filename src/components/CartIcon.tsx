import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { motion } from 'framer-motion';

const CartIcon: React.FC = () => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  const [hovering, setHovering] = useState(false);

  return (
    <Link to="/panier">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative p-2"
      >
        <ShoppingCart
          className={`transition-colors ${hovering ? 'text-primary-600' : 'text-gray-700'}`}
          size={24}
        />
        {itemCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
          >
            {itemCount}
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
};

export default CartIcon;