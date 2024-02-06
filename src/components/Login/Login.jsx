import styles from "./login.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDisplay } from "../../context/DisplayLoginOrSignupContext";
import { useAuthenticated } from "../../context/AuthenticatedContext";

export default function Login() {
  const navigate = useNavigate();
  const { authenticated, setAuthenticated } = useAuthenticated(); // State for logged in status
  const { setDisplay } = useDisplay(); /// State for conditional rendering

  // on login submit, authenticates the user and redirects to profile page and sets avatar to header.
  function handleSubmit(e) {
    e.preventDefault();
    setAuthenticated(true);
    setTimeout(() => {
      navigate("/profile");
      setDisplay("avatar");
    }, [1000]);
  }
  return (
    <motion.section
      className={styles.login}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      <h2>Welcome back</h2>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username or email</label>
        <input
          readOnly
          value="Cr4zyfox09"
          id="username"
          type="text"
          minLength="2"
        />
        <label htmlFor="password">Password</label>
        <input
          readOnly
          value="Password123!"
          id="password"
          type="password"
          minLength="8"
        />
        <button
          disabled={authenticated}
          className={styles.primarybtn}
          type="submit"
        >
          {authenticated ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <div>
        <div>
          <input id="checkbox" type="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <p style={{ textDecoration: "underline" }}>
          I have forgotten my password
        </p>
      </div>
      <small>Or</small>
      <div className={styles.divider} />
      <button>Sign in with student365</button>
      <p>
        Dont have an account yet? <strong> Create an account</strong>
      </p>
    </motion.section>
  );
}
