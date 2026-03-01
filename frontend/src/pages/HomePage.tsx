import { useNavigate } from '@tanstack/react-router';
import { ChevronRight, Star, Clock, Truck, Flame, Award, Heart } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Premium Quality',
      desc: 'Made with the finest ingredients every morning',
      gradient: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 60))',
      bg: 'linear-gradient(135deg, oklch(0.22 0.07 38), oklch(0.25 0.06 60))',
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: 'Fresh Daily',
      desc: 'Baked fresh to order, never pre-made',
      gradient: 'linear-gradient(135deg, oklch(0.65 0.22 355), oklch(0.60 0.22 320))',
      bg: 'linear-gradient(135deg, oklch(0.22 0.07 355), oklch(0.24 0.06 320))',
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Fast Delivery',
      desc: 'Hot waffles delivered to your door',
      gradient: 'linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.62 0.22 260))',
      bg: 'linear-gradient(135deg, oklch(0.22 0.07 295), oklch(0.24 0.06 260))',
    },
  ];

  const stats = [
    { value: '10K+', label: 'Happy Customers', color: 'oklch(0.68 0.22 38)' },
    { value: '6', label: 'Waffle Varieties', color: 'oklch(0.65 0.22 355)' },
    { value: '30 min', label: 'Avg Delivery', color: 'oklch(0.52 0.22 295)' },
    { value: '4.9★', label: 'Rating', color: 'oklch(0.78 0.18 72)' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[460px] sm:h-[520px] w-full">
          <img
            src="/assets/generated/hero-banner.dim_1400x500.png"
            alt="Golden Waffle House - Fresh Waffles"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, oklch(0.10 0.08 280 / 0.95) 0%, oklch(0.16 0.10 295 / 0.80) 50%, oklch(0.13 0.08 320 / 0.55) 100%)' }}
          />

          {/* Decorative circles */}
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-20 animate-float"
            style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }} />
          <div className="absolute bottom-10 right-1/4 w-20 h-20 rounded-full opacity-15 animate-float"
            style={{ animationDelay: '1s', background: 'linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.62 0.22 260))' }} />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
              <div className="max-w-xl animate-fade-in">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white mb-4"
                  style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }}
                >
                  ✦ Freshly Made Daily ✦
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                  Golden Waffle
                  <br />
                  <span className="shimmer-text">House</span>
                </h1>
                <p className="text-white/85 text-base sm:text-lg mb-8 leading-relaxed font-semibold animate-fade-in-delay">
                  Crispy on the outside, fluffy on the inside. Discover our handcrafted waffles made with love and the finest ingredients.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-delay-2">
                  <button
                    onClick={() => navigate({ to: '/menu' })}
                    className="flex items-center justify-center gap-2 px-8 h-13 py-3.5 rounded-xl text-base font-black text-white shadow-orange-lg transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }}
                  >
                    Order Now
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigate({ to: '/menu' })}
                    className="flex items-center justify-center gap-2 px-8 h-13 py-3.5 rounded-xl text-base font-black text-white border-2 border-white/40 hover:bg-white/10 transition-all duration-200"
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'linear-gradient(135deg, oklch(0.18 0.08 280), oklch(0.25 0.10 295))' }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-black" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-xs sm:text-sm text-white/70 font-semibold mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 sm:py-18 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-2">
              Why Choose <span className="shimmer-text">Us?</span>
            </h2>
            <p className="text-muted-foreground font-semibold">We put love in every waffle we make</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="waffle-card-hover flex flex-col items-center text-center gap-4 p-7 rounded-2xl animate-slide-up"
                style={{ background: f.bg, border: '2px solid oklch(1 0 0 / 10%)', boxShadow: '0 4px 20px oklch(0.10 0.08 280 / 0.30)' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-card"
                  style={{ background: f.gradient }}
                >
                  {f.icon}
                </div>
                <h3 className="font-black text-foreground text-lg">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-semibold">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Waffles Preview */}
      <section className="py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-3">
              Our <span className="shimmer-text">Signature Waffles</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto font-semibold">
              From classic butter to indulgent chocolate, every waffle is crafted to perfection.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {[
              { src: '/assets/generated/classic-waffle.dim_400x400.png', name: 'Classic Butter', price: '₹149', color: 'oklch(0.68 0.22 38)' },
              { src: '/assets/generated/chocolate-waffle.dim_400x400.png', name: 'Chocolate Dream', price: '₹229', color: 'oklch(0.65 0.22 355)' },
              { src: '/assets/generated/belgian-waffle.dim_400x400.png', name: 'Belgian Royale', price: '₹279', color: 'oklch(0.52 0.22 295)' },
            ].map((w, i) => (
              <div
                key={i}
                className="waffle-card-hover rounded-2xl overflow-hidden aspect-square relative group cursor-pointer"
                style={{ boxShadow: `0 8px 24px ${w.color.replace(')', ' / 0.25)')}`, border: `2px solid ${w.color}` }}
                onClick={() => navigate({ to: '/menu' })}
              >
                <img src={w.src} alt={w.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  className="absolute inset-0 flex flex-col items-start justify-end p-4"
                  style={{ background: 'linear-gradient(to top, oklch(0.10 0.08 280 / 0.90) 0%, transparent 60%)' }}
                >
                  <span className="text-white font-black text-sm sm:text-base">{w.name}</span>
                  <span className="font-black text-sm" style={{ color: w.color }}>{w.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate({ to: '/menu' })}
              className="inline-flex items-center gap-2 px-10 py-3.5 rounded-xl text-base font-black text-white shadow-orange transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }}
            >
              See Full Menu
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 sm:py-18 mx-4 sm:mx-8 rounded-3xl mb-8 overflow-hidden relative"
        style={{ background: 'linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.62 0.22 260), oklch(0.65 0.22 355))' }}>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'white', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
          style={{ background: 'white', transform: 'translate(-30%, 30%)' }} />
        <div className="relative text-center px-6">
          <p className="text-white/80 text-sm font-black uppercase tracking-widest mb-2">Limited Time Offer</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Free Delivery on All Orders! 🛵</h2>
          <p className="text-white/85 text-base font-semibold mb-6 max-w-md mx-auto">
            Order your favourite waffles now and get them delivered hot to your doorstep — absolutely free!
          </p>
          <button
            onClick={() => navigate({ to: '/menu' })}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-black shadow-card-lg transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: 'oklch(0.14 0.05 285)', color: 'oklch(0.95 0.01 85)' }}
          >
            Order Now
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 mt-4" style={{ background: 'linear-gradient(135deg, oklch(0.10 0.06 280), oklch(0.16 0.08 295))' }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }}
            >
              <span className="text-white text-sm">🧇</span>
            </div>
            <span className="font-black text-white text-lg">Golden Waffle House</span>
          </div>
          <p className="text-sm text-white/60 font-semibold">© {new Date().getFullYear()} Golden Waffle House. All rights reserved.</p>
          <p className="text-xs text-white/40 font-semibold">
            Built with{' '}
            <Heart className="inline w-3 h-3" style={{ color: 'oklch(0.65 0.22 355)' }} />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'golden-waffle-house')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-black"
              style={{ color: 'oklch(0.78 0.18 72)' }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
