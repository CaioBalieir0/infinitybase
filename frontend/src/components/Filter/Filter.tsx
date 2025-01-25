"use client";
import { Row, Col } from "react-bootstrap";
import Priority from "./Priority";
import Search from "./Search";

export default function Filter() {
  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col lg="4">
          <Search />
        </Col>
        <Col lg="4">
          <Priority />
        </Col>
      </Row>
    </>
  );
}
