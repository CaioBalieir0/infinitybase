import { Form } from "react-bootstrap";

interface FilterSelectProps {
  onFilterChange: (selected: string) => void;
}

export default function Priority({ onFilterChange }: FilterSelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>Prioridade</Form.Label>
      <Form.Select onChange={handleChange}>
        <option value="todas">Todas</option>
        <option value="alta">Alta</option>
        <option value="media">Média</option>
        <option value="baixa">Baixa</option>
      </Form.Select>
    </Form.Group>
  );
}
