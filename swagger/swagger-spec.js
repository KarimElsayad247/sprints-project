const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Sprints Project",
    version: "1.0.0",
    description: "Places Reviews Application",
    contact: {
      name: "Ramadan Ibrahem",
      email: "ramadan.ibrahem98@eng-st.cu.edu.eg",
    },
  },
  servers: [
    {
      url: "http://localhost:8080",
    },
  ],
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  basePath: "/api/v1",
};
const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, "/docs/*.yaml")],
};
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
