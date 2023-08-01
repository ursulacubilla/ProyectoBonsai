import styled from 'styled-components'


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


export const CardsArticle = styled.article`
      /* position: relative; */
    scroll-snap-align: center;
    min-width: 250px;
    max-width: 350px;
    height: 600px;
    margin: 50px 5px 0;
    padding: 0 15px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #bcbcc0;
    box-shadow: 0 4px 8px rgba(89, 73, 30, 0.16);  
`;