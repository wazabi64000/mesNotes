 import { pool } from "../config/db.js";

export const createStudent = async (name, professorId) => {
  const [result] = await pool.query(
    "INSERT INTO students (name, professor_id) VALUES (?, ? )",
    [name, professorId],
  );

  return result.insertId;
};

export const getStudentByprofessor = async (professorId) => {
    const [rows] = await pool.query('SELECT * FROM students WHERE professor_id = ?', [professorId])

    return rows
}

export const findStudentByid = async (id) => {
    const [rows] = await pool.query("SELECT * FROM students WHERE id = ? ", [id])
    return rows[0]
}