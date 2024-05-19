import { knex } from "../database/db";
import { Course, CourseDto } from "./course.interface";

export async function save(course: CourseDto): Promise<Array<Course>> {
  return await knex('courses').insert(course).returning('*');
}

export async function findAll(): Promise<Array<Course>> {
  return await knex('courses').select('*');
}

export async function findById(id: number): Promise<Course> {
  return await knex('courses').select('*').where('id', id).first();
}

export async function update(course: Course): Promise<Array<Course>> {
  return await knex('courses').update(course).where('id', course.id).returning('*');
}

export async function remove(id: number): Promise<void> {
  await knex('courses').delete().where('id', id);
}