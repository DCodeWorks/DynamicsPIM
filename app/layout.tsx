// app/layout.tsx
import { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PIM Admin",
  description: "Product enrichment & monitoring dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-60 bg-white border-r p-4">
          <h1 className="text-xl font-bold mb-6">Hudson&apos;s PIM</h1>
          <nav className="space-y-2">
            <a href="/" className="block px-2 py-1 rounded hover:bg-gray-100">
              Dashboard
            </a>
            <a
              href="/products"
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
              Products
            </a>
            <a
              href="/reference/footwear-sizing"
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
              Footwear Sizing
            </a>
            <a
              href="/anomalies/sizes"
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
              Sizes Issues
            </a>
            <a
              href="#"
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
              Users
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </body>
    </html>
  );
}
