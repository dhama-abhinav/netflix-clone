import React from "react";
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__topIcons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
          {/* fb,insta,twitt,youtube */}</div>
      <div className="footer__middleInfo">
        <div className="footer__middleInfoFirst">
          <p>Audio and Subtitles</p>
          <p>Media Centre</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>
        <div className="footer__middleInfoSecond">
          <p>Audio Description</p>
          <p>Investor Relatives</p>
          <p>Legal Natives</p>
        </div>
        <div className="footer__middleInfoThird">
          <p>Help Centre </p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </div>
        <div className="footer__middleInfoFourth">
          <p>Gift Card</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </div>
      </div>
      <p className='footer__bottomInfo'>
      © 1997-2020 Netflix, Inc.-0ab84756azd839tfg399
      </p>
    </div>
  );
};

//button  service code

// © 1997-2020 Netflix, Inc.  {i-0ab84756azd839tfg399}
