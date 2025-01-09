import styled from "styled-components";
import ProductList from "./components/ProductList";
import { useEffect } from 'react';
// import { useFilterContext } from "./context/filter_context";

const Products = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
        <ProductList />
    </Wrapper>
  );
};

const Wrapper = styled.section`

background: linear-gradient(135deg, #F5F3FF 0%, #F3E8FF 100%);


  .grid-filter-column {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
