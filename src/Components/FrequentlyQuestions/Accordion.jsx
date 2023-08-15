import React, { useState } from 'react';
import { Paragraph, TextAccordion } from './Frequently-styled';


export const Accordion = ({ title, text}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

  return (
    <div>
    <Paragraph onClick={handleClick}>
    {title}
    </Paragraph>
    {isActive && <TextAccordion>{text}</TextAccordion>}
    </div>
  )
}
