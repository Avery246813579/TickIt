import express from "express";

const entry = express.Router();

export function setupEntryRoutes(app) {
  entry.post("/join", function (req, res) {});

  app.use("/entry", entry);
}
