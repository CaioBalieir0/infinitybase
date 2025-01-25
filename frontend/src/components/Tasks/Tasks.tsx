import { Row, Col, Button, Alert } from "react-bootstrap";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import formatDate from "../../ultils/formatDate";
import ModalEdit from "../Modals/ModalEdit";

interface TaskProps {
  _id: string;
  titulo: string;
  descricao: string;
  prioridade: string;
  status: string;
  data: string;
}

export default function Task({
  _id,
  titulo,
  descricao,
  prioridade,
  status,
  data,
}: TaskProps) {
  const dataFormatada = formatDate(data);
  const [datePart, timePart] = dataFormatada.split(", ");

  const variant =
    prioridade === "Alta"
      ? "danger"
      : prioridade === "Média"
      ? "warning"
      : "info";

  const borderColor =
    status === "Não Iniciada"
      ? "danger"
      : status === "Em Andamento"
      ? "warning"
      : "success";

  return (
    <>
      <div className={`py-4 border-${borderColor} border p-5`}>
        <Row className="mb-2">
          <Col className="">
            <h3 className="">{titulo}</h3>
          </Col>
          <Col className="text-center">
            <Alert className="small py-0" variant={variant}>
              {prioridade}
            </Alert>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="lead">{descricao}</p>
          </Col>
        </Row>
        <Row className="text-center mb-3">
          <Col>
            <sub className="">
              {datePart}
              <br />
              {timePart}
            </sub>
          </Col>
        </Row>
        <Row className="text-center justify-content-center">
          <Col>
            <ModalEdit modalTaskId={_id} />
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
