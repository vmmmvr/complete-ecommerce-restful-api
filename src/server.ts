import app from "./app/app";
import log from "./utils/logger";
import routes from "./API/V1/routes/customer";
const config =
  require("./config/default")["default"][process.env.NODE_ENV || "development"];

log.info(config);
app
  .listen(config.port, () => {
    log.info(`${config.appname} is running on PORT ${config.port}`);

    routes(app);
  })
  .on("error", (e) => log.error(e));
