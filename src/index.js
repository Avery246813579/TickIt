import "dotenv/config";
import express from "express";
import {setupTableHandler} from "./tables";
import {setupPassword, validatePassword} from "./helpers/security/session-helper";

const app = express();
const router = express.Router();

router.get("/ping", function (req, res) {
  res.status(200).json({
    success: true,
  });
});

setupTableHandler();

setTimeout(() => {
  validatePassword({ID: 0}, {PASSWORD: "123"}).catch((err) => {
    console.log(err);
  })
}, 100);

if (process.env.NODE_ENV === "local") {
  app.use("/api", router);
} else {
  app.use("/", router);
}

app.listen(6969, () => {
  console.log("We are running off of 6969");
});
