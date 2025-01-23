import { Request, Response } from "express";
import Task from "../models/Task";

export const createTask = async (req: Request, res: Response) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res
      .status(201)
      .json({ message: "Tarefa adicionada com sucesso", data: newTask });
  } catch (e) {
    res.status(500).json({ message: "Erro ao criar tarefa." });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    res
      .status(200)
      .json({ message: "Tarefa atualizada com sucesso", data: updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar tarefa", error });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res
        .status(404)
        .json({ success: false, error: "Tarefa não encontrada." });
    }

    res
      .status(200)
      .json({ message: "Tarefa deletada com sucesso", data: deletedTask });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar tarefa", error });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const { title, priority, status } = req.query;

    const filter: any = {};
    if (title) {
      filter.title = { $regex: new RegExp(title as string, "i") };
    }
    if (priority) {
      filter.priority = priority;
    }
    if (status) {
      filter.status = status;
    }

    const tasks = await Task.find(filter);

    res.status(200).json({
      message: "Tarefas encontradas com sucesso",
      data: tasks,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não existe nenhuma tarefa adicionada.", error });
  }
};
