import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const categories = [
  "Safety Switches",
  "Temperature Control",
  "Power Management",
  "Industrial Automation",
];

const ProductGrid = () => (
  <section id="products" className="section-padding bg-red-950 text-white">
    <div className="section-container">
      <div className="text-center mb-8">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300" style={{ fontFamily: "var(--font-heading)" }}>Our Products</span>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
          Industrial Safety & Control Solutions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
          Browse our comprehensive range of products built for reliability, safety, and long-term performance in demanding industrial settings.
        </p>
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div key={category} className="card-industrial p-5 border-red-600/20 bg-black/80 hover:border-red-500/50">
            <p className="text-sm uppercase tracking-[0.28em] text-red-300">{category}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
