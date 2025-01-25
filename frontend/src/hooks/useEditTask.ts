import { useState } from "react";
import axios from "axios";

interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  createdAt: string;
}

interface UpdateTaskData {
  title: string;
  description: string;
  priority: string;
  status: string;
}

export default function useTaskUpdate(taskId: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const updateTask = async (updatedTaskData: UpdateTaskData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.put(
        `http://localhost:5000/api/${taskId}`,
        updatedTaskData
      );

      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.message || "Erro ao atualizar a tarefa.");
    } finally {
      setLoading(false);
    }
  };

  return { updateTask, loading, error, success };
}
