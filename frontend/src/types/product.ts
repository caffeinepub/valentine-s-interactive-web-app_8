export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
