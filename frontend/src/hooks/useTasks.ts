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

interface Filter {
  title?: string;
  priority?: string;
  status?: string;
}

export default function useFilteredTasks(filters: Filter) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api", {
          params: filters,
        });
        setTasks(response.data.data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar tarefas.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [filters]);

  return { tasks, loading, error };
}
