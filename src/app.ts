import cors from "cors";
import express from "express";

import animalRouter from "./routes/animal.routes.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import inventoryCheckoutRouter from "./routes/inventorycheckout.routes.js";
import inventoryItemRouter from "./routes/inventoryitem.routes.js";
import medicalLogRouter from "./routes/medicallog.routes.js";
import fosterHistoryRouter from "./routes/fosterhistory.routes.js";

import { errorMiddleware } from "./middleware/error.middleware.js";
import { setupSwagger } from "./swagger.js";
import chatRoutes from "./routes/chat.routes.js";

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

setupSwagger(app, "/api/api-docs");

app.use("/api/animals", animalRouter);
app.use("/api/inventory-items", inventoryItemRouter);
app.use("/api/inventory-checkout", inventoryCheckoutRouter);
app.use("/api/foster-history", fosterHistoryRouter);
app.use("/api/medical-log", medicalLogRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/chat", chatRoutes);

app.use(errorMiddleware);

export default app;
