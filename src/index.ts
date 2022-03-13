import express, { Application } from "express";
import morgan from "morgan";
import Paths from "./utilities/Paths";
import Routes from "./routes/index";

const PORT = 3500;

// create an instance server
const app: Application = express();

// Make Public Path As Static To be able to fetch images
app.use(express.static(Paths.publicPath as string));

// HTTP request logger middleware
app.use(morgan("short"));

// Add All Route As Middleware
app.use(Routes);

// start express server
app.listen(PORT, () => {
  console.log(`Server Start - http://127.0.0.1:${PORT}`);
});

export default app;
