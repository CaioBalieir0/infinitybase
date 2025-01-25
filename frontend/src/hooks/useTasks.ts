"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  createdAt: string;
}

export default function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api");
        setTasks(response.data.data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar tarefas.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return { tasks, loading, error };
}
