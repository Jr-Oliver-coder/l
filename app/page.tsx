import Checkout from "@/src/components/checkout/Checkout";
import Header from "@/src/components/Header";
import ProductGrid from "@/src/components/home/Home";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Header />

      <ProductGrid />
    </main>
  );
}
