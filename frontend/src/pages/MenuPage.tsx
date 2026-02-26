import { useNavigate } from '@tanstack/react-router';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ShoppingCart, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function MenuPage() {
  const navigate = useNavigate();
  const { totalItems, totalPrice } = useCart();

  return (
    <main className="min-h-screen pb-24">
      {/* Page Header */}
      <section
        className="py-14 sm:py-18 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.18 0.08 280) 0%, oklch(0.25 0.10 295) 50%, oklch(0.22 0.08 320) 100%)' }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"
          style={{ background: 'linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.62 0.22 260))' }} />

        <div className="relative max-w-6xl mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white mb-4"
            style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Our Menu
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
            Choose Your <span className="shimmer-text">Waffle</span>
          </h1>
          <p className="text-white/75 text-base font-semibold max-w-xl mx-auto">
            Handcrafted with love, served fresh. Pick your favourite and we'll deliver it hot to your door.
          </p>
        </div>
      </section>

      {/* Rainbow divider */}
      <div className="h-1 w-full" style={{
        background: 'linear-gradient(90deg, oklch(0.68 0.22 38), oklch(0.65 0.22 355), oklch(0.52 0.22 295), oklch(0.62 0.18 185), oklch(0.60 0.18 145))'
      }} />

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-scale-in">
          <button
            onClick={() => navigate({ to: '/cart' })}
            className="flex items-center gap-3 px-7 h-14 rounded-full text-base font-black text-white shadow-orange-lg transition-all duration-200 hover:scale-105 active:scale-95 animate-pulse-glow"
            style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }}
          >
            <ShoppingCart className="w-5 h-5" />
            View Cart ({totalItems} item{totalItems !== 1 ? 's' : ''}) — ₹{totalPrice}
          </button>
        </div>
      )}
    </main>
  );
}
