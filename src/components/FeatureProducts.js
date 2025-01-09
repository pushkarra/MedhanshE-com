import { useProductContext } from "../context/productcontex";
import styled from "styled-components";
import Product from "./product-home";
import React from "react";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  // useEffect(() => {
  //   console.log("Feature Products: ", featureProducts);
  // }, [featureProducts]);

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </LoadingSpinner>
      </LoadingContainer>
    );
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="section-header">
          <div className="heading-group">
            <h3 className="subheading">Featured Collection</h3>
          </div>
          <p className="description">
            Discover our handpicked selection of premium products that combine style,
            quality, and innovation.
          </p>
        </div>
        <div className="products-grid">
          {featureProducts.map((curElem) => (
            <Product key={curElem.id} {...curElem} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  height: 100px;
`;

const LoadingSpinner = styled.div`
  --uib-size: 2.8rem;
  --uib-speed: 0.9s;
  --uib-color: #9c27b0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--uib-size);
  width: var(--uib-size);

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
  }

  & > div::before {
    content: '';
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    opacity: 0.5;
    animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    box-shadow: 0 0 20px rgba(156, 39, 176, 0.3);
  }
`;

const Wrapper = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, #f5f3ff 0%, #f3e8ff 100%);
  
  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 6rem;
    
    .heading-group {
      margin-bottom: 2rem;
    }
    
    .subheading {
      font-size: 2rem;
      font-weight: 600;
      color: #9c27b0;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      margin-bottom: 1rem;
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 2px;
        background: linear-gradient(120deg, #9c27b0, #673ab7);
      }
    }

    .description {
      max-width: 70rem;
      margin: 0 auto;
      color: #6a1b9a;
      font-size: 1.6rem;
      line-height: 1.6;
      opacity: 0.9;
    }
  }

  .products-grid {
    display: grid;
    gap: 2.5rem; /* Reduced gap for smaller cards */
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); /* Adjusted size of cards */
    
    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  figure {
    width: 100%;
    height: 0;
    padding-bottom: 100%; /* Keeps the card square */
    position: relative;
    overflow: hidden;
    background: white;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
      object-fit: contain;
      transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
      filter: brightness(.96);
    }

         &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, 
        rgba(156, 39, 176, 0),
        rgba(156, 39, 176, 0.1)
      );
      opacity: 0;
      transition: all 0.3s ease;
    }

    &:hover {
      &::after {
        opacity: 1;
      }

      img {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
  }

  .card {
    background: white;
    border: 1px solid #ddd; /* Border to define card edges */
    border-radius: 0; /* Removed rounded edges */
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    filter: brightness(0.96); /* Applied brightness filter */

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(156, 39, 176, 0.2);
    }

    .category-tag {
      position: absolute;
      top: 1rem;
      left: 1rem; /* Moved to the left side */
      background: rgba(147, 51, 234, 0.9);
      color: white;
      padding: 0.4rem 0.8rem;
      font-size: 1.2rem;
      font-weight: 500;
      border-radius: 0; /* Removed rounded edges */
      z-index: 2;
    }

    .card-data {
      padding: 1.5rem; /* Reduced padding for smaller card */
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .card-data-flex {
      margin-top: auto;
      padding-top: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      @media (max-width: 576px) {
        flex-direction: column; /* Stack subcategory below */
        align-items: flex-start;

        .subcategory {
          margin-top: 1rem;
          font-size: 1.4rem;
          color: #6a1b9a;
        }
      }
    }

    h3 {
      font-size: 1.6rem;
      font-weight: 600;
      color: #4a148c;
      margin-bottom: 0.5rem;
    }

    .card-data--price {
      font-size: 1.8rem;
      font-weight: 700;
      color: #9c27b0;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 2rem;
      background: linear-gradient(120deg, #9c27b0, #673ab7);
      color: white;
      font-size: 1.4rem;
      font-weight: 500;
      border-radius: 0; /* Removed rounded edges */
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(156, 39, 176, 0.2);
      text-decoration: none;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(156, 39, 176, 0.3);
      }

      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 6rem 0;

    .section-header {
      .heading {
        font-size: 3.2rem;
      }

      .description {
        font-size: 1.4rem;
      }
    }

    .products-grid {
      gap: 1.5rem; /* Reduced gap for smaller screens */
    }
  }
`;


export default FeatureProduct;






// import { useProductContext } from "../context/productcontex";
// import styled from "styled-components";
// import Product from "./Product";
// import React, { useEffect } from "react";

// const FeatureProduct = () => {
//   const { isLoading, featureProducts } = useProductContext();
//   useEffect(() => {
//     // Log featureProducts to the console whenever it changes
//     console.log("Feature Products: ", featureProducts);
//   }, [featureProducts]);

//   if (isLoading) {
//     return (
//       <LoadingContainer>
//         <LoadingSpinner>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//         </LoadingSpinner>
//       </LoadingContainer>
//     );
//   }

 

//   return (
//     <Wrapper className="section">
//       <div className="container">
//         <div className="intro-data">Check Now!</div>
//         <div className="common-heading">Our Feature Services</div>
//         <div className="grid grid-three-column">
//           {featureProducts.map((curElem) => {
//             return <Product key={curElem.id} {...curElem} />;
//           })}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const LoadingContainer = styled.div`
  
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   height: 100px;
// `;

// const LoadingSpinner = styled.div`
//   --uib-size: 2.8rem;
//   --uib-speed: 0.9s;
//   --uib-color: #183153;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: var(--uib-size);
//   width: var(--uib-size);

//   & > div {
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     height: 100%;
//     width: 100%;
//   }

//   & > div::before {
//     content: '';
//     height: 20%;
//     width: 20%;
//     border-radius: 50%;
//     background-color: var(--uib-color);
//     transform: scale(0);
//     opacity: 0.5;
//     animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
//     box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
//   }

//   & > div:nth-child(2) {
//     transform: rotate(45deg);
//   }

//   & > div:nth-child(2)::before {
//     animation-delay: calc(var(--uib-speed) * -0.875);
//   }

//   & > div:nth-child(3) {
//     transform: rotate(90deg);
//   }

//   & > div:nth-child(3)::before {
//     animation-delay: calc(var(--uib-speed) * -0.75);
//   }

//   & > div:nth-child(4) {
//     transform: rotate(135deg);
//   }

//   & > div:nth-child(4)::before {
//     animation-delay: calc(var(--uib-speed) * -0.625);
//   }

//   & > div:nth-child(5) {
//     transform: rotate(180deg);
//   }

//   & > div:nth-child(5)::before {
//     animation-delay: calc(var(--uib-speed) * -0.5);
//   }

//   & > div:nth-child(6) {
//     transform: rotate(225deg);
//   }

//   & > div:nth-child(6)::before {
//     animation-delay: calc(var(--uib-speed) * -0.375);
//   }

//   & > div:nth-child(7) {
//     transform: rotate(270deg);
//   }

//   & > div:nth-child(7)::before {
//     animation-delay: calc(var(--uib-speed) * -0.25);
//   }

//   & > div:nth-child(8) {
//     transform: rotate(315deg);
//   }

//   & > div:nth-child(8)::before {
//     animation-delay: calc(var(--uib-speed) * -0.125);
//   }

//   @keyframes pulse0112 {
//     0%,
//     100% {
//       transform: scale(0);
//       opacity: 0.5;
//     }
//     50% {
//       transform: scale(1);
//       opacity: 1;
//     }
//   }
// `;

// const Wrapper = styled.section`
//   padding: 4rem 0;
//   background-color: ${({ theme }) => theme.colors.bg};
//   // background-color: #FFFFF0;


//   .container {
//     max-width: 130rem;
//   }

//     .intro-data{
//     margin-bottom: 0;
//     text-transform: uppercase;
//     color: ${({ theme }) => theme.colors.heading};
//     font-size: 1.6rem;
//   }

//   .common-heading {
//     color: ${({ theme }) => theme.colors.btn};
//     font-size: 3.8rem;
//     font-weight: 600;
//     margin-bottom: 6rem;
//     padding: 1rem;
//     text-transform: capitalize;
          
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s linear;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       transition: all 0.2s linear;
//       cursor: pointer;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//     &:hover img {
//       transform: scale(1.2);
//     }
//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: all 0.2s linear;
//     }

//     .caption {
//       position: absolute;
//       top: 15%;
//       right: 10%;
//       text-transform: uppercase;
//       background-color: ${({ theme }) => theme.colors.bg};
//       color: ${({ theme }) => theme.colors.helper};
//       padding: 0.8rem 2rem;
//       font-size: 1.2rem;
//       border-radius: 2rem;
//     }
//   }

//   .card {
//     background-color: #fff;
//     border-radius: 1rem;

//     .card-data {
//       padding: 0 2rem;
//     }

//     .card-data-flex {
//       margin: 2rem 0;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }

//     h3 {
//       color: ${({ theme }) => theme.colors.text};
//       text-transform: capitalize;
//     }

//     .card-data--price {
//       color: ${({ theme }) => theme.colors.helper};
//     }

//     .btn {
//       margin: 2rem auto;
//       background-color: rgb(0 0 0 / 0%);
//       border: 0.1rem solid rgb(98 84 243);
//       display: flex;
//       justify-content: center;
//       align-items: center;

//       &:hover {
//         background-color: rgb(98 84 243);
//       }

//       &:hover a {
//         color: #fff;
//       }
//       a {
//         color: rgb(98 84 243);
//         font-size: 1.4rem;
//       }
//     }
//   }
// `;

// export default FeatureProduct;