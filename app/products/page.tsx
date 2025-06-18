import ProductList from "@/app/components/ProductList";
import { ProductStyle } from "../types/Hierarchy";
import productStylesJson from "@/data/styles.json";

export default function ProductsPage() {

    const styles = productStylesJson as ProductStyle[];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ProductList productStyles={styles} />
    </div>
  );
}
