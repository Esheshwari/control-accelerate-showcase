import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, sendCartInquiry, getTotalItems } = useCart();

  const handleSendInquiry = async () => {
    await sendCartInquiry();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
        <div className="text-center max-w-md">
          <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>
            Your cart is empty
          </h2>
          <p className="text-muted-foreground mb-6">
            Add some products to your cart to get started with your inquiry.
          </p>
          <Link to="/" className="btn-industrial px-6 py-3 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Your Cart ({getTotalItems()} items)
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="card-industrial p-4">
                <div className="flex gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.product.shortDescription}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 rounded-md hover:bg-secondary"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded-md hover:bg-secondary"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-destructive hover:bg-destructive/10 rounded-md"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="card-industrial p-6 sticky top-4">
              <h3 className="font-semibold text-foreground mb-4">Cart Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Total Items:</span>
                  <span>{getTotalItems()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Products:</span>
                  <span>{items.length}</span>
                </div>
              </div>
              <div className="space-y-3">
                <Button
                  onClick={handleSendInquiry}
                  className="w-full btn-industrial"
                >
                  Send Inquiry
                </Button>
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="w-full"
                >
                  Clear Cart
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Your inquiry will be sent to our sales team who will contact you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;