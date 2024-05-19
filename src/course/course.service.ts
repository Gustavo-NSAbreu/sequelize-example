import * as courseRepository from './course.repository';
import { Course, CourseDto } from './course.interface';
import { Request, Response } from 'express';

export async function save(request: Request, response: Response) {
  const newCourse = request.body as CourseDto;
  return await courseRepository.save(newCourse);
}

export async function findAll() {
  return await courseRepository.findAll();
}

export async function findById(request: Request, response: Response) {
  const id = Number(request.params.id);
  const course = await courseRepository.findById(id);
  if(!course) response.status(404).send({ error: 'Course not found', id });
  return course;
}

export async function putUpdate(request: Request, response: Response) {
  const courseToUpdate = request.body as Course;
  await courseRepository.findById(courseToUpdate.id);
  return await courseRepository.update(courseToUpdate);
}

export async function patchUpdate(request: Request, response: Response) {
  const courseToUpdate = request.body as Course;
  const course = await courseRepository.findById(courseToUpdate.id);
  course.name = courseToUpdate.name || course.name;
  course.description = courseToUpdate.description || course.description;
  return await courseRepository.update(course);
}

export async function remove(request: Request, response: Response) {
  const id = Number(request.params.id);
  const course = await courseRepository.findById(id);
  if(!course) response.status(404).send({ error: 'Course not found', id });
  return await courseRepository.remove(id);
}