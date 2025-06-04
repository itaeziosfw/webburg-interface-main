import { Banner, Conteiner, Content } from "./styles";
import { CategoriesCarousel } from "../../components/CategoriesCarousel/inde";

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-Vindo!</h1>
      </Banner>
      <Conteiner>
        <Content>
          <CategoriesCarousel/>
          <div>Carrocel Produtos</div>
        </Content>
      </Conteiner>
    </main>
  );
}
