// import { createClient } from '@supabase/supabase-js'
// import { Product } from '../types'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// if (!supabaseUrl || !supabaseAnonKey) {
//   throw new Error('Missing Supabase environment variables')
// }

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// export const productsService = {
//   async getAll() {
//     const { data, error } = await supabase
//       .from('products')
//       .select(`
//         *,
//         category:categories(*),
//         sub_category:sub_categories(*)
//       `)
//       .eq('is_active', true)
//       .order('created_at', { ascending: false })
    
//     if (error) throw error
//     return data
//   },

//   async getByCategory(categoryId: string) {
//     const { data, error } = await supabase
//       .from('products')
//       .select(`
//         *,
//         category:categories(*),
//         sub_category:sub_categories(*)
//       `)
//       .eq('category_id', categoryId)
//       .eq('is_active', true)
    
//     if (error) throw error
//     return data
//   },

//   async getBySubCategory(subCategoryId: string) {
//     const { data, error } = await supabase
//       .from('products')
//       .select(`
//         *,
//         category:categories(*),
//         sub_category:sub_categories(*)
//       `)
//       .eq('sub_category_id', subCategoryId)
//       .eq('is_active', true)
    
//     if (error) throw error
//     return data
//   },

//   async getCategories() {
//     const { data, error } = await supabase
//       .from('categories')
//       .select('*')
//       .order('name')
    
//     if (error) throw error
//     return data
//   },

//   async getSubCategories(categoryId?: string) {
//     let query = supabase
//       .from('sub_categories')
//       .select('*')
    
//     if (categoryId) {
//       query = query.eq('category_id', categoryId)
//     }
    
//     const { data, error } = await query.order('name')
    
//     if (error) throw error
//     return data
//   },

//   async createProduct(product: Omit<Product, 'id' | 'created_at'>) {
//     const { data, error } = await supabase
//       .from('products')
//       .insert([product])
//       .select()
//       .single()
    
//     if (error) throw error
//     return data
//   },

//   async updateProduct(id: string, updates: Partial<Product>) {
//     const { data, error } = await supabase
//       .from('products')
//       .update(updates)
//       .eq('id', id)
//       .select()
//       .single()
    
//     if (error) throw error
//     return data
//   },

//   async deleteProduct(id: string) {
//     const { error } = await supabase
//       .from('products')
//       .delete()
//       .eq('id', id)
    
//     if (error) throw error
//   }
// }

// export const authService = {
//   async signIn(email: string, password: string) {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     })
    
//     if (error) throw error
//     return data
//   },

//   async signOut() {
//     const { error } = await supabase.auth.signOut()
//     if (error) throw error
//   },

//   async getCurrentUser() {
//     const { data: { session } } = await supabase.auth.getSession()
//     return session?.user
//   },

//   onAuthStateChange(callback: (user: any) => void) {
//     return supabase.auth.onAuthStateChange((_event, session) => {
//       callback(session?.user ?? null)
//     })
//   }
// }


// export const productsService = {
//   async getAll() {
//     const { data, error } = await supabase
//       .from('products')
//       .select(`
//         *,
//         category:categories(*),
//         sub_category:sub_categories(*)
//       `)
//       .order('created_at', { ascending: false })
    
//     if (error) throw error
//     return data
//   },

//   async getByCategory(categoryId: string) {
//     const { data, error } = await supabase
//       .from('products')
//       .select(`
//         *,
//         category:categories(*),
//         sub_category:sub_categories(*)
//       `)
//       .eq('category_id', categoryId)
//       .eq('is_active', true)
    
//     if (error) throw error
//     return data
//   },

//   async getBySubCategory(subCategoryId: string) {
//     const { data, error } = await supabase
//       .from('products')
//       .select(`
//         *,
//         category:categories(*),
//         sub_category:sub_categories(*)
//       `)
//       .eq('sub_category_id', subCategoryId)
//       .eq('is_active', true)
    
//     if (error) throw error
//     return data
//   },

//   async getCategories() {
//     const { data, error } = await supabase
//       .from('categories')
//       .select('*')
//       .order('name')
    
//     if (error) throw error
//     return data
//   },

//   async getSubCategories(categoryId?: string) {
//     let query = supabase
//       .from('sub_categories')
//       .select('*')
    
//     if (categoryId) {
//       query = query.eq('category_id', categoryId)
//     }
    
//     const { data, error } = await query.order('name')
    
//     if (error) throw error
//     return data
//   },

//   async createProduct(product: Omit<Product, 'id' | 'created_at'>) {
//     const { data, error } = await supabase
//       .from('products')
//       .insert([product])
//       .select()
//       .single()
    
//     if (error) throw error
//     return data
//   },

//   async updateProduct(id: string, updates: Partial<Product>) {
//     const { data, error } = await supabase
//       .from('products')
//       .update(updates)
//       .eq('id', id)
//       .select()
//       .single()
    
//     if (error) throw error
//     return data
//   },

//   async deleteProduct(id: string) {
//     const { error } = await supabase
//       .from('products')
//       .delete()
//       .eq('id', id)
    
//     if (error) throw error
//   }
// }



// import { createClient } from '@supabase/supabase-js'

// // Vérifier les variables d'environnement
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// if (!supabaseUrl || !supabaseAnonKey) {
//   console.error('❌ Variables d\'environnement Supabase manquantes!')
//   console.log('VITE_SUPABASE_URL:', supabaseUrl ? '✓ Défini' : '✗ Manquant')
//   console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✓ Défini' : '✗ Manquant')
//   throw new Error('Variables d\'environnement Supabase manquantes. Vérifiez votre fichier .env')
// }

// console.log('🔗 Connexion à Supabase avec URL:', supabaseUrl)

// // Créer le client Supabase
// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   auth: {
//     persistSession: true,
//     autoRefreshToken: true,
//   },
//   db: {
//     schema: 'public'
//   }
// })

// // Tester la connexion immédiatement
// supabase.auth.getSession().then(({ data, error }) => {
//   if (error) {
//     console.error('❌ Erreur de connexion à Supabase:', error)
//   } else {
//     console.log('✅ Connexion à Supabase établie')
//   }
// })

// // Types
// export interface Category {
//   id: string;
//   name: string;
//   slug: string;
//   created_at: string;
// }

// export interface SubCategory {
//   id: string;
//   category_id: string;
//   name: string;
//   slug: string;
//   created_at: string;
// }

// export interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   image_url: string;
//   category_id: string;
//   sub_category_id: string;
//   is_active: boolean;
//   created_at: string;
//   category?: Category;
//   sub_category?: SubCategory;
// }

// // Service pour les produits
// export const productsService = {
//   async getAll() {
//     try {
//       console.log('📦 Chargement des produits...')
//       const { data, error } = await supabase
//         .from('products')
//         .select(`
//           *,
//           category:categories(*),
//           sub_category:sub_categories(*)
//         `)
//         .order('created_at', { ascending: false })
      
//       if (error) {
//         console.error('❌ Erreur lors du chargement des produits:', error)
//         throw error
//       }
      
//       console.log(`✅ ${data?.length || 0} produits chargés`)
//       return data || []
//     } catch (error) {
//       console.error('💥 Exception dans getAll:', error)
//       return []
//     }
//   },

//   async getCategories() {
//     try {
//       console.log('🏷️ Chargement des catégories...')
//       const { data, error } = await supabase
//         .from('categories')
//         .select('*')
//         .order('name')
      
//       if (error) {
//         console.error('❌ Erreur lors du chargement des catégories:', error)
//         throw error
//       }
      
//       console.log(`✅ ${data?.length || 0} catégories chargées`)
//       return data || []
//     } catch (error) {
//       console.error('💥 Exception dans getCategories:', error)
//       return []
//     }
//   },

//   async getSubCategories(categoryId?: string) {
//     try {
//       console.log('🏷️ Chargement des sous-catégories pour:', categoryId)
      
//       let query = supabase
//         .from('sub_categories')
//         .select('*')
      
//       if (categoryId) {
//         query = query.eq('category_id', categoryId)
//       }
      
//       const { data, error } = await query.order('name')
      
//       if (error) {
//         console.error('❌ Erreur lors du chargement des sous-catégories:', error)
//         throw error
//       }
      
//       console.log(`✅ ${data?.length || 0} sous-catégories chargées`)
//       return data || []
//     } catch (error) {
//       console.error('💥 Exception dans getSubCategories:', error)
//       return []
//     }
//   },

//   async createProduct(product: Omit<Product, 'id' | 'created_at'>) {
//     try {
//       console.log('➕ Création d\'un produit:', product.name)
      
//       const { data, error } = await supabase
//         .from('products')
//         .insert([{
//           name: product.name,
//           description: product.description,
//           price: product.price,
//           image_url: product.image_url,
//           category_id: product.category_id,
//           sub_category_id: product.sub_category_id,
//           is_active: product.is_active !== undefined ? product.is_active : true
//         }])
//         .select()
//         .single()
      
//       if (error) {
//         console.error('❌ Erreur lors de la création du produit:', error)
//         throw error
//       }
      
//       console.log('✅ Produit créé avec ID:', data.id)
//       return data
//     } catch (error) {
//       console.error('💥 Exception dans createProduct:', error)
//       throw error
//     }
//   },

//   async updateProduct(id: string, updates: Partial<Product>) {
//     try {
//       console.log('✏️ Mise à jour du produit:', id)
      
//       const { data, error } = await supabase
//         .from('products')
//         .update(updates)
//         .eq('id', id)
//         .select()
//         .single()
      
//       if (error) {
//         console.error('❌ Erreur lors de la mise à jour du produit:', error)
//         throw error
//       }
      
//       console.log('✅ Produit mis à jour')
//       return data
//     } catch (error) {
//       console.error('💥 Exception dans updateProduct:', error)
//       throw error
//     }
//   },

//   async deleteProduct(id: string) {
//     try {
//       console.log('🗑️ Suppression du produit:', id)
      
//       const { error } = await supabase
//         .from('products')
//         .delete()
//         .eq('id', id)
      
//       if (error) {
//         console.error('❌ Erreur lors de la suppression du produit:', error)
//         throw error
//       }
      
//       console.log('✅ Produit supprimé')
//     } catch (error) {
//       console.error('💥 Exception dans deleteProduct:', error)
//       throw error
//     }
//   }
// }

// // Service pour l'authentification admin
// export const adminAuthService = {
//   async login(email: string, password: string) {
//     try {
//       console.log('🔐 Tentative de connexion admin:', email)
      
//       const { data, error } = await supabase.rpc('admin_login', {
//         p_email: email,
//         p_password: password
//       })

//       if (error) {
//         console.error('❌ Erreur RPC admin_login:', error)
//         throw error
//       }

//       if (!data || data.length === 0) {
//         throw new Error('Aucune réponse du serveur')
//       }

//       const result = data[0]

//       if (!result.success) {
//         throw new Error(result.message || 'Identifiants incorrects')
//       }

//       return {
//         success: true,
//         message: result.message,
//         session: {
//           email,
//           shopName: result.shop_name,
//           whatsappNumber: result.whatsapp_number,
//           loggedInAt: new Date().toISOString(),
//           isAuthenticated: true
//         }
//       }

//     } catch (error: any) {
//       console.error('💥 Erreur de connexion admin:', error)
//       return {
//         success: false,
//         message: error.message || 'Erreur de connexion'
//       }
//     }
//   }
// }

// // Fonction utilitaire pour tester la connexion
// export const testSupabaseConnection = async () => {
//   console.log('🔍 Test de connexion Supabase...')
  
//   try {
//     // Test 1: Connexion de base
//     const { data: session, error: sessionError } = await supabase.auth.getSession()
    
//     if (sessionError) {
//       console.error('❌ Erreur session:', sessionError)
//       return false
//     }
    
//     console.log('✅ Session test:', session ? 'Connecté' : 'Non connecté')
    
//     // Test 2: Récupérer les catégories
//     const categories = await productsService.getCategories()
//     console.log(`✅ Catégories: ${categories.length} trouvées`)
    
//     // Test 3: Tester les RPC
//     const { data: rpcTest, error: rpcError } = await supabase.rpc('test_connection')
    
//     if (rpcError && !rpcError.message.includes('function "test_connection" does not exist')) {
//       console.error('❌ Erreur RPC:', rpcError)
//     } else {
//       console.log('✅ RPC fonctionnel')
//     }
    
//     return true
    
//   } catch (error: any) {
//     console.error('💥 Erreur de test:', error)
//     return false
//   }
// }

// // Exporter aussi par défaut pour compatibilité
// export default {
//   supabase,
//   productsService,
//   adminAuthService,
//   testSupabaseConnection
// }




// import { createClient } from '@supabase/supabase-js'

// // Vérifier les variables d'environnement
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// if (!supabaseUrl || !supabaseAnonKey) {
//   console.error('❌ Variables d\'environnement Supabase manquantes!')
//   console.log('VITE_SUPABASE_URL:', supabaseUrl)
//   console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? '***' + supabaseAnonKey.slice(-4) : 'non défini')
//   throw new Error('Variables d\'environnement Supabase manquantes')
// }

// console.log('🔗 Connexion à Supabase...')

// // Créer le client Supabase AVEC les bonnes options
// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   auth: {
//     persistSession: false, // Important: désactive la persistance de session
//     autoRefreshToken: false,
//     detectSessionInUrl: false
//   },
//   global: {
//     headers: {
//       'apikey': supabaseAnonKey,
//       'Authorization': `Bearer ${supabaseAnonKey}`
//     }
//   }
// })

// // Tester la connexion
// supabase.auth.getSession().then(({ data, error }) => {
//   if (error) {
//     console.error('❌ Erreur de session:', error.message)
//   } else {
//     console.log('✅ Session:', data.session ? 'Connecté' : 'Non connecté (normal)')
//   }
// })

// // Types
// export interface Category {
//   id: string;
//   name: string;
//   slug: string;
//   created_at: string;
// }

// export interface SubCategory {
//   id: string;
//   category_id: string;
//   name: string;
//   slug: string;
//   created_at: string;
// }

// export interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   image_url: string;
//   category_id: string;
//   sub_category_id: string;
//   is_active: boolean;
//   created_at: string;
//   category?: Category;
//   sub_category?: SubCategory;
// }

// // Service des produits - Version SIMPLIFIÉE
// export const productsService = {
//   async getAll() {
//     try {
//       console.log('📦 Chargement des produits...')
//       const { data, error } = await supabase
//         .from('products')
//         .select(`
//           *,
//           category:categories(*),
//           sub_category:sub_categories(*)
//         `)
//         .order('created_at', { ascending: false })
      
//       if (error) {
//         console.error('❌ Erreur produits:', error)
//         // Retourner un tableau vide au lieu de throw pour éviter les crashs
//         return []
//       }
      
//       console.log(`✅ ${data?.length || 0} produits chargés`)
//       return data || []
//     } catch (error) {
//       console.error('💥 Exception produits:', error)
//       return []
//     }
//   },

//   async getCategories() {
//     try {
//       console.log('🏷️ Chargement catégories...')
//       const { data, error } = await supabase
//         .from('categories')
//         .select('*')
//         .order('name')
      
//       if (error) {
//         console.error('❌ Erreur catégories:', error)
//         return []
//       }
      
//       console.log(`✅ ${data?.length || 0} catégories chargées`)
//       return data || []
//     } catch (error) {
//       console.error('💥 Exception catégories:', error)
//       return []
//     }
//   },

//   async getSubCategories(categoryId?: string) {
//     try {
//       console.log('🏷️ Chargement sous-catégories...')
      
//       let query = supabase
//         .from('sub_categories')
//         .select('*')
      
//       if (categoryId) {
//         query = query.eq('category_id', categoryId)
//       }
      
//       const { data, error } = await query.order('name')
      
//       if (error) {
//         console.error('❌ Erreur sous-catégories:', error)
//         return []
//       }
      
//       console.log(`✅ ${data?.length || 0} sous-catégories chargées`)
//       return data || []
//     } catch (error) {
//       console.error('💥 Exception sous-catégories:', error)
//       return []
//     }
//   },

//   async createProduct(product: Omit<Product, 'id' | 'created_at'>) {
//     try {
//       console.log('➕ Création produit:', product)
      
//       const { data, error } = await supabase
//         .from('products')
//         .insert([{
//           name: product.name,
//           description: product.description,
//           price: product.price,
//           image_url: product.image_url,
//           category_id: product.category_id,
//           sub_category_id: product.sub_category_id,
//           is_active: product.is_active !== undefined ? product.is_active : true
//         }])
//         .select()
//         .single()
      
//       if (error) {
//         console.error('❌ Erreur création produit:', error)
        
//         // Message d'erreur plus clair
//         if (error.message.includes('row-level security')) {
//           throw new Error('ERREUR RLS: Exécutez le script SQL de correction dans Supabase')
//         } else if (error.message.includes('401')) {
//           throw new Error('ERREUR 401: Clé API invalide. Vérifiez vos variables d\'environnement.')
//         } else if (error.message.includes('foreign key constraint')) {
//           throw new Error('ERREUR: Catégorie ou sous-catégorie invalide')
//         }
        
//         throw new Error(error.message || 'Erreur inconnue')
//       }
      
//       console.log('✅ Produit créé:', data)
//       return data
      
//     } catch (error: any) {
//       console.error('💥 Exception création:', error)
//       throw error
//     }
//   },

//   async updateProduct(id: string, updates: Partial<Product>) {
//     try {
//       console.log('✏️ Mise à jour produit:', id)
      
//       const { data, error } = await supabase
//         .from('products')
//         .update(updates)
//         .eq('id', id)
//         .select()
//         .single()
      
//       if (error) {
//         console.error('❌ Erreur mise à jour:', error)
//         throw error
//       }
      
//       console.log('✅ Produit mis à jour')
//       return data
//     } catch (error) {
//       console.error('💥 Exception mise à jour:', error)
//       throw error
//     }
//   },

//   async deleteProduct(id: string) {
//     try {
//       console.log('🗑️ Suppression produit:', id)
      
//       const { error } = await supabase
//         .from('products')
//         .delete()
//         .eq('id', id)
      
//       if (error) {
//         console.error('❌ Erreur suppression:', error)
//         throw error
//       }
      
//       console.log('✅ Produit supprimé')
//     } catch (error) {
//       console.error('💥 Exception suppression:', error)
//       throw error
//     }
//   }
// }

// // Fonction pour tester la connexion
// export const testSupabaseConnection = async () => {
//   console.log('🔍 Test connexion Supabase...')
  
//   try {
//     // Test 1: Connexion basique
//     const { data, error } = await supabase
//       .from('categories')
//       .select('count')
//       .limit(1)
    
//     if (error) {
//       console.error('❌ Test échoué:', error.message)
//       return false
//     }
    
//     console.log('✅ Connexion OK')
//     return true
    
//   } catch (error: any) {
//     console.error('💥 Exception test:', error.message)
//     return false
//   }
// }

// // Exposer pour le débogage
// declare global {
//   interface Window {
//     testSupabaseConnection: () => Promise<boolean>;
//     supabaseClient: any;
//   }
// }

// if (typeof window !== 'undefined') {
//   window.testSupabaseConnection = testSupabaseConnection
//   window.supabaseClient = supabase
// }



import { createClient } from '@supabase/supabase-js'
import { normalizeProductImages, normalizeProductsImages } from './imageNormalizer'

// Vérifier les variables d'environnement
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Variables d\'environnement Supabase manquantes!')
  throw new Error('Variables d\'environnement Supabase manquantes')
}

console.log('🔗 Connexion à Supabase...')

// Créer le client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
})

// Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface SubCategory {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: string;
  sub_category_id: string;
  is_active: boolean;
  created_at: string;
  category?: Category;
  sub_category?: SubCategory;
}

// Service des produits COMPLET
export const productsService = {
  async getAll(_includeInactive = false) {
    try {
      console.log('📦 Chargement de tous les produits...')
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(*),
          sub_category:sub_categories(*)
        `)
        .order('created_at', { ascending: false })
      
      if (error) {
        console.error('❌ Erreur produits:', error)
        return []
      }
      
      console.log(`✅ ${data?.length || 0} produits chargés`)
      
      // Normaliser les images (convertir JSONB en array si nécessaire)
      return normalizeProductsImages(data || [])
    } catch (error) {
      console.error('💥 Exception produits:', error)
      return []
    }
  },

  async getCategories() {
    try {
      console.log('🏷️ Chargement catégories...')
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name')
      
      if (error) {
        console.error('❌ Erreur catégories:', error)
        return []
      }
      
      console.log(`✅ ${data?.length || 0} catégories chargées`)
      return data || []
    } catch (error) {
      console.error('💥 Exception catégories:', error)
      return []
    }
  },

  async getSubCategories(categoryId?: string) {
    try {
      console.log('🏷️ Chargement sous-catégories...')
      
      let query = supabase
        .from('sub_categories')
        .select('*')
      
      if (categoryId) {
        query = query.eq('category_id', categoryId)
      }
      
      const { data, error } = await query.order('name')
      
      if (error) {
        console.error('❌ Erreur sous-catégories:', error)
        return []
      }
      
      console.log(`✅ ${data?.length || 0} sous-catégories chargées`)
      return data || []
    } catch (error) {
      console.error('💥 Exception sous-catégories:', error)
      return []
    }
  },

  async getByCategory(categoryId: string, includeInactive = false) {
    try {
      console.log(`🔍 Filtrage par catégorie ID: ${categoryId}`)
      let query = supabase
        .from('products')
        .select(`
          *,
          category:categories(*),
          sub_category:sub_categories(*)
        `)
        .eq('category_id', categoryId)

      if (!includeInactive) {
        query = query.eq('is_active', true)
      }

      const { data, error } = await query.order('created_at', { ascending: false })
      
      if (error) {
        console.error('❌ Erreur filtre catégorie:', error)
        return []
      }
      
      console.log(`✅ ${data?.length || 0} produits pour cette catégorie`)
      return normalizeProductsImages(data || [])
    } catch (error) {
      console.error('💥 Exception filtre catégorie:', error)
      return []
    }
  },

  async getBySubCategory(subCategoryId: string, includeInactive = false) {
    try {
      console.log(`🔍 Filtrage par sous-catégorie ID: ${subCategoryId}`)
      let query = supabase
        .from('products')
        .select(`
          *,
          category:categories(*),
          sub_category:sub_categories(*)
        `)
        .eq('sub_category_id', subCategoryId)

      if (!includeInactive) {
        query = query.eq('is_active', true)
      }

      const { data, error } = await query.order('created_at', { ascending: false })
      
      if (error) {
        console.error('❌ Erreur filtre sous-catégorie:', error)
        return []
      }
      
      console.log(`✅ ${data?.length || 0} produits pour cette sous-catégorie`)
      return normalizeProductsImages(data || [])
    } catch (error) {
      console.error('💥 Exception filtre sous-catégorie:', error)
      return []
    }
  },

  async getProductsWithFilters(categoryId?: string, subCategoryId?: string, includeInactive = false) {
    try {
      console.log('🔍 Filtrage avancé:', { categoryId, subCategoryId })
      
      let query = supabase
        .from('products')
        .select(`
          *,
          category:categories(*),
          sub_category:sub_categories(*)
        `)

      if (!includeInactive) {
        query = query.eq('is_active', true)
      }
      
      if (subCategoryId) {
        query = query.eq('sub_category_id', subCategoryId)
      } else if (categoryId) {
        query = query.eq('category_id', categoryId)
      }
      
      const { data, error } = await query.order('created_at', { ascending: false })
      
      if (error) {
        console.error('❌ Erreur filtrage avancé:', error)
        return []
      }
      
      console.log(`✅ ${data?.length || 0} produits filtrés`)
      return normalizeProductsImages(data || [])
    } catch (error) {
      console.error('💥 Exception filtrage avancé:', error)
      return []
    }
  },

  async createProduct(product: Omit<Product, 'id' | 'created_at'>) {
    try {
      console.log('➕ Création produit:', product.name)
      
      const { data, error } = await supabase
        .from('products')
        .insert([{
          name: product.name,
          description: product.description,
          price: product.price,
          image_url: product.image_url,
          images: (product as any).images || (product.image_url ? [product.image_url] : []),
          category_id: product.category_id,
          sub_category_id: product.sub_category_id,
          is_active: product.is_active !== undefined ? product.is_active : true
        }])
        .select()
        .single()
      
      if (error) {
        console.error('❌ Erreur création produit:', error)
        throw error
      }
      
      console.log('✅ Produit créé:', data.id)
      return normalizeProductImages(data)
      
    } catch (error: any) {
      console.error('💥 Exception création:', error)
      throw error
    }
  },

  async updateProduct(id: string, updates: Partial<Product>) {
    try {
      console.log('✏️ Mise à jour produit:', id)
      
      const { data, error } = await supabase
        .from('products')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
      
      if (error) {
        console.error('❌ Erreur mise à jour:', error)
        throw error
      }
      
      console.log('✅ Produit mis à jour')
      return normalizeProductImages(data)
    } catch (error) {
      console.error('💥 Exception mise à jour:', error)
      throw error
    }
  },

  async deleteProduct(id: string) {
    try {
      console.log('🗑️ Suppression produit:', id)
      
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id)
      
      if (error) {
        console.error('❌ Erreur suppression:', error)
        throw error
      }
      
      console.log('✅ Produit supprimé')
    } catch (error) {
      console.error('💥 Exception suppression:', error)
      throw error
    }
  }
}

// Fonction pour tester la connexion
export const testSupabaseConnection = async () => {
  console.log('🔍 Test connexion Supabase...')
  
  try {
    const { error } = await supabase
      .from('categories')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('❌ Test échoué:', error.message)
      return false
    }
    
    console.log('✅ Connexion OK')
    return true
    
  } catch (error: any) {
    console.error('💥 Exception test:', error.message)
    return false
  }
}

// Exposer pour le débogage
declare global {
  interface Window {
    testSupabaseConnection: () => Promise<boolean>;
    supabaseClient: any;
  }
}

if (typeof window !== 'undefined') {
  window.testSupabaseConnection = testSupabaseConnection
  window.supabaseClient = supabase
}

// Service basique pour les commandes (orders)
export const ordersService = {
  async getAll() {
    try {
      console.log('📦 Chargement des commandes...')
      const res = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false })

      // Log full response for debugging
      console.log('ordersService.getAll response:', res)

      const { data, error } = res as any

      if (error) {
        // Print detailed error info
        try {
          console.error('❌ Erreur chargement orders:', JSON.stringify(error))
        } catch (e) {
          console.error('❌ Erreur chargement orders (non-serializable):', error)
        }
        return []
      }

      return data || []
    } catch (err) {
      console.error('💥 Exception orders:', err)
      return []
    }
  },

  async getById(id: string) {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('❌ Erreur get order:', error)
        return null
      }
      return data
    } catch (err) {
      console.error('💥 Exception get order:', err)
      return null
    }
  }
}

// Create order
export async function createOrder(payload: { items: any; total?: number; whatsapp_number?: string; customer_name?: string; delivery_address?: string }) {
  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([{
        items: payload.items,
        total: payload.total,
        whatsapp_number: payload.whatsapp_number,
        customer_name: payload.customer_name,
        delivery_address: payload.delivery_address
      }])
      .select()
      .single()

    if (error) {
      console.error('❌ Erreur createOrder:', error)
      throw error
    }

    return data
  } catch (err) {
    console.error('💥 Exception createOrder:', err)
    throw err
  }
}