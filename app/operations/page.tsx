import operationData from "@/data/operations.json";
import { Operation } from "../types/Operation";
import { format } from "date-fns";

export default function OperationsPage() {
  const ops = operationData as Operation[];

  return (
    <div className=" space-y-6">
      <h1 className=" text-2xl font-bold">Background Operations</h1>
      <div className=" p-4 bg-blue-50 rounded">
        <h2 className=" font-semibold mb-2">Next Scheduled Runs</h2>
        <ul className=" list-disc list-inside">
          {ops.slice(0,4).map((o) => (
            <li key={o.id}>
              <strong>{o.name}:</strong>{" "}
              {format(new Date(o.nextRunAt), "PPPpp")} ({o.schedule})
            </li>
          ))}
        </ul>
      </div>
      <table className=" w-full bg-white shadow rounded table-auto">
        <thead className=" bg-gray-100">
          <tr>
            <th className="p-2 text-left">Operation</th>
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Last Run</th>
            <th className="p-2 text-left">Next Run</th>
            <th className="p-2 text-right">Items</th>
            <th className="p-2 text-left">Schedule</th>
          </tr>
        </thead>
        <tbody>
          {ops.map((o) => (
            <tr key={o.id} className=" border-t hover:bg-gray-50">
              <td className=" p-2">{o.name}</td>
              <td className=" p-2">{o.type}</td>
              <td className=" p-2">
                {format(new Date(o.lastRunAt), "yyyy-MM-dd HH:mm")}
              </td>
              <td className=" p-2">
                {format(new Date(o.nextRunAt), "yyyy-MM-dd HH:mm")}
              </td>
              <td className=" p-2 text-right">{o.itemsProcessed}</td>
              <td className=" p-2">{o.schedule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
