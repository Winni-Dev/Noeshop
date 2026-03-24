export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  benefits: string[];
  image: string;
  badge?: string;
  originalPrice?: number | null;
  inStock?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

export interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface OrderFormData {
  firstName: string;
  lastName: string;
  phone: string;
  location: 'abidjan' | 'interior' | 'exterior';
  country?: string;
  city?: string;
  quartier?: string;
  notes?: string;
}


export interface BenefitCard {
  id: number;
  image: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  gradient: string;
  stats: string;
}

export interface ActionCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface MechanismCard {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Testimonial {
  name: string;
  age: number;
  comment: string;
  duration: string;
}