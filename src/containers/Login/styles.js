import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.png';


export const Conteiner = styled.div`
display: flex;
height: 100vh;
width: 100vw;

`;

export const LeftContainer = styled.div`
background: url('${BackgroundLogin}');

background-size: cover;
background-position: center;

height: 100%;
width:100% ;
max-width: 50%;


display: flex;
align-items: center;
justify-content: center;

img{
    width: 70%;
}

`

export const RightContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

height: 100%;
width:100% ;
max-width: 50%;

background: url('${Background}');
background-color: #424242;

p{
    color: #ffff;
    font-size: 18px;
    font-weight: 800px;


    a {
        text-decoration: underline;
    }
}


`;
export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: #ffff;
span{
    color: #9758a6;
  font-family: 'Road Rage', sans-serif;

}

`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;

`;

export const InputConteiner = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;

input{
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
}

    label{
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      

    }

p {
  color: #cf3057;
  font-size: 14px;
  line-height: 80%;
  font-weight:600;
  height: 10px;
}


`;








