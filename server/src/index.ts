import "dotenv/config"
const port = process.env.PORT;
import {errorHandler} from "./middlewares/errorHandler.js"
import {authRouter} from "./routers/authRouter.js"
import {gameRouter}from "./routers/gameRouter.js"
import {leaderboardRouter} from "./routers/leaderboardRouter.js"
import {authmiddleware} from "./middlewares/authmiddleware.js"
import {profileRouter} from "./routers/profileRouter.js"
import cors from "cors"
import express from "express"
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded());
app.use("/api/auth", authRouter);
app.use("/api/game", authmiddleware, gameRouter);
app.use("/api/profile", authmiddleware, profileRouter);
app.use("/api/leaderboard", leaderboardRouter);

app.use(errorHandler); 
app.listen(port, () => console.log(`listening on port ${port}!`));
