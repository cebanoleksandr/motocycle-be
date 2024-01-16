import express from "express";
import cors from 'cors';
import { router as bykeRouter } from "./routes/bykes.route.js";

const app = express();
const PORT = 3500;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Hollo, world!</h1>')
});

app.use('/bykes', bykeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost${PORT}`);
});
