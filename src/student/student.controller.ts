import express, { Request, Response } from "express";
import * as studentService from "./student.service";

const router = express.Router();

router.get('/', async (request: Request, response: Response) => {
  const students = await studentService.findAll();
  response.status(200).send(students);
});

router.get('/:id', async (request: Request, response: Response) => {
  const students = await studentService.findById(request, response);
  response.status(200).send(students);
});

router.post('/', async (request: Request, response: Response) => {
  const student = await studentService.save(request, response);
  response.status(200).send(student);
});

router.put('/', async (request: Request, response: Response) => {
  const student = await studentService.putUpdate(request, response);
  response.status(200).send(student);
})

router.patch('/', async (request: Request, response: Response) => {
  const student = await studentService.patchUpdate(request, response);
  response.status(200).send(student);
})

router.delete('/:id', async (request: Request, response: Response) => {
  await studentService.remove(request, response);
  response.status(204).send();
});

export default router;