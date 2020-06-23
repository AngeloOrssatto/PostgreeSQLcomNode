const db = require('./_database')

async function insertData(){
  await db.connect()
  // Criar Cursos

  const queryCurso = "INSERT INTO cursos (name) VALUES ($1)"

  await db.query(queryCurso, ['Violão'])
  await db.query(queryCurso, ['Bateria'])
  await db.query(queryCurso, ['Piano'])
  await db.query(queryCurso, ['Técnica Vocal'])

  //Criar Alunos

  const queryAluno = "INSERT INTO alunos (name, lastname, email, phone) VALUES ($1, $2, $3, $4)"

  await db.query(queryAluno, ['João', 'Carlos', 'joao@carlos.com'], '01234567890')
  await db.query(queryAluno, ['Carlos', 'Augusto', 'carlos@augusto.com'], '01234567890')
  await db.query(queryAluno, ['Augusto', 'Fernando', 'Augusto@Fernando.com'], '01234567890')
  await db.query(queryAluno, ['Fernando', 'Lima', 'Fernando@Lima.com'], '01234567890')
  

  // Adicionar Alunos ao curso de violão

  const queryAlunoCurso = "INSERT INTO aluno_curso (cursos_id, aluno_id) VALUES ($1, $2)"

  await db.query(queryAlunoCurso, [1,1])
  await db.query(queryAlunoCurso, [1,2])

  // Adicionar Alunos ao curso de bateria

  await db.query(queryAlunoCurso, [2,3])
  await db.query(queryAlunoCurso, [2,4])

  // Adicionar Alunos ao curso de piano

  await db.query(queryAlunoCurso, [3,1])
  await db.query(queryAlunoCurso, [3,4])

  // Adicionar Alunos ao curso de tecnica vocal

  await db.query(queryAlunoCurso, [4,2])
  await db.query(queryAlunoCurso, [4,3])

  await db.end()

  console.log("Dados Inseridos");
}

insertData()
