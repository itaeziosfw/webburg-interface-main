import styled from 'styled-components';
import BannerHome from '../../assets/banner-home.svg';
import Background from '../../assets/background.png';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 490px;

  h1 {
    font-family: 'Roand Rage', sans-serif;
    font-size: 80px;
    color: #fff;
    position: absolute;
    right: 20%;
    top: 10%;
  }
`;

export const Conteiner = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.11)
    ),
  url('${Background}');
  height: 100%;
`;

export const Content = styled.div`
padding-bottom: 70px;




`;
