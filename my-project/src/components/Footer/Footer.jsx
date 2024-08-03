import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/logo.png";
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <>
      <div className="container grid md:grid-cols-3 pb-8 pt-5">
        {/* {company details} */}
        <div className="py-8 px-4">
          <img src={Logo} alt="" className="w-36" />
          <div className="space-y-5">
            <p className="pt-4 text-xl opacity-50 font-cursive2">
            Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape
            </p>
            <div>
              <button href="" target="_blank" className="primary-btn">
                Visit Youtube Channel
              </button>
            </div>
          </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4 ">
              <h1 className="text-xl font-semibold sm:text-left mb-5">
                Important Links
              </h1>
              <ul className="space-y-5">
                {FooterLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4 ">
              <h1 className="text-xl font-semibold sm:text-left mb-5">
                Quick Links
              </h1>
              <ul className="space-y-5">
                {FooterLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* company address section */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-5">
                Address
              </h1>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300"/>
                </a>
                <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-300"/>
                </a>
                <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-300"/>
                </a>
              </div>
            </div>
          </div>
        
      </div>
      {/* copyright section */}
      <div className="bg-gray-200">
       <div className="text-xs md:text-sm container p-4 flex justify-between">
        <p>@2024 All rights reserved Inc.</p>
        <div className="flex justify-center items-center gap-3">
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
            <a href="#">Terms</a>
        </div>
        </div>
       </div>
       
    </>
  );
};

export default Footer;
