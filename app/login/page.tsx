import LoginForm from "../ui/login/loginForm/loginForm";
import styles from "@/app/ui/login/login.module.css";
const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default Login;
