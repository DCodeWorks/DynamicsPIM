import { ProductColor, ProductVariant } from "@/app/types/Hierarchy";
import Link from "next/link";
import colorProductsData from "@/data/colors.json";
import variantProductsData from "@/data/variants.json";

export default function ProductColorPage({
  params,
}: {
  params: { styleId: string; colorId: string };
}) {
  const { colorId, styleId } = params;

  const color: ProductColor | undefined = (
    colorProductsData as ProductColor[]
  ).find((c) => c.colorId === colorId);

  const variants: ProductVariant[] | undefined = (
    variantProductsData as ProductVariant[]
  ).filter((v) => v.colorId === colorId);

  if (!color) return <h1>Color not found</h1>;

  return (
    <div>
      <h1 className=" text-2xl font-bold mb-4">Color ID: {color.colorId}</h1>
      <h1 className="text-2xl font-bold mb-4">Available Variants</h1>
      <ul className=" space-y-2">
        {variants &&
          variants.map((v) => (
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
      <div className="my-4">
        <h1 className=" text-2xl font-bold mb-4">Associations</h1>
        {color.associations &&
          color.associations.map((a) => <li key={a}>{a}</li>)}
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Attributes</h1>
        {Object.entries(color).map(([key, value]) => {
          return (
            <div className=" mb-4 mt-4" key={key}>
              <label className="block font-medium text-gray-700 mb-1">
                {key}
              </label>
              <input
                type="text"
                readOnly
                value={String(value)}
                className=" w-full px-3 py-2 border-gray-300 rounded-md bg-gray-100 text-gray-800 "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
