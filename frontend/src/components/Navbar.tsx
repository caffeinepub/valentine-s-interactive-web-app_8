import { useNavigate } from '@tanstack/react-router';
import { ShoppingCart, Utensils, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 shadow-card" style={{
      background: 'linear-gradient(135deg, oklch(0.18 0.08 280) 0%, oklch(0.25 0.10 295) 50%, oklch(0.22 0.08 320) 100%)'
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate({ to: '/' })}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-orange"
            style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }}>
            <Utensils className="w-5 h-5 text-white" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-lg font-black text-white tracking-tight">Golden Waffle</span>
            <span className="text-xs font-semibold" style={{ color: 'oklch(0.82 0.18 72)' }}>House ✦</span>
          </div>
          <span className="text-lg font-black text-white tracking-tight sm:hidden">GWH</span>
        </button>

        {/* Nav Links */}
        <nav className="flex items-center gap-1">
          <button
            onClick={() => navigate({ to: '/' })}
            className="px-4 py-2 rounded-xl text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            Home
          </button>
          <button
            onClick={() => navigate({ to: '/menu' })}
            className="px-4 py-2 rounded-xl text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            Menu
          </button>
          <button
            onClick={() => navigate({ to: '/cart' })}
            className="relative ml-1 w-10 h-10 rounded-xl flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs font-black text-white rounded-full shadow-orange"
                style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }}
              >
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>
        </nav>
      </div>

      {/* Rainbow accent bar */}
      <div className="h-0.5 w-full" style={{
        background: 'linear-gradient(90deg, oklch(0.68 0.22 38), oklch(0.65 0.22 355), oklch(0.52 0.22 295), oklch(0.62 0.18 185), oklch(0.60 0.18 145))'
      }} />
    </header>
  );
}
