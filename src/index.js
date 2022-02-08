import "dotenv/config";
import express from "express";

const app = express();
const router = express.Router();

router.get("/ping", function (req, res) {
  res.status(200).json({
    success: true,
  });
});

if (process.env.NODE_ENV === "local") {
  app.use("/api", router);
} else {
  app.use("/", router);
}

app.listen(6969, () => {
  console.log("We are running off of 6969");
});
