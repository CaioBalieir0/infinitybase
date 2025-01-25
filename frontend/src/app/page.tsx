"use client";
import { Row, Col } from "react-bootstrap";
import Filter from "@/components/Filter/Filter";
import Board from "@/components/Board/Board";

export default function HomePage() {
  return (
    <>
      <Filter />
      <Row className="justify-content-evenly mt-5">
        <Col style={{ padding: "0" }} className="mx-5">
          <Board titulo="Em Andamento" status="Em Andamento" />
        </Col>
        <Col style={{ padding: "0" }} className="mx-5">
          <Board titulo="Concluídas" status="Concluída" />
        </Col>
        <Col style={{ padding: "0" }} className="mx-5">
          <Board titulo="Não Iniciadas" status="Não Iniciada" />
        </Col>
      </Row>
    </>
  );
}
