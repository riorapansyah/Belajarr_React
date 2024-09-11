import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayouts>
            <FormLogin title="Login"/>
        </AuthLayouts>
    );
};

export default LoginPage;