import styled from 'styled-components'
import { popularProducts } from '../constants';
import Product from './Product';


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
        { popularProducts.map(item => (
            <Product key={item.id} item={item}/>
        ))}
    </Container>
  )
}

export default Products