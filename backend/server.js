import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.route.js"  
import cors from "cors"

const PORT = process.env.PORT;
const app = express();
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoutes)




app.listen(PORT, () => {
  console.log(`serveur tourne sur http://localhost:${PORT}`);
});
