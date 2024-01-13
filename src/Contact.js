import styled from "styled-components";
import React from "react";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 3rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 1rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-top:5rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>

    <h2 className="common-heading" >Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108944.95254697686!2d74.03918804335937!3d31.427079399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fe10d36fd59f%3A0x8962a5aaa41ff071!2sThokar%20Niaz%20Beg%20Canal%20Road!5e0!3m2!1sen!2s!4v1699028708495!5m2!1sen!2s"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mqkvjqok" method="POST" className="contact-inputs">
          <input type="text"
            placeholder="Username"
            name="Username"
            required
            autoComplete="off" />

          <input type="email"
            placeholder="Email"
            name="Email"
            required
            autoComplete="off" />

          <textarea name="message" placeholder="Enter your message" cols="30" rows="10" autoComplete="off" ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>

  </Wrapper>

};

export default Contact;
