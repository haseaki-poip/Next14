import Accordion from "@/components/modules/Accordion";
import AccordionList from "@/components/modules/AccordionList";

const qaPage = () => {
  const qaList = [
    {
      question: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
      answer: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      question: "uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
      answer: "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
    },
    {
      question: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      answer: "ssssssssssssssssssssssssssssssssssssssssssssssssssss",
    },
  ];
  return (
    <>
      <AccordionList qaList={qaList} />
    </>
  );
};

export default qaPage;
