import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const API = "https://medhansh-api.vercel.app/api/products";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #9a7bc2, #e7d5fa);
  color: #4a148c;
  font-family: Arial, sans-serif;
  @media (max-width: 1000px) {
    padding: 30px;
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%; /* Increased width for larger visual impact */
  max-width: 1200px; /* Maximum width for large screens */
  gap: 100px; 
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  padding: 30px;
  overflow: hidden;

  
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 40px;
  }

  @media (max-width: 1000px) {
    padding: 20px;
    gap: 15px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 500px; /* Larger image for better visibility */
  height: 100%;
  max-height: 500px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  object-fit: contain;

  @media (max-width: 1000px) {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #4a148c;
  padding: 20px;
  background: linear-gradient(to right, #ffffff, #f9f3ff);
  border-radius: 10px;
  box-shadow: inset 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 1000px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ProductTitle = styled.h1`
  font-size: 28px; /* Default for large screens */
  margin-bottom: 20px;
  color: #4a148c;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-bottom: 2px solid #ab47bc;
  padding-bottom: 10px;
  text-align: center; /* Aligns text neatly */

  /* Word wrapping to prevent overflow */
  word-wrap: break-word;
  overflow-wrap: break-word;

  /* Responsive font size adjustments */
  @media (max-width: 930px) {
    font-size: 22px; /* Smaller font for medium screens */
    margin-bottom: 15px;
  }

  @media (max-width: 568px) {
    font-size: 18px; /* Smallest font for extra small screens */
    margin-bottom: 10px;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #d3c4f2;
  margin: 15px 0;
`;


const ProductText = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: #4a148c;
  line-height: 1.5;
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* Ensures text wraps properly */
  white-space: normal; /* Prevents text from overflowing without wrapping */

  &::before {
    content: "•";
    margin-right: 10px;
    font-size: 18px;
    color: #ab47bc;
    font-weight: bold;
  }

  @media (max-width: 930px) {
    font-size: 14px;
    margin: 8px 0;
  }

  @media (max-width: 568px) {
    font-size: 12px;
    margin: 5px 0;
  }
`;

const HighlightedText = styled.span`
  color: #ab47bc;
  font-weight: bold;
  font-style: italic;
  text-shadow: 1px 1px 5px rgba(171, 71, 188, 0.4);
  white-space: normal; /* Ensures inline highlighted text wraps properly */

  @media (max-width: 930px) {
    font-size: 16px;
  }

  @media (max-width: 568px) {
    font-size: 14px;
  }
`;

const LoadingSpinner = styled.div`
  --uib-size: 2.8rem;
  --uib-speed: 0.9s;
  --uib-color: #183153;
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
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
  }

  & > div:nth-child(2) {
    transform: rotate(45deg);
  }

  & > div:nth-child(2)::before {
    animation-delay: calc(var(--uib-speed) * -0.875);
  }

  & > div:nth-child(3) {
    transform: rotate(90deg);
  }

  & > div:nth-child(3)::before {
    animation-delay: calc(var(--uib-speed) * -0.75);
  }

  & > div:nth-child(4) {
    transform: rotate(135deg);
  }

  & > div:nth-child(4)::before {
    animation-delay: calc(var(--uib-speed) * -0.625);
  }

  & > div:nth-child(5) {
    transform: rotate(180deg);
  }

  & > div:nth-child(5)::before {
    animation-delay: calc(var(--uib-speed) * -0.5);
  }

  & > div:nth-child(6) {
    transform: rotate(225deg);
  }

  & > div:nth-child(6)::before {
    animation-delay: calc(var(--uib-speed) * -0.375);
  }

  & > div:nth-child(7) {
    transform: rotate(270deg);
  }

  & > div:nth-child(7)::before {
    animation-delay: calc(var(--uib-speed) * -0.25);
  }

  & > div:nth-child(8) {
    transform: rotate(315deg);
  }

  & > div:nth-child(8)::before {
    animation-delay: calc(var(--uib-speed) * -0.125);
  }

  @keyframes pulse0112 {
    0%,
    100% {
      transform: scale(0);
      opacity: 0.5;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const SingleProduct = () => {
  const { ide } = useParams(); // Extracting product ID from route params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        const selectedProduct = data.find((item) => item.id === ide);
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [ide]);

  if (loading)
    return (
      <PageContainer>
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
      </PageContainer>
    );
  if (error) return <PageContainer>Error: {error}</PageContainer>;

  return (
    <PageContainer>
      {product ? (
        <ProductCard>
          <ProductImage src={product.imageie} alt={product.name} />
          <ProductDetails>
            <ProductTitle>{product.name}</ProductTitle>
            <Divider />
            {product.category && (
              <ProductText>
                Category: <HighlightedText>{product.category}</HighlightedText>
              </ProductText>
            )}
            {product.subcategory && (
              <ProductText>
                Subcategory: <HighlightedText>{product.subcategory}</HighlightedText>
              </ProductText>
            )}
            {product.typeo && (
              <ProductText>
                Type: <HighlightedText>{product.typeo}</HighlightedText>
              </ProductText>
            )}
            {product.power.length > 0 && (
              <ProductText>
                Power: <HighlightedText>{product.power.join(", ")}</HighlightedText>
              </ProductText>
            )}
            {product.colortemp.length > 0 && (
              <ProductText>
                Color Temperature:{" "}
                <HighlightedText>{product.colortemp.join(", ")}</HighlightedText>
              </ProductText>
            )}
            {product.size.length > 0 && (
              <ProductText>
                Sizes: <HighlightedText>{product.size.join(", ")}</HighlightedText>
              </ProductText>
            )}
            {product.colors.length > 0 && (
              <ProductText>
                Colors: <HighlightedText>{product.colors.join(", ")}</HighlightedText>
              </ProductText>
            )}
            {product.dimension && (
              <ProductText>
                Dimension: <HighlightedText>{product.dimension}</HighlightedText>
              </ProductText>
            )}
          </ProductDetails>
        </ProductCard>
      ) : (
        <PageContainer>No product data available</PageContainer>
      )}
    </PageContainer>
  );
};

export default SingleProduct;















// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { keyframes } from "styled-components";
// // import Footer from "./components/Footer";
// import { useParams } from "react-router-dom";
// // import PageNavigation from "./components/PageNavigation";
// import { Container } from "./styles/Container";
// import { MdSecurity } from "react-icons/md";
// import { TbTruckDelivery, TbReplace, TbUsersGroup } from "react-icons/tb";

// const API = "https://medhansh-api.vercel.app/api/products";

// const colorfulSquareColors = ["#2B03E0", "#FF1900", "#198E01", "#FFC61C"];

// const bounceAnimation = keyframes`
//   0%, 20%, 50%, 80%, 100% {
//     transform: translateY(0);
//   }
//   40% {
//     transform: translateY(-20px);
//   }
//   60% {
//     transform: translateY(-10px);
//   }
// `;

// const SingleProduct = () => {
//   const { ide } = useParams();
//   const [singleProduct, setSingleProduct] = useState(null);
//   const [isSingleLoading, setIsSingleLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []); 

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${API}?ide=${ide}`);
//         if (response.ok) {
//           const data = await response.json();
//           if (Array.isArray(data) && data.length > 0) {
//             // Access the first (and only) element in the array
//             setSingleProduct(data[0]);
//           } else {
//             throw new Error("Data is empty or not in the expected format.");
//           }
//         } else {
//           throw new Error("Failed to fetch data");
//         }
//       } catch (error) {
//         console.error(error);
//         setSingleProduct(null);
//       } finally {
//         setIsSingleLoading(false);
//       }
//     };

//     fetchData();
//   }, [ide]);

//   if (isSingleLoading) {
//     // return <div className="page_loading">Loading.....</div>;
   
//   return (
//     <LoadingContainer>
//       <LoadingText>Loading...</LoadingText>
//       <BouncingSquaresContainer>
//         {colorfulSquareColors.map((color, index) => (
//           <BouncingSquare key={index} color={color} />
//         ))}
//       </BouncingSquaresContainer>
//     </LoadingContainer>
//   );
//   }

//   if (!singleProduct) {
//     return <div className="error_message">Data not available</div>;
//   }

  

//   const {
//     name,
//     category,
//     subcategory,
//     imageie,
//     power,
//     size,
//     colors,
//     colortemp,
//     dimension,
//     typeo
//   } = singleProduct;

//   const displayFields = (ide) => {
//     // Check the value of ide and conditionally render fields

//       const colorCircles = colors.map((color, index) => (
//         <ColorCircle key={index} color={color}>
//           {color}
//         </ColorCircle>
//       ));

//       return (
//         <div>
//           <h2>{name}</h2> <br></br> <br></br><br></br>
//           <p><b>Category: </b> {category} </p><br></br>
//           <p><b>Subcategory: </b> {subcategory} </p><br></br>
//           {/* <img src={image} alt={name} /> */}
//           <p><b>Color: </b> {colortemp} </p><br></br>
//           <p><b>Power: </b> {power}</p><br></br>
//           <p><b> Dimension: </b> {dimension}</p><br></br>
//           <p><b>Size: </b> {size}</p><br></br>
//           <p><b>Shape: </b> {typeo}</p>
          
//           <ColorSection>
//               <InfoLabel>Colors:</InfoLabel>
//               <ColorCircles>{colorCircles}</ColorCircles>
//           </ColorSection> <br /> <br /><br />

//           <div className="product-data-warranty">
//               <div className="product-warranty-data">
//                 <TbTruckDelivery className="warranty-icon" />
//                 <p>Courier Charges: ₹50/Kg</p>
//               </div>

//               <div className="product-warranty-data">
//                 <TbReplace className="warranty-icon" />
//                 <p>15 Days Replacement</p>
//               </div>

//               <div className="product-warranty-data">
//                 <TbUsersGroup className="warranty-icon" />
//                 <p>Satisfied Customers </p>
//               </div>

//               <div className="product-warranty-data">
//                 <MdSecurity className="warranty-icon" />
//                 <p>2 Year Warranty </p>
//               </div>
//             </div><br /><br />

          
//         </div>
//       );
    
//   };

//   return (
//     <Wrapper>
//       {/* <PageNavigation title={name} /> */}
//       <Container className="container">
//         <div className="grid grid-two-column mivi">
//            <div className="product_images">
//               <img src={imageie} alt={name} />
//             </div>

//             <div className="product-data">
//                 {displayFields(ide)}
//             </div>
          
//         </div>
//       </Container>
//     </Wrapper>
//   );
// };




// const ColorCircle = styled.div`
//   width: 24px; /* Adjust the size as needed */
//   height: 24px; /* Adjust the size as needed */
//   border-radius: 50%;
//   margin: 0.6rem;
//   background-color: ${(props) => props.color};
//   border: 2px solid black; /* Add a black border */
//   color: transparent; 
//   cursor: pointer; /* Add a pointer cursor */
//   transition: transform 0.2s ease, box-shadow 0.2s ease; /* Add transitions */

//   &:hover {
//     transform: scale(1.2); /* Apply scale transformation on hover */
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Add a box shadow on hover */
//   }
// `;


// const ColorSection = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 1rem;
// `;

// const ColorCircles = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const InfoLabel = styled.span`
  
//   font-weight: bold; 
//   margin-right: 1rem;
//   font-size: 1.5rem;
// `;


// const LoadingContainer = styled.div`
  
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   height: 100px;
// `;

// const LoadingText = styled.div`
//   font-size: 24px;
//   margin-bottom: 19px;
//   color: #333;
// `;

// const BouncingSquaresContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const BouncingSquare = styled.div`
//   width: 20px;
//   height: 20px;
//   margin: 0 5px;
//   background-color: ${(props) => props.color};
//   animation: ${bounceAnimation} 1s infinite;
// `;





// const Wrapper = styled.section`

// background-color:  #F8CDA8;

//   .container {
//     padding: 7rem 0rem;
//     background-color:  #F8CDA8 ;
    
    
//   }

  




//   ul {
//     font-family: "American Typewrite", sans-serif; /* Replace with your chosen font family */
//     font-size: 1.6rem; /* Adjust the font size as needed */
//   }
  
 

//   .grid {
//     display: grid;
//     gap: 10rem;
//     padding: 4em;
//   }

//   .mivi{
//     background-color:   #FFFFF0;
//     border-radius: 20px ;
//         border: 4px solid #8b0000;

//   }

//   // .product_images {
//   //   display: flex;
//   //   align-items: center;
//   // }

//   .product_images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     // background-color: #FAF0DC;
//     background-color: #E1E2E2;
//     border-radius: 2px solid #E0E0B8;
//   }
  
//   .product_images img {
//     max-width: 100%; 
//     height: 70%; 
//   }

//   .productisdata{
//     font-size: 1.4rem;
//     // padding-top: 0.4rem;
//   }

//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 1rem;

//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;

//       .product-warranty-data {
//         text-align: center;
        

//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           color: #b22222;
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//           padding-right: 1rem;
//           padding-left: 1rem;
//         }
//       }
//     }

//     .product-data-price {
//       font-weight: bold;
//     }
//     .product-data-real-price {
//       color: ${({ theme }) => theme.colors.btn};
//     }
//     .product-data-info {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       font-size: 1.8rem;

//       span {
//         font-weight: bold;
//       }
//     }

//     hr {
//       max-width: 100%;
//       width: 90%;
//       /* height: 0.2rem; */
//       border: 0.1rem solid #000;
//       color: red;
//     }
//   }

//   .product-images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .page_loading {
//     font-size: 3.2rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 0 2.4rem;

//     .product_images{
//       max-width: 90%; 
//       height: 110%; 
//     }
    
//     .img{
//       max-width: 100%;
//       height:100%
//     }

//     .product-data product-data-warranty productisdata hr{
//       width:70%;
//     }

//   }

//   @media screen and (max-width: 335px){
//     .product_images{
//       max-width: 75%; 
//       height: 80%; 
//     }
//   }
 
// `;

// export default SingleProduct;







