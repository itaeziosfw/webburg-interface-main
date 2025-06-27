

import styled from "styled-components";



export const Conteiner =styled.div`
.carousel-item {
    padding-right: 40px;

}
padding-left: 40px;

`;

export const Title =styled.h2`
font-size: 32px;
font-weight: 800;
color: #61a120;
padding-bottom: 12px;
text-align: center;
margin-bottom: 40px;
margin-top: 70px 0;
position: relative;


&::after{
content:'';
width: 56px;
height: 4px;
position: absolute;
background-color: #61a120;
left: calc(50% - 28px);
bottom: 0;
}

`;


export const ConteinerItems = styled.div`
  background: ${(props) => `url(${props.$imageUrl})`};
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding:  20px 10px;
  height:390px;
  width:94%;

  p {
    color: #ffff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 35px;
    font-weight: bold;
    margin-top: 50px;

  }
`;





