import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => (
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
      <Link
        to={`/product/${product.id}`}
        className="btn-industrial px-4 py-2 text-sm gap-2 w-full"
      >
        View Product <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

export default ProductCard;
