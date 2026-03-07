import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductGrid = () => (
  <section id="products" className="section-padding bg-secondary">
    <div className="section-container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary" style={{ fontFamily: "var(--font-heading)" }}>Our Products</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" style={{ fontFamily: "var(--font-heading)" }}>
          Industrial Safety & Control Solutions
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Browse our comprehensive range of industrial safety switches, temperature controllers, heaters, and automation systems.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
