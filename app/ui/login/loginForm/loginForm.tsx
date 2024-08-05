"use client";
import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <>
      <form action={formAction} className={styles.form}>
        <h1>Login</h1>
        <h3>Account For Test :</h3>
        <h4 className={styles.username}>username:ahmed123</h4>
        <h4 className={styles.username}>password:ahmed123</h4>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        {state && state}
      </form>
    </>
  );
};

export default LoginForm;
