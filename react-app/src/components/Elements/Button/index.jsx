const Button = (props) => {
    const {children, classname = "bg-black"} = props
    return (
        <button 
        className={`h-10 px-6 font-semibold rounded-md ${variant}-700 text-white`}
        type="submit"         
        >
        {children}
        </button>
    );
}