import React from 'react';
import { links } from '../config';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="py-6 px-4 md:pl-10 flex flex-row justify-between items-center">
      <div className="w-[12%]">
        <span className="tracking-wide">&copy; Axon, Inc. 2023.</span>
      </div>
      <div className="grid grid-cols-4 gap-2 w-1/4">
        {links.map((item) => {
          return (
            <div className="flex flex-row justify-center" key={item.name}>
              <a href={item.link}>
                <img className="h-9" src={item.icon} />
              </a>
            </div>
          );
        })}
      </div>
      <div className="w-[12%]">
        <Logo />
      </div>
    </footer>
  );
}

export default Footer;
