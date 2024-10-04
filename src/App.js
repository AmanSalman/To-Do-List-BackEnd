import { connDB } from "../DB/connection.js";
import TasksRouter from './modules/tasks/tasks.router.js'
import AuthRouter from './modules/auth/auth.router.js'
import cors from 'cors'

export const Appinit = async (app, express) => {
  await connDB();
  app.use(express.json());
  app.use(cors())
  app.get("/", (req, res) => {
    return res.status(200).json({ message: "Welcome" });
  });
  app.use("/auth", AuthRouter);
  app.use("/tasks", TasksRouter);
  app.get("*", (req, res) => {
    return res.status(404).json({ message: "page not found" });
  });
};
