import { DivFrequently, SubtitleHDos } from './Frequently-styled.jsx'
import { FrequentlyText } from './FrequentlyText.jsx';
import { Accordion } from './Accordion.jsx';

export const FrequentlyQuestions = () => {
   
    return (
        <DivFrequently>
            <SubtitleHDos>Frequently Asked Questions</SubtitleHDos>

            {FrequentlyText.map(({ title, text }, index) => {
                return (
                    <div key={index}>
                        <Accordion title={title} text={text}/>
                     
                    </div>

                )
            })}
            


        </DivFrequently>
    )
}
