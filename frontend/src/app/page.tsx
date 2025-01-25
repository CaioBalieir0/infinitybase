"use client";
import { Row, Col } from "react-bootstrap";
import Filter from "@/components/Filter/Filter";
import Board from "@/components/Board/Board";
import { useState } from "react";

export default function HomePage() {
  const [filters, setFilters] = useState({ priority: "Todas", search: "" });

  const handleFiltersChange = (newFilters: {
    priority: string;
    search: string;
  }) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Filter onFiltersChange={handleFiltersChange} />
      <Row className="justify-content-evenly mt-5">
        <Col style={{ padding: "0" }} className="mx-5">
          <Board
            titulo="Não Iniciadas"
            status="Não Iniciada"
            filters={filters}
          />
        </Col>
        <Col style={{ padding: "0" }} className="mx-5">
          <Board
            titulo="Em Andamento"
            status="Em Andamento"
            filters={filters}
          />
        </Col>
        <Col style={{ padding: "0" }} className="mx-5">
          <Board titulo="Finalizada" status="Finalizada" filters={filters} />
        </Col>
      </Row>
    </>
  );
}
