import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const DivContainer = styled.div`
display: flex;
width: 90%;
position: sticky;
height: 100px;
background-color: white;
top: 0;
margin: 0 auto;
`;

export const UnOrderList = styled.ul`
width: 90%;
text-align: center;
padding-top: 20px;
  
`;

export const List = styled(Link)`
margin-left: 40px;
color: #4c4d5f;
font-size: 17px;
    font-weight: 400;
`;

export const Login = styled(Link)`
margin-left: 150px;
  border: 1px solid #00b289;
  padding: 5px 10px;
  color: #00b289;
  border-radius: 5px;
  font-size: 13px;
    font-weight: 700;
    text-align: center;
    padding: 12px 27px 9px;
`;

export const StartFree = styled(Link)`
margin-left: 17px;
border: 1px solid #00b289;
padding: 12px 27px 9px;
  background-color: #00b289;
  border-radius: 5px;
  color: #fff;
  font-size: 13px;
    font-weight: 700;
    text-align: center;
`;


export const Logo = styled.img`
width: 150px;
padding-left: 70px;
`;