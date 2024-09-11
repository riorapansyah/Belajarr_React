import input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const {label, name, type, placeholder} = props;
    return (
        <div className="mb-6">
            <label htmlFor={name}>{title}</label>
            <input name={name} type={type} placeholder={placeholder}/>
        </div>
    );
};

export default InputForm