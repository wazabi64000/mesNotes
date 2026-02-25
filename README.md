# mesNotes

1) Conception fonctionnelle
Acteurs

Professeur

Création de compte

Création d’élèves

Attribution de notes aux élèves

Élève

Rattaché à un professeur

Peut recevoir plusieurs notes

Règles métier

Seul un utilisateur avec role = PROFESSOR peut :

Créer des élèves

Affecter des notes

Un élève appartient obligatoirement à un professeur.

Une note est liée à un élève et créée par un professeur.


```
config/db.js
models/
  user.model.js
  student.model.js
  grade.model.js
controllers/
  auth.controller.js
  student.controller.js
  grade.controller.js
middleware/
  auth.middleware.js
  role.middleware.js
  validate.middleware.js
routes/
  auth.routes.js
  student.routes.js
  grade.routes.js
server.js
.env
```

```js
//  models/user.model.js
import { pool } from "../config/db.js";

export const createProfessor = async (email, password) => {
  const [result] = await pool.query(
    "INSERT INTO users (email, password, role) VALUES (?, ?, 'PROFESSOR')",
    [email, password]
  );
  return result.insertId;
};

export const findUserByEmail = async (email) => {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  return rows[0];
};

// models/student.model.js

import { pool } from "../config/db.js";

export const createStudent = async (name, professorId) => {
  const [result] = await pool.query(
    "INSERT INTO students (name, professor_id) VALUES (?, ?)",
    [name, professorId]
  );
  return result.insertId;
};

export const getStudentsByProfessor = async (professorId) => {
  const [rows] = await pool.query(
    "SELECT * FROM students WHERE professor_id = ?",
    [professorId]
  );
  return rows;
};

// models/grade.model.js

import { pool } from "../config/db.js";

export const createGrade = async (value, studentId, professorId) => {
  const [result] = await pool.query(
    "INSERT INTO grades (value, student_id, professor_id) VALUES (?, ?, ?)",
    [value, studentId, professorId]
  );
  return result.insertId;
};

export const getGradesByStudent = async (studentId) => {
  const [rows] = await pool.query(
    "SELECT * FROM grades WHERE student_id = ?",
    [studentId]
  );
  return rows;
};

//middleware/role.middleware.js 

export const requireProfessor = (req, res, next) => {
  if (req.user.role !== "PROFESSOR") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

```



src/
 ├── api/
 │    └── axios.js
 |__ components
 |     L Navbar.jsx
       L Footer.jsx
 ├── pages/
 │    └── Register.jsx
 ├── schemas/
 │    └── auth.schema.js
 └── App.jsx

