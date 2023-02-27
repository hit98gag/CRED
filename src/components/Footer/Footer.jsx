import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footercontainerupper">
        <div className="footerlogo">
          <img
            id="credlogo"
            src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png"
            alt="footerlogo"
          />
          <img
            id="securitylogo"
            src="https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png"
            alt=""
          />
        </div>
        <div className="uppermiddlecontainer">
          <h1>Products</h1>
          <div className="paracontent">
            <p>CRED pay</p>
            <p>credit score</p>
            <p>check</p>
          </div>
        </div>
        <div className="upperrightcontainer">
          <h1>CRED</h1>
          <div className="paracontent">
            <p>about</p>
            <p>careers</p>
            <p>IPL</p>
            <p>customer Care</p>
          </div>
        </div>
      </div>

      <div className="footercontainerlower">
        <div className="footerlowercontent">
          <p>
            CRED encrypts all data and transactions to ensure a completely
            secure experience for our members.
          </p>
        </div>
        <div className="lowermiddlecontainer">
          <h1>resources</h1>
          <div className="paracontent">
            <p>articles</p>
            <p>blogs</p>
            <p>calculators</p>
            <p>credit card payment guide</p>
            <p>credit score guide</p>
          </div>
        </div>
        <div className="lowerrightcontainer">
          <h1>policy</h1>
          <div className="paracontent">
            <p> security</p>
            <p>transaction & user verification</p>
            <p>google API disclosure</p>
            <p>UPI faq & grievances</p>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="copyrightpara">
            <p>copyright © 2020-22 Dreamplug Technologies Pvt Ltd.</p>
        </div>
        <div className="rightpara">
            <p>privacy policy | terms and </p>
            <p>conditions | returns and refund</p>
        </div>
      </div>
    </div>
  );
};