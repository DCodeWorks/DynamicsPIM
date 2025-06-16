import { ProductColor, ProductVariant } from "@/app/types/Hierarchy";
import Link from "next/link";

export default function ProductColorPage({
  params,
}: {
  params: { styleId: string; colorId: string };
}) {
  const { colorId, styleId } = params;

  const color: ProductColor = {
    colorId,
    styleId,
  };

  const variants: ProductVariant[] = [
    {
      variantId: `${colorId}_C10`,
      colorId,
      sizeId: "C10",
      barcodeId: "21324",
      ErpProductId: "7236457654",
      styleId
    },
    {
      variantId: `${colorId}_C12`,
      colorId,
      sizeId: "C12",
      barcodeId: "98758",
      ErpProductId: "8697967987",
      styleId
    },
  ];

  return (
    <div>
      <h1 className=" text-2xl font-bold mb-4">Color: {color.colorId}</h1>
      <ul className=" space-y-2">
        {variants.map((v) => (
          <li key={v.variantId}>
            <Link
              href={`/products/${styleId}/${colorId}/${v.variantId}`}
              className=" text-blue-600 hover:underline"
            >
              Size {v.sizeId}({v.variantId})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
