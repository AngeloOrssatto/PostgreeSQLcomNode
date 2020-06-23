const db = require('./_database')

async function listData(){
  await db.connect()
  var result
  // Eventos
  result = await db.query("SELECT * FROM cursos")
  console.log("CURSOS:")
  console.log(result.rows);

  // Alunos
  result = await db.query("SELECT * FROM alunos;")
  console.log("ALUNOS:")
  console.log(result.rows);

  // Cursos e Alunos
  result = await db.query("SELECT e.name AS cursos, p.name AS alunos FROM cursos AS e, alunos AS p, aluno_curso ep WHERE ep.cursos_id = e.id AND ep.alunos_id = p.id")
  console.log("CURSOS COM ALUNOS:")
  console.log(result.rows);

  await db.end()
}

listData()

