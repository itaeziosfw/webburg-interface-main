import { api } from '../../services/api';
import { useEffect, useState } from 'react';

import 'react-multi-carousel/lib/styles.css';

import Carousel from 'react-multi-carousel';
import { Conteiner, ConteinerItems, Title } from './styles';

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
      console.log(data);
    }

    loadCategories();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };
  

  return (
    <Conteiner>
      <Title>hello</Title>

      <Carousel
        responsivel={responsive}
        infinite={true}
        partiaVisible={false}
        intemClass="carrosel-items"
      >
        {categories.map((category) => (
          <ConteinerItems key={category.id} imageUrl={category.url}> {category.name}</ConteinerItems>
        ))}
      </Carousel>
    </Conteiner>
  );
}
