  /* Considerando a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos.

  - se o número for par, escreva "par" e o número correspondente.
  - se o número for impar, escreva "impar" e o número correspondente.
  - se o número for zero, escreva "zero" e o número correspondente.
  */

  let alunosPresentes = 17;

  for (let aluno = 0; aluno <= alunosPresentes; aluno ++) {
    
    if (aluno == 0){
        console.log("zero : " + aluno);
    }
    

    if (aluno % 2 == 0) {//par
       console.log("par  : " + aluno);
    } else {
        console.log("impar: " + aluno);}
}