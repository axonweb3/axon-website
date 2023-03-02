import React from 'react';

interface IButtonProps {
  text: string;
}

function Button(props: IButtonProps) {
  const { text } = props;

  return (
    <div className="mr-6 bg-axon-theme px-6 py-2 rounded-full shadow-lg">
      <span className="font-dunbar font-[860]">{text}</span>
    </div>
  );
}

export default Button;
