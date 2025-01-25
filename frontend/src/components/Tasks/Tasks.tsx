import { Row, Col, Button } from "react-bootstrap";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import formatDate from "../../ultils/formatDate";

interface TaskProps {
  titulo: string;
  descricao: string;
  prioridade: string;
  data: string | Date;
}

export default function Task({ titulo, descricao, data }: TaskProps) {
  return (
    <>
      <div className="py-4 border-danger border p-5">
        <Row className="text-center mb-2">
          <Col>
            <h3 className="">{titulo}</h3>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="lead">{descricao}</p>
          </Col>
        </Row>
        <Row className="text-center mb-3">
          <Col>
            <sub className="">{formatDate(data)}</sub>
          </Col>
        </Row>
        <Row className="text-center justify-content-center">
          <Col>
            <Button variant="primary">
              Editar <FaPencilAlt />
            </Button>
          </Col>
          <Col>
            <Button variant="danger">
              Excluir <FaTrash />
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
