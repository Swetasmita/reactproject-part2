import React from "react";
import "./faq.css";
import FAQItem from "./FAQItem";

const FAQComp = () => {
    const faqs = [
        {
          question: "How many bones does a cat have?",
          answer: "A cat has 230 bones - 6 more than a human",
        },
        {
          question: "How much do cats sleep?",
          answer: "The average cat sleeps 12-16 hours per day",
        },
        {
          question: "How long do cats live",
          answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
        },
      ]
  return (
    <div className="faq-container">
      <h1>Frequently asked Questions </h1>
      {
        faqs.map((faq, index) =>{
        // return <div>{item.question}</div>
        //passing objects as props from parent to child component
        return <FAQItem faq ={faq} index ={index} key={index}/>
        })
    }
    </div>
  );
};

export default FAQComp;
