"use client";

import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header
      className=" flex justify-between items-center px-6 
     py-3 bg-white border-b"
    >
      <h1>PIM Admin</h1>

      {user ? (
        <div className=" flex items-center space-x-4">
          <span className=" text-sm">
            Signed in as <strong>{user.email}</strong>
          </span>
          <button onClick={logout} className=" text-sm text-red-600">
            Logout
          </button>
        </div>
      ) : (
        <a href="/login" className=" text-sm text-blue-600">
          Login
        </a>
      )}
    </header>
  );
}
