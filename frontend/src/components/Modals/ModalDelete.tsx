import { useState } from "react";
import { Row, Button, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FaTrash } from "react-icons/fa";
import useDeleteTask from "@/hooks/useDeleteTask";

interface ModalDeleteProps {
  modalTaskId: string;
}

export default function ModalDelete({ modalTaskId }: ModalDeleteProps) {
  const [show, setShow] = useState(false);
  const { deleteTask, loading, error, success } = useDeleteTask();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelet = () => {
    deleteTask(modalTaskId);
    window.location.reload();
    setShow(false);
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Excluir <FaTrash />
      </Button>

      <Modal show={show} onHide={handleClose} className="p-5">
        <Modal.Header closeButton className="bg-dark px-5">
          <Modal.Title>Excluir tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark px-5">
          Deseja excluir esta tarefa?
          <Row className="g-0 mt-4 pb-3">
            <Col lg={3}>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
            </Col>
            <Col lg={3}>
              <Button variant="danger" onClick={handleDelet}>
                Excluir
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
