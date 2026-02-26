import { Product } from '../types/product';
import { useCart } from '../context/CartContext';
import { Plus, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const badgeColors: Record<string, string> = {
  'Best Seller': 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 60))',
  'Fan Favorite': 'linear-gradient(135deg, oklch(0.65 0.22 355), oklch(0.60 0.22 320))',
  'Premium': 'linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.62 0.22 260))',
  'New': 'linear-gradient(135deg, oklch(0.60 0.18 145), oklch(0.55 0.18 185))',
};

const cardAccents = [
  { border: 'oklch(0.68 0.22 38)', glow: 'oklch(0.68 0.22 38 / 0.15)', btn: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 60))' },
  { border: 'oklch(0.65 0.22 355)', glow: 'oklch(0.65 0.22 355 / 0.15)', btn: 'linear-gradient(135deg, oklch(0.65 0.22 355), oklch(0.60 0.22 320))' },
  { border: 'oklch(0.52 0.22 295)', glow: 'oklch(0.52 0.22 295 / 0.15)', btn: 'linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.62 0.22 260))' },
  { border: 'oklch(0.62 0.18 185)', glow: 'oklch(0.62 0.18 185 / 0.15)', btn: 'linear-gradient(135deg, oklch(0.62 0.18 185), oklch(0.55 0.18 220))' },
  { border: 'oklch(0.78 0.18 72)', glow: 'oklch(0.78 0.18 72 / 0.15)', btn: 'linear-gradient(135deg, oklch(0.78 0.18 72), oklch(0.68 0.22 38))' },
  { border: 'oklch(0.60 0.18 145)', glow: 'oklch(0.60 0.18 145 / 0.15)', btn: 'linear-gradient(135deg, oklch(0.60 0.18 145), oklch(0.62 0.18 185))' },
];

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCart();
  const accent = cardAccents[(product.id - 1) % cardAccents.length];

  const cartItem = items.find(i => i.product.id === product.id);
  const inCart = cartItem && cartItem.quantity > 0;

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart!`, {
      description: `₹${product.price} each`,
      duration: 2000,
    });
  };

  return (
    <div
      className="waffle-card-hover bg-card rounded-2xl overflow-hidden flex flex-col"
      style={{
        border: `2px solid ${accent.border}`,
        boxShadow: `0 4px 20px ${accent.glow}`,
      }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden" style={{ background: accent.glow }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-108"
          loading="lazy"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span
              className="text-xs font-black text-white px-3 py-1 rounded-full shadow-card"
              style={{ background: badgeColors[product.badge] || badgeColors['New'] }}
            >
              {product.badge}
            </span>
          </div>
        )}
        {inCart && (
          <div className="absolute top-3 right-3">
            <span
              className="text-xs font-black text-white px-2.5 py-1 rounded-full"
              style={{ background: 'linear-gradient(135deg, oklch(0.18 0.08 280), oklch(0.25 0.10 295))' }}
            >
              ×{cartItem.quantity} in cart
            </span>
          </div>
        )}
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: `linear-gradient(to top, ${accent.glow.replace('/ 0.15', '/ 0.6')}, transparent)` }} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex-1">
          <h3 className="font-black text-foreground text-lg leading-tight mb-1">{product.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Price</span>
            <span
              className="text-2xl font-black"
              style={{ color: accent.border }}
            >
              ₹{product.price}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-black text-white shadow-card transition-all duration-200 hover:scale-105 hover:shadow-card-lg active:scale-95"
            style={{ background: accent.btn }}
          >
            <Plus className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
