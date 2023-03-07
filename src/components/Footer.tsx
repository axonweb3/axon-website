import React from 'react';
import { links } from '../config';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="py-6 px-4 md:pl-10 flex flex-row justify-between items-center">
      <div className="w-1/2 sm:w-1/3">
        <span className="tracking-wide">&copy; Axon, Inc. 2023.</span>
      </div>
      <div className="hidden md:grid md:grid-cols-4 gap-2 w-1/4">
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
      <div className="w-1/2 sm:w-1/3 flex flex-row-reverse">
        <div className="w-1/2 xl:w-1/4">
        <Logo />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
