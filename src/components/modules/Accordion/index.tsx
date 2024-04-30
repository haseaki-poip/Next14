"use client";
import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        {question}
        <button>{isOpen ? "-" : "+"}</button>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        {answer}
      </div>
    </div>
  );
};

export default Accordion;
