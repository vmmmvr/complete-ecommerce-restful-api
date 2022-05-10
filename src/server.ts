import app from "./app/app";
import log from "./utils/logger";
import routes from "./API/V1/routes";
const config =
  require("./config/default")["default"][process.env.NODE_ENV || "development"];

app
  .listen("4500", () => {
    log.info(`${config.appname} is running on PORT 4500`);

    routes(app);
  })
  .on("error", (e) => log.error(e));
