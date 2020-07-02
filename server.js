if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
}

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");

const app = express();

const userRouter = require("./routes/userRoutes.js");
// const adminRouter = require("./routes/adminRoutes.js");

app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// accept json
app.use(bodyParser.json());
dotenv.config({ path: "./config.env" });
//Set which view engine we will be using
app.set("view engine", "ejs");
//Set where the views will be located
app.set("views", __dirname + "/views");
//state that we will be using layouts so comman footer and header etc
app.set("layout", "layouts/layout");
//tell express we will be using layouts
app.use(expressLayouts);
//Tell express where to find css,js and all that which is in the public folder
app.use(express.static("public"));

// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(console.log("database connection established"));

app.use("/", userRouter);
// app.use("/admin", adminRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`hello from port ${process.env.PORT}`);
});
