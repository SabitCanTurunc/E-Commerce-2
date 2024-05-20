import React from 'react';
import { SiInstagram,SiFacebook,SiYoutube,SiX } from "react-icons/si";


const Footer = () => {
  return (
    <footer className='bg-slate-200'>
  <div className='container mx-auto p-4'>
    <p className='text-center font-bold text-white' title="Youtube Channel">SCT Store & More
    <div className="flex justify-center mt-4">
      <span className="text-white hover:text-gray-300 mx-2 cursor-pointer" onClick={() => window.open("https://www.facebook.com/sctstore")}>
        <SiFacebook />
      </span>
      <span className="text-white hover:text-gray-300 mx-2 cursor-pointer" onClick={() => window.open("https://www.twitter.com/sctstore")}>
        <SiX />
      </span>
      <span className="text-white hover:text-gray-300 mx-2 cursor-pointer" onClick={() => window.open("https://www.instagram.com/sctstore")}>
        <SiInstagram />
      </span>
      <span className="text-white hover:text-gray-300 mx-2 cursor-pointer" onClick={() => window.open("https://www.youtube.com/sctstore")}>
        <SiYoutube />      
      </span>
    </div>
    </p>
  </div>
</footer>

  );
};

export default Footer;
