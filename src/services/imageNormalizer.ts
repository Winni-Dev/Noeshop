// Fonction utilitaire pour normaliser les images d'un produit
export function normalizeProductImages(product: any): any {
  if (!product) return product
  
  const normalized = { ...product }
  
  if (normalized.images) {
    // Si images est une string JSON, la parser
    if (typeof normalized.images === 'string') {
      try {
        normalized.images = JSON.parse(normalized.images)
      } catch {
        // Si ce n'est pas du JSON valide, créer un array
        normalized.images = [normalized.images]
      }
    }
    // S'assurer que c'est un array
    if (!Array.isArray(normalized.images)) {
      normalized.images = []
    }
  }
  
  return normalized
}

// Fonction pour normaliser un tableau de produits
export function normalizeProductsImages(products: any[]): any[] {
  if (!Array.isArray(products)) return []
  
  return products.map(normalizeProductImages)
}
