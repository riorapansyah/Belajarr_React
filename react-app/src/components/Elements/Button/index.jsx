import React from 'react'

export default function index(props) {
    const {
        children,
        classname = "bg-black",
        onClick = () => {},
        type = "button",
      } = props;

      return (
        <button
          className={`h-10 px-6 font-semibold rounded-md ${classname}-700 text-white`}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      );
}

