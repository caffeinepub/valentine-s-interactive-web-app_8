import { useNavigate } from '@tanstack/react-router';
import { useCart } from '../context/CartContext';
import CartItemRow from '../components/CartItemRow';
import CheckoutSection from '../components/CheckoutSection';
import { ShoppingCart, ArrowLeft, UtensilsCrossed, Sparkles } from 'lucide-react';

export default function CartPage() {
  const { items, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen pb-16">
      {/* Page Header */}
      <section
        className="py-10 sm:py-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.18 0.08 280) 0%, oklch(0.25 0.10 295) 50%, oklch(0.22 0.08 320) 100%)' }}
      >
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"
          style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <button
            onClick={() => navigate({ to: '/menu' })}
            className="flex items-center gap-2 text-white/70 hover:text-white font-bold text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Menu
          </button>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }}
            >
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">Your Cart</h1>
              {totalItems > 0 && (
                <p className="text-white/60 text-sm font-semibold">{totalItems} item{totalItems !== 1 ? 's' : ''} · ₹{totalPrice}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rainbow divider */}
      <div className="h-1 w-full" style={{
        background: 'linear-gradient(90deg, oklch(0.68 0.22 38), oklch(0.65 0.22 355), oklch(0.52 0.22 295), oklch(0.62 0.18 185), oklch(0.60 0.18 145))'
      }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {items.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div
              className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6 animate-bounce-in"
              style={{ background: 'linear-gradient(135deg, oklch(0.22 0.07 295), oklch(0.25 0.06 320))' }}
            >
              <UtensilsCrossed className="w-12 h-12" style={{ color: 'oklch(0.62 0.22 295)' }} />
            </div>
            <h2 className="text-2xl font-black text-foreground mb-2">Your cart is empty!</h2>
            <p className="text-muted-foreground font-semibold mb-8 max-w-sm">
              Looks like you haven't added any waffles yet. Browse our delicious menu!
            </p>
            <button
              onClick={() => navigate({ to: '/menu' })}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-black text-white shadow-orange transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }}
            >
              <Sparkles className="w-5 h-5" />
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-3">
              <div
                className="bg-card rounded-2xl overflow-hidden shadow-card-lg"
                style={{ border: '2px solid oklch(1 0 0 / 10%)' }}
              >
                {/* Cart header */}
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{ background: 'linear-gradient(135deg, oklch(0.22 0.07 295), oklch(0.25 0.06 320))' }}
                >
                  <h2 className="font-black text-foreground flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" style={{ color: 'oklch(0.62 0.22 295)' }} />
                    Cart Items
                  </h2>
                  <span
                    className="text-xs font-black px-3 py-1 rounded-full text-white"
                    style={{ background: 'linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.62 0.22 260))' }}
                  >
                    {totalItems} item{totalItems !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="px-5 divide-y divide-border">
                  {items.map((item, index) => (
                    <CartItemRow key={item.product.id} item={item} index={index} />
                  ))}
                </div>
                {/* Cart footer total */}
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{ background: 'linear-gradient(135deg, oklch(0.22 0.07 38), oklch(0.25 0.06 60))' }}
                >
                  <span className="font-black text-foreground">Subtotal</span>
                  <span className="text-xl font-black" style={{ color: 'oklch(0.72 0.22 38)' }}>₹{totalPrice}</span>
                </div>
              </div>
            </div>

            {/* Checkout */}
            <div className="lg:col-span-2">
              <CheckoutSection />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
