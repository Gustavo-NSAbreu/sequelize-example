import * as enrollmentRepository from './enrollment.repository';
import { Enrollment, EnrollmentDto } from './enrollment.interface';
import { Request, Response } from 'express';

export async function save(request: Request, response: Response) {
  const newEnrollment = request.body as EnrollmentDto;
  return await enrollmentRepository.save(newEnrollment);
}

export async function findAll() {
  return await enrollmentRepository.findAll();
}

export async function findById(request: Request, response: Response) {
  const id = Number(request.params.id);
  const enrollment = await enrollmentRepository.findById(id);
  if(!enrollment) response.status(404).send({ error: 'Enrollment not found', id });
  return enrollment;
}

export async function remove(request: Request, response: Response) {
  const id = Number(request.params.id);
  const enrollment =  await enrollmentRepository.findById(id);
  if(!enrollment) response.status(404).send({ error: 'Enrollment not found', id });
  return await enrollmentRepository.remove(id);
}
