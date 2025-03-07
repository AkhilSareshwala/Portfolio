import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/akhil-ahmed-irshad-sareshwala-778bb7278/" target="_blank">
              <FaLinkedinIn size={24} className="hover:text-blue-400 hover:cursor-pointer" ></FaLinkedinIn>
              </a>
              <a href="https://www.linkedin.com/in/akhil-ahmed-irshad-sareshwala-778bb7278/" target="_blank">
              <FaGithub size={24} className="hover:text-green-400 hover:cursor-pointer" ></FaGithub>
              </a>
              
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
