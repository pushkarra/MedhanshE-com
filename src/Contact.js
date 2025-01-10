import styled, { keyframes } from "styled-components";
import Footer from "./components/Footer";
import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const float = keyframes`
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-8px);
        }
    `;

    const shimmer = keyframes`
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    `;

    const Wrapper = styled.section`
        min-height: 100vh;
        background: linear-gradient(135deg, #F5F3FF 0%, #F3E8FF 100%);
        color: #4a148c;
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            background: linear-gradient(45deg, rgba(138, 43, 226, 0.05) 0%, rgba(75, 0, 130, 0.05) 100%);
            pointer-events: none;
        }

        .common-heading {
            font-size: 3.5rem;
            font-weight: 800;
            text-align: center;
            background: linear-gradient(to right, #9c27b0, #673ab7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 2rem 0;
            padding-top: 3rem;
            letter-spacing: -1px;
        }

        .sub-heading {
            text-align: center;
            color: #6a1b9a;
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto 4rem;
            line-height: 1.6;
        }
    `;

    const MapContainer = styled.div`
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(106, 27, 154, 0.1);
        position: relative;
        height: 500px;

        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 1px solid rgba(106, 27, 154, 0.1);
            border-radius: 20px;
            pointer-events: none;
        }
    `;

    const ContactGrid = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 4rem auto;
        padding: 0 2rem;
    `;

    const InfoCard = styled.div`
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        border-radius: 24px;
        padding: 2.5rem;
        position: relative;
        transition: all 0.3s ease;
        border: 1px solid rgba(147, 51, 234, 0.1);
        overflow: hidden;
        animation: ${float} 3s ease-in-out infinite;
        animation-delay: ${props => props.delay || '0s'};
        box-shadow: 0 4px 15px rgba(147, 51, 234, 0.1);

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 200%;
            height: 100%;
            background: linear-gradient(
                to right,
                transparent 0%,
                rgba(147, 51, 234, 0.05) 50%,
                transparent 100%
            );
            animation: ${shimmer} 3s infinite;
        }

        &:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 20px 40px rgba(147, 51, 234, 0.15);
        }

        .icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #9c27b0, #673ab7);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            font-size: 2rem;
            color: white;
            box-shadow: 0 8px 16px rgba(147, 51, 234, 0.2);
        }

        .title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #4a148c;
            margin-bottom: 1rem;
            letter-spacing: 0.5px;
        }

        .details {
            color: #6a1b9a;
            font-size: 1.1rem;
            line-height: 1.6;
            font-weight: 500;
        }
    `;

    // const ContactForm = styled.div`
    //     max-width: 800px;
    //     margin: 4rem auto;
    //     padding: 3rem;
    //     background: rgba(26, 26, 26, 0.95);
    //     border-radius: 24px;
    //     border: 1px solid rgba(255, 255, 255, 0.1);
    //     backdrop-filter: blur(10px);

    //     .contact-inputs {
    //         display: grid;
    //         gap: 2rem;

    //         input, textarea {
    //             width: 100%;
    //             padding: 1.2rem;
    //             background: rgba(255, 255, 255, 0.05);
    //             border: 1px solid rgba(255, 255, 255, 0.1);
    //             border-radius: 12px;
    //             color: #ffffff;
    //             font-size: 1rem;
    //             transition: all 0.3s ease;

    //             &:focus {
    //                 outline: none;
    //                 border-color: #9c27b0;
    //                 background: rgba(255, 255, 255, 0.08);
    //                 box-shadow: 0 0 0 4px rgba(156, 39, 176, 0.1);
    //             }

    //             &::placeholder {
    //                 color: #808080;
    //             }
    //         }

    //         textarea {
    //             min-height: 150px;
    //             resize: vertical;
    //         }

    //         input[type="submit"] {
    //             background: linear-gradient(45deg, #9c27b0, #673ab7);
    //             color: white;
    //             font-weight: 600;
    //             font-size: 1.1rem;
    //             padding: 1.2rem;
    //             border: none;
    //             cursor: pointer;
    //             transition: all 0.3s ease;
    //             text-transform: uppercase;
    //             letter-spacing: 1px;

    //             &:hover {
    //                 transform: translateY(-2px);
    //                 box-shadow: 0 10px 20px rgba(156, 39, 176, 0.3);
    //             }

    //             &:active {
    //                 transform: translateY(1px);
    //             }
    //         }
    //     }
    // `;

    return (
        <Wrapper>
            {/* <h2 className="common-heading">Let's Connect</h2> */}
            <h2 className="common-heading">Connect Us</h2>
            {/* <p className="sub-heading">
                Have a question or want to work together? We'd love to hear from you.
                Drop us a message and we'll get back to you as soon as possible.
            </p> */}

            <MapContainer>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3479.37988528023!2d78.49748357552555!3d29.300530375306565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDE4JzAxLjkiTiA3OMKwMzAnMDAuMiJF!5e0!3m2!1sen!2sin!4v1736334344398!5m2!1sen!2sin"
                    title="map location"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </MapContainer>

            <ContactGrid>
                {/* <InfoCard delay="0s">
                    <div className="icon">🏢</div>
                    <div className="title">Visit Us</div>
                    <div className="details">
                        Innovation Hub Tower<br />
                        123 Tech Valley Road<br />
                        San Francisco, CA 94107
                    </div>
                </InfoCard> */}

                <InfoCard delay="0.2s">
                    <div className="icon">📱</div>
                    <div className="title">Call Us</div>
                    <div className="details">
                        Main: (+91) 8630236245<br />
                    </div>
                </InfoCard>

                <InfoCard delay="0.4s">
                    <div className="icon">✉️</div>
                    <div className="title">Email Us</div>
                    <div className="details">
                        General: meedhanslightingsolutions@gmail.com<br />
                        
                    </div>
                </InfoCard>

                {/* <InfoCard delay="0.6s">
                    <div className="icon">🗓️</div>
                    <div className="title">Working Hours</div>
                    <div className="details">
                        Monday - Friday<br />
                        9:00 AM - 6:00 PM PST<br />
                        Weekend support available
                    </div>
                </InfoCard> */}
            </ContactGrid>

            {/* <ContactForm>
                <form className="contact-inputs">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <input type="submit" value="Send Message" />
                </form>
            </ContactForm> */}

            <Footer />
        </Wrapper>
    );
};

export default Contact;



// import styled from "styled-components";
// import Footer from "./components/Footer";
// import { useEffect } from 'react';

// const Contact = () => {
//     useEffect(() => {
//         // Scroll to the top when the component mounts
//         window.scrollTo(0, 0);
//     }, []);

//     const Wrapper = styled.section`
//         padding: 4rem 0;
//         text-align: center;
//         background: linear-gradient(135deg, #F5F3FF 0%, #F3E8FF 100%);
        
//         .common-heading {
//             text-transform: capitalize;
//             font-weight: bold;
//             color: #6a1b9a;
//             font-size: 2.5rem;
//         }

//         .container {
//             margin-top: 4rem;

//             .contact-form {
//                 max-width: 40rem;
//                 margin: auto;
//                 padding: 2rem;
//                 background-color: #ffffff;
//                 border-radius: 10px;
//                 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//                 .contact-inputs {
//                     display: flex;
//                     flex-direction: column;
//                     gap: 1.5rem;

//                     input, textarea {
//                         width: 100%;
//                         padding: 1rem;
//                         border: 1px solid #ccc;
//                         border-radius: 5px;
//                         font-size: 1rem;
//                     }

//                     input[type="submit"] {
//                         cursor: pointer;
//                         background-color: #6a1b9a;
//                         color: #ffffff;
//                         border: none;
//                         padding: 1rem;
//                         border-radius: 5px;
//                         transition: all 0.3s ease;

//                         &:hover {
//                             background-color: #ffffff;
//                             color: #6a1b9a;
//                             border: 1px solid #6a1b9a;
//                             transform: scale(1.05);
//                         }
//                     }
//                 }
//             }
//         }
//     `;

//     return (
//         <Wrapper>
//             <h2 className="common-heading">Contact Us</h2>
            
//             <iframe 
//                 src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3479.37988528023!2d78.49748357552555!3d29.300530375306565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDE4JzAxLjkiTiA3OMKwMzAnMDAuMiJF!5e0!3m2!1sen!2sin!4v1736334344398!5m2!1sen!2sin" 
//                 width="95%" 
//                 height="400" 
//                 title="map location"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade">
//             </iframe>
            
//             {/* <div className="container">
//                 <div className="contact-form">
//                     <form
//                         action="https://formspree.io/f/xjvqlyqb"
//                         method="POST"
//                         className="contact-inputs">
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             name="username"
//                             required
//                             autoComplete="off"
//                         />

//                         <input
//                             type="email"
//                             name="Email"
//                             placeholder="Email"
//                             autoComplete="off"
//                             required
//                         />

//                         <textarea
//                             name="Message"
//                             cols="30"
//                             rows="10"
//                             required
//                             autoComplete="off"
//                             placeholder="Enter your message">
//                         </textarea>

//                         <input type="submit" value="Send" />
//                     </form>
//                 </div>
//             </div> */}
//             <Footer />
//         </Wrapper>
//     );
// };

// export default Contact;


// import styled, { keyframes } from "styled-components";
// import Footer from "./components/Footer";
// import { useEffect } from "react";

// const Contact = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const float = keyframes`
//         0%, 100% {
//             transform: translateY(0);
//         }
//         50% {
//             transform: translateY(-8px);
//         }
//     `;

//     const shimmer = keyframes`
//         0% {
//             background-position: -1000px 0;
//         }
//         100% {
//             background-position: 1000px 0;
//         }
//     `;

//     const Wrapper = styled.section`
//         min-height: 100vh;
//         background: linear-gradient(120deg, #1a1a1a 0%, #2d2d2d 100%);
//         color: #ffffff;
//         position: relative;
//         overflow: hidden;

//         &::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             right: 0;
//             height: 100%;
//             background: linear-gradient(45deg, rgba(138, 43, 226, 0.05) 0%, rgba(75, 0, 130, 0.05) 100%);
//             pointer-events: none;
//         }

//         .common-heading {
//             font-size: 3.5rem;
//             font-weight: 800;
//             text-align: center;
//             background: linear-gradient(to right, #9c27b0, #673ab7);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             margin: 2rem 0;
//             padding-top: 3rem;
//             letter-spacing: -1px;
//         }

//         .sub-heading {
//             text-align: center;
//             color: #a0a0a0;
//             font-size: 1.2rem;
//             max-width: 600px;
//             margin: 0 auto 4rem;
//             line-height: 1.6;
//         }
//     `;

//     const MapContainer = styled.div`
//         width: 90%;
//         max-width: 1200px;
//         margin: 0 auto;
//         border-radius: 20px;
//         overflow: hidden;
//         box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//         position: relative;
//         height: 450px;

//         iframe {
//             width: 100%;
//             height: 100%;
//             border: none;
//         }

//         &::after {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             border-radius: 20px;
//             pointer-events: none;
//         }
//     `;

//     const ContactGrid = styled.div`
//         display: grid;
//         grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//         gap: 2rem;
//         max-width: 1200px;
//         margin: 4rem auto;
//         padding: 0 2rem;
//     `;

//     const InfoCard = styled.div`
//         background: rgba(255, 255, 255, 0.05);
//         backdrop-filter: blur(10px);
//         border-radius: 24px;
//         padding: 2rem;
//         position: relative;
//         transition: all 0.3s ease;
//         border: 1px solid rgba(255, 255, 255, 0.1);
//         overflow: hidden;
//         animation: ${float} 3s ease-in-out infinite;
//         animation-delay: ${props => props.delay || '0s'};

//         &::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: -100%;
//             width: 200%;
//             height: 100%;
//             background: linear-gradient(
//                 to right,
//                 transparent 0%,
//                 rgba(255, 255, 255, 0.05) 50%,
//                 transparent 100%
//             );
//             animation: ${shimmer} 3s infinite;
//         }

//         &:hover {
//             transform: translateY(-10px);
//             background: rgba(255, 255, 255, 0.08);
//             box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
//         }

//         .icon {
//             font-size: 2.5rem;
//             margin-bottom: 1.5rem;
//             background: linear-gradient(45deg, #9c27b0, #673ab7);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             display: inline-block;
//         }

//         .title {
//             font-size: 1.5rem;
//             font-weight: 700;
//             color: #ffffff;
//             margin-bottom: 1rem;
//             letter-spacing: 0.5px;
//         }

//         .details {
//             color: #a0a0a0;
//             font-size: 1.1rem;
//             line-height: 1.6;
//         }
//     `;

//     const ContactForm = styled.div`
//         max-width: 800px;
//         margin: 4rem auto;
//         padding: 3rem;
//         background: rgba(255, 255, 255, 0.03);
//         border-radius: 24px;
//         border: 1px solid rgba(255, 255, 255, 0.1);
//         backdrop-filter: blur(10px);

//         .contact-inputs {
//             display: grid;
//             gap: 2rem;

//             input, textarea {
//                 width: 100%;
//                 padding: 1.2rem;
//                 background: rgba(255, 255, 255, 0.05);
//                 border: 1px solid rgba(255, 255, 255, 0.1);
//                 border-radius: 12px;
//                 color: #ffffff;
//                 font-size: 1rem;
//                 transition: all 0.3s ease;

//                 &:focus {
//                     outline: none;
//                     border-color: #9c27b0;
//                     background: rgba(255, 255, 255, 0.08);
//                     box-shadow: 0 0 0 4px rgba(156, 39, 176, 0.1);
//                 }

//                 &::placeholder {
//                     color: #808080;
//                 }
//             }

//             textarea {
//                 min-height: 150px;
//                 resize: vertical;
//             }

//             input[type="submit"] {
//                 background: linear-gradient(45deg, #9c27b0, #673ab7);
//                 color: white;
//                 font-weight: 600;
//                 font-size: 1.1rem;
//                 padding: 1.2rem;
//                 border: none;
//                 cursor: pointer;
//                 transition: all 0.3s ease;
//                 text-transform: uppercase;
//                 letter-spacing: 1px;

//                 &:hover {
//                     transform: translateY(-2px);
//                     box-shadow: 0 10px 20px rgba(156, 39, 176, 0.3);
//                 }

//                 &:active {
//                     transform: translateY(1px);
//                 }
//             }
//         }
//     `;

//     return (
//         <Wrapper>
//             <h2 className="common-heading">Let's Connect</h2>
//             <p className="sub-heading">
//                 Have a question or want to work together? We'd love to hear from you.
//                 Drop us a message and we'll get back to you as soon as possible.
//             </p>

//             <MapContainer>
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3479.37988528023!2d78.49748357552555!3d29.300530375306565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDE4JzAxLjkiTiA3OMKwMzAnMDAuMiJF!5e0!3m2!1sen!2sin!4v1736334344398!5m2!1sen!2sin"
//                     title="map location"
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//             </MapContainer>

//             <ContactGrid>
//                 <InfoCard delay="0s">
//                     <div className="icon">📍</div>
//                     <div className="title">Visit Us</div>
//                     <div className="details">
//                         Innovation Hub Tower<br />
//                         123 Tech Valley Road<br />
//                         San Francisco, CA 94107
//                     </div>
//                 </InfoCard>

//                 <InfoCard delay="0.2s">
//                     <div className="icon">📞</div>
//                     <div className="title">Call Us</div>
//                     <div className="details">
//                         Main: (555) 123-4567<br />
//                         Support: (555) 987-6543<br />
//                         Toll-free: 1-800-TECH-HUB
//                     </div>
//                 </InfoCard>

//                 <InfoCard delay="0.4s">
//                     <div className="icon">📧</div>
//                     <div className="title">Email Us</div>
//                     <div className="details">
//                         General: hello@techhub.com<br />
//                         Support: help@techhub.com<br />
//                         Sales: sales@techhub.com
//                     </div>
//                 </InfoCard>

//                 <InfoCard delay="0.6s">
//                     <div className="icon">⏰</div>
//                     <div className="title">Working Hours</div>
//                     <div className="details">
//                         Monday - Friday<br />
//                         9:00 AM - 6:00 PM PST<br />
//                         Weekend support available
//                     </div>
//                 </InfoCard>
//             </ContactGrid>

//             <ContactForm>
//                 <form className="contact-inputs">
//                     <input type="text" placeholder="Your Name" required />
//                     <input type="email" placeholder="Your Email" required />
//                     <textarea placeholder="Your Message" required></textarea>
//                     <input type="submit" value="Send Message" />
//                 </form>
//             </ContactForm>

//             <Footer />
//         </Wrapper>
//     );
// };

// export default Contact;

