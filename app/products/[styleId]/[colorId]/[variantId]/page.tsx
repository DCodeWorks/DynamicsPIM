import { ProductVariant } from "@/app/types/Hierarchy";

export default function ProductVariantPage({
  params,
}: {
  params: {
    variantId: string;
    colorId: string;
    barcodeId: string;
    ErpProductId: string;
    sizeId: string;
    styleId: string;
  };
}) {
  const { variantId, colorId, barcodeId, ErpProductId, sizeId, styleId } =
    params;

  const variant: ProductVariant = {
    variantId,
    colorId,
    barcodeId,
    ErpProductId,
    sizeId,
    styleId,
  };

  return (
    <div>
      <h1 className=" text-2xl font-bold mb-4">Variant: {variant.variantId}</h1>
      <p>
        <strong>Style: </strong>
        {variant.styleId}
      </p>
      <p>
        <strong>Color: </strong>
        {variant.colorId}
      </p>
      <p>
        <strong>Size: </strong>
        {variant.sizeId}
      </p>
    </div>
  );
}
