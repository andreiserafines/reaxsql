import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash2, Eye, SquarePen } from "lucide-react";
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
    <div className="w-5xl">
      <Link to="/create">
        <button className="mb-5 bg-blue-600 hover:bg-blue-700 rounded-md text-white py-2 px-4 transition">
          + Add Personnel
        </button>
      </Link>

      <div className="overflow-x-auto rounded-md shadow-lg border border-gray-100 bg-white p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-800 border-b border-gray-100 font-semibold">
              <td className="p-4 ">Name</td>
              <td className="p-4 ">Email</td>
              <td className="p-4 ">Address</td>
              <td className="p-4 text-end">Actions</td>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {data.map((personnel, index) => (
              <tr
                key={index}
                className="hover:bg-blue-50 transition border-b border-gray-200 text-gray-600"
              >
                <td className="p-4">{personnel.name}</td>
                <td className="p-4">{personnel.email}</td>
                <td className="p-4">{personnel.address}</td>
                <td className="p-4 text-gray-600 flex justify-end gap-3 items-center">
                  <Link to={`/edit/${personnel.id}`}>
                    <SquarePen className="hover:text-green-600" size={20} />
                  </Link>
                  <Link to={`/read/${personnel.id}`}>
                    <Eye className="hover:text-cyan-600" size={20} />
                  </Link>
                  <button onClick={() => handleDelete(personnel.id)}>
                    <Trash2
                      className="hover:text-red-600"
                      size={18}
                      strokeWidth={2}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
