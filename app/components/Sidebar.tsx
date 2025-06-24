export default function Sidebar() {
  return (
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
        <a href="/users" className="block px-2 py-1 rounded hover:bg-gray-100">
          Users
        </a>
        <a
          href="/settings"
          className="block px-2 py-1 rounded hover:bg-gray-100"
        >
          Settings
        </a>
         <a
          href="/operations"
          className="block px-2 py-1 rounded hover:bg-gray-100"
        >
          Operations
        </a>
        <a href="/logs" className="block px-2 py-1 rounded hover:bg-gray-100">
          Logs
        </a>
      </nav>
    </aside>
  );
}
