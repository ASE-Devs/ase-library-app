import React from 'react';

const Button = (props) => {
  return (
    <div className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hidden md:block w-30">
      {props.text}
    </div>
  );
}

export default Button;
