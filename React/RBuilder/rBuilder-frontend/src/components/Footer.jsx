import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhoneVolume,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg text-center text-light p-5">
      <h4>Contact US</h4>
      <h6 className="mt-4">
        <MdEmail className="fs-4 me-2" />
        rBuilder@gmail.com
      </h6>
      <h6>
        {" "}
        <FaPhoneVolume className="fs-4 me-2" /> 1236985544
      </h6>
      <br />
      <h5>Connect with US</h5>
      <div className="d-flex justify-content-center align-items-center">
        <FaWhatsapp className="fs-4 me3" />
        <FaInstagram className="fs-4 me3" />
        <FaLinkedin className="fs-4 me3" />
      </div>
      <p className="mt-3">Designed and build with 💌 using react</p>
    </div>
  );
};

export default Footer;
