import { pool } from "../config/db.js";

export const createGrade = async (value , professorId, studentId) => {
    const [result] = await pool.query("INSERT INTO grades (value, student_id, professor_id) VALUES (? , ? , ? )", [value, studentId, professorId]);
    return result.insertId
}

export const getGradeByStudent = async (studentId) => {
    const [rows] = await pool.query("SELECT * FROM grades WHERE student_id = ?", [studentId]);
    return rows 
}