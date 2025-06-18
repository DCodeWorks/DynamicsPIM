import { ProductColor, ProductStyle } from "@/app/types/Hierarchy";
import Link from "next/link";
import colorProductsJson from "@/data/colors.json";
import styleProductsJson from "@/data/styles.json";
import QualityScore from "@/app/components/QualityScore";

// Utility to format "camelCase" to "Proper Case"
function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

export default function ProductStylePage({
  params,
}: {
  params: { styleId: string };
}) {
  const { styleId } = params;

  // Find style by ID
  const style: ProductStyle | undefined = (
    styleProductsJson as ProductStyle[]
  ).find((s) => s.styleId === styleId);

  const colorsLinkedToStyle = colorProductsJson as ProductColor[];

  if (!style) {
    return <h1 className="text-red-600 font-bold">Style not found</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Name: {style.name}</h1>
      <QualityScore />

      {/* Render images horizontally */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Images</h2>
        <div className="flex gap-4 flex-wrap">
          {["imageUrl", "imageUrl2", "imageUrl3"].map((imgKey) => {
            const src = (style as any)[imgKey];
            return src ? (
              <img
                key={imgKey}
                src={src}
                alt={imgKey}
                className="w-40 h-auto border rounded-md shadow"
              />
            ) : null;
          })}
        </div>
      </div>

      {/* Render non-image fields */}
      {Object.entries(style).map(([key, value]) => {
        const isImage =
          typeof value === "string" && key.toLowerCase().includes("image");
        if (isImage) return null; // Skip image fields here

        return (
          <div key={key} className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">
              {formatLabel(key)}
            </label>
            <input
              type="text"
              readOnly
              value={String(value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800"
            />
          </div>
        );
      })}

      {/* Render linked colors */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Available Colors</h2>
        <ul className="space-y-2">
          {colorsLinkedToStyle
            .filter((c) => c.styleId === styleId)
            .map((product) => (
              <li key={product.colorId}>
                <Link
                  href={`/products/${styleId}/${product.colorId}`}
                  className="text-blue-600 hover:underline"
                >
                  {style.name} - {product.colorId}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
