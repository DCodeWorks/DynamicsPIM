import { SizingReference } from "@/app/types/SizeRef";
import SizeDataJson from "@/data/sizeRef.json";
import Image from "next/image";
import Link from "next/link";

export default function FootwearSizingPage() {
  const rows: SizingReference[] = SizeDataJson as SizingReference[];

  return (
    <div>
      <h1 className=" text-2xl font-bold mb-4">Footwear Sizing Reference</h1>
      <div className=" mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search code or rawLabel"
          className=" border p-2 rounded flex-1 mr-4"
        />
      </div>
      <table className=" w-full table-auto bg-white shadow rounded text-center">
        <thead>
          <tr className=" bg-gray-100">
            <th className=" p-2">Raw Label</th>
            <th>Code</th>
            <th>System</th>
            <th>US</th>
            <th>UK</th>
            <th>EU</th>
            <th>CM</th>
            <th>Gender</th>
            <th>Complete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className=" border-t">
              <td className="p-2">{r.rawLabel}</td>
              <td>{r.code}</td>
              <td>{r.sizeSystem}</td>
              <td>{r.usSize || "—"}</td>
              <td>{r.ukSize || "—"}</td>
              <td>{r.euSize || "—"}</td>
              <td>{r.cmSize || "—"}</td>
              <td>{r.gender}</td>
              <td>
                {r.isComplete ? (
                  <span className="text-green-600">✓</span>
                ) : (
                  <span className="text-orange-600">✗</span>
                )}
              </td>
              <td className=" space-x-2">
                <Link
                  href={`#`}
                  className=" px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2 className=" bg-red-400 text-sm font-bold my-4 p-2 text-white">
          On each edit, a check will be triggered to ensure there are no duplicate size entries. 
          Sometimes, the ERP exports two different size names for the same variant. An example below in screenshot:
        </h2>
        <Image src={"/images/size_anomaly_duplicates.png"} alt="anomaly-duplicates" width={800} height={800} className="rounded border-red-200 shadow"></Image>
      </div>
    </div>
  );
}
