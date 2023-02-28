import React from 'react';

interface IButtonProps {
  text: string;
}

function Button(props: IButtonProps) {
  const { text } = props;

  return (
    <div className="mr-6 bg-axon-theme font-semibold px-6 py-2 rounded-full shadow-lg">
      {text}
    </div>
  );
}

export default Button;
