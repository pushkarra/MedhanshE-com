// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { CgMenu, CgClose } from "react-icons/cg";

// const Nav = () => {
//   const [menuIcon, setMenuIcon] = useState();

//   const Nav = styled.nav`

  

    
//     .navbar-lists {
//       display: flex;
//       gap: 2.5rem;
//       align-items: center;


//       .navbar-link {
//         &:link,
//         &:visited {
//           padding: 4px;
//           display: inline-block;
//           text-decoration: none;
//           font-size: 2.2rem;
//           border: 3px solid transparent;
//           border-radius: 10px;
//           font-family: system-ui;
//           font-weight: 500;
          
//           color: ${({ theme }) => theme.colors.white};
//           transition:  background-color 0.3s linear, color 0.3s linear;
//         }

//         &:hover,
//         &:active {
//           background-color: #8b0000;
//           color: #ffffff;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
          
//         }
//       }
//     }

//     .mobile-navbar-btn {
//       display: none;
//       background-color: transparent;
//       cursor: pointer;
//       border: none;
//     }

//     .mobile-nav-icon[name="close-outline"] {
//       display: none;
//     }

//     .close-outline {
//       display: none;
//     }

    

//     @media (max-width: ${({ theme }) => theme.media.mobile}) {
//       .mobile-navbar-btn {
//         display: inline-block;
//         z-index: 9999;
//         border: ${({ theme }) => theme.colors.black};

//         .mobile-nav-icon {
//           font-size: 4.2rem;
//           color: ${({ theme }) => theme.colors.black};
//         }
//       }

//       .active .mobile-nav-icon {
//         display: none;
//         font-size: 4.2rem;
//         position: absolute;
//         top: 30%;
//         right: 10%;
//         color: ${({ theme }) => theme.colors.black};
//         z-index: 9999;
//       }

//       .active .close-outline {
//         display: inline-block;
//       }

//       .navbar-lists {
//         width: 100vw;
//         height: 100vh;
//         position: absolute;
//         top: 0;
//         left: 0;
//         background-color: #fff;

//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;

//         visibility: hidden;
//         opacity: 0;
//         transform: translateX(100%);
//         /* transform-origin: top; */
//         transition: all 3s linear;

//       }

      

//       .active .navbar-lists {
//         visibility: visible;
//         opacity: 1;
//         transform: translateX(0);
//         z-index: 999;
//         transform-origin: right;
//         transition: all 3s linear;

//         .navbar-link {
//           font-size: 4.2rem;
//           width: calc(50% - 20px);
//         }

        
//       }
//       .cart-trolley--link {
//         position: relative;

//         .cart-trolley {
//           position: relative;
//           font-size: 5.2rem;
//         }

//         .cart-total--item {
//           width: 4.2rem;
//           height: 4.2rem;
//           font-size: 2rem;
//         }
//       }

//       .user-logout,
//       .user-login {
//         font-size: 2.2rem;
//         padding: 0.8rem 1.4rem;
//       }
//     }
//   `;

//   return (
//     <Nav>
//       <div className={menuIcon ? "navbar active" : "navbar"}>
//         <ul className="navbar-lists pija">
//           <li>
//             <NavLink
//               to="/"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/products"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Products
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Contact
//             </NavLink>
//           </li>
        
//         </ul>
//         <div className="mobile-navbar-btn">
//           <CgMenu
//             name="menu-outline"
//             className="mobile-nav-icon"
//             onClick={() => setMenuIcon(true)}
//           />
//           <CgClose
//             name="close-outline"
//             className="mobile-nav-icon close-outline"
//             onClick={() => setMenuIcon(false)}
//           />
//         </div>
//       </div>
//     </Nav>
//   );
// };

// export default Nav;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import styled from "styled-components";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 3rem;
      align-items: center;
      background: linear-gradient(120deg, #ffffff, #f8f4ff);
      padding: 1.2rem 2.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(68, 23, 82, 0.08);
      border: 1px solid rgba(68, 23, 82, 0.1);
      backdrop-filter: blur(10px);
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
          rgba(68, 23, 82, 0.05),
          transparent
        );
        transition: 0.5s;
      }

      &:hover::before {
        left: 100%;
      }

      .navbar-link {
        &:link,
        &:visited {
          padding: 1rem 1.8rem;
          display: inline-block;
          text-decoration: none;
          font-size: 1.7rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          color: #441752;
          border-radius: 12px;
          letter-spacing: 0.5px;
          position: relative;
          transition: all 0.3s ease;
          background: transparent;
          
          &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(to right, #a174bd, #9760c3);
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }
        }

        &:hover,
        &:active {
          color: #ffffff;
          background: linear-gradient(120deg, #a174bd, #9760c3);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(68, 23, 82, 0.2);

          &::after {
            width: 80%;
          }
        }

        &.active {
          color: #ffffff;
          background: linear-gradient(120deg, #a174bd, #9760c3);
          box-shadow: 0 4px 15px rgba(68, 23, 82, 0.2);
        }
      }

      li {
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          right: -1.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 3px;
          background: #441752;
          border-radius: 50%;
          opacity: 0.5;
        }

        &:last-child::after {
          display: none;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: #441752;
          transition: all 0.3s ease;
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: #441752;
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(135deg, #ffffff, #f8f4ff);
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease-in-out;

        li::after {
          display: none;
        }
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;

        .navbar-link {
          font-size: 3.2rem;
          width: auto;
          
          &:link,
          &:visited {
            padding: 1.5rem 3rem;
            margin: 1rem 0;
            background: rgba(68, 23, 82, 0.05);
          }

          &:hover,
          &:active {
            background: linear-gradient(120deg, #a174bd, #9760c3);
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(68, 23, 82, 0.2);
          }
        }
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;