const db = require('./_database')

async function createTables(){
  await db.connect()

  await db.query(`CREATE TABLE alunos(
   id serial PRIMARY KEY,
   name VARCHAR (50) UNIQUE NOT NULL
   lastName VARCHAR (50) UNIQUE NOT NULL
   email VARCHAR(100) NOT NULL
   phone VARCHAR(11) NOT NULL
  )`)

  await db.query(`CREATE TABLE cursos(
   id serial PRIMARY KEY,
   name VARCHAR (50) UNIQUE NOT NULL
  )`)

  await db.query(`CREATE TABLE aluno_curso(
    cursos_id integer NOT NULL,
    alunos_id integer NOT NULL,
    PRIMARY KEY (cursos_id, alunos_id),
    FOREIGN KEY (cursos_id) REFERENCES cursos (id),
    FOREIGN KEY (alunos_id) REFERENCES alunos (id)
  )`)

  await db.end()

  console.log("Tabelas Criadas");
}

createTables()
