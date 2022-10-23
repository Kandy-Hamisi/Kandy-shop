import { useEffect, useState } from 'react';
import styled from 'styled-components'
// import { popularProducts } from '../constants';
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Products = ({ category, filter, sort }) => {
  
  const [ products, setProducts ] = useState([]);
  const [ filteredProducts, setFilteredProducts ] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          category
            ? `http://localhost:3000/api/products?category=${category}`
            : "http://localhost:3000/api/products");
            setProducts(response.data);
      } catch(err) {
        
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) => 
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [ products, filter, category ]);


  return (
    <Container>
        { filteredProducts.map(item => (
            <Product key={item.id} item={item}/>
        ))}
    </Container>
  )
}

export default Products