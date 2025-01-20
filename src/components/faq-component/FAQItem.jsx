import React, { useEffect, useState } from "react";

const FAQItem = ({ faq, index }) => {
const [isShow, setIsShow] = useState(false);

//when component renders for the first time
useEffect(() =>{
  if(index === 0){
    setIsShow(true);
  }
}, []);

const handleClick = () =>{
    //If isShow is true, Toggle to false and vice verse
    setIsShow(!isShow)  
}
  return (
    <div className="faq-box">
      <div className="question" onClick={handleClick}>
        {/* Add arrow css functionality */}
        <button className= {isShow ? 'arrow' : '' }>&gt;</button>
        <div>{faq.question}</div>
      </div>
      <div className="answer">
        {isShow && faq.answer}
      </div>
    </div>
  );
};

export default FAQItem;
