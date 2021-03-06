/* 

*/
const morgan = require("morgan");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//conecting to DataBase
mongoose
  .connect("mongodb://localhost/tareas")
  .then((db) => console.log("DB conectada"))
  .catch((err) => console.log(err));

// importing routes
const indexRoutes = require("./routes/index");

//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewares  (Es una funcion que se ejecutan antes de que llegen a las rutas)
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", indexRoutes);

//starting the server
app.listen(app.get("port"), () =>
  console.log(`Servidor en el puerto ${app.get("port")}`)
);
