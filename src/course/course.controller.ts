import express, { Request, Response } from "express";
import * as courseService from "./course.service";

const router = express.Router();

router.get('/', async (request: Request, response: Response) => {
  const courses = await courseService.findAll();
  response.status(200).send(courses);
});

router.get('/:id', async (request: Request, response: Response) => {
  const courses = await courseService.findById(request, response);
  response.status(200).send(courses);
});

router.post('/', async (request: Request, response: Response) => {
  const course = await courseService.save(request, response);
  response.status(200).send(course);
});

router.put('/', async (request: Request, response: Response) => {
  const course = await courseService.putUpdate(request, response);
  if(course.length === 0) response.status(404).send({ error: 'Course not found', request });
  else response.status(200).send(course);
})

router.patch('/', async (request: Request, response: Response) => {
  const course = await courseService.patchUpdate(request, response);
  if(course.length === 0) response.status(404).send({ error: 'Course not found', request });
  else response.status(200).send(course);
})

router.delete('/:id', async (request: Request, response: Response) => {
  await courseService.remove(request, response);
  response.status(204).send();
});

export default router;