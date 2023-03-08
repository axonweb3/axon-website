import React from 'react';

interface IButtonProps {
  text: string;
  href: string;
}

function Button(props: IButtonProps) {
  const { text, href } = props;

  return (
    <a href={href} className="flex flex-row justify-center px-6 py-3 bg-axon-theme rounded-full shadow-lg cursor-pointer w-40 sm:w-44 2xl:w-48">
      <span className="text-sm sm:text-lg 2xl:text-xl font-dunbar-tall font-[860] tracking-[0.1px]">{text}</span>
    </a>
  );
}

export default Button;
