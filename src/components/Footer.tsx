import React from 'react';
import { links } from '../config';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="py-6 px-4 md:pl-10 flex flex-row justify-between items-center">
      <div className="w-1/2 sm:w-1/3">
        <span className="tracking-wide font-[16px] leading-6 text-[#0A0607]">
          &copy; Axon, Inc. 2023.
        </span>
      </div>
      <div className="hidden md:grid md:grid-cols-3 gap-2 w-1/4 2xl:w-2/12">
        {links.map((item) => {
          return (
            <div
              className="flex flex-row justify-center items-center"
              key={item.name}
            >
              <a href={item.link}>
                <img className="w-[40px]" src={item.icon} />
              </a>
            </div>
          );
        })}
      </div>
      <div className="w-1/2 sm:w-1/3 flex flex-row-reverse">
        <div className="w-logo-width h-logo-height">
          <Logo />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
