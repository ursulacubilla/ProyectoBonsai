import styled from 'styled-components'


export const DivPlans = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;

export const ContainerOne = styled.div`
margin-top: 200px;
  display: flex;
  align-items: center;
justify-content: space-evenly;
`;

export const ContainerTwo = styled.div`
display: flex;
justify-content: center;
`;


export const CardsArticle = styled.div`
      /* position: relative; */
    /* scroll-snap-align: center; */
   width: 300px;
    padding: 60px 40px;
    margin-left: 10px;
    border-radius: 5px;
    border: 1px solid #bcbcc0;
    box-shadow: 0 4px 8px rgba(89, 73, 30, 0.16);  
    display: flex;
    flex-direction: column;
    background-color: #fbfcff;
`;

export const TitleHTres = styled.h3`
font-size: 26px;
font-weight: 600px;
margin: 0;
padding: 0;
color: #4c525a;
`;

export const ParagraphSubtitle = styled.p`
max-width: 90%;
font-size: 14px;
color: #4c525a;
margin: 0 0 15px 0;
`;

export const ParagraphCards = styled.div`
    font-size: 62px;
    line-height: 72px;
    font-weight: 600;
    color: #4c525a;
    display: flex;
    align-items: end;
`;


export const SpanSimbolo = styled.span`
position: relative;
    top: 10px;
    margin-right: 10px;
    align-self: flex-start;
    font-size: 30px;
    line-height: 28px;
    font-weight: 400;
`;


export const SpanParagraph = styled.span`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 26px;
    line-height: 1.4;
    font-weight: 400;
    margin-left: 10px;
`;



export const LineaHr = styled.hr`
      width: 100%;
    border: 1px solid #01b289;
`;


export const UnorderList = styled.ul`
padding: 0;
margin-left: 15px;
display: flex;
flex-direction: column;
`;

export const List = styled.li`
    font-size: 16px;
    line-height: 23px;
    list-style: url('/src/assets/5e668ac7510abc1d0f5c1c14_green-tick.svg');
    padding-bottom: 18px;
`;

export const DivButton = styled.div`
/* width: auto;
height: 300px; */
/* background-color: antiquewhite; */
`;


export const ButtonOne = styled.button`
    background-color: #00b289;
    width: 100%;
    padding: 22px 25px;
    border-radius: 4px;
    font-weight: 700;
    text-align: center;
    letter-spacing: .7px;
    text-decoration: none;
    text-transform: uppercase;
    margin-top: 220px;
`;


export const Button = styled.button`
background-color: #00b289;
width: 100%;
    padding: 22px 25px;
    border-radius: 4px;
    font-weight: 700;
    text-align: center;
    letter-spacing: .7px;
    text-decoration: none;
    text-transform: uppercase;
    margin-top: 156px;
`;

export const ButtonTwo = styled.button`
background-color: #00b289;
width: 100%;
    padding: 22px 25px;
    border-radius: 4px;
    font-weight: 700;
    text-align: center;
    letter-spacing: .7px;
    text-decoration: none;
    text-transform: uppercase;
    margin-top: 23px;
`;