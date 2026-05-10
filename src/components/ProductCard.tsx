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
    <div className="card-industrial overflow-hidden group bg-slate-950 text-white">
      <div className="relative overflow-hidden bg-slate-900">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
        <div className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-lg shadow-slate-950/30">
          Featured
        </div>
      </div>
      <div className="p-5 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{product.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 line-clamp-3">{product.shortDescription}</p>
        </div>
        <div className="flex items-end justify-between gap-3">
          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold transition hover:border-primary hover:bg-primary/15"
          >
            Details <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={handleAddToCart}
            className="btn-industrial inline-flex items-center gap-2 px-4 py-2 text-sm"
            title={isAuthenticated ? "Add to Cart" : "Sign in to add to cart"}
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
