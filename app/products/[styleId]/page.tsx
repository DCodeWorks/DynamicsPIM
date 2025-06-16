import { ProductColor, ProductStyle } from "@/app/types/Hierarchy";
import Link from "next/link";
import colorProductsJson from "@/data/colors.json";

export default function ProductStylePage({
  params,
}: {
  params: { styleId: string };
}) {
  const { styleId } = params;

  const style: ProductStyle = {
    styleId,
    name: `Style ${styleId}`,
    imageUrl: undefined,
  };

  const colorsLinkedToStyle = colorProductsJson as ProductColor[];

  return (
    <div>
      <h1 className=" text-2xl font-bold mb-4">Style: {style.name}</h1>
      <ul className=" space-y-2">
        {colorsLinkedToStyle
          .filter((c) => c.styleId == styleId)
          .map((product) => (
            <li key={product.colorId}>
              <Link
                href={`/products/${styleId}/${product.colorId}`}
                className=" text-blue-600 hover:underline"
              >
                {style.name}-{product.colorId}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
