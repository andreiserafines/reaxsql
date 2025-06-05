import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { List, Trash2, Eye, SquarePen } from "lucide-react";
import axios from "axios";

export function Home() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((res) => {
        location.reload(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="overflow-x-auto shadow-lg sm:overflow-visible max-w-6xl w-full mx-auto rounded-md border border-gray-200 bg-white p-4 dark:bg-slate-800 dark:border-slate-700">
      <div className="flex items-center justify-between mb-4 w-full">
        <h2 className="text-base font-semibold text-slate-600 px-1 dark:text-white flex items-center gap-2">
        <List size={24} />
          Personnel List
        </h2>

        <Link to="/create">
          <button className="cursor-pointer flex items-center bg-blue-600 hover:bg-blue-700 rounded-sm font-semibold text-xs text-white py-2.5 px-3 transition">
            + Add Personnel
          </button>
        </Link>
      </div>

      <table className="min-w-full text-left">
        <thead>
          <tr className="text-slate-600 border-b border-slate-200 uppercase tracking-wide text-xs dark:border-slate-700 dark:text-white">
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Address</th>
            <th className="p-4 text-end">Actions</th>
          </tr>
        </thead>

        <tbody className="text-slate-700 divide-y divide-gray-200 dark:divide-slate-700 dark:text-white">
          {data.map((personnel, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition dark:hover:bg-gray-700"
            >
              <td className="p-4 flex items-center gap-3 mr-2">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${personnel.name}`}
                  alt={personnel.name}
                  className="w-8 h-8 rounded-md"
                />
                <div className="font-medium">{personnel.name}<br />
                  <span className="text-xs text-slate-500 dark:text-slate-400">{personnel.branch}</span></div>
              </td>
              <td className="p-4 mr-2">{personnel.email}</td>
              <td className="p-4 mr-2">{personnel.address}</td>
              <td className="p-4 mr-2 text-end">
                <div className="flex justify-end gap-3 items-center text-slate-500 dark:text-slate-600">
                  <Link to={`/edit/${personnel.id}`}>
                    <SquarePen
                      className="hover:text-slate-800 dark:hover:text-slate-200 duration-300"
                      size={18}
                    />
                  </Link>
                  <Link to={`/read/${personnel.id}`}>
                    <Eye
                      className="hover:text-slate-800 dark:hover:text-slate-200 duration-300"
                      size={18}
                    />
                  </Link>
                  <button onClick={() => handleDelete(personnel.id)}>
                    <Trash2
                      className="hover:text-slate-800 cursor-pointer dark:hover:text-slate-200 duration-300"
                      size={17}
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
