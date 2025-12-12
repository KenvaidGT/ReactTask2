import SuperTokens from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

const apiDomain =
  import.meta.env.VITE_SUPERTOKENS_API_DOMAIN || "http://localhost:5000";

const getWebsiteDomain = () => {
  if (import.meta.env.VITE_APP_DOMAIN) {
    return import.meta.env.VITE_APP_DOMAIN;
  }

  if (typeof window !== "undefined" && window.location.origin) {
    return window.location.origin;
  }

  return "http://localhost:5173";
};

SuperTokens.init({
  appInfo: {
    appName: "TokenName",
    apiDomain,
    websiteDomain: getWebsiteDomain(),
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});
