import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Send } from "lucide-react";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

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

  return (
    <>
      <Header />
      <main style={{ marginTop: "80px" }}>
        <div className="section-container py-8">
          <Link to="/#products" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-secondary rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                {product.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

              <h3 className="font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>Applications</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.applications.map((a) => (
                  <span key={a} className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">{a}</span>
                ))}
              </div>

              <a href="#contact" className="btn-industrial px-6 py-3 text-sm gap-2">
                <Send className="w-4 h-4" /> Enquire Now
              </a>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--font-heading)" }}>Technical Specifications</h3>
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
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
