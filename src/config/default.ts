require("dotenv").config();

const config = {
  development: {
    appname: "Ecommerce API [development]",
    port: process.env.PORT,
  },
  test: {
    appname: "Ecommerce API [test]",
    port: process.env.PORT,
  },
  production: {
    appname: "Ecommerce API",
    port: process.env.PORT,
  },
};

export default config;
