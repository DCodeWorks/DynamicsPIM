export interface ProductStyle {
  styleId: string;
  name: string;
  imageUrl?: string;
  imageUrl2?:string;
  imageUrl3?:string;
  productType: ProductTypes;
  gender: string;
  brand: string;
}

export interface ProductColor {
  itemNumber: string
  colorId: string;
  styleId: string;
  productColorName?: string;
}

export interface ProductVariant {
  variantId: string;
  sku: string
  colorId: string;
  styleId: string;
  sizeId: string;
  barcodeId: string;
  ErpProductId: string;
  euSize?:string
}

export enum ProductTypes {
  Footwear = "footwear",
  Clothing = "clothing",
  Accessories = "accessories",
}
