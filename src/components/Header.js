import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <div className="radi">
        <NavLink to="/">
          <img src={`${process.env.PUBLIC_URL}/images/medh-3.png`} alt="my logo img" />
        </NavLink>
      </div>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 9.8rem;
  height: 10rem;
  background: linear-gradient(
    to right,
    rgba(68, 23, 82, 0.97),
    rgba(68, 23, 82, 0.95)
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(68, 23, 82, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid rgba(161, 116, 189, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(161, 116, 189, 0.1),
      transparent
    );
    pointer-events: none;
  }

  .radi {
    // background: rgba(255, 255, 255, 0.03);
    border-radius: 15px;
    padding: 0.5rem;
    // border: 2px solid rgba(161, 116, 189, 0.2);
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      // background: linear-gradient(45deg, #a174bd, #9760c3);
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      border-radius: 15px;
    }
   
    &:hover {
      transform: translateY(-2px);
      border-color: rgba(161, 116, 189, 0.4);
      box-shadow: 0 4px 15px rgba(68, 23, 82, 0.2);

      &::before {
        opacity: 1;
      }
    }
  }

  img {
    height: 9rem;
    object-fit: contain;
    transition: transform 0.3s ease;
    filter: brightness(1.02);
  }

  @media screen and (max-width: 786px) {
    padding: 1rem 2rem;
    height: 7rem;
    // background: #FFE1FF;
    background:linear-gradient(
    to right,
    rgba(83, 34, 98, 0.97),
    rgba(107, 70, 119, 0.95)
  );

    .radi {
      border-radius: 10px;
      border-width: 1px;
      padding: 0.3rem;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(68, 23, 82, 0.15);
      }
    }

    img {
      height: 6.5rem;
    }
  }
`;

export default Header;




// import React from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import Nav from "./Nav";

// const Header = () => {
//   return (
//     <MainHeader >
//       <div className="radi">
//       <NavLink to="/">
//         <img src="./images/medhansh-logo.png" alt="my logo img" />
//       </NavLink>
//       </div>
//       <Nav />
//     </MainHeader>
//   );
// };


// const MainHeader = styled.header`
//   padding: 0 9.8rem;
//   height: 10rem;
//   background: rgba(9, 9, 9, 0.95); 
//   backdrop-filter: blur(8px); 
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: sticky;
//   top: 0;
//   z-index: 1000;
//   transition: all 0.3s ease-in-out;

//   .radi {
//     border-radius: 15px;
//     // border: 2px solid #d9534f; /* Modern red tone */
//     transition: transform 0.3s ease, border-color 0.3s ease;
    
//     &:hover {
//       transform: scale(1.05);
//       border-color: #c9302c; /* Slightly darker red for hover */
//     }
//   }

//   img {
//     height: 8rem;
//     object-fit: contain; /* Keeps logo proportional */
//   }

//   @media screen and (max-width: 786px) {
//     padding: 1rem 2rem;
//     height: 6rem;

//     .radi {
//       border-radius: 10px;
//       border: 1px solid #d9534f;
//     }

//     img {
//       height: 4rem;
//     }
//   }
// `;

// export default Header;


