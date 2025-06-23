"use client";
import { FormEvent, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
    login(email);
    router.push("/products");
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSumbit}
        className=" p-8 bg-white rounded shadow-md w-80 space-y-4"
      >
        <h2 className=" text-xl font-bold">Sign In</h2>
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" w-full p-2 border rounded"
        />
        <button
          type="submit"
          className=" w-full py-2 bg-blue-600 text-white
         rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
