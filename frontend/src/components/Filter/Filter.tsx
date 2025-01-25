"use client";
import { Row, Col } from "react-bootstrap";
import Priority from "./Priority";
import Search from "./Search";
import { useState } from "react";

interface FilterProps {
  onFiltersChange: (filters: Filters) => void;
}

interface Filters {
  priority: string;
  search: string;
}

export default function Filter({ onFiltersChange }: FilterProps) {
  const [selectedPriority, setSelectedPriority] = useState<string>("Todas");
  const [search, setSearch] = useState<string>("");

  const handlePriority = (selected: string) => {
    setSelectedPriority(selected);
    onFiltersChange({ priority: selected, search });
  };

  const handleSearch = (selected: string) => {
    setSearch(selected);
    onFiltersChange({ priority: selectedPriority, search: selected });
  };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col lg="4">
          <Search onClickButton={handleSearch} />
        </Col>
        <Col lg="4">
          <Priority onFilterChange={handlePriority} />
        </Col>
      </Row>
    </>
  );
}
