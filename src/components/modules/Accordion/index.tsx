"use client";
import React, { useState } from "react";
import "./Accordion.css";

type Props = QA & {};

const Accordion = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <dl className="bl_accordion">
      <dt className="bl_accordion_index" onClick={toggleAccordion}>
        <p className="bl_accordion_txt">{props.question}</p>
        <button className="bl_accordion_toggle">{isOpen ? "-" : "+"}</button>
      </dt>
      <dd className={`bl_accordion_content ${isOpen ? "open" : ""}`}>
        <p className="bl_accordion_txt">{props.answer}</p>
      </dd>
    </dl>
  );
};

export default Accordion;
