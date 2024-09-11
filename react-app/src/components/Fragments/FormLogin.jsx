import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form action="">
       <InputForm 
       label="email" 
       type="email" 
       placeholder="example@gmail.com" 
       name="email"
       />
       <InputForm 
       label="Password" 
       type="Password" 
       placeholder="******" 
       name="Password"
       />
       
        <button classname="bg-blue-600" w-full>Login</button>
      </form>
    )
}

export default FormLogin;