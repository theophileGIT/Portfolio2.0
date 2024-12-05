import React from "react";
import ContactForm from "../components/ContactForm";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        initial="out"
        exit="out"
        animate="in"
        variants={pageTransition}
        transition={{ duration: 0.5 }}
        className="contact"
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>La Timone</p>
              <p>13005 Marseille</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="068147351" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié !")}
                >
                  06 81 47 33 51
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="theophile.berthe@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié !")}
                >
                theophile.berthe@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Berthe - 2024</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
