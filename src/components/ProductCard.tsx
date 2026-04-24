import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast.error("Please sign in to add items to cart");
      return;
    }
    addToCart(product);
  };

  return (
    <div className="card-industrial flex flex-col overflow-hidden group">
      <div className="aspect-square bg-secondary overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-heading)" }}>{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">{product.shortDescription}</p>
        <div className="flex gap-2">
          <Link
            to={`/product/${product.id}`}
            className="btn-industrial px-3 py-2 text-sm gap-2 flex-1"
          >
            View Product <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={handleAddToCart}
            className="btn-industrial px-3 py-2 text-sm gap-2"
            title={isAuthenticated ? "Add to Cart" : "Sign in to add to cart"}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
