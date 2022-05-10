require("dotenv").config();

const config = {
  development: {
    appname: "Ecommerce API [development]",
  },
  test: {
    appname: "Ecommerce API [test]",
  },
  production: {
    appname: "Ecommerce API",
  },
};

export default config;
