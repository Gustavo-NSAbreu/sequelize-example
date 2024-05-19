import { knex } from "../database/db";
import { Enrollment, EnrollmentDto } from "./enrollment.interface";

export async function save(enrollment: EnrollmentDto): Promise<Array<Enrollment>> {
  return await knex('enrollments').insert(enrollment).returning('*');
}

export async function findAll(): Promise<Array<Enrollment>> {
  return await knex('enrollments').select('*');
}

export async function findById(id: number): Promise<Enrollment> {
  return await knex('enrollments').select('*').where('id', id).first();
}


export async function remove(id: number): Promise<void> {
  await knex('enrollments').delete().where('id', id);
}