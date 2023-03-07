import React from 'react';

interface IButtonProps {
  text: string;
}

function Button(props: IButtonProps) {
  const { text } = props;

  return (
    <div className="flex flex-row justify-center px-6 py-3 bg-axon-theme rounded-full shadow-lg cursor-pointer w-40 sm:w-44 2xl:w-48">
      <span className="text-sm sm:text-lg 2xl:text-xl font-dunbar font-[860] tracking-[0.1px]">{text}</span>
    </div>
  );
}

export default Button;
