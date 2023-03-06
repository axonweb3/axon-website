import React from 'react';
import findUsBackground from '../assets/img/webp/find-us-background.webp';
import findUsTitle from '../assets/img/webp/find-us-title.webp';
import Link from '../components/Link';
import { links } from '../config';

function FindUsSection() {
  return (
    <div
      className={`flex flex-col bg-cover items-center`}
      style={{ backgroundImage: `url(${findUsBackground})` }}
    >
      <div className="flex flex-col items-center pt-16 px-6">
        <img
          className="w-8/12 sm:w-6/12 md:w-5/12 xl:w-4/12 2xl:w-5/12"
          src={findUsTitle}
        />
        <p className="text-[#0A0607] font-medium my-6 text-center">
          Be a part of our Global Community By Participating in Open
          Discussions.
        </p>
      </div>
      <div className="container w-full sm:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 px-6 sm:px-4">
        <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-4 gap-6 pt-10">
          {links.map((link) => {
            return <Link data={link} key={link.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FindUsSection;
