import Link from "next/link";

export default function SizeIssuesPage(){
  return (
    <div>
      <h1 className=" text-2xl font-bold mb-4">Sizing Issues</h1>
      <table className="w-full table-auto bg-white shadow rounded text-center">
        <thead>
          <tr className=" bg-gray-100">
            <th className=" pt-2">SKU</th>
            <th>Item Number</th>
            <th>Brand</th>
            <th>Color</th>
            <th>EU Size</th>
            <th>Issue</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr key={1} className=" border-t">
            <td className="p-2">CZ7836-600_C10</td>
            <td>CZ7836</td>
            <td>Nike</td>
            <td>CZ7836-600</td>
            <td>-</td>
            <td>Missing EU size</td>
            <td>
              <Link
                href={`/reference/footwear-sizing`}
                className=" px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                Review
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
