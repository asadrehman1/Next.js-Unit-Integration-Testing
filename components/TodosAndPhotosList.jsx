"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export const TodosAndPhotosList = () => {
  const [todos, setTodos] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch todos
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));

    // Fetch photos
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=5")
      .then((res) => setPhotos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Todos</h2>
      <ul className="mb-6">
        {todos.map((todo) => (
          <li key={todo.id} className="border p-2 mb-1 rounded">
            {todo.title} {todo.completed ? "(Completed)" : "(Pending)"}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-2">Photos</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <li key={photo.id} className="border p-2 rounded">
            <p className="text-sm">{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
