"use client";
import { Row, Col } from "react-bootstrap";
import useTasks from "../hooks/useTasks";
import Filter from "@/components/Filter/Filter";

export default function HomePage() {
  const { tasks, loading, error } = useTasks();

  if (loading) {
    return <p>Carregando tarefas...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Filter />
      <Row>
        <Col>
          <h3>Em Andamento</h3>
          {tasks &&
          tasks.filter((task) => task.status === "Em Andamento").length > 0 ? (
            tasks
              .filter((task) => task.status === "Em Andamento")
              .map((task) => (
                <div key={task._id}>
                  <h4>{task.title}</h4>
                  <p>{task.description}</p>
                </div>
              ))
          ) : (
            <p>Nenhuma tarefa em andamento.</p>
          )}
        </Col>
        <Col>
          <h3>Concluídas</h3>
          {tasks &&
          tasks.filter((task) => task.status === "Concluída").length > 0 ? (
            tasks
              .filter((task) => task.status === "Concluída")
              .map((task) => (
                <div key={task._id}>
                  <h4>{task.title}</h4>
                  <p>{task.description}</p>
                </div>
              ))
          ) : (
            <p>Nenhuma tarefa concluída.</p>
          )}
        </Col>
        <Col>
          <h3>Não Iniciadas</h3>
          {tasks &&
          tasks.filter((task) => task.status === "Não Iniciada").length > 0 ? (
            tasks
              .filter((task) => task.status === "Não Iniciada")
              .map((task) => (
                <div key={task._id}>
                  <h4>{task.title}</h4>
                  <p>{task.description}</p>
                </div>
              ))
          ) : (
            <p>Nenhuma tarefa não iniciada.</p>
          )}
        </Col>
      </Row>
    </>
  );
}
