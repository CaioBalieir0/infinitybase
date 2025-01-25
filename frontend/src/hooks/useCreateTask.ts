import { useState } from "react";
import axios from "axios";

interface Task {
  title: string;
  description: string;
  status: string;
  priority: string;
}

export default function useCreateTask() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const createTask = async (newTask: Task) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post("http://localhost:5000/api", newTask);

      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (err: any) {
      console.log(err);
      setError(err.message || "Erro ao criar tarefa.");
    } finally {
      setLoading(false);
    }
  };

  return { createTask, loading, error, success };
}
