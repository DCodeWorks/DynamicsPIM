"use client";

import { UserRecord } from "@/data/users";
import { FormEvent, useState } from "react";

interface Props {
  user: UserRecord | null;
  onClose: () => void;
  onSave: (data: Omit<UserRecord, "id"> & { id?: string }) => void;
}
const ALL_STORES = ["UJ-IT", "UJ-MA", "HS-MT"];

export default function UserFormModal({ user, onClose, onSave }: Props) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState<"Admin" | "User">(user?.role || "User");
  const [stores, setStores] = useState<string[]>(user?.stores || []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({ id: user?.id, name, email, role, stores });
  };

  const toggleStore = (s: string) => {
    setStores((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className=" bg-white p-6 rounded shadow-md w-96 space-y-4"
      >
        <h3 className=" text-lg font-bold">
          {user ? "Edit User" : "Add User"}
        </h3>
        <input
          type="text"
          required
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" w-full p-2 border rounded"
        />
        <input
          type="email"
          required
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <label className=" flex items-center space-x-2">
          <span>Role:</span>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "Admin" | "User")}
            className=" border p-1 rounded"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </label>

        <div>
          <span className="block mb-1">Store Access:</span>
          <div className="flex flex-wrap gap-2">
            {ALL_STORES.map((s) => (
              <label key={s} className=" inline-flex items-center space-x-1">
                <input
                  type="checkbox"
                  checked={stores.includes(s)}
                  onChange={() => toggleStore(s)}
                />
                <span className=" text-sm">{s}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-2 pt-4 border-t">
          <button type="button" onClick={onClose}
          className=" px-4 py-2">
            Cancel
          </button>

          <button type="submit" className=" px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </div>
      </form>
    </div>
  );
}
