import { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { AuthProvider } from "./contexts/AuthContext";

export const metadata: Metadata = {
  title: "PIM Admin",
  description: "Product enrichment & monitoring dashboard",
};

function InnerLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar />
        <div className=" flex-1 flex flex-col">
          <Header />

          <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <InnerLayout>{children}</InnerLayout>
    </AuthProvider>
  );
}
