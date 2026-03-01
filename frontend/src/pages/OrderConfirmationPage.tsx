import { useNavigate, useParams } from '@tanstack/react-router';
import { CheckCircle, ShoppingBag, Home, Sparkles, Clock, MapPin } from 'lucide-react';

export default function OrderConfirmationPage() {
  const navigate = useNavigate();
  const { orderId } = useParams({ from: '/order-confirmation/$orderId' });

  const waffleImages = [
    '/assets/generated/classic-waffle.dim_400x400.png',
    '/assets/generated/chocolate-waffle.dim_400x400.png',
    '/assets/generated/strawberry-waffle.dim_400x400.png',
  ];

  const steps = [
    { icon: '✅', label: 'Order Confirmed', done: true, color: 'oklch(0.60 0.18 145)' },
    { icon: '👨‍🍳', label: 'Preparing', done: true, color: 'oklch(0.68 0.22 38)' },
    { icon: '🛵', label: 'On the Way', done: false, color: 'oklch(0.52 0.22 295)' },
    { icon: '🏠', label: 'Delivered', done: false, color: 'oklch(0.65 0.22 355)' },
  ];

  return (
    <main className="min-h-screen pb-16">
      {/* Hero confirmation banner */}
      <section
        className="py-16 sm:py-20 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.18 0.08 280) 0%, oklch(0.25 0.10 295) 50%, oklch(0.22 0.08 320) 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }} />
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"
          style={{ background: 'linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.62 0.22 260))' }} />

        <div className="relative max-w-2xl mx-auto px-6">
          {/* Success icon */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in shadow-orange-lg"
            style={{ background: 'linear-gradient(135deg, oklch(0.60 0.18 145), oklch(0.55 0.18 185))' }}
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white mb-4"
            style={{ background: 'linear-gradient(135deg, oklch(0.60 0.18 145), oklch(0.55 0.18 185))' }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Order Placed Successfully!
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Yay! Your Waffles are on the Way! 🧇
          </h1>
          <p className="text-white/75 text-base font-semibold mb-6">
            We've received your order and our chefs are already getting to work!
          </p>

          {/* Order ID badge */}
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.20)' }}
          >
            <span className="text-white/70 text-sm font-bold">Order ID</span>
            <span className="text-white font-black text-lg">#{orderId}</span>
          </div>
        </div>
      </section>

      {/* Rainbow divider */}
      <div className="h-1 w-full" style={{
        background: 'linear-gradient(90deg, oklch(0.68 0.22 38), oklch(0.65 0.22 355), oklch(0.52 0.22 295), oklch(0.62 0.18 185), oklch(0.60 0.18 145))'
      }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        {/* Order Tracking Steps */}
        <div
          className="bg-card rounded-2xl overflow-hidden shadow-card-lg"
          style={{ border: '2px solid oklch(1 0 0 / 10%)' }}
        >
          <div
            className="px-5 py-4 flex items-center gap-2"
            style={{ background: 'linear-gradient(135deg, oklch(0.22 0.07 295), oklch(0.25 0.06 320))' }}
          >
            <Clock className="w-4 h-4" style={{ color: 'oklch(0.62 0.22 295)' }} />
            <h2 className="font-black text-foreground">Order Status</h2>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-black transition-all"
                    style={{
                      background: step.done
                        ? `linear-gradient(135deg, ${step.color}, ${step.color.replace(')', ' / 0.7)')})`
                        : 'oklch(0.24 0.06 285)',
                      boxShadow: step.done ? `0 4px 12px ${step.color.replace(')', ' / 0.30)')}` : 'none',
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-xs font-black text-center"
                    style={{ color: step.done ? step.color : 'oklch(0.55 0.04 285)' }}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Progress bar */}
            <div className="mt-4 h-2 rounded-full overflow-hidden" style={{ background: 'oklch(0.24 0.06 285)' }}>
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: '45%',
                  background: 'linear-gradient(90deg, oklch(0.60 0.18 145), oklch(0.68 0.22 38), oklch(0.52 0.22 295))'
                }}
              />
            </div>
            <p className="text-center text-sm font-bold mt-3" style={{ color: 'oklch(0.68 0.22 38)' }}>
              🕐 Estimated delivery: 25–35 minutes
            </p>
          </div>
        </div>

        {/* Delivery Info */}
        <div
          className="bg-card rounded-2xl overflow-hidden shadow-card"
          style={{ border: '2px solid oklch(1 0 0 / 10%)' }}
        >
          <div
            className="px-5 py-4 flex items-center gap-2"
            style={{ background: 'linear-gradient(135deg, oklch(0.22 0.07 38), oklch(0.25 0.06 60))' }}
          >
            <MapPin className="w-4 h-4" style={{ color: 'oklch(0.72 0.22 38)' }} />
            <h2 className="font-black text-foreground">Delivery Details</h2>
          </div>
          <div className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-muted-foreground">Status</span>
              <span
                className="text-sm font-black px-3 py-1 rounded-full text-white"
                style={{ background: 'linear-gradient(135deg, oklch(0.60 0.18 145), oklch(0.55 0.18 185))' }}
              >
                ✓ Confirmed
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-muted-foreground">Delivery Fee</span>
              <span className="text-sm font-black" style={{ color: 'oklch(0.60 0.18 145)' }}>FREE 🎉</span>
            </div>
          </div>
        </div>

        {/* Waffle Preview */}
        <div
          className="bg-card rounded-2xl overflow-hidden shadow-card"
          style={{ border: '2px solid oklch(1 0 0 / 10%)' }}
        >
          <div
            className="px-5 py-4"
            style={{ background: 'linear-gradient(135deg, oklch(0.22 0.07 355), oklch(0.24 0.06 320))' }}
          >
            <h2 className="font-black text-foreground">Your Delicious Order 🧇</h2>
          </div>
          <div className="p-5">
            <div className="flex gap-3 justify-center">
              {waffleImages.map((src, i) => (
                <div
                  key={i}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden animate-float"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    border: `2px solid ${['oklch(0.68 0.22 38)', 'oklch(0.65 0.22 355)', 'oklch(0.52 0.22 295)'][i]}`,
                    boxShadow: `0 4px 12px ${['oklch(0.68 0.22 38 / 0.25)', 'oklch(0.65 0.22 355 / 0.25)', 'oklch(0.52 0.22 295 / 0.25)'][i]}`
                  }}
                >
                  <img src={src} alt="Waffle" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-center text-sm font-bold text-muted-foreground mt-4">
              Freshly prepared just for you! 😋
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate({ to: '/menu' })}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-black text-white shadow-orange transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))' }}
          >
            <ShoppingBag className="w-5 h-5" />
            Order More Waffles
          </button>
          <button
            onClick={() => navigate({ to: '/' })}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-black text-foreground transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: 'oklch(0.24 0.06 285)', border: '2px solid oklch(1 0 0 / 15%)' }}
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}
