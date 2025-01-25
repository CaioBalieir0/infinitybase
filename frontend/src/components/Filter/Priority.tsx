import { Form } from "react-bootstrap";
import Board from "../Board/Board";

export default function Priority() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Prioridade</Form.Label>
      <Form.Select>
        <option value="3">Todas</option>
        <option value="2">Alta</option>
        <option value="1">Média</option>
        <option value="0">Baixa</option>
      </Form.Select>
    </Form.Group>
  );
}
