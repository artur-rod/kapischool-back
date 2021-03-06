const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", routes.user);
app.use("/admin", routes.admin);
app.use("/courses", routes.courses);
app.use("/profile", routes.profile);

app.use("/balance", routes.balance);
app.use("/charges", routes.charges);
app.use("/payment", routes.payment);

app.use("/email", routes.email);

app.use("/address", routes.address);

app.use("/analytics", routes.analytics);

app.listen(process.env.SERVER_PORT);
