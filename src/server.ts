import express from 'express';
import UserRouter from "./routes/UserRoutes";
import PostRouter from "./routes/postRoutes";
import CommentRouter from "./routes/commentRoutes";
const app = express();

app.use(express.json());
app.use(UserRouter);
app.use(PostRouter);
app.use(CommentRouter);

const port = 3000;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)});
