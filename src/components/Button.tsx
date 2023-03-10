import React from 'react';

interface IButtonProps {
  text: string;
  href: string;
}

function Button(props: IButtonProps) {
  const { text, href } = props;

  return (
    <a
      href={href}
      className="flex flex-row justify-center items-center w-40 sm:w-button-width 2xl:w-52 h-button-height
      bg-axon-theme rounded-full shadow-lg cursor-pointer"
    >
      <span className="text-sm sm:text-[16px] 2xl:text-xl font-dunbar-tall font-extrabold tracking-[0.1px]">
        {text}
      </span>
    </a>
  );
}

export default Button;
