// GridView.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import Footer from "./Footer";

const GridView = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 18;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://medhansh-api.vercel.app/api/products?page=${currentPage}&limit=${itemsPerPage}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <button key={1} onClick={() => handlePageChange(1)} className="page-number">
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.push(<span key="ellipsis1" className="ellipsis">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`page-number ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(<span key="ellipsis2" className="ellipsis">...</span>);
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="page-number"
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <>
    <Wrapper className="section">
      <div className="products-heading">
        <h2 className="commoner-heading">Our Products</h2>
        <p className="suber-heading">
          Discover our carefully curated collection of premium products designed
          to elevate your lifestyle.
        </p>
      </div>
      <div className="container grid">
        {products.map((curElem) => (
          <Product key={curElem.id} {...curElem} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="nav-button prev"
          aria-label="Previous page"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="page-numbers">
          {renderPageNumbers()}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="nav-button next"
          aria-label="Next page"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
    </Wrapper>
    <Footer />
    </>
    
  );
};

const Wrapper = styled.section`
  background: linear-gradient(135deg, #f5f3ff 0%, #f3e8ff 100%);

  .products-heading {
    text-align: center;
    margin-bottom: 4rem;
  }

   .commoner-heading {
            font-size: 3.5rem;
            font-weight: 800;
            text-align: center;
            background: linear-gradient(to right, #9c27b0, #673ab7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0rem 0;
            padding-top: 3rem;
            letter-spacing: -1px;
        }

        .suber-heading {
            text-align: center;
            color: #6a1b9a;
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto 4rem;
            line-height: 1.6;
        }

  .container {
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    gap: 4rem;

    /* Responsive Grid Columns */
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

    @media (min-width: 1025px) {
      grid-template-columns: repeat(3, 1fr); /* 3 columns for >1024px */
    }

    @media (max-width: 1024px) and (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr); /* 2 columns for 576px - 1024px */
    }

    @media (max-width: 575px) {
      grid-template-columns: 1fr; /* 1 column for <576px */
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 1.5rem 1.5rem 0 0;
    background: white;
    padding: 2rem;
    transition: all 0.3s ease;
    filter: brightness(0.98);

    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  .card {
    background: white;
    border-radius: 2rem;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(147, 51, 234, 0.1);
    }

    .card-data {
      padding: 2rem;
    }

    .category-tag {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: rgba(147, 51, 234, 0.9);
      color: white;
      padding: 0.8rem 1.6rem;
      border-radius: 3rem;
      font-size: 1.2rem;
      font-weight: 500;
      z-index: 2;
    }

    h3 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 1.4;
      font-family: "Poppins", sans-serif;
      background: linear-gradient(135deg, #4a148c, #6b46c1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subcategory {
      color: #7c3aed;
      font-size: 1.4rem;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      opacity: 0.8;
    }

    .category {
      color: #9333ea;
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 0.05rem;
    }
  }

   .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 4rem auto;
    padding: 0 2rem;
    max-width: 100%;
    overflow-x: auto;

    .page-numbers {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5.5rem;
      height: 5.5rem;
      border: none;
      background: white;
      color: #6a1b9a;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(106, 27, 154, 0.1);

      &:hover:not(:disabled) {
        background: linear-gradient(135deg, #9c27b0, #673ab7);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(106, 27, 154, 0.2);
      }

      &:disabled {
        background: #f5f5f5;
        color: #bbb;
        cursor: not-allowed;
        box-shadow: none;
      }
    }

    .page-number {
      min-width: 5.5rem;
      height: 5.5rem;
      padding: 0 0.5rem;
      border: none;
      background: white;
      color: #6a1b9a;
      font-size: 1.8rem;
      font-weight: 500;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(106, 27, 154, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover:not(.active) {
        background: linear-gradient(135deg, #9c27b0, #673ab7);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(106, 27, 154, 0.2);
      }

      &.active {
        background: linear-gradient(135deg, #9c27b0, #673ab7);
        color: white;
        font-weight: 600;
        box-shadow: 0 8px 20px rgba(106, 27, 154, 0.2);
      }
    }

    .ellipsis {
      color: #6a1b9a;
      font-size: 1.6rem;
      padding: 0 0.5rem;
      user-select: none;
    }

    @media (max-width: 768px) {
      .nav-button,
      .page-number {
        width: 5rem;
        height: 5rem;
        font-size: 1.6rem;
      }

      .page-numbers {
        gap: 0.3rem;
      }
    }

    @media (max-width: 480px) {
      gap: 0.5rem;
      
      .nav-button,
      .page-number {
        width: 4.5rem;
        height: 4.5rem;
        font-size: 1.4rem;
      }

      .page-numbers {
        gap: 0.2rem;
      }
    }
  }
`;

export default GridView;




///////////////////////////////////////////////////////////////////////////////////////////////main code..................
// // GridView.js
// import React from "react";
// import styled from "styled-components";
// import Product from "./Product";

// const GridView = ({ products }) => {
//   return (
//     <Wrapper className="section">
//       {/* Heading Section */}
//       <div className="products-heading">
//         <h2 className="commoner-heading">Our Products</h2>
//         <p className="suber-heading">
//           Discover our carefully curated collection of premium products designed
//           to elevate your lifestyle.
//         </p>
//       </div>
//       {/* Products Grid */}
//       <div className="container grid">
//         {products.map((curElem) => {
//           return <Product key={curElem.id} {...curElem} />;
//         })}
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   background: linear-gradient(135deg, #f5f3ff 0%, #f3e8ff 100%);

//   .products-heading {
//     text-align: center;
//     margin-bottom: 4rem;
//   }

//    .commoner-heading {
//             font-size: 3.5rem;
//             font-weight: 800;
//             text-align: center;
//             background: linear-gradient(to right, #9c27b0, #673ab7);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             margin: 0rem 0;
//             padding-top: 3rem;
//             letter-spacing: -1px;
//         }

//         .suber-heading {
//             text-align: center;
//             color: #6a1b9a;
//             font-size: 1.2rem;
//             max-width: 600px;
//             margin: 0 auto 4rem;
//             line-height: 1.6;
//         }

//   .container {
//     max-width: 120rem;
//     margin: 0 auto;
//     display: grid;
//     gap: 4rem;

//     /* Responsive Grid Columns */
//     grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

//     @media (min-width: 1025px) {
//       grid-template-columns: repeat(3, 1fr); /* 3 columns for >1024px */
//     }

//     @media (max-width: 1024px) and (min-width: 576px) {
//       grid-template-columns: repeat(2, 1fr); /* 2 columns for 576px - 1024px */
//     }

//     @media (max-width: 575px) {
//       grid-template-columns: 1fr; /* 1 column for <576px */
//     }
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     border-radius: 1.5rem 1.5rem 0 0;
//     background: white;
//     padding: 2rem;
//     transition: all 0.3s ease;
//     filter: brightness(0.98);

//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
//     }

//     &:hover img {
//       transform: scale(1.1);
//     }
//   }

//   .card {
//     background: white;
//     border-radius: 2rem;
//     overflow: hidden;
//     transition: all 0.3s ease;
//     position: relative;
//     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

//     &:hover {
//       transform: translateY(-5px);
//       box-shadow: 0 20px 40px rgba(147, 51, 234, 0.1);
//     }

//     .card-data {
//       padding: 2rem;
//     }

//     .category-tag {
//       position: absolute;
//       top: 2rem;
//       right: 2rem;
//       background: rgba(147, 51, 234, 0.9);
//       color: white;
//       padding: 0.8rem 1.6rem;
//       border-radius: 3rem;
//       font-size: 1.2rem;
//       font-weight: 500;
//       z-index: 2;
//     }

//     h3 {
//       font-size: 1.8rem;
//       font-weight: 600;
//       line-height: 1.4;
//       font-family: "Poppins", sans-serif;
//       background: linear-gradient(135deg, #4a148c, #6b46c1);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//     }

//     .subcategory {
//       color: #7c3aed;
//       font-size: 1.4rem;
//       font-weight: 500;
//       font-family: "Poppins", sans-serif;
//       text-transform: uppercase;
//       letter-spacing: 0.1rem;
//       opacity: 0.8;
//     }

//     .category {
//       color: #9333ea;
//       font-size: 1.3rem;
//       font-weight: 600;
//       letter-spacing: 0.05rem;
//     }
//   }
// `;

// export default GridView;



// import React from "react";
// import styled from "styled-components";
// import Product from "./Product";

// const GridView = ({ products }) => {
//   return (
//     <Wrapper className="section">
//       <div className="container grid grid-three-column">
//         {products.map((curElem) => {
//           return <Product key={curElem.id} {...curElem} />;
//         })}
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;

//   .container {
//     max-width: 120rem;
//   }

//   .grid {
//     gap: 3.2rem;
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
//   }

//   // .card {
//   //   background-color: ${({ theme }) => theme.colors.bg};
//   //   border-radius: 1rem;

//   //   .card-data {
//   //     padding: 0 1rem;
//   //   }

//   .card {
//     // background-color: #fff;
//     background-color:  #F6F8FA ;
//     border-radius: 1rem;

//     .card-data {
//       padding: 0 1rem;
      
//     }

//     .card-data-flex {
//       margin: 2rem 0;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }

//     .card-data--price {
//       color: ${({ theme }) => theme.colors.helper};
//     }

//     h3 {
//       color: ${({ theme }) => theme.colors.text};
//       text-transform: capitalize;
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

// export default GridView;


// /// product.js//////////

// import React from "react";
// import { NavLink } from "react-router-dom";

// const Product = (curElem) => {
//   const { id, name, image, typeo, category } = curElem;
//   return (
//     <NavLink to={`/singleproduct/${id}`}>
//       <div className="card">
//         <figure>
//           <img src={image} alt={name} />
//           <figcaption className="caption">{category}</figcaption>
//         </figure>

//         <div className="card-data">
//           <div className="card-data-flex">
//             <h3>{name}</h3>
//             <p className="card-data--price">{typeo}</p>
//           </div>
//         </div>
//       </div>
//     </NavLink>
//   );
// };

// export default Product;



// // GridView.js
// import React from "react";
// import styled from "styled-components";
// import Product from "./Product";

// const GridView = ({ products }) => {
//   return (
//     <Wrapper className="section">
//       <div className="container grid grid-three-column">
//         {products.map((curElem) => {
//           return <Product key={curElem.id} {...curElem} />;
//         })}
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;
//   background: linear-gradient(135deg, #F5F3FF 0%, #F3E8FF 100%);

//   .container {
//     max-width: 120rem;
//   }

//   .grid {
//     gap: 4rem;
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     border-radius: 1.5rem 1.5rem 0 0;
//     background: white;
//     padding: 2rem;
//     transition: all 0.3s ease;
//     filter: brightness(.98);

//     &::before {
//       content: "";
//       position: absolute;
//       inset: 0;
//       background: linear-gradient(
//         to bottom,
//         transparent 0%,
//         rgba(147, 51, 234, 0.05) 50%,
//         rgba(147, 51, 234, 0.1) 100%
//       );
//       opacity: 0;
//       transition: opacity 0.3s ease;
//       z-index: 1;
//     }

//     &::after {
//       content: "View Details";
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%) scale(0.9);
//       color: white;
//       font-size: 1.6rem;
//       font-weight: 500;
//       padding: 1rem 2rem;
//       background: rgba(147, 51, 234, 0.9);
//       border-radius: 3rem;
//       opacity: 0;
//       transition: all 0.3s ease;
//       z-index: 2;
//     }

//     img {
//        max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
      
//       transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
//     }

//     &:hover {
//       box-shadow: 0 20px 40px rgba(147, 51, 234, 0.1);

//       &::before {
//         opacity: 1;
//       }

//       &::after {
//         opacity: 1;
//         transform: translate(-50%, -50%) scale(1);
//       }

//       img {
//         transform: scale(1.1);
//       }
//     }
//   }

//   .card {
//     background: white;
//     border-radius: 2rem;
//     overflow: hidden;
//     transition: all 0.3s ease;
//     position: relative;
//     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

//     &:hover {
//       transform: translateY(-5px);
//       box-shadow: 0 20px 40px rgba(147, 51, 234, 0.1);
//     }

//     .card-data {
//       padding: 2rem;
//     }

//     .category-tag {
//       position: absolute;
//       top: 2rem;
//       right: 2rem;
//       background: rgba(147, 51, 234, 0.9);
//       color: white;
//       padding: 0.8rem 1.6rem;
//       border-radius: 3rem;
//       font-size: 1.2rem;
//       font-weight: 500;
//       z-index: 2;
//     }

//     .card-data-flex {
//       display: flex;
//       flex-direction: column;
//       gap: 0.8rem;
//     }

//     h3 {
//       color: ${({ theme }) => theme.colors.heading};
//       font-size: 1.8rem;
//       font-weight: 600;
//       line-height: 1.4;
//       margin-bottom: 0.5rem;
//       font-family: 'Poppins', sans-serif;
//       background: linear-gradient(135deg, #4A148C, #6B46C1);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       margin-bottom: 0.2rem;
      
//     }

//     .subcategory {
//       color: ${({ theme }) => theme.colors.text};
//       font-size: 1.4rem;
//       font-weight: 500;
//        font-family: 'Poppins', sans-serif;
//       text-transform: uppercase;
//       letter-spacing: 0.1rem;
//       opacity: 0.8;
//     }

//     .category {
//       color: #9333EA;
//       font-size: 1.3rem;
//       font-weight: 600;
//       letter-spacing: 0.05rem;
//     }
//   }
// `;

// export default GridView;

// // GridView.js
// import React from "react";
// import styled from "styled-components";
// import Product from "./Product";

// const GridView = ({ products }) => {
//   return (
//     <Wrapper className="section">
//       {/* Heading Section */}
//       <div className="products-heading">
//         <h2>Our Products</h2>
//         <p>
//           Discover our carefully curated collection of premium products designed
//           to elevate your lifestyle.
//         </p>
//       </div>
//       {/* Products Grid */}
//       <div className="container grid">
//         {products.map((curElem) => {
//           return <Product key={curElem.id} {...curElem} />;
//         })}
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;
//   background: linear-gradient(135deg, #f5f3ff 0%, #f3e8ff 100%);

//   .products-heading {
//     text-align: center;
//     margin-bottom: 4rem;

//     h2 {
//       font-size: 3rem;
//       color: #6b46c1;
//       font-weight: 700;
//     }

//     p {
//       font-size: 1.6rem;
//       color: #7c3aed;
//       opacity: 0.9;
//     }
//   }

//   .container {
//     max-width: 120rem;
//     margin: 0 auto;
//     display: grid;
//     gap: 4rem;

//     /* Responsive Grid Columns */
//     grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

//     @media (min-width: 1051px) {
//       grid-template-columns: repeat(3, 1fr);
//     }

//     @media (max-width: 1050px) and (min-width: 801px) {
//       grid-template-columns: repeat(3, 1fr);
//     }

//     @media (max-width: 800px) and (min-width: 576px) {
//       grid-template-columns: repeat(2, 1fr);
//     }

//     @media (max-width: 575px) {
//       grid-template-columns: 1fr;
//     }
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     border-radius: 1.5rem 1.5rem 0 0;
//     background: white;
//     padding: 2rem;
//     transition: all 0.3s ease;
//     filter: brightness(0.98);

//     &::before {
//       content: "";
//       position: absolute;
//       inset: 0;
//       background: linear-gradient(
//         to bottom,
//         transparent 0%,
//         rgba(147, 51, 234, 0.05) 50%,
//         rgba(147, 51, 234, 0.1) 100%
//       );
//       opacity: 0;
//       transition: opacity 0.3s ease;
//       z-index: 1;
//     }

//     &::after {
//       content: "View Details";
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%) scale(0.9);
//       color: white;
//       font-size: 1.6rem;
//       font-weight: 500;
//       padding: 1rem 2rem;
//       background: rgba(147, 51, 234, 0.9);
//       border-radius: 3rem;
//       opacity: 0;
//       transition: all 0.3s ease;
//       z-index: 2;
//     }

//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
//     }

//     &:hover {
//       box-shadow: 0 20px 40px rgba(147, 51, 234, 0.1);

//       &::before {
//         opacity: 1;
//       }

//       &::after {
//         opacity: 1;
//         transform: translate(-50%, -50%) scale(1);
//       }

//       img {
//         transform: scale(1.1);
//       }
//     }
//   }

//   .card {
//     background: white;
//     border-radius: 2rem;
//     overflow: hidden;
//     transition: all 0.3s ease;
//     position: relative;
//     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

//     &:hover {
//       transform: translateY(-5px);
//       box-shadow: 0 20px 40px rgba(147, 51, 234, 0.1);
//     }

//     .card-data {
//       padding: 2rem;
//     }

//     .category-tag {
//       position: absolute;
//       top: 2rem;
//       right: 2rem;
//       background: rgba(147, 51, 234, 0.9);
//       color: white;
//       padding: 0.8rem 1.6rem;
//       border-radius: 3rem;
//       font-size: 1.2rem;
//       font-weight: 500;
//       z-index: 2;
//     }

//     .card-data-flex {
//       display: flex;
//       flex-direction: column;
//       gap: 0.8rem;
//     }

//     h3 {
//       color: ${({ theme }) => theme.colors.heading};
//       font-size: 1.8rem;
//       font-weight: 600;
//       line-height: 1.4;
//       margin-bottom: 0.5rem;
//       font-family: "Poppins", sans-serif;
//       background: linear-gradient(135deg, #4a148c, #6b46c1);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       margin-bottom: 0.2rem;
//       white-space: nowrap; /* Ensures the text remains in a single line */
//       overflow: hidden; /* Ensures extra text is hidden */
//       text-overflow: ellipsis; /* Adds "..." for overflowed text */
//     }

//     .subcategory {
//       color: ${({ theme }) => theme.colors.text};
//       font-size: 1.4rem;
//       font-weight: 500;
//       font-family: "Poppins", sans-serif;
//       text-transform: uppercase;
//       letter-spacing: 0.1rem;
//       opacity: 0.8;
//     }

//     .category {
//       color: #9333ea;
//       font-size: 1.3rem;
//       font-weight: 600;
//       letter-spacing: 0.05rem;
//     }
//   }
// `;

// export default GridView;



