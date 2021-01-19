require("dotenv-safe").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const app = express();

app.set("port", process.env.PORT || 3000);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.get("/data/", (req, res) => {
  res.send({
    error: false,
    data: {
      NIM: "D1041151018",
      email: "anan474@student.untan.ac.id",
      nama: "Agung Tuah Ananda",
    },
  });
});

app.listen(app.get("port"));
console.log(`server berjalan di port: ${app.get("port")}`);
