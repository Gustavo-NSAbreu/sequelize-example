import * as studentRepository from './student.repository';
import { Student, StudentDto } from './student.interface';
import { Request, Response } from 'express';

export async function save(request: Request, response: Response) {
  const newStudent = request.body as StudentDto;
  return await studentRepository.save(newStudent);
}

export async function findAll() {
  return await studentRepository.findAll();
}

export async function findById(request: Request, response: Response) {
  const id = Number(request.params.id);
  const student = await studentRepository.findById(id);
  if(!student) response.status(404).send({ error: 'Student not found', id });
  return student;
}

export async function putUpdate(request: Request, response: Response) {
  const studentToUpdate = request.body as Student;
  const student = await studentRepository.findById(studentToUpdate.id);
  if(!student) response.status(404).send({ error: 'Student not found', studentToUpdate });
  return await studentRepository.update(studentToUpdate);
}

export async function patchUpdate(request: Request, response: Response) {
  const studentToUpdate = request.body as Student;
  const student = await studentRepository.findById(studentToUpdate.id);
  if(!student) response.status(404).send({ error: 'Student not found', studentToUpdate });
  student.name = studentToUpdate.name;
  return await studentRepository.update(student);
}

export async function remove(request: Request, response: Response) {
  const id = Number(request.params.id);
  const student =  await studentRepository.findById(id);
  if(!student) response.status(404).send({ error: 'Student not found', id });
  await studentRepository.remove(id);
}