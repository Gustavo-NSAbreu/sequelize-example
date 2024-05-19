import { knex } from "../database/db";
import { Student, StudentDto } from "./student.interface";

export async function save(student: StudentDto): Promise<Array<Student>> {
  return await knex('students').insert(student).returning('*');
}

export async function findAll(): Promise<Array<Student>> {
  return await knex('students').select('*');
}

export async function findById(id: number): Promise<Student> {
  return await knex('students').select('*').where('id', id).first();
}

export async function update(student: Student): Promise<Array<Student>> {
  return await knex('students').update(student).where('id', student.id).returning('*');
}

export async function remove(id: number): Promise<void> {
  await knex('students').delete().where('id', id);
}