import Accordion from "../Accordion";
import "./AccordionList.css";

type Props = {
  qaList: QAlist;
};

const AccordionList = (props: Props) => {
  return (
    <ul className="bl_accordionUnit">
      {props.qaList.map((qa, index) => (
        <li key={index}>
          <Accordion question={qa.question} answer={qa.answer} />
        </li>
      ))}
    </ul>
  );
};

export default AccordionList;
