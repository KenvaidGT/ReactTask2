import SuperTokens from "supertokens-node";
import Session from "supertokens-node/recipe/session/index.js";
import EmailPassword from "supertokens-node/recipe/emailpassword/index.js";
import { deleteUser } from "supertokens-node";

const apiPort = process.env.PORT || 5000;
const websiteDomain = process.env.WEBSITE_DOMAIN || "http://localhost:5173";
const apiDomain = process.env.API_DOMAIN || `http://localhost:${apiPort}`;
const connectionURI =
  process.env.SUPERTOKENS_CONNECTION_URI || "https://try.supertokens.io";

SuperTokens.init({
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

const deleteAllUsers = async () => {
  let paginationToken = undefined;
  let totalDeleted = 0;
  do {
    const { users, nextPaginationToken } = await EmailPassword.getUsersOldestFirst({
      limit: 100,
      paginationToken,
    });
    for (const entry of users) {
      await deleteUser(entry.user.id);
      totalDeleted++;
    }
    paginationToken = nextPaginationToken;
  } while (paginationToken);

  console.log(`Deleted ${totalDeleted} user(s).`);
};

deleteAllUsers().catch((err) => {
  console.error("Failed to delete users", err);
  process.exit(1);
});
