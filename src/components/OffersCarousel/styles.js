

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

export const ConteinerItems =styled.div`


background: url('{$(props) => props,$imageurl}');

background-position: center;
background-size: cover;
border-radius: 20px;

display: flex;
align-items: center;
padding: 20px 10px;
width: 100%;
height: 200px;



p{
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 50px;
}

`;



