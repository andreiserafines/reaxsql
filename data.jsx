import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Eye, SquarePen } from "lucide-react";
import axios from "axios";

export function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loading state

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // 👈 stop loading once data is fetched
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((res) => {
        location.reload(); // `res` is not needed here
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-5xl text-[13.5px] m-2">
      <Link to="/create">
        <button className="mb-6 bg-indigo-600 hover:bg-indigo-700 rounded-sm text-white py-2 px-5 font-medium transition">
          + Add Personnel
        </button>
      </Link>

      <div className="overflow-x-auto rounded-md border border-gray-200 bg-white p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-2 px-1">Personnel</h2>

        {/* 👇 Show loading message or table */}
        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading personnel data...</div>
        ) : (
          <table className="min-w-full w-max text-left">
            <thead>
              <tr className="text-gray-600 border-b border-gray-200 uppercase tracking-wide text-xs">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Address</th>
                <th className="p-4 text-end">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-700 divide-y divide-gray-200">
              {data.map((personnel, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${personnel.name}`}
                      alt={personnel.name}
                      className="w-8 h-8 rounded-md"
                    />
                    <div className="font-medium">{personnel.name}</div>
                  </td>
                  <td className="p-4">{personnel.email}</td>
                  <td className="p-4">{personnel.address}</td>
                  <td className="p-4 text-end">
                    <div className="flex justify-end gap-3 items-center text-gray-500">
                      <Link to={`/edit/${personnel.id}`}>
                        <SquarePen className="hover:text-green-600" size={18} />
                      </Link>
                      <Link to={`/read/${personnel.id}`}>
                        <Eye className="hover:text-blue-600" size={18} />
                      </Link>
                      <button onClick={() => handleDelete(personnel.id)}>
                        <Trash2 className="hover:text-red-600" size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
