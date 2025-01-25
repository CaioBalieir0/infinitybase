import { Form, Button, InputGroup } from "react-bootstrap";

export default function Search() {
  return (
    <>
      <Form.Label>Buscar tarefa</Form.Label>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Pesquisar por título da tarefa"
        />
        <Button variant="outline-warning" id="buscar">
          Buscar
        </Button>
        <Button variant="outline-danger" id="limpar">
          Limpar
        </Button>
      </InputGroup>
    </>
  );
}
