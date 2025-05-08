import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export function Read() {
  const { id } = useParams();
  const [personnel, setPersonnel] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/read/" + id)
      .then((res) => {
        console.log("Fetched data:", res.data);
        setPersonnel(res.data || {});
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="w-md">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-lg p-8">
        <h2 className="text-center text-2xl">Personnel Details</h2>

        <div className="text-normal">
          <p className="p-2"><strong>ID:</strong> {personnel.id}</p>
          <p className="p-2"><strong>Name:</strong> {personnel.name}</p>
          <p className="p-2"><strong>Email:</strong> {personnel.email}</p>
          <p className="p-2"><strong>Address:</strong> {personnel.address}</p>
        </div>
      </div>

      <div className="flex gap-3 my-3 items-center">
        <Link className="px-3 py-2 rounded bg-gray-500 shadow text-white" to="/">Back</Link>
        <Link className="px-3 py-2 rounded bg-cyan-500 shadow text-white" to={`/edit/${personnel.id}`}>Edit</Link>
      </div>
    </div>
  );
}
