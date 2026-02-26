import { CartItem } from '../types/product';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemRowProps {
  item: CartItem;
  index?: number;
}

const rowAccents = [
  'oklch(0.68 0.22 38)',
  'oklch(0.65 0.22 355)',
  'oklch(0.52 0.22 295)',
  'oklch(0.62 0.18 185)',
  'oklch(0.78 0.18 72)',
  'oklch(0.60 0.18 145)',
];

export default function CartItemRow({ item, index = 0 }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCart();
  const accent = rowAccents[index % rowAccents.length];

  return (
    <div
      className="flex items-center gap-3 sm:gap-4 py-4 border-b border-border last:border-0"
    >
      {/* Image */}
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0"
        style={{ border: `2px solid ${accent}`, boxShadow: `0 4px 12px ${accent.replace(')', ' / 0.20)')}` }}
      >
        <img
          src={item.product.imageUrl}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-black text-foreground text-sm sm:text-base truncate">{item.product.name}</h4>
        <p className="text-sm font-bold mt-0.5" style={{ color: accent }}>₹{item.product.price} each</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg flex items-center justify-center text-white font-bold transition-all hover:scale-110 active:scale-95"
          style={{ background: accent }}
          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
        >
          <Minus className="w-3 h-3" />
        </button>
        <span className="w-7 text-center font-black text-base text-foreground">{item.quantity}</span>
        <button
          className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg flex items-center justify-center text-white font-bold transition-all hover:scale-110 active:scale-95"
          style={{ background: accent }}
          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>

      {/* Line Total */}
      <div className="text-right min-w-[64px]">
        <p className="font-black text-sm sm:text-base" style={{ color: accent }}>
          ₹{item.product.price * item.quantity}
        </p>
      </div>

      {/* Remove */}
      <button
        className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-200 hover:scale-110 flex-shrink-0"
        style={{ background: 'transparent' }}
        onMouseEnter={e => (e.currentTarget.style.background = 'oklch(0.577 0.245 27.325)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        onClick={() => removeItem(item.product.id)}
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
