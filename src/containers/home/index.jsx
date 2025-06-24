import { Banner, Conteiner, Content } from "./styles";
import { CategoriesCarousel } from "../../components/CategoriesCarousel/index";
import { OffersCarousel } from "../../components/OffersCarousel";

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-Vindo!</h1>
      </Banner>
      <Conteiner>
        <Content>
          <CategoriesCarousel/>
         
         <OffersCarousel/>
        </Content>
      </Conteiner>
    </main>
  );
}
