// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// const ActorSection = ({ myData }) => {
//   const { name } = myData;
//   return (
//     <Wrapper>
//       <div className="floating-orb orb1"></div>
//       <div className="floating-orb orb2"></div>
//       <div className="floating-orb orb3"></div>
//       <div className="container">
//         <div className="product-card">
//           <div className="hero-section-image">
//             <div className="image-wrapper">
//               <div className="circle-decoration"></div>
//               <div className="dots-decoration"></div>
//               <figure>
//                 <img
//                   src="images/hand.png"
//                   alt="actor-section"
//                   className="img-style"
//                 />
//               </figure>
//               <div className="curved-shape"></div>
//             </div>
//           </div>
//           <div className="hero-section-data">
//             <div className="title-wrapper">
//               <p className="intro-data">
//                 <span className="highlight">Welcome to</span>
//                 <span className="line"></span>
//               </p>
//               <h1>
//                 <span className="gradient-text">{name}</span>
//                 <span className="decorator"></span>
//               </h1>
//             </div>
//             <p>
//               Our company, FIRST ELECTRONICS SOLUTIONS Industries, was founded in 2016 within the electronic industry. In 2019, we ventured into the LED lighting sector. Through a strategic approach centered on innovation, we have been consistently developing a range of LED lighting products, including LED panel lights for indoor and outdoor commercial use. We have also fostered partnerships with renowned enterprises in India for LED manufacturing. As a result, our products have gained widespread acceptance within the Indian market.
//             </p>
//             <div className="poo">
//               <NavLink to="/contact">
//                 <Button>
//                   <span>Contact Us</span>
//                   <div className="button-glow"></div>
//                 </Button>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Button = styled.button`
//   background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
//   color: white;
//   padding: 1.5rem 4rem;
//   border: none;
//   border-radius: 50px;
//   font-size: 1.5rem;
//   font-weight: 700;
//   letter-spacing: 1px;
//   transition: all 0.4s ease;
//   position: relative;
//   overflow: hidden;
//   cursor: pointer;
//   z-index: 1;
  
//   span {
//     position: relative;
//     z-index: 2;
//   }
  
//   .button-glow {
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     width: 200%;
//     height: 200%;
//     background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
//     transform: rotate(45deg);
//     transition: all 0.5s ease;
//     opacity: 0;
//   }
  
//   &:hover {
//     transform: translateY(-3px) scale(1.02);
//     box-shadow: 0 20px 40px rgba(109, 40, 217, 0.25);
    
//     .button-glow {
//       opacity: 1;
//       transform: rotate(45deg) translateY(-50%);
//     }
//   }
// `;

// const Wrapper = styled.section`
//   padding: 6rem 0;
//   background: linear-gradient(135deg, #F5F3FF 0%, #F3E8FF 100%);
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   position: relative;
//   overflow: hidden;
  
//   .floating-orb {
//     position: absolute;
//     border-radius: 50%;
//     filter: blur(60px);
//     opacity: 0.4;
//     z-index: 0;
//   }
  
//   .orb1 {
//     width: 500px;
//     height: 500px;
//     background: rgba(139, 92, 246, 0.15);
//     top: -250px;
//     right: -100px;
//     animation: float 20s infinite ease-in-out;
//   }
  
//   .orb2 {
//     width: 400px;
//     height: 400px;
//     background: rgba(109, 40, 217, 0.1);
//     bottom: -200px;
//     left: -150px;
//     animation: float 25s infinite ease-in-out reverse;
//   }
  
//   .orb3 {
//     width: 300px;
//     height: 300px;
//     background: rgba(168, 85, 247, 0.15);
//     top: 40%;
//     right: 20%;
//     animation: float 18s infinite ease-in-out;
//   }

//   @keyframes float {
//     0%, 100% { transform: translate(0, 0) rotate(0deg); }
//     25% { transform: translate(20px, -20px) rotate(5deg); }
//     50% { transform: translate(-20px, 20px) rotate(-5deg); }
//     75% { transform: translate(20px, 20px) rotate(5deg); }
//   }

//   .container {
//     max-width: 1500px;
//     margin: 0 auto;
//     padding: 0 2rem;
//     position: relative;
//     z-index: 1;
//   }

//   .product-card {
//     background: rgba(255, 255, 255, 0.95);
//     border-radius: 50px;
//     box-shadow: 0 25px 50px rgba(109, 40, 217, 0.15);
//     overflow: hidden;
//     display: grid;
//     grid-template-columns: 1fr 1.2fr;
//     gap: 0;
//     position: relative;
//   }

//   .hero-section-image {
//     position: relative;
//     height: 100%;
//     background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
    
//     .image-wrapper {
//       position: relative;
//       height: 100%;
//       overflow: hidden;
//     }

//     .circle-decoration {
//       position: absolute;
//       width: 300px;
//       height: 300px;
//       border: 2px dashed rgba(255, 255, 255, 0.2);
//       border-radius: 50%;
//       top: -100px;
//       left: -100px;
//       animation: spin 30s linear infinite;
//     }

//     .dots-decoration {
//       position: absolute;
//       right: 50px;
//       bottom: 50px;
//       width: 100px;
//       height: 100px;
//       background-image: radial-gradient(circle, rgba(255,255,255,0.2) 2px, transparent 2px);
//       background-size: 15px 15px;
//       z-index: 1;
//     }

//     .curved-shape {
//       position: absolute;
//       right: -150px;
//       top: 0;
//       bottom: 0;
//       width: 300px;
//       background: white;
//       border-radius: 50%;
//       transform: scale(2);
//     }

//     figure {
//       height: 100%;
//       position: relative;
//       z-index: 1;
      
//       &::before {
//         content: "";
//         position: absolute;
//         width: 150%;
//         height: 150%;
//         background: rgba(255, 255, 255, 0.1);
//         border-radius: 50%;
//         top: -25%;
//         left: -25%;
//         z-index: -1;
//       }
//     }

//     .img-style {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       object-position: center;
//       transition: all 0.5s ease;
//     }
//   }

//   .hero-section-data {
//     padding: 5rem 6rem;
    
//     .title-wrapper {
//       position: relative;
//       margin-bottom: 4rem;
//     }
    
//     p {
//       margin: 2.5rem 0;
//       line-height: 1.9;
//       font-size: 1.4rem;
//       color: #4B5563;
//       font-weight: 400;
//       text-align: justify;
//     }

//     h1 {
//       font-size: 6rem;
//       font-weight: 800;
//       line-height: 1.1;
//       margin: 2rem 0;
//       position: relative;
      
//       .gradient-text {
//         background: linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%);
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//       }
      
//       .decorator {
//         position: absolute;
//         bottom: -10px;
//         left: 0;
//         width: 150px;
//         height: 8px;
//         background: linear-gradient(90deg, #8B5CF6 0%, transparent 100%);
//         border-radius: 4px;
//       }
//     }

//     .intro-data {
//       position: relative;
//       display: inline-block;
//       margin: 0;
      
//       .highlight {
//         background: #F3E8FF;
//         padding: 1.2rem 3rem;
//         border-radius: 50px;
//         color: #6D28D9;
//         font-weight: 700;
//         font-size: 1.4rem;
//         text-transform: uppercase;
//         letter-spacing: 3px;
//         display: inline-block;
//         box-shadow: 0 10px 20px rgba(109, 40, 217, 0.1);
//       }
      
//       .line {
//         position: absolute;
//         top: 50%;
//         right: -100px;
//         width: 80px;
//         height: 2px;
//         background: linear-gradient(90deg, #8B5CF6 0%, transparent 100%);
//       }
//     }

//     .poo {
//       margin-top: 5rem;
//     }
//   }

//   @keyframes spin {
//     from { transform: rotate(0deg); }
//     to { transform: rotate(360deg); }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 4rem 0;
    
//     .product-card {
//       grid-template-columns: 1fr;
//       max-width: 600px;
//       margin: 0 auto;
//     }

//     .hero-section-image {
//       aspect-ratio: 16/9;
      
//       .curved-shape {
//         display: none;
//       }
//     }

//     .hero-section-data {
//       padding: 3rem 2.5rem;
      
//       h1 {
//         font-size: 4rem;
//       }
      
//       p {
//         font-size: 1.2rem;
//       }
      
//       .intro-data .highlight {
//         font-size: 1.2rem;
//         padding: 1rem 2rem;
//       }
//     }
//   }
// `;

// export default ActorSection;





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// const ActorSection = ({ myData }) => {
//   const { name } = myData;
//   return (
//     <Wrapper>
//       <div className="floating-orb orb1"></div>
//       <div className="floating-orb orb2"></div>
//       <div className="container">
//         <div className="product-card">
//           <div className="hero-section-image">
//             <div className="image-wrapper">
//               <figure>
//                 <img
//                   src="images/hand3.jpeg"
//                   alt="actor-section"
//                   className="img-style"
//                 />
//               </figure>
//               <div className="curved-shape"></div>
//             </div>
//           </div>
//           <div className="hero-section-data">
//             <div className="title-section">
//               <p className="intro-data">Welcome to</p>
//               <h1>{name}</h1>
//             </div>
//             <p className="content">
//             At Medhansh Lighting Solutions, we are a trusted name in the electronic industry, specializing in a diverse range of cutting-edge LED panels and advanced lighting solutions. With a passion for innovation and a commitment to quality, we aim to illuminate spaces with energy-efficient, durable, and aesthetically designed products. Driven by excellence, customer satisfaction is at the heart of everything we do. Our team of experts works tirelessly to deliver high-quality products and unmatched support to meet the evolving needs of our clients. Choose Medhansh Lighting Solutions and let us light up your world with brilliance and reliability.
//             </p>
//             <div className="poo">
//               <NavLink to="/contact">
//                 <Button>Contact Us</Button>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Button = styled.button`
//   background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
//   color: white;
//   padding: 1.5rem 4.5rem;
//   border: none;
//   border-radius: 50px;
//   font-size: 1.5rem;
//   font-weight: 600;
//   letter-spacing: 0.5px;
//   transition: all 0.3s ease;
//   box-shadow: 0 10px 20px rgba(109, 40, 217, 0.15);
//   display: block;
//   margin: 0 auto;
  
//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 15px 30px rgba(109, 40, 217, 0.2);
//     background: linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%);
//   }
// `;

// const Wrapper = styled.section`
//   padding: 6rem 0;
//   background: linear-gradient(135deg, #F5F3FF 0%, #F3E8FF 100%);
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   position: relative;
//   overflow: hidden;

//   .container {
//     max-width: 1400px;
//     margin: 0 auto;
//     padding: 0 2rem;
//     position: relative;
//     z-index: 1;
//   }

//   .product-card {
//     background: rgba(255, 255, 255, 0.9);
//     border-radius: 40px;
//     box-shadow: 0 25px 50px rgba(109, 40, 217, 0.1);
//     overflow: hidden;
//     display: grid;
//     grid-template-columns: 1fr 1.2fr;
//     gap: 0;
//   }

//   .hero-section-image {
//     position: relative;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     .image-wrapper {
//       width: 95%; /* Larger size for large screens */
//       max-width: 800px;
//       position: relative;
//       overflow: hidden;
//       border-radius: 20px;
//       transition: transform 0.3s ease, box-shadow 0.3s ease;

//       &:hover {
//         transform: scale(1.05); /* Subtle zoom on hover */
//         box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2); /* Enhance shadow on hover */
//       }

//       figure {
//         position: relative;
//         margin: 0;

//         img {
//           width: 100%;
//           height: auto;
//           display: block;
//           object-fit: cover;
//           border-radius: 20px;
//         }
//       }
//     }
//   }

//   .hero-section-data {
//     padding: 4rem 5rem;
//     text-align: center;

//     .title-section {
//       margin-bottom: 3rem;
//     }

//     .intro-data {
//       font-family: 'Inter', sans-serif;
//       font-size: 1.8rem;
//       font-weight: 600;
//       color: #6D28D9;
//       text-transform: uppercase;
//       letter-spacing: 1px;
//       margin-bottom: 1rem;
//       animation: fadeIn 1.5s ease-in-out;

//       @keyframes fadeIn {
//         0% {
//           opacity: 0;
//           transform: translateY(-10px);
//         }
//         100% {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }
//     }

//     h1 {
//       font-family: 'Clash Display', sans-serif;
//       font-size: 5.5rem;
//       font-weight: 700;
//       background: linear-gradient(90deg, #8B5CF6, #6D28D9);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       line-height: 1.2;
//       margin: 0 auto;
//       letter-spacing: -0.5px;
//       text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//     }

//     .content {
//       font-size: 1.4rem;
//       line-height: 1.8;
//       color: #4B5563;
//       margin: 3rem auto;
//       max-width: 90%;
//       text-align: justify;
//     }

//     .poo {
//       margin-top: 4rem;
//       display: flex;
//       justify-content: center;
//     }
//   }

//   /* Specific updates for larger screens */
//   @media (min-width: 1280px) {
//     .hero-section-image {
//       background: none; /* Removed the purple background for large screens */
//       .image-wrapper {
//         width: 95%; /* Larger size for large screens */
//         max-width: 900px;
//       }
//     }

//     .hero-section-data {
//       padding: 6rem 5rem;

//       h1 {
//         font-size: 6rem;
//       }

//       .content {
//         font-size: 1.5rem;
//       }
//     }
//   }

//   /* Mobile responsiveness */
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 4rem 0;

//     .product-card {
//       grid-template-columns: 1fr;
//       max-width: 550px;
//       margin: 0 auto;
//     }

//     .hero-section-image {
//       background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%); 
      
//       .image-wrapper {
//         width: 100%; /* Full-width image for small screens */
//       }
//     }

//     .hero-section-data {
//       padding: 3rem 2rem;

//       h1 {
//         font-size: 3.5rem;
//       }

//       .intro-data {
//         font-size: 1.2rem;
//       }

//       .content {
//         font-size: 1.2rem;
//         max-width: 100%;
//       }
//     }
//   }
// `;


// export default ActorSection;


////////////////////////////////////////////////////
////////////////////////////////////////////////


import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ActorSection = ({ myData }) => {
  const { name } = myData;

  

  return (
    <Wrapper>
      <div className="container">
        <div className="product-card">
          <div className="hero-section-image">
            <div className="image-wrapper">
              <figure>
                <img
                  src="images/hand3.jpeg"
                  alt="actor-section"
                  className="img-style"
                />
              </figure>
              <div className="shine-effect"></div>
            </div>
          </div>
          <div className="hero-section-data">
            <div className="title-section">
              <p className="intro-data">Welcome to</p>
              <h1>{name}</h1>
            </div>
            <p className="content">
              At Medhansh Lighting Solutions, we are a trusted name in the electronic industry, specializing in a diverse range of cutting-edge LED panels and advanced lighting solutions. With a passion for innovation and a commitment to quality, we aim to illuminate spaces with energy-efficient, durable, and aesthetically designed products. Driven by excellence, customer satisfaction is at the heart of everything we do. Our team of experts works tirelessly to deliver high-quality products and unmatched support to meet the evolving needs of our clients. Choose Medhansh Lighting Solutions and let us light up your world with brilliance and reliability.
            </p>
            <div className="poo">
              <NavLink to="/contact">
                <Button>Contact Us</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Button = styled.button`
  background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
  color: white;
  padding: 1.5rem 4.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(109, 40, 217, 0.15);
  display: block;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(109, 40, 217, 0.2);
    background: linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%);
    
    &::before {
      left: 100%;
    }
  }
`;

const Wrapper = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #F5F3FF 0%, #F3E8FF 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  .product-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-radius: 40px;
    box-shadow: 0 25px 50px rgba(109, 40, 217, 0.1);
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 0;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid rgba(109, 40, 217, 0.1);
      border-radius: 40px;
      pointer-events: none;
    }
  }

  .hero-section-image {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    .image-wrapper {
      width: 95%;
      max-width: 800px;
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      transition: all 0.5s ease;
      box-shadow: 0 15px 30px rgba(109, 40, 217, 0.15);

      &:hover {
        transform: scale(1.02) translateY(-5px);
        box-shadow: 0 20px 40px rgba(109, 40, 217, 0.2);
      }

      figure {
        position: relative;
        margin: 0;
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: 20px;
          transition: transform 0.5s ease;
        }
      }

      .shine-effect {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.2),
          transparent
        );
        transition: 0.5s;
      }

      &:hover {
        .shine-effect {
          left: 100%;
        }
      }
    }
  }

  .hero-section-data {
    padding: 4rem 5rem;
    text-align: center;

    .title-section {
      margin-bottom: 3rem;
      position: relative;
    }

    .intro-data {
      font-family: 'Inter', sans-serif;
      font-size: 1.8rem;
      font-weight: 600;
      color: #6D28D9;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 1rem;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards;

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    h1 {
      font-family: 'Clash Display', sans-serif;
      font-size: 5.5rem;
      font-weight: 700;
      background: linear-gradient(90deg, #8B5CF6, #6D28D9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.2;
      margin: 0 auto;
      letter-spacing: -0.5px;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.2s;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .content {
      font-size: 1.4rem;
      line-height: 1.8;
      color: #4B5563;
      margin: 3rem auto;
      max-width: 90%;
      text-align: justify;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.4s;
    }

    .poo {
      margin-top: 4rem;
      display: flex;
      justify-content: center;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.6s;
    }
  }

  @media (min-width: 1280px) {
    .hero-section-image {
      .image-wrapper {
        width: 95%;
        max-width: 900px;
      }
    }

    .hero-section-data {
      padding: 6rem 5rem;

      h1 {
        font-size: 6rem;
      }

      .content {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 4rem 0;

    .product-card {
      grid-template-columns: 1fr;
      max-width: 550px;
      margin: 0 auto;
    }

    .hero-section-image {
      padding: 2rem;
      
      .image-wrapper {
        width: 100%;
      }
    }

    .hero-section-data {
      padding: 3rem 2rem;

      h1 {
        font-size: 3.5rem;
      }

      .intro-data {
        font-size: 1.2rem;
      }

      .content {
        font-size: 1.2rem;
        max-width: 100%;
      }
    }
  }
`;

export default ActorSection;