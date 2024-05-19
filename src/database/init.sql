CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  registration_number SERIAL UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS courses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS enrollments (
  id SERIAL PRIMARY KEY,
  student_id BIGINT,
  course_id BIGINT,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);  

CREATE OR REPLACE FUNCTION prevent_registration_number_update()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.registration_number IS DISTINCT FROM NEW.registration_number THEN
    RETURN OLD;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER students_registration_number_update
BEFORE UPDATE OF registration_number ON students
FOR EACH ROW EXECUTE FUNCTION prevent_registration_number_update();