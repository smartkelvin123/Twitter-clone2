import express from "express";
import userRoutes from "./routes/userRoutes";
import tweetRoutes from './routes/tweetRoutes'
import authRoutes from "./routes/authRoutes"
import { authenticateToken } from "./middlewares/authMiddlewares";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/user",authenticateToken,  userRoutes); 
app.use ("/tweet", authenticateToken, tweetRoutes)
app.use("/auth", authRoutes)


app.get('/', (req, res) => {
    res.send('Hello "updated" world!');
  });

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

