import { api } from '../../services/api';
import { useEffect, useState } from 'react';

import 'react-multi-carousel/lib/styles.css';

import Carousel from 'react-multi-carousel';
import { Conteiner, ConteinerItems, Title } from './styles';

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');
  const onlyOffers = data.filter ((product) => product.offer)
     
      setOffers (onlyOffers);
    }

    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 10280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 10280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };

  return (
    <Conteiner>
      <Title>Ofertas do Dia</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partiaVisible={false}
        intemClass="carrosel-items"
      >
        {offers.map((product) => (
          <ConteinerItems key={product.id} $imageurl={product.url}>
        <p>product.name</p>
        </ConteinerItems>
        ))}
      </Carousel>
    </Conteiner>
  );
}
Carousel