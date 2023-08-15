import React, { useState } from 'react'
import { DivFrequently, Paragraph, SubtitleHDos } from './Frequently-styled.jsx'
import { FrequentlyText } from './FrequentlyText.jsx';

export const FrequentlyQuestions = () => {
    const [count, setCount] = useState(
        new Array(FrequentlyText.length).fill(false)
    );

    const FunctionFunc = () => {
        
    
    setCount(!count);

        
    }

    console.log("hola", count);
    return (
        <DivFrequently>
            <SubtitleHDos>Frequently Asked Questions</SubtitleHDos>

            {FrequentlyText.map(({ title, text, id }, index) => {
                return (
                    <div key={index}>
                        <Paragraph onClick={FunctionFunc}>{title}</Paragraph>
                        {!count && <p>{text}</p>}
                    </div>

                )
            })}
            


        </DivFrequently>
    )
}
