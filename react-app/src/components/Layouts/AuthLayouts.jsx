import { Children } from "react";
import { Link } from "react-router-dom";


const AuthLayouts = (props) => {
    const {Children, title, type} = props;
    return (   
        <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
            <p className="font-medium text-slate-600 mb-8">
                Welcome, Please enter your details
            </p>
          {Children}
          <Navigation type={type} />
        </div>
        </div>
    );
};

const Navigation = ({ type }) => {
    if (type === "login") {
        return (
            <p className="text-sm mt-5 text-center">
                Don't have to account? {" "}
                <link to="/register" className="font-bold text-blue-600">
                Register
                </link>
            </p>
        );
    } else {
        <p className="text-sm mt-5 text-center">
                Already have to account? {" "}
                <link to="/login" className="font-bold text-blue-600">
                Login
                </link>
            </p>
    }
};

export default AuthLayouts