import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const categories = [
  "Safety Switches",
  "Temperature Control",
  "Power Management",
  "Industrial Automation",
];

const ProductGrid = () => (
  <section id="products" className="section-padding bg-background">
    <div className="section-container">
      <div className="text-center mb-10">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-primary" style={{ fontFamily: "var(--font-heading)" }}>Our Products</span>
        <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
          Industrial Safety & Control Solutions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Browse our comprehensive range of products built for reliability, safety, and long-term performance in demanding industrial settings.
        </p>
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div key={category} className="card-industrial p-6 border-white/10 bg-white/5 hover:border-primary/50">
            <p className="text-sm uppercase tracking-[0.28em] text-primary">{category}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
