"use client";
import { useMemo } from "react";
import { Row, Col, Button } from "react-bootstrap";
import s from "./Board.module.css";
import Task from "../Tasks/Tasks";
import useTasks from "@/hooks/useTasks";
import ModalCreate from "../Modals/ModalCreate";

interface BoardProps {
  titulo: string;
  status: string;
  filters: {
    priority: string;
    search: string;
  };
}

export default function Board({ titulo, status, filters }: BoardProps) {
  const memoizedFilters = useMemo(
    () => ({
      ...filters,
      priority: filters.priority === "Todas" ? "" : filters.priority,
    }),
    [filters.priority, filters.search]
  );

  const { tasks, loading, error } = useTasks(memoizedFilters);

  if (loading) {
    return <p>Carregando tarefas...</p>;
  }

  if (error) {
    return <p>Erro ao carregar tarefas: {error}</p>;
  }

  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <Row className={`${s.board} justify-content-center w-100`}>
      <Col>
        <div className="mb-4 border-bottom py-2 justify-content-between d-flex border-bottom">
          <div>
            <h3>{titulo}</h3>
          </div>
          <div>
            <ModalCreate />
          </div>
        </div>
        <Row>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <Col key={task._id} className="mb-3">
                <Task
                  _id={task._id}
                  titulo={task.title}
                  descricao={task.description}
                  status={task.status}
                  prioridade={task.priority}
                  data={task.createdAt}
                />
              </Col>
            ))
          ) : (
            <p>Nenhuma tarefa {status.toLowerCase()}.</p>
          )}
        </Row>
      </Col>
    </Row>
  );
}
