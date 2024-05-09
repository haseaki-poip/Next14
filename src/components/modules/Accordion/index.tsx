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
    <dl className="bl_accordion">
      <dt className="bl_accordion_index" onClick={toggleAccordion}>
        <p className="bl_accordion_txt">{question}</p>
        <button className="bl_accordion_toggle">{isOpen ? "-" : "+"}</button>
      </dt>
      <dd className={`bl_accordion_content ${isOpen ? "open" : ""}`}>
        <p className="bl_accordion_txt">{answer}</p>
      </dd>
    </dl>
  );
};

export default Accordion;
