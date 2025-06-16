// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'PIM Admin',
  description: 'Product enrichment & monitoring dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-60 bg-white border-r p-4">
          <h1 className="text-xl font-bold mb-6">Hudson's PIM</h1>
          <nav className="space-y-2">
            <a href="/" className="block px-2 py-1 rounded hover:bg-gray-100">Dashboard</a>
            <a href="/products" className="block px-2 py-1 rounded hover:bg-gray-100">Products</a>
            <a href="/enrichment/size" className="block px-2 py-1 rounded hover:bg-gray-100">Size Mapping</a>
            <a href="/enrichment/segment" className="block px-2 py-1 rounded hover:bg-gray-100">Segmentation</a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
