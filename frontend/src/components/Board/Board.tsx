"use client";
import { Row, Col, Button } from "react-bootstrap";
import s from "./Board.module.css";
import Task from "../Tasks/Tasks";
import useTasks from "@/hooks/useTasks";

interface BoardProps {
  titulo: string;
  status: string;
  filters: {
    priority: string;
    search: string;
  };
}

export default function Board({ titulo, status }: BoardProps) {
  const { tasks, loading, error } = useTasks();

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
            <Button variant="success">Adicionar</Button>
          </div>
        </div>
        <Row>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <Col key={task._id} className="mb-3">
                <Task
                  titulo={task.title}
                  descricao={task.description || "Sem descrição"}
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
