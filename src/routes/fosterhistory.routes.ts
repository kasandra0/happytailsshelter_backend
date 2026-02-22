import express from "express";
import {
  createFosterHistoryRecord,
  deleteFosterHistoryRecord,
  getAllFosterHistoryRecords,
  getFosterHistoryRecordsForAnimal,
  getFosterHistoryRecordsForUser,
  updateFosterHistoryRecord,
} from "../controllers/fosterHistoryRouter.js";

const fosterHistoryRouter = express.Router();

fosterHistoryRouter.post("/", createFosterHistoryRecord);
fosterHistoryRouter.get("/", getAllFosterHistoryRecords);
fosterHistoryRouter.get("/user/:id", getFosterHistoryRecordsForUser);
fosterHistoryRouter.get("/animal/:id", getFosterHistoryRecordsForAnimal);
fosterHistoryRouter.put("/:id", updateFosterHistoryRecord);
fosterHistoryRouter.delete("/:id", deleteFosterHistoryRecord);

export default fosterHistoryRouter;
