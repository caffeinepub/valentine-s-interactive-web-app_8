import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useCart } from '../context/CartContext';
import { usePlaceOrder } from '../hooks/useQueries';
import { Loader2, Truck, Smartphone, CheckCircle, MapPin, CreditCard } from 'lucide-react';

type PaymentMethod = 'COD' | 'GPay';

export default function CheckoutSection() {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const placeOrderMutation = usePlaceOrder();

  const handlePlaceOrder = async () => {
    if (!selectedPayment) return;

    const selectedItemsIds = items.map(i => BigInt(i.product.id));

    const orderId = await placeOrderMutation.mutateAsync({
      selectedItemsIds,
      deliveryAddress: deliveryAddress.trim() || 'Default Address',
      paymentMethod: selectedPayment,
    });

    clearCart();
    navigate({
      to: '/order-confirmation/$orderId',
      params: { orderId: orderId.toString() },
      state: {
        items: items.map(i => ({
          name: i.product.name,
          quantity: i.quantity,
          price: i.product.price,
        })),
        paymentMethod: selectedPayment,
        total: totalPrice,
      } as Record<string, unknown>,
    });
  };

  const paymentOptions: { id: PaymentMethod; label: string; desc: string; icon: React.ReactNode; gradient: string }[] = [
    {
      id: 'COD',
      label: 'Cash on Delivery',
      desc: 'Pay when your order arrives',
      icon: <Truck className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, oklch(0.60 0.18 145), oklch(0.55 0.18 185))',
    },
    {
      id: 'GPay',
      label: 'Google Pay',
      desc: 'Fast & secure digital payment',
      icon: <Smartphone className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.62 0.22 260))',
    },
  ];

  const deliveryFee = 0;
  const grandTotal = totalPrice + deliveryFee;

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-card-lg" style={{ border: '2px solid oklch(1 0 0 / 10%)' }}>
      {/* Header */}
      <div className="px-5 py-4 flex items-center gap-3" style={{
        background: 'linear-gradient(135deg, oklch(0.18 0.08 280), oklch(0.25 0.10 295))'
      }}>
        <CreditCard className="w-5 h-5 text-white" />
        <h2 className="text-lg font-black text-white">Checkout</h2>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Delivery Address */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-black text-foreground">
            <MapPin className="w-4 h-4" style={{ color: 'oklch(0.68 0.22 38)' }} />
            Delivery Address
          </label>
          <input
            type="text"
            value={deliveryAddress}
            onChange={e => setDeliveryAddress(e.target.value)}
            placeholder="Enter your delivery address..."
            className="w-full px-4 py-3 rounded-xl border-2 bg-background text-foreground placeholder:text-muted-foreground text-sm font-semibold focus:outline-none transition-all duration-200"
            style={{ borderColor: 'oklch(1 0 0 / 15%)' }}
            onFocus={e => (e.currentTarget.style.borderColor = 'oklch(0.68 0.22 38)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'oklch(1 0 0 / 15%)')}
          />
        </div>

        {/* Payment Methods */}
        <div className="space-y-2">
          <label className="text-sm font-black text-foreground">Payment Method</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {paymentOptions.map(option => {
              const isSelected = selectedPayment === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedPayment(option.id)}
                  className="flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    border: isSelected ? '2px solid transparent' : '2px solid oklch(1 0 0 / 15%)',
                    background: isSelected ? option.gradient : 'oklch(0.22 0.06 285)',
                    boxShadow: isSelected ? '0 8px 24px oklch(0.52 0.22 295 / 0.20)' : 'none',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white"
                    style={{ background: isSelected ? 'rgba(255,255,255,0.25)' : option.gradient }}
                  >
                    {option.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-black text-sm ${isSelected ? 'text-white' : 'text-foreground'}`}>
                      {option.label}
                    </p>
                    <p className={`text-xs ${isSelected ? 'text-white/80' : 'text-muted-foreground'}`}>{option.desc}</p>
                  </div>
                  {isSelected && (
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Order Summary */}
        <div
          className="rounded-xl p-4 space-y-2"
          style={{ background: 'linear-gradient(135deg, oklch(0.22 0.07 38), oklch(0.25 0.06 60))' }}
        >
          <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'oklch(0.72 0.22 38)' }}>
            Order Summary
          </p>
          <div className="flex justify-between text-sm font-semibold text-foreground">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between text-sm font-semibold">
            <span className="text-foreground">Delivery</span>
            <span className="font-black" style={{ color: 'oklch(0.60 0.18 145)' }}>FREE 🎉</span>
          </div>
          <div
            className="flex justify-between font-black text-base pt-2 mt-1"
            style={{ borderTop: '2px dashed oklch(0.72 0.22 38 / 0.40)' }}
          >
            <span className="text-foreground">Total</span>
            <span style={{ color: 'oklch(0.72 0.22 38)' }}>₹{grandTotal}</span>
          </div>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          disabled={!selectedPayment || placeOrderMutation.isPending}
          className="w-full h-13 py-3.5 text-base font-black text-white rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-orange-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          style={{
            background: selectedPayment
              ? 'linear-gradient(135deg, oklch(0.68 0.22 38), oklch(0.72 0.22 355))'
              : 'oklch(0.26 0.05 285)',
            boxShadow: selectedPayment ? '0 8px 24px oklch(0.68 0.22 38 / 0.35)' : 'none',
          }}
        >
          {placeOrderMutation.isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Placing Order...
            </>
          ) : (
            <>
              🛵 Place Order — ₹{grandTotal}
            </>
          )}
        </button>

        {!selectedPayment && (
          <p className="text-center text-xs text-muted-foreground font-semibold">
            ☝️ Please select a payment method to continue
          </p>
        )}
      </div>
    </div>
  );
}
