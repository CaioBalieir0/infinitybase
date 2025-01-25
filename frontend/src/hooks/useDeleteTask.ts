import axios from "axios";
import { useState } from "react";

export default function useDeleteTask() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const deleteTask = async (taskId: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/${taskId}`
      );

      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (err: any) {
      console.log(err);
      setError(err.message || "Erro ao deletar tarefa.");
    } finally {
      setLoading(false);
    }
  };

  return { deleteTask, loading, error, success };
}