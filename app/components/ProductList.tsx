"use client";

import Link from "next/link";
import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { ProductStyle } from "../types/Hierarchy";
import QualityScore from "./QualityScore";

interface ProductListProps {
  productStyles: ProductStyle[];
}

export default function ProductList({ productStyles }: ProductListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStore, setSelectedStore] = useState("UJ-IT");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = productStyles.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center space-x-6 mb-6">
        <label className="form-label">Select Store / OU:</label>
        <select
          value={selectedStore}
          onChange={(e) => setSelectedStore(e.target.value)}
          className="form-select"
        >
          <option value="">All Stores</option>
          <option value="UJ-IT">Urban Jungle — Italy (EUR)</option>
          <option value="UJ-MA">Urban Jungle — Morocco (MAD)</option>
          <option value="HS-MT">Hudson Store — Malta (EUR)</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Search Products"
        value={searchTerm}
        onChange={handleChange}
        className=" mb-4 w-full p-2 border rounded"
      />

      <ul className=" space-y-2">
        {filteredProducts.map((product) => (
          <Link href={`/products/${product.styleId}`} key={product.styleId}>
            <li
              key={product.styleId}
              className=" p-4 bg-white rounded-lg shadow mb-4"
            >
              {product.imageUrl && (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded"
                />
              )}
              <p className=" text-lg font-semibold">
                Product Name: {product.name}
              </p>
              <p className=" text-sm text-gray-600">
                Style ID: {product.styleId}
              </p>
              <p className=" text-sm text-gray-600">
                Family: {product.productType}
              </p>
              <p className=" text-sm text-gray-600">Gender: {product.gender}</p>
              <p className=" text-sm text-gray-600">Brand: {product.brand}</p>
              <QualityScore />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
