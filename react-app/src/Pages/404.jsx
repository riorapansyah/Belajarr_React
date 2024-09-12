import { useRouterError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouterError();

    return (
        <div className="flex justify-center bg-white-700 min-h-screen items-center flex-col">
        <h1 className="text-3xl font-bold">Oops!!</h1>
        <p className="my-5 text-xl">Sorry, un unpexpected error has occured</p>
        <p className="text-xl">{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage