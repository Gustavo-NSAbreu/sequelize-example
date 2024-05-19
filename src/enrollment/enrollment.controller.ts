import express, { Request, Response } from "express";
import * as enrollmentService from "./enrollment.service";

const router = express.Router();

router.get('/', async (request: Request, response: Response) => {
  const enrollments = await enrollmentService.findAll();
  response.status(200).send(enrollments);
});

router.get('/:id', async (request: Request, response: Response) => {
  const enrollments = await enrollmentService.findById(request, response);
  response.status(200).send(enrollments);
});

router.post('/', async (request: Request, response: Response) => {
  const enrollment = await enrollmentService.save(request, response);
  response.status(200).send(enrollment);
});

router.delete('/:id', async (request: Request, response: Response) => {
  await enrollmentService.remove(request, response);
  response.status(204).send();
});

export default router;