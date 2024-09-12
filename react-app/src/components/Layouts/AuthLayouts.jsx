import { Children } from "react";
import { Link } from "react-router-dom";


const AuthLayouts = (props) => {
    const {Children, title, type} = props;
    return (
        <div className="flex justify-center bg-white-700 min-h-screen items-center">
        <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-black">{title}</h1>
        <p className="font-medium text-slate-700 mb-8">
          Welcome ,Please enter your details
        </p>
        <p className="text-sm mt-5 text-center"> 
            {type === 'login' ? " don't have an account" : "already have an account"}
            have an account?{""} <link to="/register.jsx" className="font-bold text-blue-600"></link>register </p>
       {Children}
       </div>
      </div>
    );
};

export default AuthLayouts