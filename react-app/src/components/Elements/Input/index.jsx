import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const { name, type, placeholder, title } = props;
    
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{title}</Label>  
            <Input name={name} type={type} placeholder={placeholder} />  
        </div>
    );
};

export default InputForm;