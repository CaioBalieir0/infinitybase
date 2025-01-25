"use client";
import { Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import s from "./Board.module.css";
import Task from "../Tasks/Tasks";
import useTasks from "@/hooks/useTasks";

interface BoardProps {
  titulo: string;
}

export default function Board({ titulo }: BoardProps) {
  const { tasks, loading, error } = useTasks();
  return (
    <Row className={`${s.board} justify-content-center`}>
      <Col lg="4">
        <div className="mb-4 border-bottom py-2 justify-content-between d-flex">
          <div>
            <h3>{titulo}</h3>
          </div>
          <div>
            <Button variant="success">Adicionar</Button>
          </div>
        </div>
        <Row>
          {tasks.map((task) => (
            <Col key={task._id} className="mb-3">
              <Task
                titulo={task.title}
                descricao={task.description}
                prioridade={task.priority}
                data={task.createdAt}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
