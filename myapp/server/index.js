import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import SuperTokens from "supertokens-node";
import Session from "supertokens-node/recipe/session/index.js";
import EmailPassword from "supertokens-node/recipe/emailpassword/index.js";
import { middleware, errorHandler } from "supertokens-node/framework/express/index.js";
import { verifySession } from "supertokens-node/recipe/session/framework/express/index.js";

const apiPort = process.env.PORT || 5000;
const websiteDomain = process.env.WEBSITE_DOMAIN || "http://localhost:5173";
const apiDomain = process.env.API_DOMAIN || `http://localhost:${apiPort}`;
const connectionURI =
  process.env.SUPERTOKENS_CONNECTION_URI || "https://try.supertokens.io";

SuperTokens.init({
  framework: "express",
  supertokens: {
    connectionURI,
  },
  appInfo: {
    appName: "TokenName",
    apiDomain,
    websiteDomain,
    apiBasePath: "/auth",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

const app = express();

app.use(
  cors({
    origin: websiteDomain,
    allowedHeaders: ["content-type", ...SuperTokens.getAllCORSHeaders()],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(middleware());

app.get("/session-info", verifySession(), (req, res) => {
  res.json({
    userId: req.session.getUserId(),
  });
});

app.use(errorHandler());

app.listen(apiPort, () => {
  console.log(`SuperTokens API running on ${apiDomain}`);
});
