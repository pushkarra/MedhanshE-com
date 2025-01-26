// import React from "react";
// import styled from "styled-components";
// import { NavLink, Link } from "react-router-dom";
// import { Button } from "../styles/Button";
// import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       <Wrapper>
//         <section className="contact-short">
//           <div className="grid grid-two-column">
//             <div>
//               <h3>Ready to get started?</h3>
//               <h3>Talk to us today...</h3>
//             </div>

//             <div>
//               <Button className="btn hireme-btn">
//                 <NavLink to="/Contact"> Get Started </NavLink>
//               </Button>
//             </div>
//           </div>
//         </section>
//         {/* footer section */}

//         <footer>
//           <div className="container grid grid-four-column">
//             <div className="footer-about">
//               <h3>First Electronics Solutions</h3>
//               <p>Khasra no. 264, Gali-4, Near Jivaasha Neo Hospital, Prahlad Vihar, Rohini, Delhi-110042</p>
//             </div>
//             <div className="footer-subscribe">
//               <h3>Subscribe to get important updates</h3>
//               <form action="https://formspree.io/f/xjvqlyqb" method="POST">
//               <input type="email" name="email" placeholder="YOUR E-MAIL" />

                
//                 <input type="submit" value="subscribe" />
//               </form>
//             </div>
//             <div className="footer-social">
//               <h3>Follow Us</h3>
//               <div className="footer-social--icons">
//                 <div>
//                   <FaDiscord className="icons" />
//                 </div>
//                 <div>
//                   <FaInstagram className="icons" />
//                 </div>
//                 <div>
//                   <FaYoutube className="icons" />
//                 </div>
//               </div>
//             </div>
//             <div className="footer-contact">
//               <h3>Call Us</h3>
//               <a href="tel:" className="modern">+91-9891253737</a>
//               <br />
//               <br />
//               <a href="tel:" className="modern">+91-8384015452</a>
//               {/* <h3>+91 12345678978</h3> */}
//             </div>
//           </div>

//           <div className="footer-bottom--section">
//             <hr />
//             <div className="container grid grid-two-column ">
//               <p>
//                 @{new Date().getFullYear()} First Electronics. All Rights Reserved
//               </p>
//               <div>
//                 <p><Link to="/privacy" style={{ color: 'white' }}>Privacy Policy</Link></p>
              
//               </div>
//             </div>
//           </div>
//         </footer>
//       </Wrapper>
//     </>
//   );
// };

// const Wrapper = styled.section`

// background-color: #FFE2C9;
//   .iSIFGq {
//     margin: 0;
//   }

//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 3rem 6rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: translateY(50%);

//     .grid div:last-child {
//       justify-self: end;
//       align-self: center;
//     }
//   }

//   .modern{
//     color: ${({ theme }) => theme.colors.white};    
//     font-size: 1.7rem;
//   }

//   .grid{
//     display: grid;
//     gap: 10rem;
//     // justify-content: center;

//   }

//   footer {
//     padding: 8rem 0 2rem 0;
//     background-color: ${({ theme }) => theme.colors.footer_bg};
//     h3 {
//       color: ${({ theme }) => theme.colors.hr};
//       margin-bottom: 2.4rem;
//     }
//     p {
//       color: ${({ theme }) => theme.colors.white};
//     }
//     .footer-social--icons {
//       display: flex;
//       gap: 2rem;

//       div {
//         padding: 1rem;
//         border-radius: 50%;
//         border: 2px solid ${({ theme }) => theme.colors.white};

//         .icons {
//           color: ${({ theme }) => theme.colors.white};
//           font-size: 2.4rem;
//           position: relative;
//           cursor: pointer;
//         }
//       }
//     }
//   }

//   .footer-bottom--section {
//     padding-top: 3rem;

//     hr {
//       margin-bottom: 2rem;
//       color: ${({ theme }) => theme.colors.hr};
//       height: 0.1px;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .contact-short {
//       max-width: 80vw;
//       margin: 4.8rem auto;
//       transform: translateY(0%);
//       text-align: center;

//       .grid div:last-child {
//         justify-self: center;
//       }
//     }

//     footer {
//       padding: 9rem 0 9rem 0;
//     }

//     .grid {
//         display: grid;
//         gap: 4rem;
//       }

//     .footer-bottom--section {
//       padding-top: 4.8rem;
//     }
//   }
// `;


// export default Footer;




// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { NavLink, Link } from "react-router-dom";
// import { Button } from "../styles/Button";
// import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const float = keyframes`
//   0%, 100% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-5px);
//   }
// `;

// const Wrapper = styled.section`
//   background: linear-gradient(135deg, #FFE2C9 0%, #FFD5B3 100%);
//   position: relative;
//   overflow: hidden;

//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 3rem 6rem;
//     background: ${({ theme }) => theme.colors.bg};
//     border-radius: 1.5rem;
//     box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//     transform: translateY(50%);
//     animation: ${float} 3s ease-in-out infinite;

//     h3 {
//       background: linear-gradient(to right, #333, #666);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       font-size: 2rem;
//       margin-bottom: 0.5rem;
//     }

//     .grid-two-column {
//       display: grid;
//       grid-template-columns: 1fr auto;
//       gap: 4rem;
//       align-items: center;
//     }

//     .hireme-btn {
//       padding: 1.2rem 2.4rem;
//       background: linear-gradient(135deg, #FF8C42, #FF5733);
//       border: none;
//       border-radius: 0.8rem;
//       transition: transform 0.3s ease;

//       &:hover {
//         transform: translateY(-3px);
//         box-shadow: 0 10px 20px rgba(255, 87, 51, 0.2);
//       }

//       a {
//         color: white;
//         text-decoration: none;
//         font-weight: 600;
//       }
//     }
//   }

//   footer {
//     padding: 14rem 0 2rem 0;
//     background: ${({ theme }) => theme.colors.footer_bg};
//     animation: ${fadeIn} 0.6s ease-out;

//     .container {
//       max-width: 1200px;
//       margin: 0 auto;
//       padding: 0 2rem;
//     }

//     .grid-four-column {
//       display: grid;
//       grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//       gap: 5rem;
//     }

//     h3 {
//       color: ${({ theme }) => theme.colors.hr};
//       font-size: 1.8rem;
//       margin-bottom: 2.4rem;
//       position: relative;
      
//       &::after {
//         content: '';
//         position: absolute;
//         left: 0;
//         bottom: -8px;
//         width: 60px;
//         height: 2px;
//         background: linear-gradient(to right, #FF8C42, #FF5733);
//       }
//     }

//     .footer-subscribe {
//       form {
//         display: flex;
//         flex-direction: column;
//         gap: 1.5rem;

//         input[type="email"] {
//           padding: 1rem;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 0.8rem;
//           background: rgba(255, 255, 255, 0.05);
//           color: white;
//           font-size: 1.6rem;
//           transition: all 0.3s ease;

//           &:focus {
//             outline: none;
//             border-color: #FF8C42;
//             background: rgba(255, 255, 255, 0.1);
//           }
//         }

//         input[type="submit"] {
//           padding: 1rem 2rem;
//           background: linear-gradient(135deg, #FF8C42, #FF5733);
//           border: none;
//           border-radius: 0.8rem;
//           color: white;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;

//           &:hover {
//             transform: translateY(-3px);
//             box-shadow: 0 10px 20px rgba(255, 87, 51, 0.2);
//           }
//         }
//       }
//     }

//     .footer-social--icons {
//       display: flex;
//       gap: 2rem;

//       div {
//         padding: 1rem;
//         border-radius: 50%;
//         border: 2px solid rgba(255, 255, 255, 0.5);
//         transition: all 0.3s ease;

//         &:hover {
//           transform: translateY(-5px);
//           border-color: #FF8C42;
//           background: rgba(255, 140, 66, 0.1);
//         }

//         .icons {
//           color: ${({ theme }) => theme.colors.white};
//           font-size: 2.4rem;
//           transition: all 0.3s ease;
//         }
//       }
//     }

//     .modern {
//       color: ${({ theme }) => theme.colors.white};
//       font-size: 1.8rem;
//       text-decoration: none;
//       transition: all 0.3s ease;

//       &:hover {
//         color: #FF8C42;
//       }
//     }
//   }

//   .footer-bottom--section {
//     padding-top: 3rem;

//     hr {
//       border: none;
//       height: 1px;
//       background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
//       margin-bottom: 2rem;
//     }

//     .grid-two-column {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       align-items: center;
//       gap: 2rem;

//       p {
//         color: rgba(255, 255, 255, 0.8);
//         font-size: 1.4rem;
//       }

//       a {
//         transition: all 0.3s ease;
        
//         &:hover {
//           color: #FF8C42;
//         }
//       }
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .contact-short {
//       max-width: 80vw;
//       margin: 4.8rem auto;
//       transform: translateY(0%);
//       text-align: center;
//       padding: 2rem;

//       .grid-two-column {
//         grid-template-columns: 1fr;
//         gap: 2rem;
//       }
//     }

//     footer {
//       padding: 9rem 0 9rem 0;

//       .container {
//         padding: 0 2rem;
//       }

//       .grid-four-column {
//         grid-template-columns: 1fr;
//         gap: 3rem;
//       }
//     }

//     .footer-bottom--section {
//       padding-top: 4.8rem;

//       .grid-two-column {
//         grid-template-columns: 1fr;
//         text-align: center;
//         gap: 2rem;
//       }
//     }
//   }
// `;

// const Footer = () => {
//   return (
//     <Wrapper>
//       <section className="contact-short">
//         <div className="grid-two-column">
//           <div>
//             <h3>Ready to get started?</h3>
//             <h3>Talk to us today...</h3>
//           </div>
//           <div>
//             <Button className="hireme-btn">
//               <NavLink to="/Contact">Get Started</NavLink>
//             </Button>
//           </div>
//         </div>
//       </section>

//       <footer>
//         <div className="container grid-four-column">
//           <div className="footer-about">
//             <h3>First Electronics Solutions</h3>
//             <p>Khasra no. 264, Gali-4, Near Jivaasha Neo Hospital, Prahlad Vihar, Rohini, Delhi-110042</p>
//           </div>
          
//           <div className="footer-subscribe">
//             <h3>Subscribe to get important updates</h3>
//             <form action="https://formspree.io/f/xjvqlyqb" method="POST">
//               <input type="email" name="email" placeholder="YOUR E-MAIL" />
//               <input type="submit" value="Subscribe" />
//             </form>
//           </div>
          
//           <div className="footer-social">
//             <h3>Follow Us</h3>
//             <div className="footer-social--icons">
//               <div>
//                 <FaDiscord className="icons" />
//               </div>
//               <div>
//                 <FaInstagram className="icons" />
//               </div>
//               <div>
//                 <FaYoutube className="icons" />
//               </div>
//             </div>
//           </div>
          
//           <div className="footer-contact">
//             <h3>Call Us</h3>
//             <a href="tel:+919891253737" className="modern">+91-9891253737</a>
//             <br />
//             <br />
//             <a href="tel:+918384015452" className="modern">+91-8384015452</a>
//           </div>
//         </div>

//         <div className="footer-bottom--section">
//           <hr />
//           <div className="container grid-two-column">
//             <p>@{new Date().getFullYear()} First Electronics. All Rights Reserved</p>
//             <div>
//               <p><Link to="/privacy" style={{ color: 'white' }}>Privacy Policy</Link></p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </Wrapper>
//   );
// };

// export default Footer;



import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";



const Wrapper = styled.section`
  background: linear-gradient(
    to right,
    rgba(68, 23, 82, 0.97),
    rgba(68, 23, 82, 0.95)
  );
  position: relative;
  overflow: hidden;

  .contact-short {
  max-width: 60%; 
  margin: 4rem auto 0;
  padding: 3rem 2rem; 
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.cta-content h2 {
  font-size: 3rem; 
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #6a1b9a;
}

.cta-content p {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #6a1b9a;
}

.hireme-btn {
  display: inline-block;
  padding: 1.5rem 4rem; 
  font-size: 1.6rem; /
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  background: #6a1b9a; 
  border-radius: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

.hireme-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  background: #4a148c; 
}


@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}


  footer {
    margin-top: 0;
    padding: 6rem 0 2rem 0; 

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr ;
      gap: 15rem; /* Reduced gap between columns */

      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        grid-template-columns: 1fr;
        gap: 2rem; /* Reduced gap for mobile */
      }
    }

    .footer-info {
      h2 {
        font-size: 2.4rem;
        color: #fff;
        margin-bottom: 1.5rem; 
        position: relative;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 60px;
          height: 3px;
          background: linear-gradient(to right, #9c27b0, #673ab7);
        }
      }

      .address {
        font-size: 1.5rem;
        line-height: 1.5; 
        margin-bottom: 1.5rem; 
        color: rgba(255, 255, 255, 0.8);
      }
    }

    .footer-subscribe {
      h3 {
        font-size: 2rem;
        color: #fff;
        margin-bottom: 1.5rem;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem; 

        input[type="email"] {
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 1.5rem;

          &:focus {
            outline: none;
            border-color: #9c27b0;
            background: rgba(255, 255, 255, 0.1);
          }
        }

        input[type="submit"] {
          background: linear-gradient(135deg, #9c27b0, #673ab7);
          color: white;
          padding: 1rem;
          border: none;
          border-radius: 0.8rem;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
        }
      }
    }

    .footer-contact {
      h3 {
        font-size: 2rem;
        color: #fff;
        margin-bottom: 1.5rem; 
      }

      .contact-links {
        display: flex;
        flex-direction: column;
        gap: 1rem; 

        a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 1.6rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 1rem;

          &:hover {
            color: #ce93d8;
            transform: translateX(5px);
          }
        }
      }
    }
  }

  .footer-bottom--section {
    margin-top: 3rem; /* Reduced margin */
    padding-top: 1rem; /* Reduced padding */
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    .bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        flex-direction: column;
        gap: 1.5rem; /* Reduced gap for mobile */
        text-align: center;
      }

      p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.4rem;
      }

      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
          color: #ce93d8;
        }
      }
    }
  }
`;


const Footer = () => {
  return (
    <Wrapper>
     <section className="contact-short">
  <div className="cta-content">
    <h2>Transform Your Electronics Vision</h2>
    <p>Partner with us for innovative solutions and expert guidance</p>
    <NavLink to="/contact" className="hireme-btn">
      Schedule a Consultation
    </NavLink>
  </div>
</section>


      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h2>Medhansh Lighting Solutions</h2>
              <p className="address">
                Maujampur Jaitra,<br />
                Vill & Post Jaitra<br />
                Dhampur-246761
              </p>
            </div>

            {/* <div className="footer-subscribe">
              <h3>Stay Updated</h3>
              <form action="https://formspree.io/f/xjvqlyqb" method="POST">
                <input type="email" name="email" placeholder="Enter your email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div> */}

            <div class="footer-empty"></div>


            <div className="footer-contact">
              <h3>Contact Us</h3>
              <div className="contact-links">
                <a href="tel:+918630236245">+91-8630236245</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom--section">
            <div className="bottom-content">
              <p>@{new Date().getFullYear()} Medhansh Lighting Solutions. All Rights Reserved</p>
              {/* <p><Link to="/privacy">Privacy Policy</Link></p> */}
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;