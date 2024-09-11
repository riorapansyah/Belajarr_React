const Button = (props) => {
    const { childern, classname = "bg-black"} = props;
    return (
      <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-black`}
      type="submit"
      >
        {childern}
      </button>
    );
  };

  export default Button