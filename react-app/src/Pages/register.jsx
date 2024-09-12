import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";



const RegisterPage = () => {
    return (
        <AuthLayouts title="Register" type="register">
            <FormRegister />
           
        </AuthLayouts>
    );
};

export default LoginPage;