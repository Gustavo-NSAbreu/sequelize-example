import express, { Request, Response } from "express";
import courseRouter from "./course/course.controller";
import studentRouter from "./student/student.controller";
import enrollmentRouter from "./enrollment/enrollment.controller";
import { validatePathParam } from "./middleware/validatePathParam";

const app = express();

const PORT = 8000;

app.use(express.json());

app.use(['/student/:id', '/course/:id', '/enrollment/:id'], validatePathParam);

app.use("/student", studentRouter);
app.use("/course", courseRouter);
app.use("/enrollment", enrollmentRouter);

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});