
const db = require('./_database')

async function dropTables(){
  await db.connect()
  
  await db.query(`DROP TABLE alunos CASCADE`)
  await db.query(`DROP TABLE cursos CASCADE`)
  await db.query(`DROP TABLE aluno_curso CASCADE`)

  await db.end()

  console.log("Tabelas removidas");
}

dropTables()
