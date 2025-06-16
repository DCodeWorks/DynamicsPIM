"use client"

import { useState } from "react";
import { Product } from "../types/Product";

export default function ProductEditForm({ product }: { product: Product }) {
  const [gender, setGender] = useState(product.gender ?? "");

  const handleSave = () => {
    console.log("Saving gender for", product.productId, "->", gender);
    alert("✅ Saved!");
  };

  return (
    <div className=" space-y-4 max-w-md">
      {["productId", "sku", "name", "segmentationValue"].map((field) => (
        <div key={field}>
          <label className=" block font-medium capitalize">{field}</label>
          <input
            type="text"
            value={(product as any)[field]}
            readOnly
            className=" w-full bg-gray-100 p-2 rounded"
          />
        </div>
      ))}

      <div>
        <label className=" block font-medium">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className=" w-full border p-2 rounded"
        >
          <option value="">-Select Gender-</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Unisex">Unisex</option>
        </select>
      </div>

      <button
        onClick={handleSave}
        className=" px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Save
      </button>
    </div>
  );
}
