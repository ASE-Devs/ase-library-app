import React from 'react';

const Button = (props) => {
  return (
    <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold w-32 md:block">
      {props.text}
    </button>
  );
}

export default Button;

