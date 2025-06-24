"use client";
import { UserRecord } from "@/data/users";
import { useState } from "react";
import { users } from "@/data/users";
import UserFormModal from "../components/UserFormModal";

const PAGE_SIZE = 10;

export default function UsersPage() {
  const [modalUser, setModalUser] = useState<UserRecord | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  const start = (page - 1) * PAGE_SIZE;
  const pageData = users.slice(start, start + PAGE_SIZE);
  const totalPages = Math.ceil(users.length / PAGE_SIZE);
  return (
    <div>
      <h1>To Do:</h1>
      <ul className=" list-disc">
        <li>Add new user</li>
        <li>edit new user</li>
        <li>remove user</li>
        <li>
          roles: admin, user(has has visibility to his stores); admin has full
          visibility + can edit settings
        </li>
        <li>
          login through office 365 account but roles managed by this UI page
        </li>
      </ul>

      <div className=" space-y-4">
        <div className=" flex justify-between items-center">
          <h2 className=" text-2xl font-bold">Users</h2>
          <button
            onClick={() => {
              setModalUser(null);
              setOpen(true);
            }}
            className=" px-4 py-2 bg-green-600 text-white rounded"
          >
            Add User
          </button>
        </div>

        <table className=" w-full bg-white shadow rounded table-auto">
          <thead className=" bg-gray-100">
            <tr>
              {["Name", "Email", "Role", "Stores", "Actions"].map((h) => (
                <th key={h} className=" p-2 text-left">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.map((u) => (
              <tr key={u.id} className=" border-t hover:bg-gray-50">
                <td className=" p-2">{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>{u.stores.join(", ")}</td>
                <td className=" space-x-2">
                  <button
                    onClick={() => {
                      setModalUser(u);
                      setOpen(true);
                    }}
                    className=" text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*Pagination*/}
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className={"px-3 py-1 border rounded disabled:opacity-50"}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                page === i + 1 ? "bg-blue-600 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {isOpen && (
          <UserFormModal
            user={modalUser}
            onClose={() => setOpen(false)}
            onSave={(data) => {
              console.log("SAVE USER", data);
              setOpen(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
