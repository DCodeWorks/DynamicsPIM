import { ProductVariant } from "@/app/types/Hierarchy";
import Link from "next/link";

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
    sku: string;
    euSize: string;
  };
}) {
  const {
    variantId,
    colorId,
    barcodeId,
    ErpProductId,
    sizeId,
    styleId,
    sku,
    euSize,
  } = params;

  const variant: ProductVariant = {
    variantId,
    colorId,
    barcodeId,
    ErpProductId,
    sizeId,
    styleId,
    sku,
    euSize,
  };

  return (
    <div>
      {variant.euSize == null && (
        <div className=" mb-4 p-3 bg-yellow-100 border-l-4 border-yellow-500">
          ⚠️ EU Size missing - It won&apos;t be exported —{" "}
          <Link href={`/reference/footwear-sizing`} className="underline">
            Enrich Now
          </Link>
        </div>
      )}
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
