import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, CheckCircle, Send, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormModal from "@/components/ContactFormModal";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [modalOpen, setModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center" style={{ marginTop: "80px" }}>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>Product Not Found</h1>
            <Link to="/" className="btn-industrial px-6 py-2 text-sm">Back to Home</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error("Please login to add products to cart");
      navigate("/login");
      return;
    }
    addToCart(product);
  };

  return (
    <>
      <Header />
      <main style={{ marginTop: "80px" }}>
        <div className="section-container py-6">
          <Link to="/#products" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-5">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                {product.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-5">{product.description}</p>

              <h3 className="font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>Usage</h3>
              <div className="flex flex-wrap gap-2 mb-5">
                {product.usage.map((a) => (
                  <span key={a} className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">{a}</span>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={() => setModalOpen(true)} className="btn-industrial px-6 py-3 text-sm gap-2 inline-flex items-center">
                  <Send className="w-4 h-4" /> Enquire Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="btn-industrial px-6 py-3 text-sm gap-2 inline-flex items-center"
                  title={isAuthenticated ? "Add to Cart" : "Sign in to add to cart"}
                >
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-heading)" }}>Technical Specifications</h3>
            <div className="card-industrial overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], i) => (
                    <tr key={key} className={i % 2 === 0 ? "bg-secondary" : "bg-background"}>
                      <td className="px-6 py-3 font-semibold text-foreground w-1/3">{key}</td>
                      <td className="px-6 py-3 text-muted-foreground">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-heading)" }}>Related Products</h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.filter((item) => item.id !== product.id).slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="card-industrial overflow-hidden rounded-[1.75rem] border border-slate-800/60 bg-slate-950/90 transition hover:-translate-y-1"
                >
                  <img src={item.image} alt={item.name} className="h-44 w-full object-cover" />
                  <div className="p-5">
                    <h4 className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>{item.name}</h4>
                    <p className="mt-2 text-sm text-slate-300 line-clamp-2">{item.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ContactFormModal open={modalOpen} setOpen={setModalOpen} productName={product.name} />
    </>
  );
};

export default ProductDetail;
