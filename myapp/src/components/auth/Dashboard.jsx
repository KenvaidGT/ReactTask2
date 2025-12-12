import React, { useEffect, useState } from "react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import ComponentShowcase from "../ComponentShowcase.jsx";
import { getNickname } from "../../utils/nicknameStorage";

const Dashboard = () => {
  const session = useSessionContext();
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (session?.userId) {
      setNickname(getNickname(session.userId) || "");
    }
  }, [session?.userId]);

  const handleLogout = async () => {
    await signOut();
    window.location.href = "/auth";
  };

  return (
    <div className="protected-app">
      <header className="auth-header">
        <div>
          <h1>{nickname ? `Hello ${nickname}` : "Hello there"}</h1>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Log out
        </button>
      </header>
      <ComponentShowcase />
    </div>
  );
};

export default Dashboard;
