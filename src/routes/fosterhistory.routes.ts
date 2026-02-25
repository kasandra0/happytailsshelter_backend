import express from "express";
import * as fosterHistoryController from "../controllers/fosterHistory.controller.js";

const router = Router();

fosterHistoryRouter.post("/", fosterHistoryController.create);
fosterHistoryRouter.get("/", fosterHistoryController.getAll);
fosterHistoryRouter.get(
  "/user/:id",
  fosterHistoryController.getFosterHistoryRecordsForUser
);
fosterHistoryRouter.get(
  "/animal/:id",
  fosterHistoryController.getFosterHistoryRecordsForAnimal
);
fosterHistoryRouter.put(
  "/:id",
  fosterHistoryController.updateFosterHistoryRecord
);
fosterHistoryRouter.delete(
  "/:id",
  fosterHistoryController.deleteFosterHistoryRecord
);

export default router;
