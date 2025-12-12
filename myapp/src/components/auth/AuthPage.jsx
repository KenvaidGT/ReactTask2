import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "supertokens-auth-react/recipe/emailpassword";
import { saveNickname } from "../../utils/nicknameStorage";
import "../../style.css";

const emptyStatus = { type: null, message: "" };

const AuthPage = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signIn");
  const [form, setForm] = useState({ email: "", password: "", nickname: "" });
  const [status, setStatus] = useState(emptyStatus);
  const [loading, setLoading] = useState(false);

  const isSignUp = mode === "signUp";

  const toggleMode = (next) => {
    setStatus(emptyStatus);
    setMode(next);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(emptyStatus);

    const formFields = [
      { id: "email", value: form.email },
      { id: "password", value: form.password },
    ];

    try {
      if (!isSignUp) {
        const result = await signIn({ formFields });
        if (result.status === "OK") {
          setStatus({
            type: "success",
            message: "Login successful, redirecting...",
          });
          setForm((prev) => ({ ...prev, password: "" }));
          navigate("/", { replace: true });
        } else if (result.status === "WRONG_CREDENTIALS_ERROR") {
          setStatus({ type: "error", message: "Invalid email/password combination." });
        } else if (result.status === "FIELD_ERROR") {
          const errors = result.formFields.map((f) => f.error).join(" ");
          setStatus({ type: "error", message: errors || "Check the form values." });
        } else {
          setStatus({ type: "error", message: "Unable to finish sign in. Try again." });
        }
      } else {
        const result = await signUp({ formFields });
        if (result.status === "OK") {
          setStatus({
            type: "success",
            message: "Account created! You can sign in now.",
          });
          saveNickname(result.user.id, form.nickname);
          setForm((prev) => ({ ...prev, password: "" }));
          setMode("signIn");
        } else if (result.status === "EMAIL_ALREADY_EXISTS_ERROR") {
          setStatus({ type: "error", message: "An account already exists for this email." });
        } else if (result.status === "FIELD_ERROR") {
          const errors = result.formFields.map((f) => f.error).join(" ");
          setStatus({ type: "error", message: errors || "Review the highlighted fields." });
        } else {
          setStatus({ type: "error", message: "Unable to sign up. Try again in a moment." });
        }
      }
    } catch (error) {
      const fallbackMessage =
        error?.message && error.message.toLowerCase().includes("network")
          ? "Cannot reach the auth API. Please ensure `npm run api` is running."
          : error?.message || "Unexpected error. Please try again.";
      setStatus({
        type: "error",
        message: fallbackMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-toggle">
          <button
            type="button"
            className={mode === "signIn" ? "active" : ""}
            onClick={() => toggleMode("signIn")}
          >
            Sign in
          </button>
          <button
            type="button"
            className={isSignUp ? "active" : ""}
            onClick={() => toggleMode("signUp")}
          >
            Sign up
          </button>
        </div>
        <h1>{isSignUp ? "Create account" : "Sign in"}</h1>
        <p>
          Powered by SuperTokens. Use email and password to access the exercises.
        </p>
        <form onSubmit={handleSubmit} className="auth-form">
          {isSignUp && (
            <>
              <label htmlFor="nickname">Nickname</label>
              <input
                id="nickname"
                name="nickname"
                type="text"
                value={form.nickname}
                onChange={handleChange}
                placeholder="Your nickname"
                required
              />
            </>
          )}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Minimum 8 characters"
            minLength={8}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : mode === "signIn" ? "Sign in" : "Sign up"}
          </button>
        </form>
        {status.message && (
          <p
            className={
              status.type === "error" ? "auth-message error" : "auth-message success"
            }
          >
            {status.message}
          </p>
        )}
        {!isSignUp && (
          <button
            type="button"
            className="link-button"
            onClick={() => toggleMode("signUp")}
          >
            Need an account? Sign up
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
